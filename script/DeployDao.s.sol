// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "../src/targetContract/TargetContract.sol";
import "../src/Interfaces/IDaoFactory.sol";
import "../src/DaoFactory/DaoFactory.sol";
import "../src/Votes/GovernanceNFTs.sol";
import "../src/Governance/GovernorContract.sol";
import "../src/Governance/GovernanceTimeLock.sol";
import "../src/Governance/SortedProposalList.sol";
import "../src/Governance/SortedQueueAndExecutionList.sol";

contract DeployDao is Script, IDaoFactory {
    address public constant sortedProposalListAddress = 0xB58B1Cf13aD3fdE25bb19b57A94d6629eE812500;
    address public constant sortedQueueAndExecutionListAddress = 0x26Bda0d7403F726596C48502cDeB170AE8745008;
    
    string constant DAO_NAME = "Suprem3 DAO";
    uint256 constant MAXIMUM_SUPPLY = 10000;
    string constant VOTE_NAME = "GRAND OPENING VOTES";
    string constant VOTE_SYMBOL = "GOV";
    string constant VOTE_URI = "ipfs://metadata.json";
    uint256 constant TIMELOCK_MIN_DELAY = 50; /// block.timestamp
    uint256 constant GOVERNANCE_VOTING_DELAY = 0;
    uint256 constant GOVERNANCE_VOTING_PERIOD = 100; /// block.number
    uint256 constant GOVERNANCE_QUORUM_PERCENTAGE = 0; /// 100 %
    bytes32 public constant DEFAULT_ADMIN_ROLE = 0x00;

    address[] public proposerList;
    address[] public executorList = [address(0)];

    GovernanceTimeLock public governanceTimeLock;
    GovernanceNFTs public governanceNFTs;
    createParams daoParams;
    TargetContract public targetContract;
    DaoFactory public daoFactory;
    GovernorContract public governorInstance;
    GovernanceNFTs public governanceNFTsInstance;
    GovernorContract public governorContract;

    /// Proposal setting
    address[] targets = new address[](1);
    uint256[] values = [0];
    bytes[] calldatas = [abi.encodePacked(bytes4(keccak256(bytes("setValue(uint256)"))), bytes32(uint256(55)))];
    string description = "NIKE JAKECT SHOULD BE LISTED ON SHAOPDAO";
    bytes32 descriptionHash = keccak256(bytes(description));
            
    function setUp() public {}

    function run() public {
        vm.startBroadcast();
     
        address owner = msg.sender;
 
        SortedProposalList sortedProposalList =  SortedProposalList(sortedProposalListAddress);
        SortedQueueAndExecutionList sortedQueueAndExecutionList =  SortedQueueAndExecutionList(sortedQueueAndExecutionListAddress);

        governanceNFTs = new GovernanceNFTs();
        governanceTimeLock = new GovernanceTimeLock(TIMELOCK_MIN_DELAY, proposerList, executorList, owner);
       
        governorContract = new GovernorContract(
            DAO_NAME, 
            IVotes(governanceNFTs), 
            TimelockController(payable(governanceTimeLock)), 
            GOVERNANCE_VOTING_DELAY, 
            GOVERNANCE_VOTING_PERIOD, 
            GOVERNANCE_QUORUM_PERCENTAGE
        );

        daoParams = createParams(
            DAO_NAME, 
            owner, 
            MAXIMUM_SUPPLY, 
            VOTE_NAME, 
            VOTE_SYMBOL, 
            VOTE_URI,    
            TIMELOCK_MIN_DELAY,
            GOVERNANCE_VOTING_DELAY,
            GOVERNANCE_VOTING_PERIOD,
            GOVERNANCE_QUORUM_PERCENTAGE
        );
        targetContract = new TargetContract();
        daoFactory = new DaoFactory(address(governanceNFTs), address(governanceTimeLock), address(governorContract), address(sortedProposalList), address(sortedQueueAndExecutionList));
        
        sortedProposalList.grantRole(DEFAULT_ADMIN_ROLE, address(daoFactory));
        sortedQueueAndExecutionList.grantRole(DEFAULT_ADMIN_ROLE, address(daoFactory));
        
        daoFactory.create(daoParams);
        (, address vote, address timelock, address dao,) = daoFactory.daoStorage(1);
        governorInstance = GovernorContract(payable(dao));
        governanceNFTsInstance = GovernanceNFTs(payable(vote));
        governanceNFTsInstance.mint(owner, 2);

        GovernanceTimeLock(payable(timelock)).grantRole(governanceTimeLock.PROPOSER_ROLE(), address(governorInstance));
     
        targets[0] = address(targetContract);

        uint256 proposalId = governorInstance.propose(targets, values, calldatas, description);
        governanceNFTsInstance.delegate(owner);
        // uint8 opinion = 1; // 0 = no, 1 = yes, 2 = giving up
        // governorInstance.castVote(proposalId, opinion);
   
        vm.stopBroadcast();
    }
}

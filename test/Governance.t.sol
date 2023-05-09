// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "forge-std/console.sol";
import "../src/Interfaces/IDaoFactory.sol";
import "../src/DaoFactory/DaoFactory.sol";
import "../src/Votes/GovernanceNFTs.sol";
import "../src/Governance/GovernorContract.sol";
import "../src/Governance/GovernanceTimeLock.sol";
import "../src/targetContract/TargetContract.sol";
contract Governance is Test, IDaoFactory {

    /// Immutable
    address public immutable OWNER;
    
    /// Constant
    address constant ALICE = address(0x01);
    string constant DAO_NAME = "Suprem3 DAO";
    uint256 constant MAXIMUM_SUPPLY = 10000;
    string constant VOTE_NAME = "GRAND OPENING VOTES";
    string constant VOTE_SYMBOL = "GOV";
    string constant VOTE_URI = "ipfs://metadata.json";
    uint256 constant TIMELOCK_MIN_DELAY = 3600; /// block.timestamp
    uint256 constant GOVERRNOR_VOTING_DELAY = 0;
    uint256 constant GOVERRNOR_VOTING_PERIOD = 3600; /// block.number
    uint256 constant GOVERRNOR_QUORUM_PERCENTAGE = 100; /// 100 %
    
    /// Event
    event ProposalCreated(
        uint256 proposalId,
        address proposer,
        address[] targets,
        uint256[] values,
        string[] signatures,
        bytes[] calldatas,
        uint256 startBlock,
        uint256 endBlock,
        string description
    );

    /// Variable
    createParams daoParams;
   
    
    
    enum ProposalState {
        Pending,
        Active,
        Canceled,
        Defeated,
        Succeeded,
        Queued,
        Expired,
        Executed
    }
    /// Proposal setting
    address[] targets = new address[](1);
    uint256[] values = [0];
    bytes[] calldatas = [abi.encodePacked(bytes4(keccak256(bytes("setValue(uint256)"))), bytes32(uint256(55)))];
    string description = "NIKE JAKECT SHOULD BE LISTED ON SHAOPDAO";
    bytes32 descriptionHash = keccak256(bytes(description));

    constructor() {
        OWNER = msg.sender;
        daoParams = createParams(
            DAO_NAME, 
            OWNER, 
            MAXIMUM_SUPPLY, 
            VOTE_NAME, 
            VOTE_SYMBOL, 
            VOTE_URI,    
            TIMELOCK_MIN_DELAY,
            GOVERRNOR_VOTING_DELAY,
            GOVERRNOR_VOTING_PERIOD,
            GOVERRNOR_QUORUM_PERCENTAGE
        );
    }






    TargetContract public targetContract;
    GovernanceNFTs public governanceNFTs;
    DaoFactory public daoFactory;



    
    


    GovernorContract public governorInstance;
   
   
    GovernanceNFTs public governanceNFTsInstance;
    GovernanceTimeLock public governanceTimeLockInstance;
    

    function setUp() public {
      
        vm.startPrank(OWNER); 
        targetContract = new TargetContract();
        governanceNFTs = new GovernanceNFTs();
        daoFactory = new DaoFactory(address(governanceNFTs));
        daoFactory.create(daoParams);
        (, address dao, address vote,) = daoFactory.daoStorage(1);
        governorInstance = GovernorContract(payable(dao));
        governanceNFTsInstance = GovernanceNFTs(payable(vote));
        governanceNFTsInstance.mint(OWNER, 2);
        governanceTimeLockInstance = GovernanceTimeLock(payable(governorInstance.timelock()));
        governanceTimeLockInstance.grantRole(governanceTimeLockInstance.PROPOSER_ROLE(), address(governorInstance));
        
        /// Proposal setting
        targets[0] = address(targetContract);
        vm.stopPrank(); 
    }

    function testPropose() public returns (uint256 proposalId){
        uint256 expectedProposalId = uint256(keccak256(abi.encode(targets, values, calldatas, keccak256(bytes(description)))));
        vm.prank(OWNER);  
        proposalId = governorInstance.propose(targets, values, calldatas, description);
        assertEq(proposalId, expectedProposalId);
    }

    function testVote() public {
        uint256 proposalId = testPropose();
        vm.startPrank(OWNER);   
        governanceNFTsInstance.delegate(OWNER);
        vm.roll(5);
        uint8 opinion = 1; // 0 = no, 1 = yes, 2 = giving up
        governorInstance.castVote(proposalId, opinion);
        assertEq(uint256(ProposalState.Active), uint256(governorInstance.state(proposalId)));
        vm.stopPrank();     
    }   

    function testQueue() public {
        testVote();
        vm.startPrank(OWNER);   
        vm.roll(GOVERRNOR_VOTING_PERIOD + 2); /// set up the the block number for queue
        governorInstance.queue(targets, values, calldatas, descriptionHash);
    }

    function testExecute() public {
        testQueue();
        vm.warp(TIMELOCK_MIN_DELAY + 2); /// set up the timestamp to execute
        governorInstance.execute(targets, values, calldatas, descriptionHash);
        assertEq(targetContract.value(), 55);
    }

}

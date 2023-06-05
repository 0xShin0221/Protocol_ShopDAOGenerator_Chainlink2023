// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "forge-std/console.sol";
import "../../src/Interfaces/ISortedList.sol";
import "../../src/Interfaces/IDaoFactory.sol";
import "../../src/DaoFactory/DaoFactory.sol";
import "../../src/Votes/GovernanceNFTs.sol";
import "../../src/Governance/GovernorContract.sol";
import "../../src/Governance/GovernanceTimeLock.sol";
import "../../src/targetContract/TargetContract.sol";
import "../../src/Governance/SortedProposalList.sol";
import "../../src/Governance/SortedQueueAndExecutionList.sol";
contract GovernorContractTest is Test, IDaoFactory {

    /// Immutable
    address public immutable OWNER;
    GovernanceTimeLock public immutable governanceTimeLock;
    GovernanceNFTs public immutable governanceNFTs;
    SortedProposalList public immutable sortedProposalList;
    SortedQueueAndExecutionList public immutable sortedQueueAndExecutionList;

    /// Constant
    address constant ALICE = address(0x01);
    string constant DAO_NAME = "Suprem3 DAO";
    uint256 constant MAXIMUM_SUPPLY = 10000;
    uint256 constant VOTE_PRICE = 0;
    string constant VOTE_NAME = "GRAND OPENING VOTES";
    string constant VOTE_SYMBOL = "GOV";
    string constant VOTE_URI = "ipfs://metadata.json";
    uint256 constant TIMELOCK_MIN_DELAY = 3600; /// block.timestamp
    uint256 constant GOVERNANCE_VOTING_DELAY = 0;
    uint256 constant GOVERNANCE_VOTING_PERIOD = 3600; /// block.number
    uint256 constant GOVERNANCE_QUORUM_PERCENTAGE = 100; /// 100 %
    bytes32 public constant BRAND_MANAGER_ROLE = keccak256("BRAND_MANAGER_ROLE");
    bytes32 public constant DEFAULT_ADMIN_ROLE = 0x00;
    
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
    TargetContract public targetContract;
    DaoFactory public daoFactory;
    GovernorContract public governorInstance;
    GovernanceNFTs public governanceNFTsInstance;
    GovernorContract public governorContract;
    address[] public proposerList;
    address[] public executorList = [address(0)];
    
    /// Proposal setting
    address[] targets = new address[](1);
    uint256[] values = [0];
    bytes[] calldatas = [abi.encodePacked(bytes4(keccak256(bytes("setValue(uint256)"))), bytes32(uint256(55)))];
    string description = "NIKE JAKECT SHOULD BE LISTED ON SHAOPDAO";
    bytes32 descriptionHash = keccak256(bytes(description));
    
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
    
    constructor() {
        OWNER = msg.sender;
        vm.startPrank(OWNER); 
        sortedProposalList = new SortedProposalList();
        sortedQueueAndExecutionList = new SortedQueueAndExecutionList();
        governanceNFTs = new GovernanceNFTs();
        governanceTimeLock = new GovernanceTimeLock(TIMELOCK_MIN_DELAY, proposerList, executorList, OWNER);
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
            OWNER, 
            MAXIMUM_SUPPLY, 
            VOTE_PRICE,
            VOTE_NAME, 
            VOTE_SYMBOL, 
            VOTE_URI,    
            TIMELOCK_MIN_DELAY,
            GOVERNANCE_VOTING_DELAY,
            GOVERNANCE_VOTING_PERIOD,
            GOVERNANCE_QUORUM_PERCENTAGE
        );

        vm.stopPrank(); 
    }

    function setUp() public {
        vm.startPrank(OWNER); 
        targetContract = new TargetContract();
        daoFactory = new DaoFactory(address(governanceNFTs), address(governanceTimeLock), address(governorContract), address(sortedProposalList), address(sortedQueueAndExecutionList));
        
        sortedProposalList.grantRole(DEFAULT_ADMIN_ROLE, address(daoFactory));
        sortedQueueAndExecutionList.grantRole(DEFAULT_ADMIN_ROLE, address(daoFactory));
        
        daoFactory.create(daoParams);
        (, address vote, address timelock, address dao,) = daoFactory.daoStorage(1);
        governorInstance = GovernorContract(payable(dao));
        governanceNFTsInstance = GovernanceNFTs(payable(vote));
        governanceNFTsInstance.mint(OWNER, 2);
        GovernanceTimeLock(payable(timelock)).grantRole(governanceTimeLock.PROPOSER_ROLE(), address(governorInstance));
     

        /// Proposal setting
        targets[0] = address(targetContract);
        governanceNFTsInstance.delegate(OWNER);
        vm.roll(block.number + 1);
        vm.stopPrank(); 
    }


    function testPropose() public returns (uint256 proposalId) {
        uint256 expectedProposalId = uint256(keccak256(abi.encode(targets, values, calldatas, keccak256(bytes(description)))));
        vm.prank(OWNER);  

        proposalId = governorInstance.propose(targets, values, calldatas, description);
        assertEq(proposalId, expectedProposalId);
        (address currentDaoAddress, address[] memory _targetAddress, uint256[] memory _values, bytes[] memory _calldatas, string memory _description) = ISortedList(governorInstance.sortedProposalList()).getProposals(expectedProposalId);
        
        assertEq(targets[0], _targetAddress[0]);
        assertEq(values[0], _values[0]);
        assertEq(calldatas[0], _calldatas[0]);
        assertEq(description, _description);
    }

    function testVote() public {
        uint256 proposalId = testPropose();
        vm.startPrank(OWNER);   

        vm.roll(5);
        uint8 opinion = 1; // 0 = no, 1 = yes, 2 = giving up
        governorInstance.castVote(proposalId, opinion);
        assertEq(uint256(ProposalState.Active), uint256(governorInstance.state(proposalId)));
        vm.stopPrank();     
    }   


    function testQueue() public {
        testVote();
        vm.startPrank(OWNER);   
        vm.roll(GOVERNANCE_VOTING_PERIOD + block.number); /// set up the the block number for queue
        console.log("msg.sender", msg.sender );
        governorInstance.queue(targets, values, calldatas, descriptionHash);
        vm.stopPrank();     
    }

    /// Failure : the votting period is not passed yet
    function testFailQueue() public {
        testVote();
        governorInstance.queue(targets, values, calldatas, descriptionHash);
    }
   
    function testExecute() public {
        testQueue();
        vm.warp(TIMELOCK_MIN_DELAY + 2); /// set up the timestamp to execute
        governorInstance.execute(targets, values, calldatas, descriptionHash);
        assertEq(targetContract.value(), 55);
    }
    
    /// Failure : it is not execution time yet
    function testFailExecute() public {
        testQueue();
        governorInstance.execute(targets, values, calldatas, descriptionHash);
        assertEq(targetContract.value(), 55);
    }

}

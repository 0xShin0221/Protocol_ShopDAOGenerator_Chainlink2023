// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "forge-std/console.sol";
import "../../src/Interfaces/IDaoFactory.sol";
import "../../src/DaoFactory/DaoFactory.sol";
import "../../src/Votes/GovernanceNFTs.sol";
import "../../src/Governance/GovernorContract.sol";
import "../../src/Governance/GovernanceTimeLock.sol";
import "../../src/targetContract/TargetContract.sol";
interface iqueue {
    function checkUpkeep(bytes calldata /* checkData */)
    external 
    view 
 
    returns (
        bool upkeepNeeded, 
        bytes memory /* performData */
    );
    function getSizeOfSortedQueueAndExecutionList() external view returns (uint256);
}
contract GovernorContractTest_Fork is Test, IDaoFactory {

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
    string constant VOTE_NAME = "GRAND OPENING VOTES";
    string constant VOTE_SYMBOL = "GOV";
    string constant VOTE_URI = "ipfs://metadata.json";
    uint256 constant TIMELOCK_MIN_DELAY = 3600; /// block.timestamp
    uint256 constant GOVERNANCE_VOTING_DELAY = 0;
    uint256 constant GOVERNANCE_VOTING_PERIOD = 3600; /// block.number
    uint256 constant GOVERNANCE_QUORUM_PERCENTAGE = 100; /// 100 %
    bytes32 public constant BRAND_MANAGER_ROLE = keccak256(abi.encode("BRAND_MANAGER_ROLE"));
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
    bytes[] calldatas = [abi.encodePacked(bytes4(keccak256(bytes("setValue(uint256)"))), bytes32(uint256(552)))];
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
        OWNER = 0x8d920B053f61c343CC716AA35eb32F0a05C9FFb3;
        sortedProposalList = SortedProposalList(0xB58B1Cf13aD3fdE25bb19b57A94d6629eE812500);
        sortedQueueAndExecutionList = SortedQueueAndExecutionList(0x26Bda0d7403F726596C48502cDeB170AE8745008);
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
            VOTE_NAME, 
            VOTE_SYMBOL, 
            VOTE_URI,    
            TIMELOCK_MIN_DELAY,
            GOVERNANCE_VOTING_DELAY,
            GOVERNANCE_VOTING_PERIOD,
            GOVERNANCE_QUORUM_PERCENTAGE
        );
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
        vm.stopPrank(); 
    }


    function propose() public returns (uint256 proposalId) {
        uint256 expectedProposalId = uint256(keccak256(abi.encode(targets, values, calldatas, keccak256(bytes(description)))));
        vm.prank(OWNER);  
        proposalId = governorInstance.propose(targets, values, calldatas, description);
        assertEq(proposalId, expectedProposalId);
        (address currentDaoAddress, address[] memory _targetAddress, uint256[] memory _values, bytes[] memory _calldatas, string memory _description) = (governorInstance.sortedProposalList()).getProposals(expectedProposalId);
        
        assertEq(targets[0], _targetAddress[0]);
        assertEq(values[0], _values[0]);
        assertEq(calldatas[0], _calldatas[0]);
        assertEq(description, _description);
    }
    event ExecutionFromUpkeep(uint256 proposalId);
    function testVote() public {
        uint256 proposalId = propose();
        vm.startPrank(OWNER);   
        governanceNFTsInstance.delegate(OWNER);
        vm.roll(block.number + 10);
        uint8 opinion = 1; // 0 = no, 1 = yes, 2 = giving up
        governorInstance.castVote(proposalId, opinion);
        vm.roll(block.number + GOVERNANCE_VOTING_PERIOD + 110);
        // governorInstance.queue(targets, values, calldatas, descriptionHash);
        vm.warp(block.timestamp  + TIMELOCK_MIN_DELAY + 200);
        (uint256 _block, ) = sortedProposalList.getEarlistEndOfDate();
        uint256 listSize = sortedProposalList.listSize();
        (address currentDaoAddress, address[] memory targetAddress, uint256[] memory values, bytes[] memory calldatas, string memory description) = sortedProposalList.getProposals(proposalId);
        console.log(address(governorInstance));
        console.log(currentDaoAddress);
        console.log("TIME : ", _block);
        console.log("TIME : ", block.number);
        console.log("listSize : ", listSize);
        // assertEq(uint256(ProposalState.Active), uint256(governorInstance.state(proposalId)));
        // vm.warp(block.timestamp + GOVERNANCE_VOTING_PERIOD + TIMELOCK_MIN_DELAY + 10);
        // assertEq(targetContract.value(), 55);

 
    }   


    // function testQueue() public {
    //     testVote();
    //     vm.startPrank(OWNER);   
    //     vm.roll(GOVERNANCE_VOTING_PERIOD + 2); /// set up the the block number for queue
    //     governorInstance.queue(targets, values, calldatas, descriptionHash);
    //     vm.stopPrank();     
    // }

    // /// Failure : the votting period is not passed yet
    // function testFailQueue() public {
    //     testVote();
    //     governorInstance.queue(targets, values, calldatas, descriptionHash);
    // }

    // function testExecute() public {
    //     // testQueue();
    //     vm.warp(block.timestamp + GOVERNANCE_VOTING_PERIOD + TIMELOCK_MIN_DELAY + 2); /// set up the timestamp to execute
    //     // governorInstance.execute(targets, values, calldatas, descriptionHash);
    //     assertEq(targetContract.value(), 55);
    // }
    
    // /// Failure : it is not execution time yet
    // function testFailExecute() public {
    //     testQueue();
    //     governorInstance.execute(targets, values, calldatas, descriptionHash);
    //     assertEq(targetContract.value(), 55);
    // }

}

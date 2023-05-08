// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "forge-std/console.sol";
import "../src/DaoFactory/DaoFactory.sol";
import "../src/Votes/GovernanceNFTs.sol";
import "../src/Governance/GovernorContract.sol";
import "../src/Governance/GovernanceTimeLock.sol";
import "../src/targetContract/TargetContract.sol";
contract Governance is Test {

    address constant ALICE = address(0x01);
    uint256 constant MIN_DELAY = 3600; /// block.timestamp
    uint256 constant VOTING_DELAY = 0;
    uint256 constant VOTING_PERIOD = 3600; /// block.number
    uint256 constant QUORUM_PERCENTAGE = 100; /// 4 %
    string constant DAO_NAME = "GRAND OPENING";
    uint256 constant MXIMUM_SUPPLY = 10000;
    string constant VOTE_NAME = "GRAND OPENING VOTES";
    string constant SYMBOL = "GOV";
    string constant URI = "ipfs://metadata.json";
   
    /// Proposal setting
    address[] targets = new address[](1);
    uint256[] values = [0];
    bytes[] calldatas = [abi.encodePacked(bytes4(keccak256(bytes("setValue(uint256)"))), bytes32(uint256(55)))];
    string description = "NIKE JAKECT SHOULD BE LISTED ON SHAOPDAO";
    bytes32 descriptionHash = keccak256(bytes(description));

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
    
    uint256[4]  GOVERANCE_SETTING = [MIN_DELAY, VOTING_DELAY, VOTING_PERIOD, QUORUM_PERCENTAGE];
    string[3]  VOTTING_SETTING = [VOTE_NAME, SYMBOL, URI];
   
    struct DAO {
        string name;
        address dao;
        address vote;
        uint256 createdTime;
    }

    GovernorContract public governorInstance;
    DaoFactory public daoFactory;
    GovernanceNFTs public governanceNFTs;
    GovernanceNFTs public governanceNFTsInstance;
    GovernanceTimeLock public governanceTimeLockInstance;
    TargetContract public targetContract;

    function setUp() public {
      
        vm.startPrank(msg.sender); 
        targetContract = new TargetContract();
        governanceNFTs = new GovernanceNFTs();
        daoFactory = new DaoFactory(address(governanceNFTs));
        daoFactory.create(GOVERANCE_SETTING, DAO_NAME, msg.sender, MXIMUM_SUPPLY, VOTTING_SETTING);
        (, address dao, address vote,) = daoFactory.daoStorage(1);
        governorInstance = GovernorContract(payable(dao));
        governanceNFTsInstance = GovernanceNFTs(payable(vote));
        governanceNFTsInstance.mint(msg.sender, 2);
        governanceTimeLockInstance = GovernanceTimeLock(payable(governorInstance.timelock()));
        governanceTimeLockInstance.grantRole(governanceTimeLockInstance.PROPOSER_ROLE(), address(governorInstance));
        
        /// Proposal setting
        targets[0] = address(targetContract);
        vm.stopPrank(); 
    }

    function testPropose() public returns (uint256 proposalId){
        uint256 expectedProposalId = uint256(keccak256(abi.encode(targets, values, calldatas, keccak256(bytes(description)))));
        vm.prank(msg.sender);  
        proposalId = governorInstance.propose(targets, values, calldatas, description);
        assertEq(proposalId, expectedProposalId);
    }

    function testVote() public {
        uint256 proposalId = testPropose();
        vm.startPrank(msg.sender);   
        governanceNFTsInstance.delegate(msg.sender);
        vm.roll(5);
        uint8 opinion = 1; // 0 = no, 1 = yes, 2 = giving up
        governorInstance.castVote(proposalId, opinion);
        assertEq(uint256(ProposalState.Active), uint256(governorInstance.state(proposalId)));
        vm.stopPrank();     
    }   

    function testQueue() public {
        testVote();
        vm.startPrank(msg.sender);   
        vm.roll(VOTING_PERIOD + 2); /// set up the the block number for queue
        governorInstance.queue(targets, values, calldatas, descriptionHash);
    }

    function testExecute() public {
        testQueue();
        vm.warp(MIN_DELAY + VOTING_PERIOD + 2); /// set up the timestamp to execute
        governorInstance.execute(targets, values, calldatas, descriptionHash);
        assertEq(targetContract.value(), 55);
    }

}

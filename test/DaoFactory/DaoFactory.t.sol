// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "forge-std/console.sol";
import "../../src/Governance/GovernorContract.sol";
import "../../src/Votes/GovernanceNFTs.sol";
import "../../src/Interfaces/IDaoFactory.sol";
import "../../src/DaoFactory/DaoFactory.sol";
import "../../src/Governance/SortedList.sol";
import "../../src/Governance/GovernanceTimeLock.sol";
contract DaoFactoryTest is Test, IDaoFactory {
    
    /// Immutable
    address public immutable OWNER;
    GovernanceTimeLock public immutable governanceTimeLock;
    GovernanceNFTs public immutable governanceNFTs;
    GovernorContract public immutable governorContract;
    SortedList public immutable sortedList;

    /// Constant
    address constant ALICE = address(0x01);
    string constant DAO_NAME = "Suprem3 DAO";
    uint256 constant MAXIMUM_SUPPLY = 10000;
    string constant VOTE_NAME = "GRAND OPENING VOTES";
    string constant VOTE_SYMBOL = "GOV";
    string constant VOTE_URI = "ipfs://metadata.json";
    uint256 constant TIMELOCK_MIN_DELAY = 10;
    uint256 constant GOVERNANCE_VOTING_DELAY = 1;
    uint256 constant GOVERNANCE_VOTING_PERIOD = 10;
    uint256 constant GOVERNANCE_QUORUM_PERCENTAGE = 1; /// 1 %
    
    /// Variable
    createParams public daoParams;
    DaoFactory public daoFactory;
   
  
    address[] public proposerList;
    address[] public executorList = [address(0)];
    constructor() {
        OWNER = msg.sender;
        sortedList = new SortedList();
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
        daoFactory = new DaoFactory(address(governanceNFTs), address(governanceTimeLock), address(governorContract), address(sortedList));
    }

    function testCreateAndFetchDaoStorage() public {
        daoFactory.create(daoParams);
        (string memory name, address vote, address timelock, address dao, uint256 createdTime) = daoFactory.daoStorage(1);
        uint256 len = (daoFactory.fetchDaoStoage()).length;
        assertEq(DAO_NAME, name);
        console.log("vote", vote, "fith");
        console.log("timelock", createdTime, "fith");
        console.log("dao", createdTime, "fith");
        console.log("createdTime", createdTime, "fith");
        assertEq(len, 1);
    }

    function testFailCreate() public {
        vm.prank(ALICE);
        daoFactory.create(daoParams);
    }


}

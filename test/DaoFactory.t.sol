// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "forge-std/console.sol";
import "../src/Interfaces/IDaoFactory.sol";
import "../src/DaoFactory/DaoFactory.sol";
import "../src/Votes/GovernanceNFTs.sol";
import "../src/Governance/GovernanceTimeLock.sol";
contract DaoFactoryTest is Test, IDaoFactory {
    
    /// Immutable
    address public immutable OWNER;
    GovernanceTimeLock public immutable governanceTimeLock;
    GovernanceNFTs public immutable governanceNFTs;
    
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
        governanceNFTs = new GovernanceNFTs();
        governanceTimeLock = new GovernanceTimeLock(TIMELOCK_MIN_DELAY, proposerList, executorList, OWNER);
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
        daoFactory = new DaoFactory(address(governanceNFTs), address(governanceTimeLock));
    }

    function testCreate() public {
        daoFactory.create(daoParams);
        (string memory name, address vote, address timelock, address dao, uint256 createdTime) = daoFactory.daoStorage(1);
        uint256 len = (daoFactory.fetchDaoStoage()).length;
        console.log("name", name);
        console.log("vote", vote);
        console.log("timelock", timelock);
        console.log("dao", dao);
        console.log("createdTime", createdTime);
        assertEq(len, 1);
    }

    function testFailCreate() public {
        vm.prank(ALICE);
        daoFactory.create(daoParams);
    }
}

// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "forge-std/console.sol";
import "../src/DaoFactory/DaoFactory.sol";
import "../src/Votes/GovernanceNFTs.sol";
contract DaoFactoryTest is Test {

    address constant ALICE = address(0x01);
    uint256 constant MIN_DELAY = 10;
    uint256 constant VOTING_DELAY = 1;
    uint256 constant VOTING_PERIOD = 10;
    uint256 constant QUORUM_PERIOD = 10;
    uint256 constant QUORUM_PERCENTAGE = 1; /// 1 %
    string constant DAO_NAME = "Suprem3 DAO";
    uint256 constant MAXIMUM_SUPPLY = 10000;
    string constant VOTE_NAME = "GRAND OPENING VOTES";
    string constant SYMBOL = "GOV";
    string constant URI = "ipfs://metadata.json";
    
    uint256[4]  GOVERNANCE_SETTING = [MIN_DELAY, VOTING_DELAY, VOTING_PERIOD, QUORUM_PERIOD];
    string[3]  VOTTING_SETTING = [VOTE_NAME, SYMBOL, URI];

    struct DAO {
        string name;
        address dao;
        address vote;
        uint256 createdTime;
    }
 
    DaoFactory public daoFactory;
    GovernanceNFTs public governanceNFTs;
    function setUp() public {
        governanceNFTs = new GovernanceNFTs();
        daoFactory = new DaoFactory(address(governanceNFTs));
    }

    function testCreate() public {
        daoFactory.create(GOVERNANCE_SETTING, DAO_NAME, msg.sender, MAXIMUM_SUPPLY, VOTTING_SETTING);
        (string memory name, address dao, address vote, uint256 createdTime) = daoFactory.daoStorage(1);
        uint256 len = (daoFactory.fetchDaoStoage()).length;
        console.log("name", name);
        console.log("dao", dao);
        console.log("vote", vote);
        console.log("createdTime", createdTime);
        assertEq(len, 1);
    }

    function testFailCreate() public {
        vm.prank(ALICE);
        daoFactory.create(GOVERNANCE_SETTING, DAO_NAME, msg.sender, MAXIMUM_SUPPLY, VOTTING_SETTING);
    }
}

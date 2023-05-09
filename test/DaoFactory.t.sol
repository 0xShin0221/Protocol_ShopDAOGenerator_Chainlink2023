// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "forge-std/console.sol";
import "../src/Interfaces/IDaoFactory.sol";
import "../src/DaoFactory/DaoFactory.sol";
import "../src/Votes/GovernanceNFTs.sol";
contract DaoFactoryTest is Test, IDaoFactory {
    
    address public immutable OWNER;
    address constant ALICE = address(0x01);
    string constant DAO_NAME = "Suprem3 DAO";
    uint256 constant MAXIMUM_SUPPLY = 10000;
    string constant VOTE_NAME = "GRAND OPENING VOTES";
    string constant VOTE_SYMBOL = "GOV";
    string constant VOTE_URI = "ipfs://metadata.json";
    uint256 constant TIMELOCK_MIN_DELAY = 10;
    uint256 constant GOVERRNOR_VOTING_DELAY = 1;
    uint256 constant GOVERRNOR_VOTING_PERIOD = 10;
    uint256 constant GOVERRNOR_QUORUM_PERCENTAGE = 1; /// 1 %
    
    createParams daoParams;

    DaoFactory public daoFactory;
    GovernanceNFTs public governanceNFTs;
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

    function setUp() public {
        governanceNFTs = new GovernanceNFTs();
        daoFactory = new DaoFactory(address(governanceNFTs));
    }

    function testCreate() public {
        daoFactory.create(daoParams);
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
        daoFactory.create(daoParams);
    }
}

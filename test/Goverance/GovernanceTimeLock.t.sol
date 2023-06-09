// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "forge-std/console.sol";
import "../../src/Governance/GovernanceTimeLock.sol";
contract GovernanceTimeLockTest is Test{
    
    uint256 public constant MIN_DELAY = 100;
    address public immutable owner;
    bytes32 public constant TIMELOCK_ADMIN_ROLE = keccak256("TIMELOCK_ADMIN_ROLE");
    bytes32 public constant PROPOSER_ROLE = keccak256("PROPOSER_ROLE");
    bytes32 public constant EXECUTOR_ROLE = keccak256("EXECUTOR_ROLE");
    bytes32 public constant CANCELLER_ROLE = keccak256("CANCELLER_ROLE");


    GovernanceTimeLock public governanceTimeLock;
    address[] public PROPOSERS;
    address[] public EXECUTERS = [address(0)];
    
    
    constructor() {
        owner = msg.sender;
        PROPOSERS.push(owner);
        governanceTimeLock = new GovernanceTimeLock(MIN_DELAY, PROPOSERS, EXECUTERS, owner);
    }


    function testInit() public {
        governanceTimeLock.init(MIN_DELAY, PROPOSERS, EXECUTERS, owner);
        assertEq(governanceTimeLock.getRoleAdmin(TIMELOCK_ADMIN_ROLE),TIMELOCK_ADMIN_ROLE, "1");
        assertEq(governanceTimeLock.getRoleAdmin(PROPOSER_ROLE),TIMELOCK_ADMIN_ROLE, "2");
        assertEq(governanceTimeLock.getRoleAdmin(EXECUTOR_ROLE),TIMELOCK_ADMIN_ROLE, "3");
        assertEq(governanceTimeLock.getRoleAdmin(CANCELLER_ROLE),TIMELOCK_ADMIN_ROLE, "4");
        assertTrue(governanceTimeLock.hasRole(TIMELOCK_ADMIN_ROLE, address(governanceTimeLock)), "5");
        assertTrue(governanceTimeLock.hasRole(TIMELOCK_ADMIN_ROLE, owner), "6");
        assertTrue(governanceTimeLock.hasRole(PROPOSER_ROLE, owner), "7");
        assertTrue(governanceTimeLock.hasRole(CANCELLER_ROLE, owner), "8");
        assertTrue(governanceTimeLock.hasRole(EXECUTOR_ROLE, address(0)), "9");
        assertEq(governanceTimeLock.getMinDelay(), MIN_DELAY, "10");
    }

    function testFailInit() public {
        governanceTimeLock.init(MIN_DELAY, PROPOSERS, EXECUTERS, owner);
        governanceTimeLock.init(MIN_DELAY, PROPOSERS, EXECUTERS, owner);
    }
}
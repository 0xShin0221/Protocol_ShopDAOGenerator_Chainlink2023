// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/governance/TimelockController.sol";

contract GovernanceTimeLock is TimelockController {
    
    /// Error
    error AlreadyInitialized();
    
    /// Variable
    bool private isInitialized;

    constructor(
        uint256 minDelay,
        address[] memory proposers,
        address[] memory executors,
        address owner
    ) TimelockController(minDelay, proposers, executors, owner) {}

    function init(
        uint256 minDelay, 
        address[] memory proposers, 
        address[] memory executors, 
        address owner
    ) external 
    {
        if(isInitialized) revert AlreadyInitialized();
        isInitialized = true;
        _setRoleAdmin(TIMELOCK_ADMIN_ROLE, TIMELOCK_ADMIN_ROLE);
        _setRoleAdmin(PROPOSER_ROLE, TIMELOCK_ADMIN_ROLE);
        _setRoleAdmin(EXECUTOR_ROLE, TIMELOCK_ADMIN_ROLE);
        _setRoleAdmin(CANCELLER_ROLE, TIMELOCK_ADMIN_ROLE);
        
        // self administration
        _setupRole(TIMELOCK_ADMIN_ROLE, address(this));

        // optional admin
        if (owner != address(0)) {
            _setupRole(TIMELOCK_ADMIN_ROLE, owner);
        }

        // register proposers and cancellers
        for (uint256 i = 0; i < proposers.length; ++i) {
            _setupRole(PROPOSER_ROLE, proposers[i]);
            _setupRole(CANCELLER_ROLE, proposers[i]);
        }

        // register executors
        for (uint256 i = 0; i < executors.length; ++i) {
            _setupRole(EXECUTOR_ROLE, executors[i]);
        }

        this.updateDelay(minDelay);
    }
}
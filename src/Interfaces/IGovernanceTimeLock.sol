// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

interface IGovernanceTimeLock {
    
    function init(
        uint256 minDelay, 
        address[] memory proposers, 
        address[] memory executors, 
        address owner
    ) 
        external;
}
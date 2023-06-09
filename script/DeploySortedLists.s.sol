// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "../src/Governance/SortedProposalList.sol";
import "../src/Governance/SortedQueueAndExecutionList.sol";
contract DeploySortedLists is Script {
    function setUp() public {}

    function run() public {
        vm.startBroadcast();
        new SortedProposalList();
        new SortedQueueAndExecutionList();
        vm.stopBroadcast();
    }
}

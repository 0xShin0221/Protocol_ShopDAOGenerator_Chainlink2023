// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "../src/chainlink/upkeep/ProposalListsUpKeep.sol";
import "../src/chainlink/upkeep/QueueAndExecutionListsUpKeep.sol";
contract DeployUpkeep is Script {
    function setUp() public {}
    address public constant sortedProposalListAddress = 0xB58B1Cf13aD3fdE25bb19b57A94d6629eE812500;
    address public constant sortedQueueAndExecutionListAddress = 0x26Bda0d7403F726596C48502cDeB170AE8745008;
    
    function run() public {
        vm.startBroadcast();
        new ProposalListsUpKeep(sortedProposalListAddress);
        new QueueAndExecutionListsUpKeep(sortedQueueAndExecutionListAddress);
        vm.stopBroadcast();
    }
}


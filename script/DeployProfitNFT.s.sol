// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "../src/profitNFT/Profit.sol";

contract DeployProfitNFT is Script {
    function setUp() public {}

    function run() public {
        vm.startBroadcast();
        new Profit();
        vm.stopBroadcast();
    }
}


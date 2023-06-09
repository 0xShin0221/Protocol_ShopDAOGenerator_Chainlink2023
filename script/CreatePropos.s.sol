// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "../src/targetContract/TargetContract.sol";
import "../src/Governance/GovernorContract.sol";

contract CreatePropos is Script {


    address[] public proposerList;
    address[] public executorList = [address(0)];


    TargetContract public targetContract;
    GovernorContract public governorContract;

    /// Proposal setting
    address[] targets = new address[](1);
    uint256[] values = [0];
    bytes[] calldatas = [abi.encodePacked(bytes4(keccak256(bytes("setValue(uint256)"))), bytes32(uint256(25)))];
    string description = "NIKE JAKECT SHOULD BE LISTED ON SHAOPDAO";
    bytes32 descriptionHash = keccak256(bytes(description));
            
    function setUp() public {}

    function run() public {
        vm.startBroadcast();
     
        address owner = msg.sender;
  

        governorContract =  GovernorContract(payable(0x4E2F264da72050672E78350dAe96df9A4a83cCFC));
        targetContract =  TargetContract(payable(0xDfd98f176732D2A1cE6aA9461c5D2753e1648ECe));



        targets[0] = address(targetContract);
        uint256 proposalId = governorContract.propose(targets, values, calldatas, description);

        // uint8 opinion = 1; // 0 = no, 1 = yes, 2 = giving up
        // governorInstance.castVote(proposalId, opinion);
   
        vm.stopBroadcast();
    }
}

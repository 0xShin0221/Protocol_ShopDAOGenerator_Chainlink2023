// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

/** 
 * @title ISortedList 
 */
interface ISortedList {
    /// VARIABLES
    struct proposalInfo {
        address[] targetAddress;
        uint256[] values;
        bytes[] calldatas;
        string description;
    }
    function init(address _owner) external;
    function addProposalId(proposalInfo calldata params, uint256 _epochTime) external;
    function removeProposalId(uint256 _proposalId) external;
    function getEarlistEndOfDate() 
    external 
    view 
    returns (
      uint256 _time, 
      uint256 _proposalId
    ); 
    function getProposals(uint256 id) 
        external 
        view 
        returns (
            address[] memory, 
            uint256[] memory, 
            bytes[] memory, 
            string memory
        );
}
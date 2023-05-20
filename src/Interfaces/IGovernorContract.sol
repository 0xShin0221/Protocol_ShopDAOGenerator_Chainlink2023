// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/governance/utils/IVotes.sol";
import "@openzeppelin/contracts/governance/TimelockController.sol";

/** 
 * @title IGovernorContract 
 */
interface IGovernorContract {
  
  /**
   * @notice The init function is to set up values in the constructor of inherited contracts required for DAO.
   * @dev It is only executed only once right after clonning GovernorContract. 
   * @param _daoName indicates the name of dao.
   * @param _token is the address of token used as votes to proposals.
   * @param _timelock is the address of a timelock controller.
   * @param _votingDelay is the delay since proposal is created until voting starts.
   * @param _votingPeriod  is the period that users can cast votes.
   * @param _quorumPercentage is the minmum percentange to pass a proposal. 
   * @param _owner is the owner address.
   */
    function init(
        string memory _daoName,
        IVotes _token,
        TimelockController _timelock,
        uint256 _votingDelay,
        uint256 _votingPeriod,
        uint256 _quorumPercentage,
        address _owner
    ) 
        external;
}
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./customizedGovernor/GovernorC.sol";
import "./customizedGovernor/extensions/GovernorCountingSimpleC.sol";
import "./customizedGovernor/extensions/GovernorVotesC.sol";
import "./customizedGovernor/extensions/GovernorTimelockControlC.sol";
import "./customizedGovernor/extensions/GovernorSettingsC.sol";
import "./customizedGovernor/extensions/GovernorVotesQuorumFractionC.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
/** 
 * @title GovernorContract
 * @notice The GovernorContract is a timelock controller that makes a specific schedule for owners to execute an approved proposal. 
 */
contract GovernorContract is
  GovernorC,
  GovernorSettingsC,
  GovernorCountingSimpleC,
  GovernorVotesC,
  GovernorVotesQuorumFractionC,
  GovernorTimelockControlC,
  AccessControl
{
  ///Constant
  bytes32 public constant BRAND_MANAGER_ROLE = keccak256(abi.encode("BRAND_MANAGER_ROLE"));
    
  /// Variable
  bool private isInitialized;
  string private daoName;
  constructor(
    string memory _daoName,
    IVotes _token,
    TimelockController _timelock,
    uint256 _votingDelay,
    uint256 _votingPeriod,
    uint256 _quorumPercentage
  )
    GovernorC(_daoName)
    GovernorSettingsC(
      _votingDelay, /* 1 block */ // voting delay
      _votingPeriod, // 45818, /* 1 week */ // voting period
      0 // proposal threshold
    )
    GovernorVotesC(_token)
    GovernorVotesQuorumFractionC(_quorumPercentage)
    GovernorTimelockControlC(_timelock)
  {
     _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
     _grantRole(BRAND_MANAGER_ROLE, msg.sender);
  }

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
    string calldata _daoName,
    IVotes _token,
    TimelockController _timelock,
    uint256 _votingDelay,
    uint256 _votingPeriod,
    uint256 _quorumPercentage,
    address _owner
  ) 
    external 
  {
    if(isInitialized) revert AlreadyInitialized();
    isInitialized = true;
    _grantRole(DEFAULT_ADMIN_ROLE, _owner);
    _grantRole(BRAND_MANAGER_ROLE, _owner);
    initEIP712(_daoName, version());
    _setVotingDelay(_votingDelay);
    _setVotingPeriod(_votingPeriod);
    _setProposalThreshold(0);
    initGovernorVotes(_token);
    _updateQuorumNumerator(_quorumPercentage);
    _updateTimelock(_timelock);
  }

  /**
   * @notice The name function returns the name of dao.
   */
  function name() public view virtual override(IGovernor, GovernorC) returns (string memory) {
      return daoName;
  }

  /**
   * @notice The votingDelay function returns the amount of blocks for the voting delay.
   */
  function votingDelay()
    public
    view
    override(IGovernor, GovernorSettingsC)
    returns (uint256)
  {
    return super.votingDelay();
  }

  /** 
   * @notice The votingPeriod functions returns the amount of seconds for voting duration.
   */
  function votingPeriod()
    public
    view
    override(IGovernor, GovernorSettingsC)
    returns (uint256)
  {
    return super.votingPeriod();
  }


  /** 
   * @notice The quorum functions returns the current amount of quorum in a input blocknumber.
   * @param blockNumber is for fetching the amount of quorum in the blocknumber.
   */
  function quorum(uint256 blockNumber)
    public
    view
    override(IGovernor, GovernorVotesQuorumFractionC)
    returns (uint256)
  {
    return super.quorum(blockNumber);
  }

  /** 
   * @notice The getVotes function returns the number of votes that input account has on input block number. 
   * @param account is the address to look for how mnay votes that the account has.
   * @param blockNumber is the block number to fetch how many votes an account has on that block number. 
   */
  function getVotes(address account, uint256 blockNumber)
    public
    view
    override(IGovernor, GovernorC)
    returns (uint256)
  {
    return super.getVotes(account, blockNumber);
  }

  /** 
   * @notice The state function returns the current status of an proposal. 
   * @param proposalId is the id of proposal to check for the status of it.
   */
  function state(uint256 proposalId)
    public
    view
    override(GovernorC, GovernorTimelockControlC)
    returns (ProposalState)
  {
    return super.state(proposalId);
  }

  /** 
   * @notice The propose function is to make a proposal.
   * @param targets is the address of a target contract.
   * @param values is the amount of native coin if a proposal is required.
   * @param calldatas is the calldata to call a function in the target contract.
   * @param description is the description of a proposal.
   */
  function propose(
    address[] memory targets,
    uint256[] memory values,
    bytes[] memory calldatas,
    string memory description
  ) public override(GovernorC, IGovernor) returns (uint256) {
    return super.propose(targets, values, calldatas, description);
  }

  /** 
   * @notice The proposalThreshold function return the threshold of proposal.
   */
  function proposalThreshold()
    public
    view
    override(GovernorC, GovernorSettingsC)
    returns (uint256)
  {
    return super.proposalThreshold();
  }

  function _execute(
    uint256 proposalId,
    address[] memory targets,
    uint256[] memory values,
    bytes[] memory calldatas,
    bytes32 descriptionHash
  ) internal override(GovernorC, GovernorTimelockControlC) {
    super._execute(proposalId, targets, values, calldatas, descriptionHash);
  }

  function _cancel(
    address[] memory targets,
    uint256[] memory values,
    bytes[] memory calldatas,
    bytes32 descriptionHash
  ) internal override(GovernorC, GovernorTimelockControlC) returns (uint256) {
    return super._cancel(targets, values, calldatas, descriptionHash);
  }

  function _executor()
    internal
    view
    override(GovernorC, GovernorTimelockControlC)
    returns (address)
  {
    return super._executor();
  }

  function supportsInterface(bytes4 interfaceId)
    public
    view
    override(GovernorC, GovernorTimelockControlC, AccessControl)
    returns (bool)
  {
    return super.supportsInterface(interfaceId);
  }
}
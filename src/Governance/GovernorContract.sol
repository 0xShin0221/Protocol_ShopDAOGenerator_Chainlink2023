// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./customizedGovernor/GovernorC.sol";
import "./customizedGovernor/extensions/GovernorCountingSimpleC.sol";
import "./customizedGovernor/extensions/GovernorVotesC.sol";
import "./customizedGovernor/extensions/GovernorTimelockControlC.sol";
import "./customizedGovernor/extensions/GovernorSettingsC.sol";
import "./customizedGovernor/extensions/GovernorVotesQuorumFractionC.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

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


  function name() public view virtual override(IGovernor, GovernorC) returns (string memory) {
      return daoName;
  }

  function votingDelay()
    public
    view
    override(IGovernor, GovernorSettingsC)
    returns (uint256)
  {
    return super.votingDelay();
  }

  function votingPeriod()
    public
    view
    override(IGovernor, GovernorSettingsC)
    returns (uint256)
  {
    return super.votingPeriod();
  }

  // The following functions are overrides required by Solidity.

  function quorum(uint256 blockNumber)
    public
    view
    override(IGovernor, GovernorVotesQuorumFractionC)
    returns (uint256)
  {
    return super.quorum(blockNumber);
  }

  function getVotes(address account, uint256 blockNumber)
    public
    view
    override(IGovernor, GovernorC)
    returns (uint256)
  {
    return super.getVotes(account, blockNumber);
  }

  function state(uint256 proposalId)
    public
    view
    override(GovernorC, GovernorTimelockControlC)
    returns (ProposalState)
  {
    return super.state(proposalId);
  }

  function propose(
    address[] memory targets,
    uint256[] memory values,
    bytes[] memory calldatas,
    string memory description
  ) public override(GovernorC, IGovernor) returns (uint256) {
    return super.propose(targets, values, calldatas, description);
  }

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
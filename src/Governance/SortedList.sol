//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
/// ["0xb27A31f1b0AF2946B7F582768f03239b1eC07c2c", 0, "0x50bddaa9e2ac5ffe783665e8e1d8154df0b3b6663719a3b22aa692d737540292", "aad124534454534544343131313131533542sa"]
import "@openzeppelin/contracts/access/AccessControl.sol";
import "../Interfaces/ISortedList.sol";

contract SortedList is AccessControl, ISortedList {
  /// Constants
  bytes32 constant public BRAND_MANAGER_ROLE = keccak256(abi.encode("BRAND_MANAGER_ROLE"));
  uint256 constant GUARD = 1;

  /// ERROR
  error AlreadyInitialized();
  error OnlyRegisterAddressOnce();
  error OnlyRegisteredAddress();
  error OnlyRemoveMySelf();

  /// Modifier 
  modifier onlyRegisteredAddress(uint256 _proposalId) {
    if(_secondEarliestProposalId[_proposalId] == uint256(0)){
      revert OnlyRegisteredAddress();
    }
    _;
  }

  bool private isInitialized;
  uint256 public listSize;
  mapping(uint256 => uint256) public proposalIds;
  mapping(uint256 => uint256) private _secondEarliestProposalId;
  mapping(uint256 => proposalInfo) private proposals;
  
  constructor() {}

  function init(address _owner) external  {
    if(isInitialized) revert AlreadyInitialized();
    isInitialized = true;
    _secondEarliestProposalId[GUARD] = GUARD;
    _setupRole(DEFAULT_ADMIN_ROLE, _owner);
    _setupRole(BRAND_MANAGER_ROLE, _owner);
    _setupRole(BRAND_MANAGER_ROLE, msg.sender);
  }

  function getProposals(uint256 id) external view returns (address[] memory, uint256[] memory, bytes[] memory, string memory) {
    return (proposals[id].targetAddress, proposals[id].values, proposals[id].calldatas, proposals[id].description);
  }

  function addProposalId(proposalInfo calldata params, uint256 _epochTime) external onlyRole(BRAND_MANAGER_ROLE)  {
    proposalInfo memory _proposalInfo = proposalInfo(params.targetAddress, params.values, params.calldatas, params.description);
    uint256 _proposalId = uint256(keccak256(abi.encode(params.targetAddress, params.values, params.calldatas, keccak256(bytes(params.description)))));
    if(_secondEarliestProposalId[_proposalId] != uint256(0)){
      revert OnlyRegisterAddressOnce();
    }
    proposals[_proposalId] = _proposalInfo;
    uint256 index = _findIndex(_epochTime);
    proposalIds[_proposalId] = _epochTime;
    _secondEarliestProposalId[_proposalId] = _secondEarliestProposalId[index];
    _secondEarliestProposalId[index] = _proposalId;
    listSize++;
  }

  function removeProposalId(uint256 _proposalId) external onlyRole(BRAND_MANAGER_ROLE) onlyRegisteredAddress(_proposalId) {
    uint256 preOrderVault = _getPrevOrderProposalId(_proposalId);
    _secondEarliestProposalId[preOrderVault] = _secondEarliestProposalId[_proposalId];
    _secondEarliestProposalId[_proposalId] = uint256(0);
    proposalIds[_proposalId] = 0;
    listSize--;
    delete proposals[_proposalId];
  }

  function getList(uint256 _size) external view returns(uint256[] memory) {
    require(_size <= listSize);
    uint256[] memory proposalIdList = new uint256[](_size);
    uint256 currentProposalId = _secondEarliestProposalId[GUARD];
    for(uint256 i = 0; i < _size; ++i) {
      proposalIdList[i] = currentProposalId;
      currentProposalId = _secondEarliestProposalId[currentProposalId];
    }
    return proposalIdList;
  }

  function getEarlistEndOfDate() 
    external 
    view 
    returns(
      uint256 _time, 
      uint256 _proposalId
    ) 
  {
    _time = proposalIds[_secondEarliestProposalId[GUARD]];
    _proposalId = _secondEarliestProposalId[GUARD];
  }

  function _verifyIndex(uint256 _prevHash, uint256 _epochTime, uint256 _nextHash)
    internal
    view
    returns(bool)
  {
    return (_prevHash == GUARD || proposalIds[_prevHash] <= _epochTime) && 
           (_nextHash == GUARD || _epochTime < proposalIds[_nextHash]);
  }

  function _findIndex(uint256 _epochTime) internal view returns(uint256) {
    uint256 candidateProposalId = GUARD;
    while(true) {
      if(_verifyIndex(candidateProposalId, _epochTime, _secondEarliestProposalId[candidateProposalId]))
        return candidateProposalId;
      candidateProposalId = _secondEarliestProposalId[candidateProposalId];
    }
    return 0;
  }

  function _isPrevOrderProposalId(
    uint256 _proposalId, 
    uint256 _preOrderProposalId
  ) 
    internal 
    view 
    returns(bool) 
  {
    return _secondEarliestProposalId[_preOrderProposalId] == _proposalId;
  }

  function _getPrevOrderProposalId(uint256 _proposalId) internal view returns(uint256) {
    uint256 currentProposalId = GUARD;
    while(_secondEarliestProposalId[currentProposalId] != GUARD) {
      if(_isPrevOrderProposalId(_proposalId, currentProposalId))
        return currentProposalId;
      currentProposalId = _secondEarliestProposalId[currentProposalId];
    }
    return 0;
  }
}
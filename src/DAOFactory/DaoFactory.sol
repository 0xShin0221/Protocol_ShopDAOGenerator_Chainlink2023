// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/proxy/Clones.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/governance/utils/IVotes.sol";
import "../Interfaces/IGoveranceNFTs.sol";
import "../Governance/GovernorContract.sol";
import "../Governance/GovernanceTimeLock.sol";

contract DaoFactory is AccessControl {

    ///Constant
    bytes32 constant public BRAND_MANAGER_ROLE = keccak256(abi.encode("BRAND_MANAGER_ROLE"));

    /// Immutable
    address public immutable VOTE_ADDRESS; 
    
    /// Event
    event Create(uint256 indexed id, string name, address dao, address vote, uint256 createdTime);

    /// Varaable
    struct DAO {
        string name;
        address dao;
        address vote;
        uint256 createdTime;
    }
    mapping(uint256=> DAO) public daoStorage; 
    uint256 public id = 1;
    address[] public proposerList;
    address[] public executorList = [address(0)];
    constructor(address _vote_address) {
        VOTE_ADDRESS = _vote_address;
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(BRAND_MANAGER_ROLE, msg.sender);
    }
    /*
    _goveranceSetting
        uint256 _minDelay,
        uint256 _votingDelay,
        uint256 _votingPeriod,
        uint256 _quorumPercentage,
_voteSetting
        string calldata _voteName, 
        string calldata _symbol, 
        string calldata _shopDaoBaseURI 

    */

    function create(
        uint256[4] calldata  _goveranceSetting,
        string calldata _daoName, 
        address _owner,
        uint256 _maximumSupply,
        string[3] calldata  _voteSetting
    ) 
        external 
        onlyRole(BRAND_MANAGER_ROLE) 
    {
        address vote = Clones.clone(VOTE_ADDRESS);
        GovernanceTimeLock governanceTimeLock = new GovernanceTimeLock(_goveranceSetting[0], proposerList, executorList, _owner);
        GovernorContract dao = new GovernorContract(_daoName,IVotes(vote), governanceTimeLock, _goveranceSetting[1], _goveranceSetting[2], _goveranceSetting[3]);
        daoStorage[id] = (DAO(_daoName, address(dao), vote, block.timestamp));
        IGoveranceNFTs(vote).init(_owner, _maximumSupply, _voteSetting[0], _voteSetting[1], _voteSetting[2]);
        emit Create(id++, _daoName, address(dao), vote, block.timestamp);
    }

    function fetchDaoStoage() external view returns (DAO[] memory daolist) {
        uint256 size = id - 1;
        mapping(uint256=> DAO) storage _daostorage = daoStorage;
        daolist = new DAO[](size); 
        for(uint256 i = 0; i < size; ++i) {
            daolist[i] = _daostorage[i];
        }
    }



}
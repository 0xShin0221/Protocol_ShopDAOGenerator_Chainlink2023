// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/proxy/Clones.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/governance/utils/IVotes.sol";
import "@openzeppelin/contracts/governance/TimelockController.sol";
import "../Interfaces/IDaoFactory.sol";
import "../Interfaces/IGoveranceNFTs.sol";
import "../Interfaces/IGovernanceTimeLock.sol";
import "../Interfaces/IGovernorContract.sol";

contract DaoFactory is AccessControl, IDaoFactory {

    ///Constant
    bytes32 constant public BRAND_MANAGER_ROLE = keccak256(abi.encode("BRAND_MANAGER_ROLE"));

    /// Immutable
    address public immutable VOTE_ADDRESS; 
    address public immutable TIMELOCK_ADDRESS; 
    address public immutable DAO_ADDRESS; 

    /// Event
    event Create(uint256 indexed id, string name, address dao, address vote, uint256 createdTime);

    /// Varaable
    struct DAO {
        string name;
        address vote;
        address timelock;
        address dao;
        uint256 createdTime;
    }
    mapping(uint256 => DAO) public daoStorage; 
    uint256 public id = 1;
    address[] public proposerList;
    address[] public executorList = [address(0)];
    constructor(
        address _vote_address, 
        address _timeLock_address, 
        address _dao_address
) {
        VOTE_ADDRESS = _vote_address;
        TIMELOCK_ADDRESS = _timeLock_address;
        DAO_ADDRESS = _dao_address;
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(BRAND_MANAGER_ROLE, msg.sender);
    }

    function create(createParams calldata params) 
        external 
        onlyRole(BRAND_MANAGER_ROLE) 
    {
        address vote = Clones.clone(VOTE_ADDRESS);
        address timeLock = Clones.clone(TIMELOCK_ADDRESS);
        address dao = Clones.clone(DAO_ADDRESS);
        daoStorage[id] = (DAO(params.daoName, vote, timeLock, dao, block.timestamp));
        IGoveranceNFTs(vote).init(params.owner, 
            params.vote_maximumSupply, 
            params.vote_name, 
            params.vote_symbol, 
            params.vote_URI
        );
        IGovernanceTimeLock(timeLock).init(
            params.timelock_minDelay, proposerList, 
            executorList, 
            params.owner
        );
        IGovernorContract(dao).init(
            params.daoName, 
            IVotes(vote), 
            TimelockController(payable(timeLock)), 
            params.governance_votingDelay, 
            params.governance_votingPeriod, 
            params.governance_quorumPercentage, 
            params.owner
        );
        emit Create(id++, params.daoName, dao, vote, block.timestamp);
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
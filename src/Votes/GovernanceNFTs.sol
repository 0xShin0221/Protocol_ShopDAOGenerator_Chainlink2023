// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "./ERC721AVotes.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
contract GovernanceNFTs is ERC721AVotes, AccessControl {
    
    ///Constant
    bytes32 constant public BRAND_MANAGER_ROLE = keccak256(abi.encode("BRAND_MANAGER_ROLE"));

    /// Error
    error ExceedsMaximumSupply();

    /// Variable
    uint256 public tokenId;
    uint256 public maximum;
    string private name_;
    string private symbol_;
    address public owner;
    string public shopDaoBaseURI;
    constructor() ERC721A("ShopDao", "ShopDao") EIP712C("ShopDao", "1")
    {
      
    }

    function init(
        address _owner,
        uint256 _maximum,
        string calldata _name, 
        string calldata _symbol, 
        string calldata _shopDaoBaseURI
    ) 
        external 
    {
        if(owner != address(0)) revert AlreadyInitialized();
        tokenId = 1;
        maximum = _maximum;
        name_ = _name;
        symbol_ = _symbol;
        owner = _owner;
        shopDaoBaseURI = _shopDaoBaseURI;
        initEIP712(_name, "1");
        _grantRole(DEFAULT_ADMIN_ROLE, _owner);
        _grantRole(BRAND_MANAGER_ROLE, _owner);            
    }
 
    function mint(address _to, uint256 _quantity) external onlyRole(BRAND_MANAGER_ROLE) {
        if(maximum < _totalMinted() + _quantity ) revert ExceedsMaximumSupply();
        _safeMint(_to, _quantity, "");
    }

    function setShopBaseURI(string calldata _shopDaoBaseURI) external onlyRole(BRAND_MANAGER_ROLE) {
        shopDaoBaseURI = _shopDaoBaseURI;
    }

    function setOwner(address _owner) external onlyRole(DEFAULT_ADMIN_ROLE) {
        owner = _owner;
    }

    function name() public view override(ERC721A) returns (string memory) {
        return name_;
    }

    function symbol() public view override(ERC721A) returns (string memory) {
        return symbol_;
    }
   
    function tokenURI(uint256 tokenId) public view virtual override(ERC721A) returns (string memory) {
        if (!_exists(tokenId)) revert URIQueryForNonexistentToken();

        return bytes(shopDaoBaseURI).length != 0 ? shopDaoBaseURI : '';
    }

    function supportsInterface(bytes4 interfaceId) 
        public 
        view 
        override(AccessControl, ERC721A) 
        returns (bool) 
    {
        return super.supportsInterface(interfaceId);
    }

}

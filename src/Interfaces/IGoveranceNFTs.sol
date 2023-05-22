// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

interface IGoveranceNFTs {
    
    function init(
        address _owner,
        uint256 _maximumSupply,
        string calldata _name, 
        string calldata _symbol, 
        string calldata _shopDaoBaseURI
    ) 
        external;
}
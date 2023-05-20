// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "ERC721A/ERC721A.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SalesDistributor is Ownable {
    struct DistributionDetails {
        address nftAddress;
        string orderId;
        uint256 totalSale;
        uint256 totalProfit;
    }

    // USDC　of Matic
    address public constant USDC_ADDRESS = 0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174;

    // todo: to IFChainlinkAutomatedFunction
    address public salesDistributorClient;

    modifier onlySalesDistributorClient() {
        require(msg.sender == salesDistributorClient, "Caller is not the sales distributor client");
        _;
    }
    // salesDistributorClient is executed by automation of ChainlinkFunctions.
    constructor(address _salesDistributorClient) {
        salesDistributorClient = _salesDistributorClient;
    }

    // For storing total sales for each NFT address
    mapping(address => uint256) public totalDistributedSales;
    mapping(address => uint256) public totalDistributedProfit;

    // For storing total profits for each user address
    mapping(address => uint256) public userProfits;


    event ProfitsDistributed(address indexed nftAddress, string orderId, uint256 totalSale, uint256 totalProfit);

    function distributeProfits(DistributionDetails memory distributionDetails) public onlySalesDistributorClient {
        IERC20 usdc = IERC20(USDC_ADDRESS);
        IERC721A nft = IERC721A(distributionDetails.nftAddress);
        uint256 balance = usdc.balanceOf(address(this));
        require(balance >= distributionDetails.totalProfit, "Not enough USDC for distribution.");

        for(uint j = 0; j < nft.totalSupply(); j++) {
            address owner = nft.ownerOf(j);
            usdc.transfer(owner, distributionDetails.totalProfit);
            userProfits[owner] += distributionDetails.totalProfit;
        }
        
        totalDistributedSales[distributionDetails.nftAddress] += distributionDetails.totalSale;
        totalDistributedProfit[distributionDetails.nftAddress] += distributionDetails.totalProfit;

        emit ProfitsDistributed(distributionDetails.nftAddress, distributionDetails.orderId, distributionDetails.totalSale, distributionDetails.totalProfit);
    }

    function getDistributionByNftAddress(address nftAddress) public view returns (uint256,uint256) {
        return (totalDistributedSales[nftAddress], totalDistributedProfit[nftAddress]);
    }

    function getUserProfit(address userAddress) public view returns (uint256) {
        return userProfits[userAddress];
    }

    //　This function is not needed in production. For decentralization autonomous
    function setSalesDistributorClient(address _salesDistributorClient) public onlyOwner {
        salesDistributorClient = _salesDistributorClient;
    }
}

// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "forge-std/console.sol";
import "../../src/Votes/GovernanceNFTs.sol";
contract GovernanceNFTsTest is Test{
    uint256 public constant MAX_SUPPLY = 10000;
    string public constant NFT_NAME = "ShopDao";
    string public constant NFT_SYMBOL = "ShopDao";
    string public constant NFT_URI1 = "ShopDao_URI";
    string public constant NFT_URI2 = "ShopDao_URI2";
    address public constant ALICE = address(1);

    address public owner;

    GovernanceNFTs public governanceNFTs;
    function setUp() public {
        owner = msg.sender; 
        governanceNFTs = new GovernanceNFTs();
        governanceNFTs.init(owner, MAX_SUPPLY, NFT_NAME, NFT_SYMBOL, NFT_URI1);
        vm.prank(owner);
    }

    function testInformation() public {
        vm.prank(owner);
        governanceNFTs.mint(owner, 100);
        assertEq(governanceNFTs.maximumSupply(), MAX_SUPPLY);
        assertEq(governanceNFTs.owner(), owner);
        assertEq(governanceNFTs.name(), NFT_NAME);
        assertEq(governanceNFTs.symbol(), NFT_SYMBOL);
        assertEq(governanceNFTs.tokenURI(1), NFT_URI1);
    }

    /// Failure : The function can be executed only once.
    function testFailInit() public {
        governanceNFTs.init(owner, 10000, "ShopDao", "ShopDao", "ShopDao_URI");
        uint256 currentBalance = governanceNFTs.balanceOf(ALICE);
        assertEq(currentBalance, 100);
    }

    function testMint() public {
        vm.prank(owner);
        governanceNFTs.mint(owner, 100);
        uint256 currentBalance = governanceNFTs.balanceOf(owner);
        assertEq(currentBalance, 100);
    }

    /// Failure : ALICE does not have a brand manager role to mint NFTs.
    function testFailMint1() public {
        vm.prank(ALICE);
        governanceNFTs.mint(ALICE, 100);
        uint256 currentBalance = governanceNFTs.balanceOf(ALICE);
        assertEq(currentBalance, 100);
    }

    /// Failure : It is Out of Max Supply
    function testFailMint2() public {
        vm.startPrank(owner);
        governanceNFTs.mint(ALICE, MAX_SUPPLY+1);
        vm.stopPrank();
    }

    function testSetShopBaseURI() public {
        vm.startPrank(owner);
        governanceNFTs.mint(owner, 100);
        governanceNFTs.setShopBaseURI(NFT_URI2);
        assertEq(governanceNFTs.tokenURI(1), NFT_URI2);
        vm.stopPrank();
    }

    /// Failure : ALICE does not have a brand manager role to mint NFTs.
    function testFailSetShopBaseURI() public {
        vm.prank(ALICE);
        governanceNFTs.setShopBaseURI(NFT_URI2);
        assertEq(governanceNFTs.tokenURI(1), NFT_URI2);
    }

    function testSetOwner() public {
        vm.startPrank(owner);
        governanceNFTs.mint(owner, 100);
        governanceNFTs.setOwner(ALICE);
        assertEq(governanceNFTs.owner(), ALICE);
        vm.stopPrank();
    }

    /// Failure : ALICE does not have a brand manager role to mint NFTs.
    function testFailSetOwner() public {
        vm.prank(ALICE);
        governanceNFTs.setOwner(ALICE);
        assertEq(governanceNFTs.tokenURI(1), NFT_URI2);
    }

    /// Failure : URIQueryForNonexistentToken
    function testFailTokenURI() public {
        assertEq(governanceNFTs.tokenURI(1), NFT_URI1);
    }
}
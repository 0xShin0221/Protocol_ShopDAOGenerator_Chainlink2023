// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
import "forge-std/Test.sol";
import "forge-std/console.sol";
import "../../src/chainlink/SalesDistributor.sol";
import "../../src/profitNFT/Profit.sol";
import "../../src/Interfaces/ISalesDistributor.sol";
import "./MyUSDC.sol";
contract SaleDistritbutorTest is Test, ISalesDistributor {
    address immutable OWNER;
  
    uint256 constant totalSale = 10_000 * 10 **6;
    uint256 constant profitSale = 1_000 * 10 **6;
    address constant ALICE = address(1);

    address fakeSalesDistributorClient;   
    SalesDistributor salesDistributor;
    Profit profitNFT;
    DistributionDetails distributionDetailsParam;
    MyUSDC myUSDC;

    constructor() {
        OWNER = msg.sender;
        vm.startPrank(OWNER); 
        fakeSalesDistributorClient = address(2);
        profitNFT = new Profit();
        profitNFT.init(OWNER, 10_000, "NAME" , "SYMBOL", "URL");
        profitNFT.mint(OWNER, 2000);
        profitNFT.mint(ALICE, 8000);
        distributionDetailsParam = DistributionDetails(address(profitNFT), "1", totalSale, profitSale);
        vm.stopPrank(); 
    }

    function setUp() public {   
        vm.startPrank(OWNER); 
        myUSDC = new MyUSDC(OWNER);
        salesDistributor = new SalesDistributor(fakeSalesDistributorClient, address(myUSDC));
        myUSDC.mint(fakeSalesDistributorClient, 10000 * 10 ** 6);
        vm.stopPrank(); 
        vm.startPrank(fakeSalesDistributorClient); 
        myUSDC.approve(address(salesDistributor), ~uint256(0));
        vm.stopPrank(); 
    }

    function testDistributeProfits() public {
        vm.prank(fakeSalesDistributorClient); 
        salesDistributor.claimCondition(distributionDetailsParam);
        assertEq(salesDistributor.totalDistributedSales(address(profitNFT)), totalSale);
        assertEq(salesDistributor.totalDistributedProfit(address(profitNFT)), profitSale);
        assertEq(salesDistributor.isSoldByNFTaddress(address(profitNFT)), true);
        console.log("AFTER claimConditon",myUSDC.balanceOf(address(salesDistributor)));
    }
    function distributeProfits() public {
        vm.prank(fakeSalesDistributorClient); 
        salesDistributor.claimCondition(distributionDetailsParam);
    
    }
    function testClaim() public {
        distributeProfits();
        vm.startPrank(ALICE); 
        console.log(myUSDC.balanceOf(address(ALICE)));
        salesDistributor.claim(address(profitNFT));
        assertEq(salesDistributor.totalDistributedSales(address(profitNFT)), totalSale);
        assertEq(salesDistributor.totalDistributedProfit(address(profitNFT)), profitSale);
        assertEq(salesDistributor.isSoldByNFTaddress(address(profitNFT)), true);
        console.log(myUSDC.balanceOf(address(ALICE)));
        vm.stopPrank(); 
    }

    function testgetUserProfit() public {
        distributeProfits();
        uint256 aliceHas80PercentageNFT = 800000000;
        assertEq(salesDistributor.getUserProfit(address(profitNFT), address(ALICE)), aliceHas80PercentageNFT);
    }

    function testwithdrawProfit() public {
        distributeProfits();
        // testClaim();
        vm.startPrank(ALICE); 
        console.log("before claim: ALICE",myUSDC.balanceOf(address(OWNER)));
        salesDistributor.claim(address(profitNFT));
        console.log("after claim: ALICE",myUSDC.balanceOf(address(OWNER)));
        vm.stopPrank();

        vm.startPrank(OWNER); 
        console.log("before withdrawProfit: salesDistributor",myUSDC.balanceOf(address(salesDistributor)));
        console.log("before withdrawProfit: owner",myUSDC.balanceOf(address(OWNER)));
        salesDistributor.withdrawProfit(address(profitNFT));
        console.log("after withdrawProfit: salesDistributor",myUSDC.balanceOf(address(salesDistributor)));
        console.log("after withdrawProfit: owner",myUSDC.balanceOf(address(OWNER)));
        vm.stopPrank(); 
    }
}
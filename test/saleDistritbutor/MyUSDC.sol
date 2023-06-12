// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyUSDC is ERC20("test", "test") {

    constructor(address _owner) {
        _mint(_owner, 1000 * 10**6);
    }

    function mint(address _owner, uint256 _amount) external {
        _mint(_owner, _amount);
    }
    
    function decimals() public view override(ERC20) returns (uint8) {
        return 6;
    }

}

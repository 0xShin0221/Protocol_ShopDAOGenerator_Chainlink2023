// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "ERC721A/ERC721A.sol";
import "@openzeppelin/contracts/governance/utils/Votes.sol";
import "forge-std/console.sol";

abstract contract ERC721AVotes is ERC721A, Votes {
    
    function _afterTokenTransfers(
        address from,
        address to,
        uint256 firstTokenId,
        uint256 batchSize
    ) internal virtual override(ERC721A) {
       
        _transferVotingUnits(from, to, batchSize);
        super._afterTokenTransfers(from, to, firstTokenId, batchSize);
    }


    function _getVotingUnits(address account) internal view virtual override returns (uint256) {
        return balanceOf(account);
    }


}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

interface IDaoFactory {

    struct createParams {
        string daoName;
        address owner;
        uint256 vote_maximumSupply;
        string vote_name;
        string vote_symbol;
        string vote_URI;
        uint256 timelock_minDelay;
        uint256 governor_votingDelay;
        uint256 governor_votingPeriod;
        uint256 governor_quorumPercentage;
    }


}
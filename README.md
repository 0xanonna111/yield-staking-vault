# Yield Staking Vault

A professional-grade staking smart contract designed for DeFi ecosystems. This repository provides a secure way to distribute rewards to token holders based on the duration and amount of their staked assets.

## Features
* **Time-Weighted Rewards:** Precision-based reward calculation per block/second.
* **Flexible Staking:** Support for any standard ERC-20 token.
* **Security First:** Includes `ReentrancyGuard` and `Ownable` patterns.
* **Flat Architecture:** Single-directory structure for seamless integration.

## Logic Overview
Users deposit `StakingToken`. The contract tracks the `rewardPerTokenStored` and updates user earnings whenever they interact with the vault (stake, withdraw, or claim).

## Quick Start
1. Install dependencies: `npm install`
2. Configure `StakingToken` and `RewardToken` addresses in `deploy.js`.
3. Deploy to your preferred EVM network.

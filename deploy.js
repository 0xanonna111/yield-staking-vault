const hre = require("hardhat");

async function main() {
  const STAKING_TOKEN = "0x..."; // Replace with actual ERC20 address
  const REWARD_TOKEN = "0x...";  // Replace with actual ERC20 address

  const StakingVault = await hre.ethers.getContractFactory("StakingVault");
  const vault = await StakingVault.deploy(STAKING_TOKEN, REWARD_TOKEN);

  await vault.waitForDeployment();
  console.log("Staking Vault deployed to:", await vault.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

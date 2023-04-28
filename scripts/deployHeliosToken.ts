import hre from "hardhat";

async function main() {
  const HeliosToken = await hre.ethers.getContractFactory("HeliosToken");
  const heliosToken = await HeliosToken.deploy("Helios Token", "HELI");

  await heliosToken.deployed();
  console.log(`HeliosToken deployed to ${heliosToken.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

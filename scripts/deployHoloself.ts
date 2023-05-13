import { ethers } from "hardhat";

const developerFund = '0x11C4c9AcC91cA75f3dce47B5b13506F5A8A00000';
const ownerFund = '0x11C4c9AcC91cA75f3dce47B5b13506F5A8A00000';

async function main() {
  const Holoself = await ethers.getContractFactory("Holoself");
  const holoself = await Holoself.deploy(developerFund, ownerFund);

  await holoself.deployed();

  console.log(
    `Deployed to ${holoself.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

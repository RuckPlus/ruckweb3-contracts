import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

// Load environment variables
require("dotenv").config();

const OWNER_WALLET_PRIVATE_KEY = process.env.OWNER_WALLET_PRIVATE_KEY || "";
const ATN_ENDPOINT_SEPOLIA = process.env.ATN_ENDPOINT_SEPOLIA || "";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    sepolia: {
      url: ATN_ENDPOINT_SEPOLIA,
      accounts: [process.env.OWNER_WALLET_PRIVATE_KEY || ""],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  solidity: "0.8.19",
};

export default config;

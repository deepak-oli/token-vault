// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const TokenVaultModule = buildModule("TokenVaultModule", (m) => {
  const tokenVault = m.contract("TokenVault");

  return { tokenVault };
});

export default TokenVaultModule;

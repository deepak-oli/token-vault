import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";
import { expect } from "chai";
import hre from "hardhat";

describe("Token Vault", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployOneYearLockFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await hre.viem.getWalletClients();

    const tokenVault = await hre.viem.deployContract("TokenVault");

    const publicClient = await hre.viem.getPublicClient();

    return {
      tokenVault,
      owner,
      otherAccount,
      publicClient,
    };
  }

  describe("Deployment", function () {
    it("Should receive and store the funds to lock", async function () {
      const { tokenVault, publicClient } = await loadFixture(
        deployOneYearLockFixture
      );
    });
  });
});

const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("Deploy Gas Challenge Contract", () => {
  let gas_contract;

  beforeEach(async () => {
    const gas_challenge_contract = await ethers.getContractFactory(
      "gasChallenge"
    );
    gas_contract = await gas_challenge_contract.deploy();
  });

  describe("Compute Gas", () => {
    it("Should return lower gas", async () => {
      await gas_contract.optimizedFunction();
      // No assertions in this test case to validate the gas usage.
      // Consider adding gas consumption assertions to ensure the optimizedFunction() reduces gas usage as expected.
    });
  });

  describe("Check Sum Of Array", () => {
    it("Should return 0", async () => {
      await gas_contract.notOptimizedFunction();
      await gas_contract.optimizedFunction();

      const sumOfArray = await gas_contract.getSumOfArray();
      expect(sumOfArray).to.equal(0);
      // Asserts that the sumOfArray is equal to 0, indicating that all elements were set to 0 successfully.
    });
  });
});

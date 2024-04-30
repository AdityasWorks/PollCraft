import { ethers } from "ethers";

import { ABI } from "../data/ABI";
import { ByteCode } from "../data/ByteCode";

export const GeneratorContract = async (signer) => {
  const contractFactory = new ethers.ContractFactory(ABI, ByteCode, signer);

  const contract = await contractFactory.deploy();
  await contract.waitForDeployment();
  const address = await contract.getAddress();
  console.log("Contract deployed at address:", address);
  return address;
};

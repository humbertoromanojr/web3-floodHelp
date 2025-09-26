import Web3 from "web3";
import * as dotenv from "dotenv";
dotenv.config();

import ABI from "./ABI.json";

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS_WALLET;

export async function doLogin() {
  if (!window.ethereum) throw new Error("Metamask not installed");

  const web3 = new Web3(window.ethereum);
  const accounts = await web3.eth.requestAccounts();
  if (!accounts || accounts.length)
    throw new Error("Metamask not connected or permission denied");

  localStorage.setItem("addressWallet", accounts[0].toLowerCase());
  return accounts[0];
}

export async function getOpenRequests(lastId = 0) {
  if (!window.ethereum) throw new Error("Metamask not installed");

  const from = localStorage.getItem("addressWallet");
  const web3 = new Web3(window.ethereum);

  const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS, { from });

  const requests = await contract.methods
    .getOpenRequests(lastId + 1, 10)
    .call();

  // filter differ title empty
  return requests.filter((rq) => rq.title !== "");
}

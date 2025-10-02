import Web3 from "web3";

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

function getContract() {
  if (!window.ethereum) throw new Error("Metamask not installed");

  const from = localStorage.getItem("addressWallet");
  const web3 = new Web3(window.ethereum);

  const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS, { from });
  return contract;
}

export async function getOpenRequests(lastId = 0) {
  const contract = getContract();
  const requests = await contract.methods
    .getOpenRequests(lastId + 1, 10)
    .call();
  return requests.filter((rq) => rq.title !== "");
}

export async function openRequest({ title, description, contact, goal }) {
  const contract = getContract();
  return await contract.methods
    .openRequest(title, description, contact, Web3.utils.toWei(goal, "ether"))
    .send();
}

export async function closeRequest(id) {
  const contract = getContract();
  return await contract.methods.closeRequest(id).send();
}

export async function donate(id, donationInBnb) {
  const contract = getContract();
  return await contract.methods.donate(id).send({
    value: Web3.utils.toWei(donationInBnb, "ether"),
  });
}

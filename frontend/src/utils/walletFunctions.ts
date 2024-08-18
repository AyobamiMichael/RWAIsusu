import { ethers } from "ethers";

// Create a new wallet
export function createWallet() {
  const wallet = ethers.Wallet.createRandom();
  return {
    address: wallet.address,
    privateKey: wallet.privateKey,
  };
}

// Fund the wallet (assumes you have an RWA contract address and ABI)
export async function fundWallet(walletAddress: string, amount: string, providerUrl: string, privateKey: string) {
  const provider = new ethers.JsonRpcProvider(providerUrl);
  const signer = new ethers.Wallet(privateKey, provider);
  const tx = await signer.sendTransaction({
    to: walletAddress,
    value: ethers.parseEther(amount), // or the appropriate unit for RWA tokens
  });
  return tx.hash;
}

// Check wallet balance (for ETH/RWA)
export async function checkBalance(walletAddress: string, providerUrl: string) {
  const provider = new ethers.JsonRpcProvider(providerUrl);
  const balance = await provider.getBalance(walletAddress);
  return ethers.formatEther(balance); // or the appropriate unit for RWA tokens
}

// Transfer from wallet
export async function transferTokens(recipientAddress: string, amount: string, providerUrl: string, privateKey: string) {
  const provider = new ethers.JsonRpcProvider(providerUrl);
  const signer = new ethers.Wallet(privateKey, provider);
  const tx = await signer.sendTransaction({
    to: recipientAddress,
    value: ethers.parseEther(amount), // or the appropriate unit for RWA tokens
  });
  return tx.hash;
}

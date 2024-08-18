import React, { useEffect } from 'react';

function Checkmetamaskconnection() {
  useEffect(() => {
    initializeMetaMask();
  }, []);

  async function initializeMetaMask() {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        if (accounts.length > 0) {
          console.log('MetaMask is connected:', accounts[0]);
          const chainId = await window.ethereum.request({ method: 'eth_chainId' });
          console.log('Connected to network:', chainId);
          if (chainId === '42421') { // Replace '0xa5d5' with your chain ID
            console.log('Connected to AssetChain Testnet');
          } else {
            console.log('Please switch to the AssetChain Testnet');
          }
        } else {
          console.log('MetaMask is not connected.');
        }
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    } else {
      console.log('MetaMask is not installed. Please install it to proceed.');
    }
  }

  return (
    <div className="Checkmetamaskconnection">
      <h1>MetaMask Connection Status</h1>
      <h1>RWA ISUSU</h1>
    </div>
  );
}

export default Checkmetamaskconnection;

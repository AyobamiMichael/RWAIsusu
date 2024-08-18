"use client";
import { useAccount } from "wagmi";
//import Debug from "@/components/Debug";
//import Checkmetamaskconnection from "@/components/Metamaskconnectioncheking";
import WalletCreation from "@/components/Walletcreation";

//  <Debug />
export default function Home() {
  const { address: connectedAddress } = useAccount();
  return (
    <>
      <div className="pt-10">
       
      <WalletCreation />
        <div className="text-center mt-8 bg-[#DAE8FF] p-10">
          <h1 className="text-4xl my-0">Debug your Contracts</h1>
          <p className="text-neutral">
            You can debug & interact with your deployed contracts here.
            <br /> Check{" "}
            <code className="italic bg-base-300 text-base font-bold [word-spacing:-0.5rem] px-1">
              frontend / src / app / page.tsx
            </code>{" "}
          </p>
        </div>
      </div>
    </>
  );
}

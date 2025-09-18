import { useModalStore } from "@/store/useModalStore";
import { useWalletStore } from "@/store/useWalletStore";
import { ethers } from "ethers";

export const connectMetaMask = async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];

      const provider = new ethers.BrowserProvider(window.ethereum);
      const network = (await provider.getNetwork()).name;

      // update store
      useWalletStore.getState().setWallet({
        walletType: "metamask",
        account,
        provider,
        network,
      });

      useModalStore.getState().closeModal();

      return account;
    } catch (err) {
      console.error("MetaMask connection failed:", err);
    }
  } else {
    // detect if user is on mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // redirect to MetaMask app store links
      if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window.location.href =
          "https://apps.apple.com/app/metamask/id1438144202";
      } else {
        window.location.href =
          "https://play.google.com/store/apps/details?id=io.metamask";
      }
    } else {
      window.open("https://metamask.io/download.html", "_blank");
    }
  }
};

export async function getEthBalance(account: string): Promise<string> {
  if (!window.ethereum) throw new Error("No wallet provider found");

  // Connect to MetaMask provider
  const provider = new ethers.BrowserProvider(window.ethereum);

  // Get balance in Wei
  const balanceWei = await provider.getBalance(account);

  // Convert Wei -> ETH
  const balanceEth = ethers.formatEther(balanceWei);

  return balanceEth;
}

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ethers } from "ethers";

type WalletType =
  | "metamask"
  | "binance"
  | "trustWallet"
  | "okxWallet"
  | "phantomWallet"
  | null;

interface WalletState {
  walletType: WalletType;
  account: string | null;
  provider: ethers.BrowserProvider | null;
  network: string | null;
  isConnected: boolean;

  setWallet: (wallet: {
    walletType: WalletType;
    account: string;
    provider: ethers.BrowserProvider;
    network: string;
  }) => void;

  disconnect: () => void;
}

export const useWalletStore = create<WalletState>()(
  devtools((set) => ({
    walletType: null,
    account: null,
    provider: null,
    network: null,
    isConnected: false,

    setWallet: ({ walletType, account, provider, network }) =>
      set(
        {
          walletType,
          account,
          provider,
          network,
          isConnected: true,
        },
        false,
        "wallet/setWallet"
      ),

    disconnect: () =>
      set(
        {
          walletType: null,
          account: null,
          provider: null,
          network: null,
          isConnected: false,
        },
        false,
        "wallet/disconnect"
      ),
  }))
);

// import react from "react";

import MetaMask from "@/assets/icons/metaMask.svg";
import { BaseModal } from "@/components/BaseModal";
import { Button } from "@/components/ui/button";
import { connectMetaMask } from "@/lib/metaMaskWallet";
import { useModalStore } from "@/store/useModalStore";
import type React from "react";
import SideMenu from "../../components/SideMenu";
import NavBar from "./navbar";
import { useWalletStore } from "@/store/useWalletStore";

export interface LayoutProps {
  children?: React.ReactNode;
}

const DashboardLayout: React.FC<LayoutProps> = ({ children }) => {
  const { isOpen, closeModal, openModal } = useModalStore();

  const wallets = [
    {
      id: "metamask",
      name: "MetaMask",
      icon: MetaMask,
    },
    {
      id: "binance",
      name: "Binance Wallet",
      icon: MetaMask,
    },
    {
      id: "trustWallet",
      name: "Trust Wallet",
      icon: MetaMask,
    },
    {
      id: "okxWallet",
      name: "OKX Wallet",
      icon: MetaMask,
    },
    {
      id: "phantomWallet",
      name: "Phantom",
      icon: MetaMask,
    },
  ];

  const handleWalletClick = async (walletId: string) => {
    if (walletId === "metamask") {
      await connectMetaMask();
    } else {
      alert(`${walletId} integration not implemented`);
    }
  };

  return (
    <>
      <div className="relative w-dvw h-dvh flex flex-col md:flex-row overflow-y-auto md:overflow-hidden">
        {/* Background grid */}
        {window?.location?.pathname === "/" && (
          <div className="absolute inset-0 z-0 opacity-50 bg-[radial-gradient(#009647_1px,transparent_2px)] [background-size:16px_16px] mask-window" />
        )}

        {/* ----------- Left (Sidebar) ---------- */}
        <div className="relative z-10 min-w-[15%] w-[15%]">
          <SideMenu />
        </div>

        {/* ----------- Right (Main Content) ---------- */}
        <div className="relative z-10 flex-1 flex flex-col h-full gap-4 md:gap-6 p-6 md:p-10 md:overflow-y-auto">
          {/* --------- Navbar stays fixed --------------- */}
          {/* <div className="shrink-0"> */}
          <div className="">
            <NavBar />
          </div>

          {/* --------- Scrollable area ----------------- */}
          {/* <div className="flex-1 md:overflow-y-auto no-scrollbar"> */}
          <div className="flex-1">{children}</div>
        </div>
      </div>

      {/* Modal */}
      <BaseModal
        open={isOpen}
        onOpenChange={openModal}
        closeModal={closeModal}
        title="Connect wallet"
        className="!text-left md:!max-w-3xl md:!w-[70%]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-border">
          {/* Wallet list */}
          <div className="flex flex-col gap-3 p-6 order-2 md:order-1">
            {wallets?.map((wallet, idx) => (
              <Button
                key={idx}
                variant={"secondary"}
                disabled={wallet?.id !== "metamask"}
                className="justify-start py-4 !h-max group rounded-2xl"
                onClick={() => handleWalletClick(wallet?.id)}
              >
                <span className="p-2 bg-accent group-hover:!bg-transparent rounded-lg">
                  <img src={wallet?.icon} className="w-4 h-4" />
                </span>
                <span className="font-semibold">{wallet?.name}</span>
              </Button>
            ))}
          </div>

          {/* Right panel */}
          <div className="flex flex-col items-center justify-center gap-2 p-6 order-1 md:order-2">
            <img src={MetaMask} className="w-12 h-12" />
            <h3 className="text-base font-semibold">Opening MetaMask</h3>
            <p className="text-sm text-muted-foreground">
              Confirm in MetaMask extension
            </p>
          </div>
        </div>
      </BaseModal>
    </>
  );
};

export default DashboardLayout;

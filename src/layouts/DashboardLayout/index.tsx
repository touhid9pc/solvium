// import react from "react";

import MetaMask from "@/assets/icons/metaMask.svg";
import BinanceLogo from "@/assets/logo/binance.svg";
import OKXLogo from "@/assets/logo/okx-wallet.svg";
import PhantomLogo from "@/assets/logo/phantom.svg";
import TrustLogo from "@/assets/logo/trust-wallet.svg";
import { BaseModal } from "@/components/BaseModal";
import { Button } from "@/components/ui/button";
import { connectMetaMask } from "@/lib/metaMaskWallet";
import { useModalStore } from "@/store/useModalStore";
import React from "react";
import SideMenu from "../../components/SideMenu";
import type { LayoutProps } from "../index.interface";
import NavBar from "../navbar";

import ConnectWallet from "@/assets/icons/connect-wallet.png";

import WalletLoading from "@/assets/animations/wallet-loading.gif";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import StatCard from "@/components/StatCard";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";

const DashboardLayout: React.FC<LayoutProps> = ({ children }) => {
  type Wallet = {
    id: string;
    name: string;
    icon: string;
  };

  const {
    isOpen,
    closeModal,
    openModal,
    isStakeOpen,
    closeStakeModal,
    openStakeModal,
  } = useModalStore();
  const [selectedWallet, setSelectedWallet] = React.useState<Wallet | null>(
    null
  );

  const wallets: Wallet[] = [
    {
      id: "metamask",
      name: "MetaMask",
      icon: MetaMask,
    },
    {
      id: "binance",
      name: "Binance Wallet",
      icon: BinanceLogo,
    },
    {
      id: "trustWallet",
      name: "Trust Wallet",
      icon: TrustLogo,
    },
    {
      id: "okxWallet",
      name: "OKX Wallet",
      icon: OKXLogo,
    },
    {
      id: "phantomWallet",
      name: "Phantom",
      icon: PhantomLogo,
    },
  ];

  const handleWalletClick = async (wallet: Wallet) => {
    setSelectedWallet(wallet);
    setTimeout(() => {
      if (wallet?.id === "metamask") {
        connectMetaMask();
      } else {
        alert(`${wallet?.name} integration not implemented`);
        setSelectedWallet(null);
      }
    }, 2000);
  };

  return (
    <>
      <div className="relative w-dvw h-dvh flex flex-col lg:flex-row overflow-y-auto lg:overflow-hidden">
        {/* Background grid */}
        {window?.location?.pathname === "/" && (
          <div className="absolute inset-0 z-0 opacity-50 bg-[radial-gradient(#009647_1px,transparent_2px)] [background-size:16px_16px] mask-window" />
        )}

        {/* ----------- Left (Sidebar) ---------- */}
        <div className="relative z-10 lg:min-w-[20%] lg:w-[20%]  xl:min-w-[15%] xl:w-[15%]">
          <SideMenu />
        </div>

        {/* ----------- Right (Main Content) ---------- */}
        <div className="relative z-10 flex-1 flex flex-col h-full gap-4 lg:gap-6 p-4 lg:p-10 lg:overflow-y-auto">
          {/* --------- Navbar stays fixed --------------- */}
          {/* <div className="shrink-0"> */}
          <div className="">
            <NavBar />
          </div>

          {/* --------- Scrollable area ----------------- */}
          {/* <div className="flex-1 md:overflow-y-auto no-scrollbar"> keep this*/}
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
        titleStyle="text-xl mr-auto"
      >
        <div
          className={`grid grid-cols-1 md:grid-cols-2 divide-x divide-border`}
        >
          {/* Wallet list */}
          <div className="flex flex-col gap-3 p-6 order-2 md:order-1">
            {wallets?.map((wallet, idx) => (
              <Button
                key={idx}
                variant={"secondary"}
                // disabled={wallet?.id !== "metamask"}
                className="justify-start py-4 !h-max group hover:bg-accent rounded-2xl"
                onClick={() => handleWalletClick(wallet)}
              >
                <span className="p-2 bg-accent group-hover:!bg-transparent rounded-lg">
                  <img src={wallet?.icon} className="w-4 h-4" />
                </span>
                <span className="font-semibold">{wallet?.name}</span>
              </Button>
            ))}
          </div>

          {/* Right panel */}
          {selectedWallet ? (
            <div className="flex flex-col items-center justify-center gap-2 p-6 order-1 md:order-2">
              <img src={selectedWallet?.icon} className="w-12 h-12" />
              <h3 className="text-base font-semibold">
                Opening {selectedWallet?.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                Confirm in {selectedWallet?.name} extension
              </p>
              <img src={WalletLoading} alt="loading" className="w-max mt-4" />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-2 p-6 order-1 md:order-2">
              <span className="px-2 bg-accent rounded-lg w-20 h-20 flex justify-center items-center border-2 border-border/45">
                <img src={ConnectWallet} className="w-max" />
              </span>
              <h3 className="text-xl font-semibold mt-4">Select Wallet</h3>
            </div>
          )}
        </div>
      </BaseModal>

      <BaseModal
        open={isStakeOpen}
        onOpenChange={openStakeModal}
        closeModal={closeStakeModal}
        className="!text-left md:!max-w-3xl md:!w-[70%]"
        titleStyle="text-xl mr-auto"
      >
        <div className=" rounded-lg max-w-3xl">
          {/* 1. Enter Amount Card */}
          <Card className="bg-gradient-to-r from-[#3B3E44A3] via-[#2C2E33C6] to-[#212227] rounded-4xl md:!p-0">
            <CardContent className="flex flex-row justify-between items-center gap-4 w-full h-full md:p-6">
              <div className=" space-y-3">
                <Label className="text-white text-base md:text-2xl">
                  Enter Amount
                </Label>
                <Input className="bg-transparent !text-lg md:!text-3xl text-white  max-w-md !p-0 font-bold border-none focus-visible:ring-0 w-full" />
              </div>
            </CardContent>
          </Card>

          {/* 2. Pools Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 6 Months Pool Column */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-white">
                6 Months pool
              </h3>
              <StatCard
                title="Min. APY"
                value="6%"
                subtitle="Guaranteed min returns"
                infoTooltip="Minimum Annual Percentage Yield"
              />
              <StatCard
                title="Min. Received"
                value="12,762"
                subtitle="DAI"
                infoTooltip="Minimum amount you will receive in DAI"
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-xl font-semibold text-white">
                  12 Months pool
                </h3>
                <Badge className="bg-emerald-900 text-emerald-300 border-none text-xs px-2 py-1 rounded-sm font-semibold">
                  HIGHLY RECOMMENDED
                </Badge>
              </div>
              <StatCard
                title="Min. APY"
                value="12%"
                subtitle="Guaranteed min returns"
                infoTooltip="Minimum Annual Percentage Yield"
              />
              <StatCard
                title="Min. Received"
                value="22,762"
                subtitle="DAI"
                infoTooltip="Minimum amount you will receive in DAI"
              />
            </div>
          </div>
        </div>
      </BaseModal>
    </>
  );
};

export default DashboardLayout;

import Analytics from "@/assets/icons/analytics.svg?react";
import Bulb from "@/assets/icons/bulb.svg?react";
import Logo from "@/assets/logo/logo.svg";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import ComingSoon from "@/assets/icons/coming-soon.svg";
import Dashboard from "@/assets/icons/dashboard.svg?react";
import Documents from "@/assets/icons/documents.svg?react";
import Governance from "@/assets/icons/governance.svg?react";
import Insurance from "@/assets/icons/insurance.svg?react";
import Lending from "@/assets/icons/lending.svg?react";
import Referral from "@/assets/icons/referral.svg?react";
import Reward from "@/assets/icons/reward.svg?react";
import Stake from "@/assets/icons/stake.svg?react";
import Swap from "@/assets/icons/swap.svg?react";
import X from "@/assets/social-icons/x.svg";
import Discord from "@/assets/social-icons/discord.svg";
import LinkedIn from "@/assets/social-icons/linkedin.svg";
import Telegram from "@/assets/social-icons/telegram.svg";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import AnalyticsWhite from "@/assets/icons/analytics-white.svg?react";
import BulbWhite from "@/assets/icons/bulb-white.svg?react";
import DocumentsWhite from "@/assets/icons/documents-white.svg?react";
import ReferralWhite from "@/assets/icons/referral-white.svg?react";
import RewardWhite from "@/assets/icons/reward-white.svg?react";
import StakeWhite from "@/assets/icons/stake-white.svg?react";
import SwapWhite from "@/assets/icons/swap-white.svg?react";
import DashboardWhite from "@/assets/icons/dashboard-white.svg?react";
import { useWalletStore } from "@/store/useWalletStore";
import WalletProfile from "../WalletProfile";
import { WalletDropdown } from "../WalletDropdown";
import { useModalStore } from "@/store/useModalStore";
import WalletIcon from "@/assets/icons/wallet.svg";

const mainLinks = [
  {
    label: "Dashboard",
    icon: Dashboard,
    href: "/",
    activeIcon: DashboardWhite,
  },
  { label: "Stake", icon: Stake, href: "/stake", activeIcon: StakeWhite },
  { label: "Swap", icon: Swap, href: "/swap", activeIcon: SwapWhite },
  { label: "Rewards", icon: Reward, href: "/rewards", activeIcon: RewardWhite },
  {
    label: "Referral",
    icon: Referral,
    href: "/referral",
    activeIcon: ReferralWhite,
  },
  {
    label: "Analytics",
    icon: Analytics,
    href: "/analytics",
    activeIcon: AnalyticsWhite,
  },
];

const comingSoon = [
  { label: "Lending", icon: Lending },
  { label: "Governance", icon: Governance },
  { label: "Insurance Pool", icon: Insurance },
];

const socialIcons = [
  {
    label: "Linked in",
    icon: LinkedIn,
    url: "https://www.linkedin.com/company/solviumai/",
  },
  { label: "X", icon: X, url: "https://x.com/solviumai" },
  { label: "Telegram", icon: Telegram, url: "https://t.me/solviumai" },
  {
    label: "Discord",
    icon: Discord,
    url: "https://discord.com/invite/Bxsgu9MFjB",
  },
];

const otherLinks = [
  { label: "Support", icon: Bulb, href: "/support", activeIcon: BulbWhite },
  {
    label: "Documents",
    icon: Documents,
    href: "/documents/about",
    activeIcon: DocumentsWhite,
  },
];

export function SidebarContent({ close }: { close?: () => void }) {
  return (
    <div className="h-full w-full bg-[#161616] text-gray-300 flex flex-col justify-between py-10 px-4 overflow-y-auto">
      <div>
        {/* Logo */}
        <Link to={"/"} className="!p-0">
          <img src={Logo} alt="Solvium Logo" className="h-7 md:h-8 w-auto" />
        </Link>

        <hr className="my-6 border-[#4E4E4E]" />

        {/* Main nav */}
        <nav className="space-y-1">
          {mainLinks.map((item) => {
            const isActive = item?.href === window?.location?.pathname;

            return (
              <Link
                key={item.label}
                to={item.href}
                onClick={close}
                className={cn(
                  "flex items-center justify-start gap-3 px-3 py-2 rounded-lg hover:bg-primary/50 text-muted transition-colors",
                  isActive && "bg-primary text-white "
                )}
              >
                {isActive ? (
                  <item.activeIcon
                    className={cn("h-5 w-5 min-w-5 lg:h-6 lg:w-6 lg:min-w-6")}
                  />
                ) : (
                  <item.icon
                    className={cn("h-5 w-5 min-w-5 lg:h-6 lg:w-6 lg:min-w-6")}
                  />
                )}
                <span className="text-base xl:text-lg font-bold">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        <hr className="my-4" />

        {/* Coming soon */}
        <div className="">
          <p className="text-primary text-base xl:text-lg font-semibold px-3 pb-4 flex justify-start items-center gap-2 ">
            <img
              src={ComingSoon}
              alt="coming-soon-icon"
              className="h-5 w-5 min-w-5 lg:h-6 lg:w-6 lg:min-w-6"
            />
            Coming soon
          </p>
          <div className="space-y-2">
            {comingSoon.map((item) => (
              <Button
                key={item.label}
                // disabled
                variant={"destructive"}
                className="w-full flex justify-start items-center gap-3 px-3 py-2 border border-green-600 rounded-lg text-primary bg-transparent hover:bg-gray-900 transition hover:!text-primary"
              >
                <item.icon className="h-5 w-5 min-w-5 lg:h-6 lg:w-6 lg:min-w-6" />
                <span className="text-base xl:text-lg font-bold">
                  {item.label}
                </span>
              </Button>
            ))}
          </div>
        </div>

        <hr className="my-4" />

        {/* Other links */}
        <div className="">
          <p className="text-white text-base xl:text-lg font-semibold px-3 pb-4 flex justify-start items-center gap-2 ">
            Other
          </p>
          <div className="space-y-1">
            {otherLinks.map((item) => {
              const isActive = item.href === window.location.pathname;
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={close}
                  className={cn(
                    "flex items-center justify-start gap-3 px-3 py-2 rounded-lg hover:bg-primary/50 text-muted transition-colors",
                    isActive && "bg-primary text-white "
                  )}
                >
                  {isActive ? (
                    <item.activeIcon className="h-5 w-5 min-w-5 lg:h-6 lg:w-6 lg:min-w-6" />
                  ) : (
                    <item.icon className="h-5 w-5 min-w-5 lg:h-6 lg:w-6 lg:min-w-6" />
                  )}
                  <span className="text-base md:text-xl font-medium">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer social icons */}
      <div className="flex items-center justify-between gap-4 px-2 pt-10">
        {socialIcons?.map((data) => (
          <Link target="_" to={data?.url} className="hover:text-white ">
            <img
              src={data?.icon}
              alt={data?.label + "icon"}
              className="h-5 w-5 md:h-6 md:w-6 min-w-5"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function SideMenu() {
  const [open, setOpen] = useState<boolean>(false);

  const { isConnected, account, disconnect } = useWalletStore();
  const { openModal } = useModalStore();

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex h-full w-full ">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <div className="lg:hidden flex justify-between items-center w-dvw gap-4 px-6 pt-6 flex-wrap ">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button className="p-2 rounded-lg bg-transparent text-white ">
              <Menu className="h-10 w-10" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="p-0 bg-black text-white w-64 animate-slide-in"
          >
            <SidebarContent close={() => setOpen(false)} />
          </SheetContent>
        </Sheet>

        <div className="flex lg:hidden justify-center items-center gap-4 ">
          <WalletProfile />

          {!isConnected && (
            <Button variant={"outline"} onClick={openModal} className="!gap-3">
              <img
                src={WalletIcon}
                alt={"wallet-icon"}
                className="w-5 h-5 rounded-full"
              />
              Connect
            </Button>
          )}

          {isConnected && (
            <WalletDropdown
              account={account}
              // balance="2,020"
              onDisconnect={disconnect}
            />
          )}
        </div>
      </div>
    </>
  );
}

import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { WalletDropdown } from "@/components/WalletDropdown";
import WalletProfile from "@/components/WalletProfile";
import { useModalStore } from "@/store/useModalStore";
import { useWalletStore } from "@/store/useWalletStore";
import WalletIcon from "@/assets/icons/wallet.svg";

const NavBar = () => {
  const { openModal } = useModalStore();
  const { isConnected, account, disconnect } = useWalletStore();

  const currentPath = window.location.pathname;

  const renderHeader = () => {
    switch (currentPath) {
      case "/":
        return {
          title: "Welcome to Solvium",
          description: "A next-gen platform for stablecoin lending and staking",
        };
      case "/stake":
        return {
          title: "Staking",
          description: "Stake stablecoins to earn competitive rewards",
        };
      case "/swap":
        return {
          title: "Swap",
          description:
            "Exchange stablecoins and tokens in seconds with Solvium’s optimized routes.",
        };
      case "/rewards":
        return {
          title: "Rewards",
          description:
            "Check your rewards and activity. Unstake to add rewards to your wallet. ",
        };
      case "/referral":
        return {
          title: "Referral Program",
          description:
            "You can now unlock more earnings with Solvium’s referral program",
        };
      case "/analytics":
        return {
          title: "Analytics & Reporting",
          description: "Track platform analytics and check your progress.",
        };
      case "/support":
        return {
          title: "Support Center",
          description:
            "Explore the most common queries about our platform, services, and vision.",
        };
      default:
        return {
          title: "Welcome to Solvium",
          description: "A next-gen platform for stablecoin lending and staking",
        };
    }
  };
  return (
    <div className="z-1 flex justify-between">
      <Header
        title={renderHeader()?.title}
        description={renderHeader()?.description}
      />
      <div className="hidden lg:flex justify-center items-center gap-4">
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
  );
};

export default NavBar;

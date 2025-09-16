import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { WalletDropdown } from "@/components/WalletDropdown";
import WalletProfile from "@/components/WalletProfile";
import { useModalStore } from "@/store/useModalStore";
import { useWalletStore } from "@/store/useWalletStore";

const NavBar = () => {
  const { openModal } = useModalStore();
  const { isConnected, account, disconnect } = useWalletStore();
  return (
    <div className="z-1 flex justify-between">
      {/** Title and Description */}
      <Header
        title="Welcome to Solvium"
        description="A next-gen platform for stablecoin lending and staking"
      />
      <div className="flex justify-center items-center gap-4">
        <WalletProfile />

        {!isConnected && (
          <Button variant={"outline"} onClick={openModal}>
            Connect
          </Button>
        )}

        {isConnected && (
          <WalletDropdown
            account={account}
            balance="2,020"
            onDisconnect={disconnect}
          />
        )}
      </div>
    </div>
  );
};

export default NavBar;

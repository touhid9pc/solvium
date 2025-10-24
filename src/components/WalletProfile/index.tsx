import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import EthereumLogo from "@/assets/logo/ethereum.png";
import ArbitrumLogo from "@/assets/logo/arbitrum.png";
import PolygonLogo from "@/assets/logo/polygon.png";

const wallets = [
  {
    label: "Ethereum",
    value: "ethereum",
    icon: EthereumLogo,
  },
  {
    label: "Arbitrum",
    value: "arbitrum",
    icon: ArbitrumLogo,
  },
  {
    label: "Polygon",
    value: "polygon",
    icon: PolygonLogo,
  },
];

const WalletProfile = () => {
  return (
    <div className="flex items-center justify-center">
      <Select defaultValue="ethereum">
        <SelectTrigger className="w-56 min-w-max">
          <SelectValue placeholder="Select Wallet" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {wallets.map((wallet) => (
              <SelectItem key={wallet.value} value={wallet.value}>
                <div className="flex items-center gap-2">
                  <img
                    src={wallet.icon}
                    alt={wallet.label}
                    className="w-5 h-5 rounded-full"
                  />
                  <span>{wallet.label}</span>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default WalletProfile;

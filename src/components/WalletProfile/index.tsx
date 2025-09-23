import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import DAI from "@/assets/logo/dai.svg";

const WalletProfile = () => {
  return (
    <div>
      <Select defaultValue="ethereum">
        <SelectTrigger className="w-56 min-w-max">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem
              value="ethereum"
              icon={<img src={DAI} alt="Ethereum" className="w-5 h-5" />}
            >
              Ethereum
            </SelectItem>
            <SelectItem
              value="bitcoin"
              min-w-max
              icon={<img src={DAI} alt="Bitcoin" className="w-5 h-5" />}
            >
              BNB
            </SelectItem>
            <SelectItem
              value="solana"
              icon={<img src={DAI} alt="Solana" className="w-5 h-5" />}
            >
              Katana
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default WalletProfile;

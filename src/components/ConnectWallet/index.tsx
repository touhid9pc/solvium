import { Wallet } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type ConnectWalletProps = {
  contentWrapperStyle?: string;
  className?: string;
};

const ConnectWallet = ({
  contentWrapperStyle,
  className,
}: ConnectWalletProps) => {
  return (
    <Card
      className={`bg-gradient-to-r from-[#0A0A0A] to-[#0F2F17] border-none mb-6 ${className}`}
    >
      <CardContent
        className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${contentWrapperStyle}`}
      >
        <div className="space-y-2">
          <h2 className="text-primary font-semibold flex items-center gap-2 text-xl">
            <Wallet className="h-5 w-5" /> Connect Your Wallet
          </h2>
          <p className="text-white text-base font-medium">
            Unlock full access by connecting your wallet
          </p>
        </div>
        <Select>
          <SelectTrigger className="min-w-max w-max !py-6 bg-primary font-semibold !text-white">
            <SelectValue placeholder="Connect Wallet" />
          </SelectTrigger>
          <SelectContent className="bg-[#222] text-white">
            <SelectItem value="Metamask">Metamask</SelectItem>
            <SelectItem value="Binance">Binance</SelectItem>
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  );
};

export default ConnectWallet;

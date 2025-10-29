import CardBlob from "@/assets/images/card-blog.svg";
import { useModalStore } from "@/store/useModalStore";
import { useWalletStore } from "@/store/useWalletStore";
import { Wallet } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

type ConnectWalletProps = {
  contentWrapperStyle?: string;
  className?: string;
};

const ConnectWallet = ({
  contentWrapperStyle,
  className,
}: ConnectWalletProps) => {
  const { openModal } = useModalStore();
  const { isConnected } = useWalletStore();

  return (
    <div className="relative overflow-hidden rounded-xl">
      <img
        src={CardBlob}
        alt={"card-blob"}
        className="absolute top-0 right-0 z-2 h-full"
      />
      <Card className={`border-none ${className} bg-[#202022]`}>
        <CardContent
          className={`flex flex-col items-start gap-4 ${contentWrapperStyle}`}
        >
          <div className="space-y-2">
            <h2 className="text-primary font-semibold flex items-center gap-2 text-xl">
              <Wallet className="h-5 w-5" /> Connect Your Wallet
            </h2>
            <p className="text-white text-base font-medium">
              Unlock full access by connecting your wallet
            </p>
          </div>
          {/* <Select>
          <SelectTrigger className="min-w-max w-max !py-6 bg-primary font-semibold !text-white">
            <SelectValue placeholder="Connect Wallet" />
          </SelectTrigger>
          <SelectContent className="bg-[#222] text-white">
            <SelectItem value="Metamask">Metamask</SelectItem>
            <SelectItem value="Binance">Binance</SelectItem>
          </SelectContent>
        </Select> */}

          {!isConnected && (
            <Button
              onClick={openModal}
              className="!gap-3 rounded-md px-10 font-semibold"
            >
              Choose Wallet
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ConnectWallet;

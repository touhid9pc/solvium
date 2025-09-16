import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Copy, LogOut } from "lucide-react";

interface WalletDropdownProps {
  account: string;
  balance: string;
  avatar?: string;
  onDisconnect: () => void;
}

export function WalletDropdown({
  account,
  balance,
  avatar,
  onDisconnect,
}: WalletDropdownProps) {
  const [copied, setCopied] = useState(false);

  const shortAddress = `${account.slice(0, 6)}...${account.slice(-4)}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(account);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 rounded-xl px-4 py-2"
        >
          <div className="w-3 h-3 rounded-full bg-purple-500" />
          <span className="font-medium">{shortAddress}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-max p-0 rounded-2xl shadow-lg"
      >
        <div className="p-4">
          {/* Wallet Avatar & Info */}
          <div className="flex flex-col items-center gap-2 pb-4 border-b">
            <img
              src={
                avatar ||
                "https://avatars.githubusercontent.com/u/9919?s=200&v=4"
              }
              alt="Wallet Avatar"
              className="w-12 h-12 rounded-full"
            />
            <span className="font-semibold">{shortAddress}</span>
            <span className="text-gray-500">{balance} ETH</span>
          </div>

          {/* Actions */}
          <div className="flex justify-between flex-row mt-4 gap-3">
            <Button
              variant="outline"
              className="flex items-center gap-2 flex-1"
              onClick={handleCopy}
            >
              <Copy className="w-4 h-4" />
              {copied ? "Copied!" : "Copy Address"}
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 flex-1"
              onClick={onDisconnect}
            >
              <LogOut className="w-4 h-4" />
              Disconnect
            </Button>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

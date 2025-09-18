import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "../ui/select";

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
              icon={
                <img
                  src="/icons/ethereum.svg"
                  alt="Ethereum"
                  className="w-5 h-5"
                />
              }
            >
              Ethereum
            </SelectItem>
            <SelectItem
              value="bitcoin"
              min-w-max
              icon={
                <img
                  src="/icons/bitcoin.svg"
                  alt="Bitcoin"
                  className="w-5 h-5"
                />
              }
            >
              BNB
            </SelectItem>
            <SelectItem
              value="solana"
              icon={
                <img src="/icons/solana.svg" alt="Solana" className="w-5 h-5" />
              }
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

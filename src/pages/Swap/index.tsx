import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import ConnectWallet from "@/components/ConnectWallet";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

import DAI from "@/assets/logo/dai.svg";
import USD from "@/assets/logo/usd.svg";
import USDT from "@/assets/logo/usdt.svg";

const Swap = () => {
  const [balance] = useState(7154);
  const [currentPercent, setCurrentPercent] = useState(50);
  const [amount, setAmount] = useState("");

  const handlePercent = (percent: number) => {
    setCurrentPercent(percent);
  };

  useEffect(() => {
    setCurrentPercent(currentPercent);
    const val = ((balance * currentPercent) / 100).toFixed(0);
    setAmount(val);
  }, [currentPercent]);

  const tokens = [
    { value: "dai", label: "DAI", icon: DAI },
    { value: "usd", label: "USD", icon: USD },
    { value: "usdt", label: "USDT", icon: USDT },
  ];

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto">
        <Card className=" border border-neutral-700 rounded-2xl p-6 w-full mt-6">
          <ConnectWallet
            contentWrapperStyle={"flex-row justify-between items-center"}
          />
          <CardContent className="space-y-6 p-0">
            {/* Sell / Buy Row */}
            <div className="md:grid grid-cols-1 md:grid-cols-2 gap-4 space-y-4 md:space-y-0">
              {/* Sell Box */}

              <Card className="bg-gradient-to-r from-[#3B3E44A3] via-[#2C2E33C6] to-[#212227] border rounded-4xl h-full md:min-h-[200px] flex flex-col justify-between !gap-2 px-6">
                {/* <CardContent className="flex flex-col justify-between !gap-2 "> */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-semibold">Sell</span>
                  <Select defaultValue="dai">
                    <SelectTrigger className="w-max bg-[#333] text-white font-semibold rounded-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[#222] text-white border border-neutral-700">
                      {tokens.map((token) => (
                        <SelectItem key={token.value} value={token.value}>
                          <div className="flex items-center gap-2">
                            <img
                              src={token.icon}
                              alt={token.label}
                              width={20}
                              height={20}
                              className="rounded-full"
                            />
                            {token.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <p className="text-3xl font-semibold text-white">{amount}</p>
                <div className=" flex justify-between items-center">
                  <p className="text-gray-400 text-sm">$0</p>
                  <p className="text-gray-400 text-sm text-right">
                    Balance: {balance}
                  </p>
                </div>
                {/* </CardContent> */}
              </Card>

              {/* For MV */}
              <div className="flex md:hidden gap-2 mt-4">
                {[
                  { label: "25%", value: 25 },
                  { label: "50%", value: 50 },
                  { label: "Max", value: 100 },
                ].map(({ label, value }) => (
                  <Button
                    key={value}
                    variant="secondary"
                    size="sm"
                    className={`${
                      currentPercent === value
                        ? "bg-[#53AE9433]"
                        : "bg-transparent"
                    } text-primary hover:bg-gray-700 rounded-xl border !p-[0.6rem]  !text-[0.8rem] md:!p-4 md:!text-base`}
                    onClick={() => handlePercent(value)}
                  >
                    {label}
                  </Button>
                ))}
              </div>

              {/* Buy Box */}
              <Card className="bg-gradient-to-r from-[#3B3E44A3] via-[#2C2E33C6] to-[#212227] border rounded-4xl h-full md:min-h-[200px] flex flex-col justify-between !gap-2 px-6">
                {/* <CardContent className="flex flex-col justify-between !gap-2 h-full"> */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-semibold">Buy</span>
                  <Select defaultValue="usdt">
                    <SelectTrigger className="w-max bg-[#333] text-white font-semibold rounded-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[#222] text-white border border-neutral-700">
                      {tokens.map((token) => (
                        <SelectItem key={token.value} value={token.value}>
                          <div className="flex items-center gap-2">
                            <img
                              src={token.icon}
                              alt={token.label}
                              width={20}
                              height={20}
                              className="rounded-full"
                            />
                            {token.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <p className="text-3xl font-semibold text-white">{amount}</p>
                <div className="">
                  <p className="text-gray-400 text-sm">$0</p>
                </div>
                {/* </CardContent> */}
              </Card>
            </div>

            {/* For DV */}
            <div className="hidden md:flex gap-2 mt-6">
              {[
                { label: "25%", value: 25 },
                { label: "50%", value: 50 },
                { label: "Max", value: 100 },
              ].map(({ label, value }) => (
                <Button
                  key={value}
                  variant="secondary"
                  size="sm"
                  className={`${
                    currentPercent === value
                      ? "bg-[#53AE9433]"
                      : "bg-transparent"
                  } text-primary hover:bg-gray-700 rounded-xl border !p-[0.3rem]  !text-[0.6rem] md:!p-4 md:!text-base`}
                  onClick={() => handlePercent(value)}
                >
                  {label}
                </Button>
              ))}
            </div>

            {/* Swap Button */}
            <Button className="w-full bg-primary hover:bg-green-600 text-[#181818] font-semibold py-6 !text-xl rounded-lg">
              Swap
            </Button>

            {/* Checkbox */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                defaultChecked
                className="border-[#00C056] data-[state=checked]:bg-[#00C056]"
              />
              <label
                htmlFor="terms"
                className="text-sm text-gray-300 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree with{" "}
                <span className="text-[#00C056] cursor-pointer">
                  terms and conditions.
                </span>
              </label>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Swap;

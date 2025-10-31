import DownArrow from "@/assets/icons/down-arrow.svg";
import ConnectWallet from "@/components/ConnectWallet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

import AAVELogo from "@/assets/logo/aave.svg";
import DAI from "@/assets/logo/dai.svg";
import ETHLogo from "@/assets/logo/eth.svg";
import LINKLogo from "@/assets/logo/link.svg";
import USDC from "@/assets/logo/usdc.svg";
import USDT from "@/assets/logo/usdt.svg";
import WBTCLogo from "@/assets/logo/wbtc.svg";
import { BaseModal } from "@/components/BaseModal";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

import UNILogo from "@/assets/logo/uni.svg";
import LEOLogo from "@/assets/logo/leo.svg";
import StatCard from "@/components/StatCard";

const Swap = () => {
  const [balance] = useState(7154);
  const [currentPercent, setCurrentPercent] = useState(50);
  const [amount, setAmount] = useState("");
  const [openSwapModal, setOpenSwapModal] = useState({
    sellModal: false,
    buyModal: false,
  });

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
    { value: "usdc", label: "USD", icon: USDC },
    { value: "usdt", label: "USDT", icon: USDT },
  ];

  const sellCoins = [
    { label: "WBTC", icon: WBTCLogo },
    { label: "AAVE", icon: AAVELogo },
    { label: "LINK", icon: LINKLogo },
    { label: "ETH", icon: ETHLogo },
    { label: "UNI", icon: UNILogo },
    { label: "LEO Token", icon: LEOLogo },
  ];

  const buyTokens = [
    { label: "DAI", icon: DAI },
    { label: "USD", icon: USDC },
    { label: "USDT", icon: USDT },
  ];

  const [selectedSellCoin, setSelectedSellCoin] = useState(sellCoins[0]);
  const [selectedBuyCoin, setSelectedBuyCoin] = useState(buyTokens[0]);
  const [searchTerm, setSearchTerm] = useState("");

  function handleCloseModal(key: string) {
    setSearchTerm("");
    setOpenSwapModal((prev) => {
      return { ...prev, [key]: false };
    });
  }

  function handleOpenModal(key: string) {
    setOpenSwapModal((prev) => {
      return { ...prev, [key]: true };
    });
  }

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto">
        <Card className=" border border-neutral-700 rounded-2xl p-6 w-full mt-6">
          <ConnectWallet
            contentWrapperStyle={"md:flex-row justify-between md:items-center"}
          />
          <CardContent className="space-y-6 p-0">
            {/* Sell / Buy Row */}
            <div className="md:grid grid-cols-1 md:grid-cols-2 gap-4 space-y-4 md:space-y-0">
              {/* Sell Box */}

              <Card className="bg-gradient-to-r from-[#3B3E44A3] via-[#2C2E33C6] to-[#212227] border rounded-4xl h-full md:min-h-[200px] flex flex-col justify-between !gap-2 px-6">
                {/* <CardContent className="flex flex-col justify-between !gap-2 "> */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-semibold">Sell</span>
                  {/* <Select>
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
                  </Select> */}
                  <div
                    className="flex items-center gap-2 bg-[#3B3B3B] px-4 py-2 rounded-full"
                    onClick={() => handleOpenModal("sellModal")}
                  >
                    <img
                      src={selectedSellCoin.icon}
                      alt={selectedSellCoin.label}
                      width={20}
                      height={20}
                      className="rounded-full"
                    />
                    <span className="lg:text-xl font-semibold">
                      {selectedSellCoin.label}
                    </span>
                    <img src={DownArrow} alt="down-arrow" className="w-3 h-3" />
                  </div>
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
                  {/* <Select defaultValue="usdt">
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
                  </Select> */}
                  <div
                    className="flex items-center gap-2 bg-[#3B3B3B] px-4 py-2 rounded-full"
                    onClick={() => handleOpenModal("buyModal")}
                  >
                    <img
                      src={selectedBuyCoin.icon}
                      alt={selectedBuyCoin.label}
                      width={20}
                      height={20}
                      className="rounded-full"
                    />
                    <span className="lg:text-xl font-semibold">
                      {selectedBuyCoin.label}
                    </span>
                    <img src={DownArrow} alt="down-arrow" className="w-3 h-3" />
                  </div>
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

      <BaseModal
        open={openSwapModal?.sellModal}
        onOpenChange={() => handleCloseModal("sellModal")}
        closeModal={() => handleCloseModal("sellModal")}
        title="Select Token"
        className="!text-left min-w-max min-h-[50%]"
        titleStyle="text-xl"
      >
        <div className="relative w-full rounded-2xl mb-4 ">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#AFAFAF] w-5 h-5 pointer-events-none" />
          <Input
            type="text"
            placeholder="Search Operator ID, Transaction ID"
            className="w-full pl-10 pr-4 py-5 dark:bg-[#8E8E8E40] placeholder:font-medium placeholder:tracking-wide placeholder:text-base !text-base text-slate-100 rounded-lg border-[#8E8E8E40]"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </div>
        <div className="space-y-4">
          {sellCoins
            .filter((stat) => {
              if (!searchTerm?.trim()) return true;
              return stat?.label
                ?.toLowerCase()
                .includes(searchTerm.toLowerCase());
            })
            .map((stat, i) => (
              <div
                key={i}
                onClick={() => {
                  setSelectedSellCoin(stat);
                  handleCloseModal("sellModal");
                }}
              >
                <StatCard
                  title={stat?.label}
                  icon={
                    <img src={stat?.icon} className="w-4 h-4 md:w-6 md:h-6" />
                  }
                  iconWrapperStyle={"!p-0"}
                  cardStyle="py-2"
                />
              </div>
            ))}
        </div>
      </BaseModal>

      <BaseModal
        open={openSwapModal?.buyModal}
        onOpenChange={() => handleCloseModal("buyModal")}
        closeModal={() => handleCloseModal("buyModal")}
        title="Select Token"
        className="!text-left min-w-max min-h-[50%]"
        titleStyle="text-xl"
      >
        <div className="relative w-full rounded-2xl mb-4 ">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#AFAFAF] w-5 h-5 pointer-events-none" />
          <Input
            type="text"
            placeholder="Search Operator ID, Transaction ID"
            className="w-full pl-10 pr-4 py-5 dark:bg-[#8E8E8E40] placeholder:font-medium placeholder:tracking-wide placeholder:text-base !text-base text-slate-100 rounded-lg border-[#8E8E8E40]"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </div>
        <div className="space-y-4">
          {buyTokens
            .filter((stat) => {
              if (!searchTerm?.trim()) return true;
              return stat?.label
                ?.toLowerCase()
                .includes(searchTerm.toLowerCase());
            })
            .map((stat, i) => (
              <div
                className=""
                key={i}
                onClick={() => {
                  setSelectedBuyCoin(stat);
                  handleCloseModal("buyModal");
                }}
              >
                <StatCard
                  key={i}
                  title={stat?.label}
                  icon={
                    <img src={stat?.icon} className="w-4 h-4 md:w-6 md:h-6" />
                  }
                  iconWrapperStyle={"!p-0"}
                  cardStyle="py-2"
                />
              </div>
            ))}
        </div>
      </BaseModal>
    </DashboardLayout>
  );
};

export default Swap;

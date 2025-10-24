import Header from "@/components/header";
import { ReusableLineChart } from "@/components/ReusableLineChart";
import StatCard from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Activity, DollarSign, Lock } from "lucide-react";
import DashboardLayout from "../../layouts/DashboardLayout";
import "./dashboard.css";

import COINS from "@/assets/icons/coins.svg";
import CREDITCARD from "@/assets/icons/credit-card.svg";
import GIFT from "@/assets/icons/gift.svg";
import PIGGYBANK from "@/assets/icons/piggy-bank.svg";
import DAILOGO from "@/assets/logo/dai.svg";
import USDLOGO from "@/assets/logo/usd.svg";
import USDTLOGO from "@/assets/logo/usdt.svg";
import ConnectWallet from "@/components/ConnectWallet";
import StablecoinPieChart from "@/components/StableCoinPieChart";
import { Progress } from "@/components/ui/progress";

import CopyIcon from "@/assets/icons/copy.svg";

const Dashboard = () => {
  const chartData = [
    { day: "Aug 14", value: 40 },
    { day: "Aug 15", value: 55 },
    { day: "Aug 16", value: 35 },
    { day: "Aug 17", value: 80 },
    { day: "Aug 18", value: 40 },
    { day: "Aug 19", value: 65 },
    { day: "Aug 20", value: 100 },
  ];

  const stats = [
    {
      icon: (
        <DollarSign className="text-primary h-4 w-4 md:h-5 md:w-5 min-w-5" />
      ),
      title: "Total TVL",
      value: "$25.7 M",
      blurCol: "primary",
    },
    {
      icon: <Lock className="text-orange-500 h-4 w-4 md:h-5 md:w-5 min-w-5" />,
      title: "6 Months pool",
      value: "~12.5%",
      blurCol: "orange-500",
    },
    {
      icon: <Lock className="text-purple-500 h-4 w-4 md:h-5 md:w-5 min-w-5" />,
      title: "12 Months pool",
      value: "~15%",
      blurCol: "purple-500",
    },
    {
      icon: (
        <Activity className="text-green-400 h-4 w-4 md:h-5 md:w-5 min-w-5" />
      ),
      title: "Utilization",
      value: "78%",
      blurCol: "primary",
    },
  ];

  const statsCardData = [
    { label: "Your stable coins", value: "$25,681.92", icon: COINS },
    { label: "Staked", value: "$15,681.92", icon: PIGGYBANK },
    { label: "Available", value: "$10,681.92", icon: CREDITCARD },
    { label: "Rewards", value: "$452.87", icon: GIFT },
  ];

  const holdings = [
    {
      name: "USDC",
      subtitle: "USD Coin",
      total: "$25,981.81",
      staked: "$21,082.98",
      available: "$4082.98",
      rewards: "$219.98",
      progress: 59.42,
      icon: USDLOGO,
    },
    {
      name: "USDT",
      subtitle: "USD Tether",
      total: "$4,981.81",
      staked: "$3082.98",
      available: "$1898.83",
      rewards: "$119.98",
      progress: 38.5,
      icon: USDTLOGO,
    },
    {
      name: "DAI",
      subtitle: "Dai Coin",
      total: "$4,981.81",
      staked: "$2082.98",
      available: "$2898.83",
      rewards: "$99.98",
      progress: 42.3,
      icon: DAILOGO,
    },
  ];

  const stablecoinData = [
    { name: "USDC", value: 62, percentage: 62 },
    { name: "USDT", value: 14, percentage: 14 },
    { name: "DAI", value: 24, percentage: 24 },
  ];

  const referralCode = "SOLV-ABC123SOLV-ABC123SOLV-ABC123SOLV-ABC123";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralCode);
  };

  return (
    <>
      <DashboardLayout>
        {/* ----------------Referral card------------------ */}
        <Card className="my-6 bg-gradient-to-l from-primary via-[#191919] to-card ">
          <CardContent className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div className="">
              <p className="text-2xl font-bold text-white pb-2">
                Referral Code
              </p>
              <p className="text-white text-lg">
                Earn rewards by inviting friends to Solvium
              </p>
            </div>

            <div className=" flex items-center bg-[#272729] rounded-lg px-4 py-2 w-full md:w-[60%] md:max-w-[60%] justify-between">
              <span className="text-[#AFAFAF] text-sm truncate">
                {referralCode}
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="text-[#AFAFAF] hover:text-white hover:bg-transparent"
                onClick={copyToClipboard}
              >
                <img src={CopyIcon} className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
        {/* ----------------Referral card------------------ */}

        <Card className="p-6 space-y-6">
          <div className="flex flex-wrap justify-center sm:justify-between gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <StatCard key={i} {...stat} />
            ))}
          </div>

          <div className="flex justify-between items-center mb-4">
            <Select defaultValue="6m">
              <SelectTrigger className="w-[10rem] min-w-max bg-[#202022] border border-neutral-700 text-white ">
                <SelectValue placeholder="Select pool" />
              </SelectTrigger>
              <SelectContent className=" border-neutral-700 text-white ">
                <SelectItem value="6m">6 Month pool</SelectItem>
                <SelectItem value="12m">12 Month pool</SelectItem>
                <SelectItem value="24m">24 Month pool</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="6m">
              <SelectTrigger className="w-[10rem] min-w-max bg-[#202022] border border-neutral-700 text-white ">
                <SelectValue placeholder="Select pool" />
              </SelectTrigger>
              <SelectContent className=" border border-neutral-700 text-white ">
                <SelectItem value="6m">Weekly</SelectItem>
                <SelectItem value="12m">Monthly</SelectItem>
                <SelectItem value="24m">Yearly</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <ReusableLineChart
            data={chartData}
            xKey="day"
            yKey="value"
            color="#22c55e"
            className="!p-0"
          />
        </Card>

        <div className="my-8">
          <Header
            title="Your Portfolio"
            description="Track your stablecoin holdings, staking positions, and accumulated rewards"
            titleStyle="text-xl md:text-2xl"
            descStyle=""
          />

          <Card className="min-h-max my-8 text-white p-4 md:p-8">
            {/* Connect Wallet */}
            <ConnectWallet />

            {/* Stats mapped */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {statsCardData.map((stat, i) => (
                <StatCard
                  key={i}
                  title={stat?.label}
                  value={stat?.value}
                  icon={<img src={stat?.icon} className="w-6 h-6" />}
                  iconWrapperStyle={"!bg-[#00C05633]"}
                />
              ))}
            </div>

            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Individual holdings
            </h3>

            <div className="flex flex-col gap-6">
              {/* Chart */}
              <StablecoinPieChart
                data={stablecoinData}
                colors={["#4F46E5", "#10B981", "#F59E0B"]}
                showDashedLines
                showPercentages
                showRadial
              />
              {/* Holdings List mapped */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {holdings.map((coin, i) => (
                  <Card
                    key={i}
                    className="flex-1 min-w-[16rem] sm:min-w-[18rem] md:min-w-[20rem] bg-[#202022] rounded-2xl border border-[#2c2c2e] shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <CardContent className="flex flex-col gap-6">
                      {/* Top Section */}
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        {/* Left Side (Icon + Name) */}
                        <div className="flex items-center gap-3 sm:gap-4">
                          <img
                            src={coin?.icon}
                            alt={`${coin.name} logo`}
                            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 p-2 border border-accent rounded-full object-cover"
                          />
                          <h4 className="font-bold text-lg sm:text-xl md:text-2xl leading-tight text-white">
                            {coin.name}
                            <span className="block font-medium text-xs sm:text-sm text-gray-300">
                              {coin.subtitle}
                            </span>
                          </h4>
                        </div>

                        {/* Right Side (Total) */}
                        <p className="font-bold text-lg sm:text-xl md:text-2xl text-white">
                          {coin.total}
                        </p>
                      </div>

                      {/* Middle Section: Stats */}
                      <div className="flex flex-wrap justify-between gap-4 sm:gap-6 text-xs sm:text-sm text-white">
                        <p className="flex flex-col gap-1">
                          Staked
                          <span className="text-base sm:text-lg md:text-xl font-semibold">
                            {coin.staked}
                          </span>
                        </p>
                        <p className="flex flex-col gap-1">
                          Available
                          <span className="text-base sm:text-lg md:text-xl font-semibold">
                            {coin.available}
                          </span>
                        </p>
                        <p className="flex flex-col gap-1">
                          Rewards
                          <span className="text-base sm:text-lg md:text-xl font-semibold">
                            {coin.rewards}
                          </span>
                        </p>
                      </div>

                      {/* Bottom Section: Progress */}
                      <div className="flex flex-wrap justify-between items-center gap-2 text-xs sm:text-sm text-gray-300">
                        <p className="text-white">Staked vs Available</p>
                        <span className="font-medium text-white">
                          {coin.progress}% Staked
                        </span>
                      </div>

                      <Progress
                        value={coin.progress}
                        className="h-2 rounded-full"
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;

import { ReusableLineChart } from "@/components/ReusableLineChart";
import DashboardLayout from "../../layouts/DashboardLayout";
import "./dashboard.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StatCard from "@/components/StatCard";
import { Activity, Copy, DollarSign, Lock } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Wallet } from "lucide-react";
import DAILOGO from "@/assets/logo/dai.svg";
import USDTLOGO from "@/assets/logo/usdt.svg";
import USDLOGO from "@/assets/logo/usd.svg";
import COINS from "@/assets/icons/coins.svg";
import GIFT from "@/assets/icons/gift.svg";
import CREDITCARD from "@/assets/icons/credit-card.svg";
import PIGGYBANK from "@/assets/icons/piggy-bank.svg";
import StablecoinPieChart from "@/components/StableCoinPieChart";
import ConnectWallet from "@/components/ConnectWallet";

const COLORS = ["#4F46E5", "#F59E0B", "#10B981"];

const data = [
  { name: "USDC", value: 62 },
  { name: "USDT", value: 24 },
  { name: "DAI", value: 14 },
];

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
      icon: <DollarSign className="text-primary" size={20} />,
      title: "Total TVL",
      value: "$25.7 M",
      blurCol: "primary",
    },
    {
      icon: <Lock className="text-orange-500" size={20} />,
      title: "6 Months pool",
      value: "~12.5%",
      blurCol: "orange-500",
    },
    {
      icon: <Lock className="text-purple-500" size={20} />,
      title: "12 Months pool",
      value: "~15%",
      blurCol: "purple-500",
    },
    {
      icon: <Activity className="text-green-400" size={20} />,
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
        <Card className="my-6 bg-gradient-to-l from-primary via-black to-card ">
          <CardContent className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div className="">
              <p className="text-2xl font-bold text-white">Referral Code</p>
              <p>Earn rewards by inviting friends to Solvium</p>
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
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
        {/* ----------------Referral card------------------ */}

        <Card className="p-6 space-y-6">
          <div className="flex flex-wrap justify-between items-center gap-4">
            {stats.map((stat, i) => (
              <StatCard key={i} {...stat} />
            ))}
          </div>

          <div className="flex justify-between items-center mb-4">
            <Select defaultValue="6m">
              <SelectTrigger className="w-[10rem] min-w-max bg-[#202022] border border-neutral-700 text-white rounded-b-md">
                <SelectValue placeholder="Select pool" />
              </SelectTrigger>
              <SelectContent className=" border-neutral-700 text-white rounded-xl">
                <SelectItem value="6m">6 Month pool</SelectItem>
                <SelectItem value="12m">12 Month pool</SelectItem>
                <SelectItem value="24m">24 Month pool</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="6m">
              <SelectTrigger className="w-[10rem] min-w-max bg-[#202022] border border-neutral-700 text-white rounded-md">
                <SelectValue placeholder="Select pool" />
              </SelectTrigger>
              <SelectContent className=" border border-neutral-700 text-white rounded-xl">
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
                  <Card key={i} className="flex-1">
                    <CardContent className="">
                      <div className="flex items-center justify-between mb-6">
                        <div className=" flex justify-center items-center gap-2">
                          <img
                            src={coin?.icon}
                            alt="coin logo"
                            className="w-14 h-14 p-2 border border-accent rounded-full object-cover"
                          />
                          <h4 className="font-bold flex flex-col text-2xl">
                            {coin.name}{" "}
                            <span className="font-semibold text-white text-sm">
                              {coin.subtitle}
                            </span>
                          </h4>
                        </div>
                        <p className="font-bold text-2xl">{coin.total}</p>
                      </div>
                      <div className="flex justify-between items-center text-sm text-white mb-6">
                        <p className="flex flex-col gap-1">
                          Staked <span className="text-xl">{coin.staked}</span>
                        </p>
                        <p className="flex flex-col gap-1">
                          Available{" "}
                          <span className="text-xl">{coin.available}</span>
                        </p>
                        <p className="flex flex-col gap-1">
                          Rewards{" "}
                          <span className="text-xl">{coin.rewards}</span>
                        </p>
                      </div>

                      <div className="flex justify-between items-center mb-2">
                        <p>Staked vs Available</p>
                        <span>59.42% Staked</span>
                      </div>
                      <Progress value={coin.progress} className="h-2" />
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

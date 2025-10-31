import GrowthIcon from "@/assets/icons/grow-outline.svg";
import DAILogo from "@/assets/logo/dai.svg";
import USDCLogo from "@/assets/logo/usdc.svg";
import USDTLogo from "@/assets/logo/usdt.svg";
import { Tabs } from "@/components/Tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Info } from "lucide-react";
import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { useModalStore } from "@/store/useModalStore";

const Stake = () => {
  type TabData = {
    label: string;
    value: string;
  };

  const [amount, setAmount] = useState<number>(0);
  const [receiveAmount, setReceiveAmount] = useState<number>(0);
  const [agree, setAgree] = useState(false);
  const [currentPercent, setCurrentPercent] = useState(0);
  const [currentTab, setCurrentTab] = useState<TabData>({
    label: "6 Months Pool",
    value: "6",
  });

  const coins = [
    {
      label: "USDT",
      value: "usdt",
      icon: USDTLogo,
    },
    {
      label: "USDC",
      value: "usdc",
      icon: USDCLogo,
    },
    {
      label: "DAI",
      value: "dai",
      icon: DAILogo,
    },
  ];

  const [currentCoin, setCurrentCoin] = useState(coins[0]);
  const { openStakeModal } = useModalStore();

  const handlePercent = (percent: number) => {
    setCurrentPercent(percent);
    const num = Number(amount) || 0;
    const computed = Math.round((num * percent) / 100);
    setReceiveAmount(num + computed);
  };

  return (
    <DashboardLayout>
      <div className="h-full">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary-foreground">
          Solvium Staking Pools
        </h2>
        <Tabs
          options={[
            { label: "6 Months Pool", value: "6" },
            { label: "12 Months Pool", value: "12" },
          ]}
          defaultValue={currentTab.value}
          onChange={(val) => setCurrentTab(val)}
          className="my-6"
          itemStyle="text-base md:text-xl"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* ------------Right Card------------- */}
          <Card className="md:col-span-2 rounded-2xl text-white p-4 md:p-6 w-full h-max">
            {currentTab.value === "12" ? (
              <p className="text-primary text-sm md:text-base">
                Early unlocking is possible only after 6 months*.{" "}
                <a href="#" className="underline">
                  Terms & conditions
                </a>
                .
              </p>
            ) : (
              <></>
            )}

            <div className="flex flex-col gap-4">
              {/* --- Balance Card --- */}
              <Card className="bg-gradient-to-r from-[#3B3E44A3] via-[#2C2E33C6] to-[#212227] rounded-4xl md:!p-0">
                <CardContent className="flex flex-row justify-between  items-center gap-4 w-full h-full md:min-h-[200px] md:!p-6">
                  <div className="flex-1 w-full space-y-3">
                    <Label className="text-white text-base md:text-2xl">
                      Balance
                    </Label>
                    <Input
                      type="number"
                      value={amount}
                      onChange={(e) => {
                        if (currentPercent > 0) setCurrentPercent(0);
                        setAmount(Number(e.target.value));
                      }}
                      autoFocus
                      className="bg-transparent !text-lg md:!text-3xl max-w-28 md:max-w-md !p-0 font-bold border-none focus-visible:ring-0 w-full appearance-none"
                    />
                    <div className="flex flex-wrap gap-2">
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
                  </div>

                  <div className="flex flex-col space-y-2 justify-center items-end">
                    <div className="flex flex-wrap justify-start md:justify-end items-center gap-2">
                      {coins?.map((coin, idx) => (
                        <span
                          key={idx}
                          className="bg-card rounded-full p-2"
                          onClick={() => setCurrentCoin(coin)}
                        >
                          <img
                            src={coin.icon}
                            alt={coin.label}
                            className="w-4 h-4 md:w-8 md:h-8 rounded-full"
                          />
                        </span>
                      ))}
                    </div>

                    <Select
                      value={currentCoin?.value}
                      defaultValue={currentCoin?.value}
                      onValueChange={(value) =>
                        setCurrentCoin(
                          coins.find((c) => c.value === value) || coins[0]
                        )
                      }
                    >
                      <SelectTrigger className="min-w-full md:min-w-[160px]">
                        <SelectValue placeholder="Select Coin" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {coins.map((coin) => (
                            <SelectItem key={coin.value} value={coin.value}>
                              <div className="flex items-center gap-2">
                                <img
                                  src={coin.icon}
                                  alt={coin.label}
                                  className="w-5 h-5 rounded-full"
                                />
                                <span>{coin.label}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>

                    {/* <p className="text-sm md:text-base font-bold text-right md:text-end text-gray-300">
                      Balance: 2000
                    </p> */}
                  </div>
                </CardContent>
              </Card>

              {/* --- Stake Card --- */}
              <Card className="bg-gradient-to-r from-[#3B3E44A3] via-[#2C2E33C6] to-[#212227] rounded-4xl md:!p-0">
                <CardContent className="flex flex-row justify-between items-center gap-4 w-full h-full md:min-h-[200px] md:p-6">
                  <div className=" space-y-3">
                    <Label className="text-white text-base md:text-2xl">
                      Stake
                    </Label>
                    <Input
                      value={receiveAmount}
                      // disabled
                      className="bg-transparent !text-lg md:!text-3xl  max-w-md !p-0 font-bold border-none focus-visible:ring-0 w-full"
                    />
                  </div>

                  {/* <div className="space-y-2">
                    <Button className="min-w-full md:min-w-[160px] !bg-card !text-muted-foreground py-6 text-base md:text-lg rounded-xl cursor-default !justify-start border border-border/80 ml-auto">
                      <img
                        src={solUsdtLogo}
                        alt="coin"
                        className="w-4 md:w-6 h-6 rounded-full"
                      />
                      <span className="text-white">solUSDT</span>
                    </Button>
                    <p className="text-sm md:text-base font-bold text-right md:text-end text-gray-300">
                      Balance: 2000
                    </p>
                  </div> */}
                </CardContent>
              </Card>
            </div>
            {/* <p className="text-[#AFAFAF] text-sm md:text-base">
              Stake your chosen stablecoins and receive equivalent amount of
              Solv tokens{" "}
            </p> */}

            {/* Info + Switch */}
            <div className="flex items-center justify-between gap-4">
              <p className="text-white text-sm md:text-base">
                Interest auto-compounds monthly. Funds locked for 6 months.
              </p>
              <Switch />
            </div>

            {/* Stake Button */}
            <Button className="w-full bg-primary hover:bg-green-600 text-[#181818] font-semibold py-6 text-lg md:text-xl rounded-lg">
              Stake Tokens
            </Button>

            {/* Terms */}
            <div className="flex items-center gap-2">
              <Checkbox
                checked={agree}
                onCheckedChange={(val) => setAgree(Boolean(val))}
              />
              <Label className="text-sm md:text-base text-white">
                I agree with{" "}
                <a href="#" className="text-primary underline">
                  terms and conditions
                </a>
                solvium provides.
              </Label>
            </div>
          </Card>
          {/* --------Left Card----------- */}
          <Card className=" md:col-span-1 rounded-2xl text-white w-full">
            <CardContent className="gap-4 space-y-8">
              <div className="space-y-4">
                <div className="lg:flex gap-4 space-y-4 lg:space-y-0">
                  <Card className="flex-[0.4] bg-gradient-to-r from-[#3B3E44A3] via-[#2C2E33C6] to-[#212227] col-span-2 rounded-xl">
                    <CardContent className="">
                      <div className="flex items-center gap-1 mb-4 text-sm md:text-base">
                        <span className="text-lg font-medium">APY</span>
                        <Info className="h-6 w-6 min-w-6 ml-2 text-primary" />
                      </div>
                      <p className="text-lg font-semibold">12.5%</p>
                      <p className="text-base text-[#AFAFAF]">Yield</p>
                    </CardContent>
                  </Card>

                  <Card className="flex-[0.6] bg-gradient-to-r from-[#3B3E44A3] via-[#2C2E33C6] to-[#212227] col-span-1 rounded-xl">
                    <CardContent>
                      <div className="flex items-center gap-1 mb-4 text-sm md:text-base">
                        <span className="text-lg font-medium">Maturity</span>
                        <Info className="h-6 w-6 min-w-6 ml-2 text-primary" />
                      </div>
                      <p className="text-lg font-semibold">21 March ‘26</p>
                      <p className="text-base text-[#AFAFAF]">183 days</p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-gradient-to-r from-[#3B3E44A3] via-[#2C2E33C6] to-[#212227] rounded-xl md:col-span-1">
                  <CardContent>
                    <div className="flex items-center gap-1 mb-4 text-sm md:text-base">
                      <span className="text-lg font-medium">Min. Received</span>
                      <Info className="h-6 w-6 min-w-6 ml-2 text-primary" />
                    </div>
                    <p className="text-lg font-semibold">112,762</p>
                    <p className="text-base text-[#AFAFAF]">DAI</p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm md:text-lg text-white">
                  Compare yield with other Pools
                </p>
                <Button variant={"outline"} onClick={openStakeModal}>
                  Compare
                </Button>
              </div>

              {/* Rewards Info */}
              <Card className="bg-gradient-to-tr from-[#0F1C12] via-[#0D2E1A] to-[#0CA45C] border rounded-xl ">
                <CardContent>
                  <div className="flex items-center space-y-2 gap-2 ">
                    <img
                      src={GrowthIcon}
                      alt="growth-icon"
                      className="md:h-5 w-4 min-w-4 md:w-5 my-auto"
                    />
                    <p className="font-bold md:text-xl text-white">
                      Rewards Information
                    </p>
                  </div>
                  <p className="text-sm md:text-base text-white pt-2">
                    Solvium uses auto-compounding strategies to bring you the
                    highest returns possible,
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Stake;

import { Tabs } from "@/components/Tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Info } from "lucide-react";
import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { useModalStore } from "@/store/useModalStore";
import GrowthIcon from "@/assets/icons/grow-outline.svg";

const Stake = () => {
  const [balance] = useState(7154);
  const [amount, setAmount] = useState("");
  const [agree, setAgree] = useState(false);
  const [currentPercent, setCurrentPercent] = useState(50);
  const { openModal } = useModalStore();

  const handlePercent = (percent: number) => {
    setCurrentPercent(percent);
    // const val = ((balance * percent) / 100).toFixed(0);
    // setAmount(val);
  };

  useEffect(() => {
    setCurrentPercent(currentPercent);
    const val = ((balance * currentPercent) / 100).toFixed(0);
    setAmount(val);
  }, [currentPercent]);

  return (
    <DashboardLayout>
      <div className="h-full">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary-foreground">
          Pool Options
        </h2>
        <Tabs
          options={[
            { label: "6 Months Pool", value: "6" },
            { label: "12 Months Pool", value: "12" },
          ]}
          defaultValue="12"
          onChange={(val) => console.log("Selected:", val)}
          className="my-6"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* ------------Right Card------------- */}
          <Card className="md:col-span-2 rounded-2xl text-white p-4 md:p-6 w-full h-max">
            <p className="text-primary text-sm md:text-base">
              Early stake is possible only after 6 months*.{" "}
              <a href="#" className="underline">
                Terms & conditions
              </a>
              .
            </p>

            <div className="flex flex-col gap-4">
              <Card className="h-full min-h-[10rem] bg-gradient-to-r from-[#3B3E44A3] via-[#2C2E33C6] to-[#212227] border rounded-3xl">
                <CardContent className="flex flex-row justify-between  p-4 w-full">
                  <div className="space-y-4">
                    <Label className="text-white">Balance</Label>
                    <p className="text-3xl font-bold">
                      {balance.toLocaleString()}
                    </p>
                    <div className="flex gap-2">
                      {[
                        { label: "25%", value: 25 },
                        { label: "50%", value: 50 },
                        { label: "Max", value: 100 },
                      ].map(({ label, value }) => (
                        <Button
                          key={value}
                          variant="secondary"
                          className={`${
                            currentPercent === value
                              ? "bg-[#53AE9433]"
                              : "bg-transparent"
                          } text-primary hover:bg-gray-700 rounded-full border`}
                          onClick={() => handlePercent(value)}
                        >
                          {label}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select coin" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usdt">USDT</SelectItem>
                        <SelectItem value="dai">DAI</SelectItem>
                        <SelectItem value="usdc">USDC</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card className="h-full min-h-[10rem] flex-1 bg-gradient-to-r from-[#3B3E44A3] via-[#2C2E33C6] to-[#212227] rounded-3xl p-4">
                <Label className="text-white font-bold">Amount</Label>
                <p className="text-3xl font-bold">{amount}</p>
                {/* <Input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="bg-transparent text-3xl font-bold border-none focus-visible:ring-0 p-0"
                /> */}
              </Card>
            </div>

            {/* Info + Switch */}
            <div className="flex items-center justify-between mt-10">
              <p className="text-white text-sm md:text-base">
                Interest auto-compounds monthly. Funds locked for 6 months.
              </p>
              <Switch />
            </div>

            {/* Stake Button */}
            <Button className="w-full bg-primary hover:bg-green-600 text-black font-semibold py-6 text-lg rounded-xl">
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
                <span>
                  {" "}
                  <a href="#" className="text-primary underline">
                    terms and conditions
                  </a>
                </span>{" "}
                solvium provides
              </Label>
            </div>
          </Card>
          {/* --------Left Card----------- */}
          <Card className=" md:col-span-1 rounded-2xl text-white p-4 md:p-6 w-full">
            <div className="space-y-4">
              <div className="flex gap-4 ">
                <Card className="flex-[0.6] bg-gradient-to-r from-[#3B3E44A3] via-[#2C2E33C6] to-[#212227] col-span-2 rounded-xl p-4">
                  <div className="flex items-center gap-1 text-sm md:text-base text-white">
                    <span>APY</span>
                    <Info className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-2xl font-bold ">12.5%</p>
                  <p className="text-xs text-white">Returns</p>
                </Card>

                <Card className="flex-[0.4] bg-gradient-to-r from-[#3B3E44A3] via-[#2C2E33C6] to-[#212227] col-span-1 rounded-xl p-4">
                  <div className="flex items-center gap-1 text-sm md:text-base text-white">
                    <span>Maturity</span>
                    <Info className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-xl font-bold ">21 March ‘26</p>
                  <p className="text-xs text-white">183 days</p>
                </Card>
              </div>

              <Card className="bg-gradient-to-r from-[#3B3E44A3] via-[#2C2E33C6] to-[#212227] rounded-xl p-4 md:col-span-1">
                <div className="flex items-center gap-1 text-sm md:text-base text-white">
                  <span>Min. Received</span>
                  <Info className="h-4 w-4 text-primary" />
                </div>
                <p className="text-2xl font-bold ">12,762</p>
                <p className="text-xs text-white">DAI</p>
              </Card>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm md:text-base text-white">
                Compare with 12 Months Pool
              </p>
              <Button variant={"outline"} onClick={openModal}>
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
                    className="h-5 w-5 my-auto"
                  />
                  <p className="font-bold text-xl text-white">
                    Rewards Information
                  </p>
                </div>
                <p className="text-sm md:text-base text-white pt-2">
                  Solvium uses auto-compounding strategies to bring you the
                  highest returns possible,
                </p>
              </CardContent>
            </Card>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Stake;

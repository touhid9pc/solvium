import type { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../DataTable";
import ReusablePieChart from "../StableCoinPieChart";
import StatCard from "../StatCard";
import { Card } from "../ui/card";

const PersonalAnalytics = () => {
  const stats = [
    {
      title: "Total Interest Earned",
      value: "$7382",
    },
    {
      title: "Average APY",
      value: "7.5%",
    },
    {
      title: "Referrals",
      value: "4",
    },
    {
      title: "Total Staked",
      value: "$7382",
    },
  ];

  type Transaction = {
    address: string;
    date: string;
    coin: string;
    pool: string;
    amount: number;
    status: "Staked" | "Unstaked";
    earned?: string;
  };

  const columns: ColumnDef<Transaction>[] = [
    { accessorKey: "address", header: "Address" },
    { accessorKey: "date", header: "Transaction date" },
    { accessorKey: "coin", header: "Stable Coin" },
    { accessorKey: "pool", header: "Pool" },
    { accessorKey: "amount", header: "Stake Amount" },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <span
          className={`p-2 rounded-full text-xs ${
            row.getValue("status") === "Staked"
              ? "bg-primary/20 text-primary"
              : "bg-yellow-600/20 text-yellow-600"
          }`}
        >
          {row.getValue("status")}
        </span>
      ),
    },
    { accessorKey: "earned", header: "Earned" },
  ];

  const data: Transaction[] = [
    {
      address: "0x440Co...76D1",
      date: "15-01-2025",
      coin: "USDC",
      pool: "6 Months",
      amount: 12421,
      status: "Staked",
      earned: "$162.8",
    },
    {
      address: "0x440Co...76D1",
      date: "15-01-2025",
      coin: "USDT",
      pool: "12 Months",
      amount: 12421,
      status: "Unstaked",
      earned: "-",
    },
  ];

  return (
    <>
      <Card className="p-6 space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </div>

        <ReusablePieChart
          title="APY Trends"
          data={[
            { name: "6 Months", value: 71931, percentage: 50 },
            { name: "12 Month", value: 87134, percentage: 27 },
            { name: "Unstake", value: 1882, percentage: 23 },
          ]}
          showPercentages={false}
          legendFormatter={(entry, index) => (
            <span>
              {entry.name}:{" "}
              <span
                className={
                  index === 0
                    ? "text-blue-400"
                    : index === 1
                    ? "text-green-400"
                    : "text-orange-400"
                }
              >
                ${entry.value.toLocaleString()}
              </span>
            </span>
          )}
        />
      </Card>
      <DataTable columns={columns} data={data} className="mt-4" />
    </>
  );
};

export default PersonalAnalytics;

import { DataTable } from "@/components/DataTable";
import PoolLineChart from "@/components/PoolLineChart";
import StatCard from "@/components/StatCard";
import { Card } from "@/components/ui/card";
import { shortenAddress } from "@/lib/utils";
import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUp } from "lucide-react";

export const PlatformAnalytics = () => {
  const stats = [
    {
      title: "Total TVL",
      value: "$25.7 M",
      statusIcon: <ArrowUp className="text-primary" />,
      statusDesc: "12.5% vs last month",
      status: "up",
    },
    {
      title: "6 Months pool",
      value: "7.5%",
      statusIcon: <ArrowUp className="text-primary" />,
      statusDesc: "6.8% vs last month",
      status: "up",
    },
    {
      title: "12 Months pool",
      value: "15.2%",
      statusIcon: <ArrowUp className="text-primary" />,
      statusDesc: "8.2% vs last month",
      status: "up",
    },
    {
      title: "Utilization",
      value: "78%",
      statusIcon: <ArrowUp className="text-destructive" />,
      statusDesc: "7.2% vs last month",
      status: "down",
    },
  ];

  const apyData = [
    { month: "Jan", sixMonth: 55, twelveMonth: 95 },
    { month: "Feb", sixMonth: 63, twelveMonth: 145 },
    { month: "Mar", sixMonth: 72, twelveMonth: 90 },
    { month: "Apr", sixMonth: 75, twelveMonth: 95 },
    { month: "May", sixMonth: 68, twelveMonth: 130 },
    { month: "Jun", sixMonth: 35, twelveMonth: 55 },
  ];

  const tvlData = [
    { month: "Jan", tvl: 55 },
    { month: "Feb", tvl: 63 },
    { month: "Mar", tvl: 72 },
    { month: "Apr", tvl: 75 },
    { month: "May", tvl: 68 },
    { month: "Jun", tvl: 35 },
  ];

  type Position = {
    address: string;
    amount: number;
    position: string;
  };

  const positionColumns: ColumnDef<Position>[] = [
    {
      accessorKey: "address",
      header: "Address",
      cell: ({ row }) => <span>{shortenAddress(row.getValue("address"))}</span>,
    },
    { accessorKey: "amount", header: "Staked Amount" },
    { accessorKey: "position", header: "Position" },
  ];

  const positionData: Position[] = [
    { address: "0x440CHBOUBNUJVOLNT976D1", amount: 12421, position: "12th" },
  ];

  type Holder = {
    address: string;
    amount: number;
    rank: string;
  };

  const holderColumns: ColumnDef<Holder>[] = [
    { accessorKey: "address", header: "Address" },
    { accessorKey: "amount", header: "Amount" },
    { accessorKey: "rank", header: "Rank" },
  ];

  const holderData: Holder[] = [
    { address: "0x440Co...76D1", amount: 12421, rank: "1st" },
    { address: "0x440Co...76D1", amount: 12421, rank: "2nd" },
    { address: "0x440Co...76D1", amount: 12421, rank: "3rd" },
    { address: "0x440Co...76D1", amount: 12421, rank: "4th" },
  ];
  return (
    <>
      <Card className="p-6 space-y-6">
        <div className="flex flex-wrap justify-between items-center gap-4">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center">
          <PoolLineChart
            title="APY Trends"
            data={apyData}
            datasets={[
              { key: "sixMonth", label: "6 month pool", color: "#3b82f6" },
              {
                key: "twelveMonth",
                label: "12 month pool",
                color: "#10b981",
              },
            ]}
          />
          <PoolLineChart
            title="Total Value Locked"
            data={tvlData}
            datasets={[
              { key: "tvl", label: "Total Value Locked", color: "#3b82f6" },
            ]}
          />
        </div>
      </Card>
      <DataTable
        columns={positionColumns}
        data={positionData}
        className="mt-4"
        title="Your Position"
      />
      <DataTable
        columns={holderColumns}
        data={holderData}
        className="mt-4"
        title="Top Holders"
      />
    </>
  );
};

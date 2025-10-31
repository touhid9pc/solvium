import { Card, CardContent } from "@/components/ui/card";
import DashboardLayout from "../../layouts/DashboardLayout";
import ConnectWallet from "@/components/ConnectWallet";
import { DataTable } from "@/components/DataTable";
import type { ColumnDef } from "@tanstack/react-table";
import StakeCard from "@/components/StakeCard";

const Rewards = () => {
  type Stake = {
    term: string;
    amount: number;
    startDate: string;
    maturity: string;
    apy: number;
    obtainedInterest: number;
    unstakedDate: string;
  };

  const stakeColumns: ColumnDef<Stake>[] = [
    {
      accessorKey: "term",
      header: "Term",
    },
    {
      accessorKey: "amount",
      header: "Amount",
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("amount"));
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount);

        return <div className="font-medium">{formatted}</div>;
      },
    },
    {
      accessorKey: "startDate",
      header: "Start Date",
    },
    {
      accessorKey: "maturity",
      header: "Maturity",
    },
    {
      accessorKey: "apy",
      header: "APY",
      cell: ({ row }) => {
        const apy = parseFloat(row.getValue("apy"));
        return <div className="font-medium">{`${apy}%`}</div>;
      },
    },
    {
      accessorKey: "obtainedInterest",
      header: "Obtained Interest",
      cell: ({ row }) => {
        const interest = parseFloat(row.getValue("obtainedInterest"));
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(interest);

        return <div className="font-medium">{formatted}</div>;
      },
    },
    {
      accessorKey: "unstakedDate",
      header: "Unstaked Date",
    },
  ];

  const stakeData: Stake[] = [
    {
      term: "6 Months",
      amount: 10000,
      startDate: "15-01-2025",
      maturity: "15-01-2026",
      apy: 7.5,
      obtainedInterest: 162.8,
      unstakedDate: "15-01-2026",
    },
    {
      term: "12 Months",
      amount: 10000,
      startDate: "15-01-2025",
      maturity: "15-01-2026",
      apy: 7.5,
      obtainedInterest: 162.8,
      unstakedDate: "15-01-2026",
    },
  ];

  const handleClaimAndUnstake = () => {
    // Logic for "Claim & Unstake" action
    console.log("Claiming and unstaking 6-month stake...");
  };

  const handleEarlyUnstake = () => {
    // Logic for "Early Unstake" action
    console.log("Initiating early unstake for 12-month stake...");
  };

  return (
    <DashboardLayout>
      <Card className="">
        <CardContent>
          {false ? (
            <ConnectWallet />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
              {/* 6 Months Card */}
              <StakeCard
                term="6 Months"
                status="Active"
                amount={5000}
                startDate="15-01-2025"
                maturity="15-07-2025"
                apy={7.5}
                accruedInterest={219.98}
                buttonText="Unlock & Claim"
                onButtonClick={handleClaimAndUnstake}
              />

              {/* 12 Months Card */}
              <StakeCard
                term="12Months"
                status="Matured"
                amount={5000}
                startDate="15-01-2025"
                maturity="15-01-2026"
                apy={7.5}
                accruedInterest={219.98}
                buttonText="Early Unstake"
                note="Early stake is possible only after 6 months*. Terms & conditions."
                onButtonClick={handleEarlyUnstake}
              />
            </div>
          )}
          <DataTable
            columns={stakeColumns}
            data={stakeData}
            className=""
            title="Stake History"
            isBordered={false}
          />
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default Rewards;

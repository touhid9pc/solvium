import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import ReferralCodeCard from "@/components/ReferralCodeCard";
import ReferralLinkCard from "@/components/ReferralLinkCard";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import StatItem from "@/components/StatItem";
import { Button } from "@/components/ui/button";
import { Gift, Upload, User } from "lucide-react";
import { DataTable } from "@/components/DataTable";
import type { ColumnDef } from "@tanstack/react-table";
import StepItem from "@/components/StepItem";

const Referral = () => {
  const handleClaimReward = () => {
    // Logic to claim rewards
    console.log("Claiming rewards...");
  };

  type ReferralDataProps = {
    address: string;
    joinDate: string;
    status: "Active" | "Inactive";
    earned: string;
  };

  const columns: ColumnDef<ReferralDataProps>[] = [
    { accessorKey: "address", header: "Address" },
    { accessorKey: "joinDate", header: "Join Date" },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <span
          className={`p-2 rounded-full text-xs ${
            row.getValue("status") === "Active"
              ? "bg-primary/20 text-primary"
              : "bg-destructive/20 text-destructive"
          }`}
        >
          {row.getValue("status")}
        </span>
      ),
    },
    { accessorKey: "earned", header: "Earned" },
  ];

  const referralData: ReferralDataProps[] = [
    {
      address: "0x44HBiybd976D1a74",
      joinDate: "15-01-2025",
      status: "Active",
      earned: "$162.8",
    },
    {
      address: "0x440Coajg78t776D1a12",
      joinDate: "15-01-2025",
      status: "Inactive",
      earned: "$162.8",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="lg:grid grid-cols-3 gap-4 space-y-4 lg:space-y-4">
          <div className="col-span-2 space-y-4">
            <ReferralLinkCard />
            <ReferralCodeCard />
          </div>

          {/* -------------------Referral Stats--------------------- */}
          <Card className="col-span-1 relative">
            <CardContent className="space-y-8 md:space-y-20">
              {/* Stats Grid */}
              <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                <StatItem label="Total Referrals" value="12" />
                <StatItem label="Active Referrals" value="8" />
                <StatItem label="Total Earned" value="$1392" />
                <StatItem
                  label="Pending Reward"
                  value="$1392"
                  valueStyle={"!text-primary"}
                />
              </div>
              {/* Claim Reward Button */}
              <div className="col-span-2 md:col-span-1 mt-auto">
                <Button
                  onClick={handleClaimReward}
                  className="w-full h-12 bg-green-600 hover:bg-green-700 text-white font-semibold flex items-center justify-center gap-2"
                >
                  <Gift className="h-6 w-6" />
                  Claim Reward
                  <span className="ml-auto">$1392</span>
                </Button>
              </div>
            </CardContent>
          </Card>
          {/* -------------------Referral Stats--------------------- */}
        </div>

        <DataTable
          columns={columns}
          data={referralData}
          title="Your Referral Link"
        />
        <Card className="">
          <CardTitle className="text-white text-xl md:text-2xl mb-6 px-6">
            How Referral Works
          </CardTitle>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <StepItem
                icon={<Upload className="h-8 w-8 text-white" />}
                title="Stake a Minimum of $1,000"
                description="Get started by staking at least $1,000 on Solvium’s secure platform."
              />
              <StepItem
                icon={<User className="h-8 w-8 text-white" />}
                title="Refer a Friend"
                description="Share your unique referral link with friends, family, or your network."
              />
              <StepItem
                icon={<Gift className="h-8 w-8 text-white" />}
                title="Earn 1.5% Stablecoin"
                description="When your friend stakes $1,000 or more, both of you receive 1.5% in stablecoin returns."
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Referral;

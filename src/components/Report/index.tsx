import React from "react";
import { Card, CardContent } from "../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";

const Report = () => {
  const reportTypes = [
    { value: "transaction", label: "Transaction History" },
    { value: "trade", label: "Trade History" },
    { value: "balance", label: "Balance Report" },
  ];

  const dateRanges = [
    { value: "7days", label: "Last 7 days" },
    { value: "30days", label: "Last 30 days" },
    { value: "3months", label: "Last 3 months" },
    { value: "1year", label: "Last 1 year" },
  ];

  const formats = [
    { value: "csv", label: "CSV" },
    { value: "pdf", label: "PDF" },
    { value: "xlsx", label: "XLSX" },
  ];

  return (
    <Card className="">
      <CardContent className="p-6 h-[50dvh] max-h-max">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Report Type */}
          <div>
            <label className="block text-white mb-2 text-lg font-semibold">
              Report Type
            </label>
            <Select defaultValue="transaction">
              <SelectTrigger className="w-full !py-6 bg-[#272729] font-semibold">
                <SelectValue placeholder="Select report" />
              </SelectTrigger>
              <SelectContent className="bg-[#222] text-white">
                {reportTypes.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Date Range */}
          <div>
            <label className="block text-white mb-2 text-lg font-semibold">
              Data Range
            </label>
            <Select defaultValue="30days">
              <SelectTrigger className="w-full !py-6 bg-[#272729]">
                <SelectValue placeholder="Select range" />
              </SelectTrigger>
              <SelectContent className="bg-[#222] text-white border border-neutral-700">
                {dateRanges.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Format */}
          <div>
            <label className="block text-white mb-2 text-lg font-semibold">
              Format
            </label>
            <Select defaultValue="csv">
              <SelectTrigger className="w-full !py-6 bg-[#272729]">
                <SelectValue placeholder="Select format" />
              </SelectTrigger>
              <SelectContent className="bg-[#222] text-white border border-neutral-700">
                {formats.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Download Button */}
        <div className="flex justify-center mt-8">
          <Button className="lg:w-[20%] px-10 py-3 text-lg font-medium">
            Download Report
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Report;

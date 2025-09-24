import React from "react";
import { Card, CardContent } from "../ui/card";

interface StatProps {
  label: string;
  value: string;
  className?: string;
  valueStyle?: string;
}

const StatItem = ({ label, value, className, valueStyle }: StatProps) => {
  return (
    <Card className={`${className} bg-[#202022]`}>
      <CardContent className="space-y-2">
        <p className="text-sm md:text-xl text-white">{label}</p>
        <p className={`text-white font-bold text-xl md:text-2xl ${valueStyle}`}>
          {value}
        </p>
      </CardContent>
    </Card>
  );
};

export default StatItem;

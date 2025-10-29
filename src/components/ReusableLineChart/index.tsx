"use client";

import { cn } from "@/lib/utils";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface ReusableLineChartProps {
  data: Record<string, any>[];
  xKey: string;
  yKey: string;
  className?: string;
  color?: string;
}

export function ReusableLineChart({
  data,
  xKey,
  yKey,
  className,
  color = "#22c55e",
}: ReusableLineChartProps) {
  const gradientId = `gradient-${yKey}`;

  return (
    <div className={cn("w-full select-none", className)}>
      <div className="w-full h-[300px] sm:h-[400px] md:h-[450px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.5} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey={xKey} stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{ backgroundColor: "#1f1f1f", border: "none" }}
              labelStyle={{ color: "#fff" }}
            />
            <Area
              type="natural"
              dataKey={yKey}
              stroke={color}
              strokeWidth={2.5}
              fillOpacity={1}
              fill={`url(#${gradientId})`}
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 text-center text-gray-400">6 Month Pool APY</div>
    </div>
  );
}

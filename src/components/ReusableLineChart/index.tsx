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
import { useEffect, useState } from "react";

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

  const [fontSize, setFontSize] = useState(12);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) setFontSize(12); // mobile
      else if (width < 768) setFontSize(14); // tablet
      else if (width < 1024) setFontSize(16); // small desktop
      else if (width < 1440) setFontSize(18); // large desktop
      else setFontSize(20); // big screens
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

            <XAxis
              dataKey={xKey}
              stroke="#9ca3af"
              tick={{ fontSize, fill: "#9ca3af" }}
            />
            <YAxis stroke="#9ca3af" tick={{ fontSize, fill: "#9ca3af" }} />

            <Tooltip
              contentStyle={{
                backgroundColor: "#1f1f1f",
                border: "none",
                borderRadius: "8px",
                fontSize,
              }}
              labelStyle={{ color: "#fff", fontSize }}
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

      <div
        className="mt-4 text-center text-muted-foreground"
        style={{ fontSize: fontSize * 1.1 }}
      >
        6 Month Pool APY
      </div>
    </div>
  );
}

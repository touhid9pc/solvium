"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface DatasetConfig {
  key: string;
  label: string;
  color: string;
}

interface PoolLineChartProps {
  title: string;
  data: Record<string, any>[];
  datasets: DatasetConfig[];
  className?: string;
}

export default function PoolLineChart({
  title,
  data,
  datasets,
  className,
}: PoolLineChartProps) {
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
    <div
      className={cn(
        "w-full h-[20rem] md:h-[28rem] p-4 py-10 rounded-xl select-none ",
        className
      )}
    >
      <h2
        className="text-white font-bold mb-4 text-center md:text-left"
        style={{ fontSize: fontSize * 1.3 }}
      >
        {title}
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />

          <XAxis
            dataKey="month"
            stroke="#888"
            tick={{ fontSize, fill: "#9ca3af" }}
          />
          <YAxis stroke="#888" tick={{ fontSize, fill: "#9ca3af" }} />

          <Tooltip
            contentStyle={{
              backgroundColor: "#1f1f1f",
              border: "none",
              borderRadius: "8px",
              fontSize,
            }}
            labelStyle={{ color: "#fff", fontSize }}
          />

          <Legend
            wrapperStyle={{
              color: "#fff",
              fontSize,
              paddingTop: "10px",
            }}
          />

          {datasets.map((ds, i) => (
            <Line
              key={i}
              type="linear"
              dataKey={ds.key}
              stroke={ds.color}
              strokeWidth={2}
              dot={{
                r: 6,
                fill: "#1a1a1a",
                stroke: ds.color,
                strokeWidth: 2,
              }}
              activeDot={{ r: 8 }}
              name={ds.label}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

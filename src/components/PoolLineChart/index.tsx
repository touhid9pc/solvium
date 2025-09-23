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
  return (
    <div
      className={cn(
        "w-full h-[20rem] md:h-[28rem] p-4  py-10 rounded-xl",
        className
      )}
    >
      <h2 className="text-white text-xl font-bold mb-4">{title}</h2>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="month" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip
            contentStyle={{ backgroundColor: "#1f1f1f", border: "none" }}
            labelStyle={{ color: "#fff" }}
          />
          <Legend wrapperStyle={{ color: "#fff" }} />

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

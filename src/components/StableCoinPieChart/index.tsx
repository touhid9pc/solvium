import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface ChartData {
  name: string;
  value: number;
  percentage: number;
}

interface StablecoinPieChartProps {
  data: { name: string; value: number; percentage: number }[];
  colors?: string[];
  showPercentages?: boolean;
  showLegend?: boolean;
  legendFormatter?: (entry: ChartData, index: number) => React.ReactNode;
  showRadial?: boolean;
  showDashedLines?: boolean;
  title?: string;
}

export default function StablecoinPieChart({
  data,
  colors = ["#6577FF", "#57B79D", "#F4A261"],
  showPercentages = false,
  showLegend = true,
  showRadial = false,
  showDashedLines = false,
  legendFormatter,
  title,
}: StablecoinPieChartProps) {
  return (
    <>
      {title && (
        <h2 className="text-white text-xl font-bold mb-4 float-left">
          {title}
        </h2>
      )}
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-[28rem] h-[28rem] md:w-[20rem] md:h-[20rem] flex justify-center items-center">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                innerRadius={120}
                outerRadius={150}
                dataKey="percentage"
                stroke="none"
              >
                {data.map((_key, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* -----------------------------Center radial gradient------------------------------- */}
          {showRadial && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-40 h-40 md:w-36 md:h-36 rounded-full bg-[radial-gradient(circle,_rgba(16,185,129,0.8)_0%,_transparent_70%)]" />
            </div>
          )}
          {/* -----------------------------Center radial gradient------------------------------- */}

          {/* ----------------------------Dashed rings------------------------------- */}
          {showDashedLines && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-40 h-40 md:w-44 md:h-44 rounded-full border border-dashed border-gray-600" />
              <div className="absolute w-16 h-16 md:w-28 md:h-28 rounded-full border border-dashed border-gray-700" />
            </div>
          )}
          {/* ----------------------------Dashed rings------------------------------- */}

          {/* -------------------------percentage labels inside the donut----------------------------------- */}
          {showPercentages && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-sm md:text-base">
              <div className="absolute top-[30%] md:top-[20%] right-1/2 text-white font-semibold">
                {data[0].value}%
              </div>
              <div className="absolute bottom-[30%] md:bottom-[20%] left-[40%] text-white font-semibold">
                {data[1].value}%
              </div>
              <div className="absolute bottom-1/3 right-1/3 md:right-[20%] text-white font-semibold">
                {data[2].value}%
              </div>
            </div>
          )}
          {/* -------------------------percentage labels inside the donut----------------------------------- */}
        </div>

        {/* -----------------------Legend--percentage--------------------- */}
        {/* Legend */}
        {showLegend && (
          <div className="flex flex-wrap justify-center gap-6 mt-4 text-sm md:text-base">
            {data.map((entry, index) => (
              <div key={index} className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full md:w-4 md:h-4"
                  style={{ backgroundColor: colors[index % colors.length] }}
                ></span>
                <span className="text-white">
                  {legendFormatter
                    ? legendFormatter(entry, index)
                    : `${entry.name}: ${entry.value}`}
                </span>
              </div>
            ))}
          </div>
        )}
        {/* -----------------------Legend----------------------- */}
      </div>
    </>
  );
}

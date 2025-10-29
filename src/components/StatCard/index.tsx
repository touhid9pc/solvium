import type { ReactNode } from "react";
import { Card, CardContent } from "../ui/card";

type StatCardProps = {
  icon?: ReactNode;
  title: string;
  value: string;
  statusIcon?: ReactNode;
  status?: string;
  statusDesc?: string;
  iconWrapperStyle?: string;
};

const StatCard = ({
  icon,
  title,
  value,
  status,
  statusIcon,
  statusDesc,
  iconWrapperStyle,
}: StatCardProps) => {
  return (
    <Card className="rounded-2xl bg-[#202022] flex-1 min-w-[150px] sm:min-w-[180px] md:min-w-[200px] transition-all duration-200 ">
      <CardContent className="flex flex-col justify-between h-full items-start gap-4 ">
        {/* Header */}
        <div className="flex items-center gap-3 w-full">
          {icon && (
            <span
              className={`${iconWrapperStyle} p-2 bg-accent  rounded-full flex-shrink-0 text-white text-lg md:text-xl`}
            >
              {icon}
            </span>
          )}
          <span
            className="text-sm sm:text-base md:text-lg  font-medium text-white"
            title={title}
          >
            {title}
          </span>
        </div>

        {/* Value */}
        <div
          className="text-lg sm:text-xl md:text-2xl font-bold text-white"
          title={value}
        >
          {value}
        </div>

        {/* Status */}
        {status && (
          <p className="flex items-center gap-2 text-sm sm:text-base">
            {statusIcon}
            <span
              className={`font-semibold ${
                status === "up" ? "text-primary" : "text-destructive"
              }`}
            >
              {statusDesc}
            </span>
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default StatCard;

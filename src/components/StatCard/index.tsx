import type { ReactNode } from "react";
import { Card, CardContent } from "../ui/card";

type StatCardProps = {
  icon?: React.ReactNode;
  title: string;
  value: string;
  statusIcon?: ReactNode;
  status?: string;
  statusDesc?: string;
};

const StatCard = ({
  icon,
  title,
  value,
  status,
  statusIcon,
  statusDesc,
}: StatCardProps) => {
  return (
    <Card className="rounded-xl bg-[#202022] flex-1 py-0 min-w-[8rem] min-h-48 h-44">
      <CardContent className="flex flex-col justify-center h-full items-start gap-6 p-4">
        <div className="flex items-center gap-4 w-full overflow-hidden">
          {icon && (
            <span className="p-2 bg-accent rounded-full shrink-0">{icon}</span>
          )}
          <span
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white truncate w-full"
            title={title}
          >
            {title}
          </span>
        </div>
        <div
          className="text-base sm:text-2xl md:text-2xl lg:text-3xl font-bold text-white break-words w-full"
          title={value}
        >
          {value}
        </div>

        {status && (
          <p className="flex items-center gap-2">
            {statusIcon}{" "}
            <span
              className={`font-bold ${
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

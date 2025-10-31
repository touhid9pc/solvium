import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface StakeCardProps {
  term: string;
  status: "Active" | "Matured";
  amount: number;
  startDate: string;
  maturity: string;
  apy: number;
  accruedInterest: number;
  buttonText: string;
  note?: string;
  className?: string;
  onButtonClick: () => void;
}

const statusVariants = {
  Active: "bg-primary/20 text-primary",
  Matured: "bg-yellow-600/20 text-yellow-600",
};
const StakeCard = ({
  term,
  status,
  amount,
  startDate,
  maturity,
  apy,
  accruedInterest,
  buttonText,
  note,
  className,
  onButtonClick,
}: StakeCardProps) => {
  return (
    <Card className={cn("p-6 w-full h-full bg-[#202022]", className)}>
      <CardContent className="p-0">
        <div className="flex justify-between items-center mb-4">
          <div className="">
            <h2 className="text-xl font-semibold text-white">{term}</h2>
            <Badge
              className={cn(
                " text-xs font-medium text-white",
                statusVariants[status]
              )}
            >
              {status}
            </Badge>
          </div>
          <div className="flex items-center">
            <span className="text-xl font-bold text-white">
              ${amount.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-y-4 mb-6">
          <div className="text-base text-neutral-400">
            <p className="text-sm">Start date</p>
            <p className="text-white mt-1">{startDate}</p>
          </div>
          <div className="text-base text-neutral-400 text-right">
            <p className="text-sm">Maturity</p>
            <p className="text-white mt-1">{maturity}</p>
          </div>
          <div className="text-base text-neutral-400">
            <p className="text-sm">APY</p>
            <p className="text-white mt-1">{apy}%</p>
          </div>
          <div className="text-base text-neutral-400 text-right">
            <p className="text-sm">Yield Generated</p>
            <p className="text-white mt-1">${accruedInterest.toFixed(2)}</p>
          </div>
        </div>

        <Button
          onClick={onButtonClick}
          className={cn("w-full h-12 text-base")}
          variant={status === "Active" ? "default" : "secondary"}
        >
          {buttonText}
        </Button>
        {note && <p className="mt-2 text-sm text-primary">{note}</p>}
      </CardContent>
    </Card>
  );
};

export default StakeCard;

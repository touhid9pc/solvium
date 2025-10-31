import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const InfoToolTip = ({ tooltipText }: { tooltipText: string }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        {/* The icon is styled to match the green in the image */}
        <Info className="h-4 w-4 text-green-400 cursor-help" />
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltipText}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export default InfoToolTip;

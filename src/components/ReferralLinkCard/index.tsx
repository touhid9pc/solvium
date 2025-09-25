import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Copy } from "lucide-react";

const ReferralLinkCard = () => {
  //   const { toast } = useToast();
  const referralLink = "SOLV-ABC123";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    // toast({
    //   description: "Referral link copied to clipboard!",
    // });
  };

  return (
    <Card className="">
      <CardHeader className="">
        <CardTitle className="text-white text-base md:text-xl">
          Your Referral Link
        </CardTitle>
      </CardHeader>
      <CardContent className="">
        <div className="relative mb-4">
          <Input
            value={referralLink}
            readOnly
            className="w-full pl-3 pr-10 py-4 text-sm md:text-base bg-neutral-800 text-white border-none focus:outline-none"
          />
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-full w-10 text-neutral-400 hover:bg-neutral-700"
            onClick={handleCopy}
          >
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        <Button className="w-full bg-green-600 hover:bg-green-700 h-10 text-white font-semibold">
          Share link
        </Button>
      </CardContent>
    </Card>
  );
};

export default ReferralLinkCard;

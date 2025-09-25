import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const ReferralCodeCard = () => {
  const [code, setCode] = useState("");
  //   const { toast } = useToast();

  const handleApply = () => {
    // toast({
    //   description: `Code ${code} applied.`,
    // });
  };

  return (
    <Card className="">
      <CardHeader className="">
        <CardTitle className="text-white text-base md:text-xl">
          Referral Code
        </CardTitle>
      </CardHeader>
      <CardContent className="">
        <Input
          placeholder="Enter Referral code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="mb-4 text-sm md:text-base bg-neutral-800 text-white border-none focus:outline-none"
        />
        <Button
          onClick={handleApply}
          className="w-full bg-green-600 hover:bg-green-700 h-10 text-white font-semibold"
        >
          Apply Code
        </Button>
      </CardContent>
    </Card>
  );
};

export default ReferralCodeCard;

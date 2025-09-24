import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import WalletProfile from "@/components/WalletProfile";
import { MoveLeft } from "lucide-react";

const DocumentNavBar = () => {
  return (
    <div className="z-1 flex justify-between">
      {/** Title and Description */}
      <Header title="Hello there" />
      <div className="hidden md:flex justify-center items-center gap-4">
        <Button>Start staking</Button>
        <Button variant={"outline"}>
          <MoveLeft /> Back
        </Button>
      </div>
    </div>
  );
};

export default DocumentNavBar;

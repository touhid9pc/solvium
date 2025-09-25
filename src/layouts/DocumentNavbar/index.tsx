import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";

const DocumentNavBar = () => {
  const currentPath = window.location.pathname;

  const renderHeader = () => {
    switch (currentPath) {
      case "/documents/about":
        return "Hello there";
      case "/documents/glossary":
        return "Glossary";
      case "/documents/ecosystem":
        return "An overview of Solvium’s Ecosystem";
      case "/documents/cdm":
        return "Capital Deployment Mode";
      case "/documents/privacy":
        return "Privacy";
      case "/documents/terms":
        return "Terms & Conditions";
      default:
        return "Hello there";
    }
  };

  return (
    <div className="z-1 flex justify-between">
      {/** Title and Description */}
      <Header title={renderHeader()} />
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

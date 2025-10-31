import Faq from "@/components/Faq";
import DashboardLayout from "../../layouts/DashboardLayout";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Support = () => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6 space-y-6 lg:space-y-0">
        <Faq className="col-span-2" />
        {/* <ContactForm className="col-span-1" /> */}
        <Card className="bg-card text-card-foreground  mx-auto p-6 rounded-2xl col-span-1 h-max">
          <CardHeader className="p-0">
            <CardTitle className="text-xl md:text-2xl font-semibold text-[#FCFCFC]">
              Need Priority Support?
            </CardTitle>
          </CardHeader>

          <CardContent className="p-0">
            <p className="text-base text-[#FCFCFC] leading-relaxed ">
              We are providing full support in Telegram. Click the button below,
              and we will respond within 24 hours on working days.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center items-center flex-col space-y-4 mt-4">
            <Button
              variant="default"
              className="w-full bg-[#00C853] hover:bg-[#00B84A] font-medium py-2 text-sm sm:text-base md:text-lg"
            >
              Telegram
            </Button>

            <p className="text-xs md:text-sm text-[#FCFCFC] text-center">
              We typically respond within 24 hours.
            </p>
          </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Support;

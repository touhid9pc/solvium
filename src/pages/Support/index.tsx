import DashboardLayout from "../../layouts/DashboardLayout";
import Faq from "@/components/Faq";
import { ContactForm } from "@/components/ContactForm";

const Support = () => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6 space-y-6 lg:space-y-0">
        <Faq className="col-span-2" />
        <ContactForm className="col-span-1" />
      </div>
    </DashboardLayout>
  );
};

export default Support;

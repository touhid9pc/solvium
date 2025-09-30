import DashboardLayout from "../../layouts/DashboardLayout";
import Faq from "@/components/Faq";
import { ContactForm } from "@/components/ContactForm";

const Support = () => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Faq className="col-span-2" />
        <ContactForm className="col-span-1" />
      </div>
    </DashboardLayout>
  );
};

export default Support;

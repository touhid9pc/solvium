import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Stake from "@/pages/Stake";
import Analytics from "@/pages/Analytics";
import Swap from "@/pages/Swap";
import Rewards from "@/pages/Rewards";
import Referral from "@/pages/Referral";
import Support from "@/pages/Support";

import About from "@/pages/About";
import Glossary from "@/pages/Glossary";
import Ecosystem from "@/pages/Ecosystem";
import CDM from "@/pages/CDM";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import NotFound from "@/pages/NotFound";
import { Toaster, toast } from "sonner";
import { useEffect, useRef } from "react";

const Router = () => {
  const shownRef = useRef(false);

  useEffect(() => {
    if (!shownRef.current) {
      toast.info(
        "All data displayed in this application is demo-only and does not represent actual data."
      );
      shownRef.current = true;
    }
  }, []);

  return (
    <>
      <Routes>
        {/* ------------------Dashboard Layout------------------ */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/stake" element={<Stake />} />
        <Route path="/swap" element={<Swap />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/referral" element={<Referral />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/support" element={<Support />} />

        {/* --------------404------------- */}
        <Route path="*" element={<NotFound />} />

        {/* --------------Documents Layout------------------- */}
        <Route path="/documents/about" element={<About />} />
        <Route path="/documents/glossary" element={<Glossary />} />
        <Route path="/documents/ecosystem" element={<Ecosystem />} />
        <Route path="/documents/cdm" element={<CDM />} />
        <Route path="/documents/privacy" element={<Privacy />} />
        <Route path="/documents/terms" element={<Terms />} />
        <Route path="support" element={<Support />} />
      </Routes>

      <Toaster duration={3000} position="top-center" />
    </>
  );
};

export default Router;

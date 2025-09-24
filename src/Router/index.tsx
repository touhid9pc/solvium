import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Stake from "@/pages/Stake";
import Analytics from "@/pages/Analytics";
import Swap from "@/pages/Swap";
import Rewards from "@/pages/Rewards";
import Referral from "@/pages/Referral";
import Support from "@/pages/Support";

import DocumentLayout from "@/layouts/DocumentLayout";
import About from "@/pages/About";
import Glossary from "@/pages/Glossary";
import Ecosystem from "@/pages/Ecosystem";
import CDM from "@/pages/CDM";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/stake" element={<Stake />} />
      <Route path="/swap" element={<Swap />} />
      <Route path="/rewards" element={<Rewards />} />
      <Route path="/referral" element={<Referral />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/support" element={<Support />} />

      {/* Documents Layout */}
      <Route path="/documents" element={<DocumentLayout />}>
        <Route path="about" element={<About />} />
        <Route path="glossary" element={<Glossary />} />
        <Route path="ecosystem" element={<Ecosystem />} />
        <Route path="cdm" element={<CDM />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="support" element={<Support />} />
      </Route>
    </Routes>
  );
};

export default Router;

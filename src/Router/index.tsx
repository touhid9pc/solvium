import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Stake from "@/pages/Stake";
import Analytics from "@/pages/Analytics";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/stake" element={<Stake />} />
      <Route path="/analytics" element={<Analytics />} />
    </Routes>
  );
};

export default Router;

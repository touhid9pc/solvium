import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Stake from "@/pages/Stake";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/stake" element={<Stake />} />
    </Routes>
  );
};

export default Router;

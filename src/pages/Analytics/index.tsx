import { PlatformAnalytics } from "@/components/PlatformAnalytics";
import { Tabs } from "@/components/Tabs";
import { useState } from "react";
import DashboardLayout from "../Layout";
import PersonalAnalytics from "@/components/PersonalAnalytics";
import Report from "@/components/Report";

const Analytics = () => {
  const [currentTab, setCurrentTab] = useState("1");

  const renderComponent = () => {
    switch (currentTab) {
      case "1":
        return <PlatformAnalytics />;
      case "2":
        return <PersonalAnalytics />;
      case "3":
        return <Report />;
      default:
        return <div>NULL</div>;
    }
  };

  return (
    <DashboardLayout>
      <Tabs
        options={[
          { label: "Platform analytics", value: "1" },
          { label: "Personal analytics", value: "2" },
          { label: "Report", value: "3" },
        ]}
        defaultValue={currentTab}
        onChange={(val) => setCurrentTab(val)}
        className="my-6"
        itemStyle="w-max !px-10"
      />
      {renderComponent()}
    </DashboardLayout>
  );
};

export default Analytics;

import SideMenuDocuments from "@/components/SideMenuDocuments";
import React from "react";
import DocumentNavBar from "../DocumentNavbar";
import type { LayoutProps } from "../index.interface";

const DocumentLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative w-dvw h-dvh flex flex-col md:flex-row overflow-y-auto">
      {/* ----------- Left (Sidebar) ---------- */}
      <div className="relative lg:min-w-[20%] lg:w-[20%]  xl:min-w-[15%] xl:w-[15%]">
        <SideMenuDocuments />
      </div>

      {/* ----------- Right (Main Content) ---------- */}
      <div className="relative z-10 flex-1 flex flex-col h-full gap-4 lg:gap-6 p-6 lg:p-10 lg:overflow-y-auto">
        <div className="">
          <DocumentNavBar />
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default DocumentLayout;

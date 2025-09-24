import SideMenuDocuments from "@/components/SideMenuDocuments";
import React, { useEffect } from "react";
import DocumentNavBar from "../DocumentNavbar";
import type { LayoutProps } from "../index.interface";

const DocumentLayout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    if (window.location.pathname === "/documents") {
      window.location.pathname = "/documents/about";
    }
  }, [window.location.pathname]);

  return (
    <div className="relative w-dvw h-dvh flex flex-col md:flex-row overflow-y-auto">
      {/* ----------- Left (Sidebar) ---------- */}
      <div className="relative z-10 min-w-[15%] w-[15%]">
        <SideMenuDocuments />
      </div>

      {/* ----------- Right (Main Content) ---------- */}
      <div className="relative z-10 flex-1 flex flex-col h-full gap-4 md:gap-6 p-6 md:p-10 md:overflow-y-auto">
        <div className="">
          <DocumentNavBar />
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default DocumentLayout;

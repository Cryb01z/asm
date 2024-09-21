import React, { useState } from "react";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";
// Import utilities
import DomainCVE from "./domainCVE";
import OpenCVE from "./openCVE";

const CVE = () => {
  const [cve, setcve] = useState("openCVE");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex bg-gray-900 h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header
          tittle={"Vulnerabilities"}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 pb-8 w-full max-w-9xl text-white">
            <div className="flex mt-5 space-x-3">
              <div
                className="px-1 rounded-sm border bg-blue-500 hover:bg-blue-700 cursor-pointer"
                onClick={() => {
                  setcve("openCVE");
                }}
              >
                CVE Management
              </div>
              <div
                className="px-1 rounded-sm border bg-lime-500 hover:bg-lime-700 cursor-pointer"
                onClick={() => {
                  setcve("domain");
                }}
              >
                CVE of All Domain
              </div>
            </div>
            {cve === "openCVE" && <OpenCVE />}
            {cve === "domain" && <DomainCVE />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CVE;

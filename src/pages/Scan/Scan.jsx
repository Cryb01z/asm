import React, { useState } from "react";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";

import { DataGrid } from "@mui/x-data-grid";

const Scan = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className=" bg-gray-900 text-slate-400 flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header
          tittle={"My Scan"}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main>
          <div className="flex justify-center mt-10">
            <div className="w-[800px] p-5 bg-slate-800 ml-8 mt-5 text-white">
              <div className="text-3xl border-b-2 pb-3 mb-3 border-slate-700">
                My Scan
              </div>
              <div className="mb-5">
                <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
                  Domain
                </label>
                <input
                  className="shadow-sm border w-64 text-base rounded-lg  block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 shadow-sm-light"
                  required
                />
              </div>
              <div className="mb-5">
                <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
                  Description
                </label>
                <input
                  className="shadow-sm border w-64 text-base rounded-lg  block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 shadow-sm-light"
                  required
                />
              </div>
              <div className="flex space-x-10">
                <div className="bg-green-700 px-6 py-2 text-lg text-center w-24 rounded-lg hover:bg-green-500">
                  Start
                </div>
                <div className="bg-red-600 px-6 py-2 text-lg text-center w-24  rounded-lg hover:bg-red-500">
                  Cancel
                </div>
              </div>
            </div>
          </div>
         
        </main>
      </div>
    </div>
  );
};

export default Scan;

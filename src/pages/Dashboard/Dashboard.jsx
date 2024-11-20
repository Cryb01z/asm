import React from "react";
import Navbar from "../../components/Navbar/Navbar";

function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden bg-black">
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Navbar site={"dashboard"} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto  text-gray-400">
            <div className="px-20">
              <div className="flex">
                <div className="col-span-full w-full xl:col-span-8 bg-zinc-900  shadow-lg rounded-sm border border-zinc-700/60">
                  <header className="px-5 py-4 border-b  border-zinc-700/60">
                    <h2 className="font-semibold  text-slate-100 ">
                      Total User:
                    </h2>
                  </header>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="">
                          <th className="p-2 w-56">
                            <div className="font-semibold text-left flex items-center">
                              <input type="checkbox" className="mr-5" />{" "}
                              <span>Vulnerability</span>
                            </div>
                          </th>
                          <th className="p-2 ">
                            <div className="font-semibold text-center cursor-pointer">
                              Type
                            </div>
                          </th>
                          <th className="p-2 ">
                            <div className="font-semibold text-center cursor-pointer"></div>
                          </th>
                          <th className="p-2 ">
                            <div className="font-semibold text-center cursor-pointer"></div>
                          </th>
                          <th className="p-2">
                            <div className="font-semibold text-center">
                              Assets-Incidents
                            </div>
                          </th>
                          <th className="p-2">
                            <div className="font-semibold text-center">
                              Actions
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                </div>
                <div>dashboard</div>
              </div>
            </div>
          </div>
        </main>
        {/* <Banner /> */}
      </div>
    </div>
  );
}

export default Dashboard;

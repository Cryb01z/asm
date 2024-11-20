import React, { useState } from "react";
// import Sidebar from "../../partials/Sidebar";
// import Header from "../../partials/Header";
import DoughnutChart from "../../charts/DoughnutChart";
import { tailwindConfig } from "../../utils/Utils";
import { data } from "../../axios/data";
const DigitalFootprint = () => {
  const da = [
    {
      assetType: "Technology",
      assetName: "Datatables",
      discoveryDate: "2024-4-2",
      source: "142.93.24.242",
      discoveryReason: "Discoverd via Domain",
    },
    {
      assetType: "Technology",
      assetName: "Datatables",
      discoveryDate: "2024-4-2",
      source: "142.93.24.242",
      discoveryReason: "Discoverd via Domain",
    },
    {
      assetType: "Technology",
      assetName: "Datatables",
      discoveryDate: "2024-4-2",
      source: "142.93.24.242",
      discoveryReason: "Discoverd via Domain",
    },
    {
      assetType: "Technology",
      assetName: "Datatables",
      discoveryDate: "2024-4-2",
      source: "142.93.24.242",
      discoveryReason: "Discoverd via Domain",
    },
    {
      assetType: "Technology",
      assetName: "Datatables",
      discoveryDate: "2024-4-2",
      source: "142.93.24.242",
      discoveryReason: "Discoverd via Domain",
    },
  ];
  const scandata = data;
  console.log(scandata);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const chartData = {
    labels: ["United States", "Italy", "Other"],
    datasets: [
      {
        label: "Top Countries",
        data: [35, 30, 35],
        backgroundColor: [
          tailwindConfig().theme.colors.indigo[500],
          tailwindConfig().theme.colors.blue[400],
          tailwindConfig().theme.colors.indigo[800],
        ],
        hoverBackgroundColor: [
          tailwindConfig().theme.colors.indigo[600],
          tailwindConfig().theme.colors.blue[500],
          tailwindConfig().theme.colors.indigo[900],
        ],
        borderWidth: 0,
      },
    ],
  };
  return (
    <div className=" bg-gray-900 text-slate-400 flex h-screen overflow-hidden">
      {/* Sidebar */}
      {/* <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        {/* <Header
          tittle={"Digital Footprint"}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        /> */}

        <main>
          <div className="flex ml-8 mt-5 space-x-5">
            <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-slate-800 shadow-lg rounded-sm border border-slate-700">
              <header className="px-5 py-4 border-b border-slate-700">
                <h2 className="font-semibold text-slate-100">Top Open Ports</h2>
              </header>
              {/* Chart built with Chart.js 3 */}
              {/* Change the height attribute to adjust the chart height */}
              <DoughnutChart data={chartData} width={389} height={260} />
            </div>
            <div className="flex w-96 flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-slate-800 shadow-lg rounded-sm border border-slate-700">
              <header className="px-5 py-4 border-b border-slate-700">
                <h2 className="font-semibold text-slate-100">
                  Top ASES Scores Table
                </h2>
              </header>
              <div className="block p-5 space-y-4">
                <div className="flex pb-3 text-white justify-between border-b border-slate-700">
                  <div>
                    avst.greenanimalsbank.com <br />
                    Domain
                  </div>
                  <div className="flex items-center justify-center border px-1.5 rounded-md bg-red-600">
                    89.9
                  </div>
                </div>
                <div className="flex pb-3 text-white justify-between border-b border-slate-700">
                  <div>
                    avst.greenanimalsbank.com <br />
                    Domain
                  </div>
                  <div className="flex items-center justify-center border px-1.5 rounded-md bg-red-600">
                    89.9
                  </div>
                </div>
                <div className="flex pb-3 text-white justify-between border-b border-slate-700">
                  <div>
                    avst.greenanimalsbank.com <br />
                    Domain
                  </div>
                  <div className="flex items-center justify-center border px-1.5 rounded-md bg-red-600">
                    89.9
                  </div>
                </div>
                <div className="flex pb-3 text-white justify-between border-b border-slate-700">
                  <div>
                    avst.greenanimalsbank.com <br />
                    Domain
                  </div>
                  <div className="flex items-center justify-center border px-1.5 rounded-md bg-red-600">
                    89.9
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex space-x-5">
            <div className="py-4 sm:pl-6 lg:pl-8 w-full max-w-9xl">
              <div className="bg-slate-800 shadow-lg rounded-sm border px-5 py-4 border-b border-slate-700 ">
                <h2 className="font-semibold text-slate-100">
                  <input
                    className="bg-slate-800 outline-none"
                    type="text"
                    placeholder="Search ..."
                  />
                </h2>
              </div>
            </div>
            <div className="py-4 pr-4 w-80">
              <div className="bg-slate-800 shadow-lg rounded-sm border border-slate-700">
                <header className="px-5 py-4 border-b border-slate-700 ">
                  <h2 className="font-semibold text-slate-100 ">
                    Black Market Credits
                  </h2>
                </header>
              </div>
            </div>
          </div>

          <div className="flex space-x-5">
            <div className="py-4 sm:pl-6 lg:pl-8 w-full max-w-9xl">
              <div className="col-span-full xl:col-span-8 bg-slate-800 shadow-lg rounded-sm border border-slate-700">
                <header className="flex px-5 py-4 border-b border-slate-700 space-x-5">
                  <h2 className="font-semibold  text-slate-100">
                    362 Total Assets
                  </h2>
                </header>
                <div className="p-3">
                  {/* Table */}
                  <div className="overflow-x-auto">
                    <table className="table-auto w-full text-slate-300">
                      {/* Table header */}
                      <thead className="text-xs uppercase  text-slate-500  bg-slate-700 bg-opacity-50 rounded-sm">
                        <tr>
                          <th className="p-2">
                            <div className="font-semibold flex items-center">
                              <input type="checkbox" className="mr-5" />{" "}
                              <span>Asset Type</span>
                            </div>
                          </th>
                          <th className="p-2">
                            <div className="font-semibold text-center">
                              Asset Name
                            </div>
                          </th>
                          <th className="p-2">
                            <div className="font-semibold text-center">
                              Discovery Date
                            </div>
                          </th>
                          <th className="p-2">
                            <div className="font-semibold text-center">
                              Monitor
                            </div>
                          </th>
                          <th className="p-2">
                            <div className="font-semibold text-center">
                              False Positive
                            </div>
                          </th>
                          <th className="p-2">
                            <div className="font-semibold text-center">
                              Source
                            </div>
                          </th>
                          <th className="p-2">
                            <div className="font-semibold text-center">
                              Discovery Reason
                            </div>
                          </th>
                        </tr>
                      </thead>
                      {/* Table body */}
                      <tbody className="text-sm font-medium divide-y divide-slate-700">
                        {/* Row */}
                        {da.map((data) => (
                          <tr>
                            <td className="p-2">
                              <div className="flex items-center">
                                <input type="checkbox" className="mr-5" />{" "}
                                <div className="text-slate-100">
                                  {data.assetType}
                                </div>
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="text-center">
                                {data.assetName}
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="text-center ">
                                {data.discoveryDate}
                              </div>
                            </td>
                            <td className="p-2">
                              <label className="flex justify-center items-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  value=""
                                  className="sr-only peer"
                                />
                                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-500"></div>
                              </label>
                            </td>
                            <td className="p-2">
                              <label className="flex justify-center items-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  value=""
                                  className="sr-only peer"
                                />
                                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-500"></div>
                              </label>
                            </td>
                            <td className="p-2">
                              <div className="text-center ">{data.source}</div>
                            </td>
                            <td className="p-2">
                              <div className="text-center">
                                {data.discoveryReason}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {/* pagination */}
                    <div className="flex items-center justify-between border-t border-slate-700 bg-slate-800 px-4 py-3 sm:px-6 text-white">
                      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                        <div>
                          <p className="text-sm">
                            Showing <span className="font-medium">1</span> to{" "}
                            <span className="font-medium">10</span> of{" "}
                            <span className="font-medium">20</span> results
                          </p>
                        </div>

                        <div className="flex">
                        <a
                          href="#"
                          className="flex items-center justify-center px-3 h-8 text-sm font-medium  bg-white border rounded-lg  dark:bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
                        >
                          <svg
                            className="w-3.5 h-3.5 me-2 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 5H1m0 0 4 4M1 5l4-4"
                            />
                          </svg>
                          Previous
                        </a>
                        <a
                          href="#"
                          className="flex items-center justify-center px-3 h-8 text-sm font-medium  bg-white border rounded-lg  dark:bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
                        >
                          Next
                          <svg
                            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                          </svg>
                        </a>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-4 pr-4 w-80 font-semibold  text-slate-100">
              <div className="col-span-full xl:col-span-8 bg-slate-800 shadow-lg rounded-sm border border-slate-700">
                <header className="flex px-5 py-4 border-b border-slate-700 space-x-5">
                  <h2>Featured Filters</h2>
                </header>
                <div className="block px-5 py-4 space-y-4">
                  <div className="flex justify-between p-2 bg-slate-800 shadow-lg rounded-sm border border-slate-400">
                    <div>All Findings</div>
                    <div>18</div>
                  </div>
                  <div className="flex justify-between p-2 bg-slate-800 shadow-lg rounded-sm border border-slate-400">
                    <div>Action Waiting</div>
                    <div>18</div>
                  </div>
                  <div className="flex justify-between p-2 bg-slate-800 shadow-lg rounded-sm border border-slate-400">
                    <div>Requested</div>
                    <div>18</div>
                  </div>
                  <div className="flex justify-between p-2 bg-slate-800 shadow-lg rounded-sm border border-slate-400">
                    <div>Obtained</div>
                    <div>0</div>
                  </div>
                  <div className="flex justify-between p-2 bg-slate-800 shadow-lg rounded-sm border border-slate-400">
                    <div>Resolved</div>
                    <div>0</div>
                  </div>
                  <div className="flex justify-between p-2 bg-slate-800 shadow-lg rounded-sm border border-slate-400">
                    <div>False Positive</div>
                    <div>6</div>
                  </div>
                  <div className="flex justify-between p-2 bg-slate-800 shadow-lg rounded-sm border border-slate-400">
                    <div>Declined & Tracking</div>
                    <div>0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DigitalFootprint;

import React, { useState } from "react";
export default function BlackMarket() {
  const data = [
    {
      blackMarketId: "Market-123123",
      source: "Russia Market",
      preview: "Preview Not Found",
      relatedAsset: "ftp.greenanimalsbank.com",
      price: "10 $",
      status: "Action Waiting",
      progress: "REQUEST OBTAIN",
      discoveryDate: "2024-4-2",
    },
    {
      blackMarketId: "Market-123123",
      source: "Russia Market",
      preview: "Preview Not Found",
      relatedAsset: "ftp.greenanimalsbank.com",
      price: "10 $",
      status: "Action Waiting",
      progress: "REQUEST OBTAIN",
      discoveryDate: "2024-4-2",
    },
    {
      blackMarketId: "Market-123123",
      source: "Russia Market",
      preview: "Preview Not Found",
      relatedAsset: "ftp.greenanimalsbank.com",
      price: "10 $",
      status: "Action Waiting",
      progress: "REQUEST OBTAIN",
      discoveryDate: "2024-4-2",
    },
    {
      blackMarketId: "Market-123123",
      source: "Russia Market",
      preview: "Preview Not Found",
      relatedAsset: "ftp.greenanimalsbank.com",
      price: "10 $",
      status: "Action Waiting",
      progress: "REQUEST OBTAIN",
      discoveryDate: "2024-4-2",
    },
    {
      blackMarketId: "Market-123123",
      source: "Russia Market",
      preview: "Preview Not Found",
      relatedAsset: "ftp.greenanimalsbank.com",
      price: "10 $",
      status: "Action Waiting",
      progress: "REQUEST OBTAIN",
      discoveryDate: "2024-4-2",
    },
    {
      blackMarketId: "Market-123123",
      source: "Russia Market",
      preview: "Preview Not Found",
      relatedAsset: "ftp.greenanimalsbank.com",
      price: "10 $",
      status: "Action Waiting",
      progress: "REQUEST OBTAIN",
      discoveryDate: "2024-4-2",
    },
  ];
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className=" bg-gray-900 text-slate-400 flex h-screen overflow-hidden">
      {/* Sidebar */}
      {/* <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        {/* <Header
          tittle={"Dark Web Monitoring"}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        /> */}

        <main>
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
                  <h2 className="font-semibold  text-slate-100 border-b border-slate-100">
                    Black Market
                  </h2>
                  <h2 className="font-semibold  text-slate-100">Botnet Data</h2>
                  <h2 className="font-semibold  text-slate-100">
                    PII Exposure
                  </h2>
                  <h2 className="font-semibold  text-slate-100">IM Content</h2>
                  <h2 className="font-semibold  text-slate-100">
                    Suspicious Content
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
                              <span>Black Market ID</span>
                            </div>
                          </th>
                          <th className="p-2">
                            <div className="font-semibold text-center">
                              Source
                            </div>
                          </th>
                          <th className="p-2">
                            <div className="font-semibold text-center">
                              Stealer Log Preview
                            </div>
                          </th>
                          <th className="p-2">
                            <div className="font-semibold text-center">
                              Related Assets
                            </div>
                          </th>
                          <th className="p-2">
                            <div className="font-semibold text-center">
                              Price
                            </div>
                          </th>
                          <th className="p-2">
                            <div className="font-semibold text-center">
                              Status
                            </div>
                          </th>
                          <th className="p-2">
                            <div className="font-semibold text-center">
                              Obtain Progress
                            </div>
                          </th>
                          <th className="p-2">
                            <div className="font-semibold text-center">
                              Discovery Date
                            </div>
                          </th>
                          <th className="p-2">
                            <div className="font-semibold text-center">
                              Incident
                            </div>
                          </th>
                          <th className="p-2">
                            <div className="font-semibold text-center">
                              Actions
                            </div>
                          </th>
                        </tr>
                      </thead>
                      {/* Table body */}
                      <tbody className="text-sm font-medium divide-y divide-slate-700">
                        {/* Row */}
                        {data.map((data) => (
                          <tr>
                            <td className="p-2">
                              <div className="flex items-center">
                                <input type="checkbox" className="mr-5" />{" "}
                                <div className="text-slate-100">
                                  {data.blackMarketId}
                                </div>
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="text-center">{data.source}</div>
                            </td>
                            <td className="p-2">
                              <div className="text-center text-gray-400">
                                {data.preview}
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="text-center">{data.relatedAsset}</div>
                            </td>
                            <td className="p-2">
                              <div className="text-center">
                                {data.price}
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="text-center">
                                {data.status}
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="text-center text-green-600">
                                {data.progress}
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="text-center ">
                                {data.discoveryDate}
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="text-center ">
                                4.7%
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="text-center ">
                                4.7%
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
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
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
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
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
}

import React, { useEffect, useState } from "react";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import { data, serviceData } from "../../axios/data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Tooltip from "../../components/Tooltip";

const Domain = () => {
  const test = data;
  const [service, setservice] = useState([
    {
      port: "",
      service_name: "",
      software: [
        {
          product: "",
          vendor: "",
          version: "",
        },
      ],
      vulnerabilities: [],
    },
  ]);
  useEffect(() => {
    setservice(serviceData);
  }, []);
  const nav = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = service.slice(firstIndex, lastIndex);
  const npage = Math.ceil(service.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  const prevPage = () => {
    if (currentPage !== 1) {
      setcurrentPage((prev) => prev - 1);
    }
  };

  const changePage = (id) => {
    setcurrentPage(id);
  };
  const nextPage = () => {
    if (currentPage !== numbers[numbers.length - 1]) {
      setcurrentPage((prev) => prev + 1);
    }
  };
  const handleRedirectToCVE = (service, vulnerabilities) => {
    if (vulnerabilities.length === 0) {
      toast.info(`There is no CVE of service:${service}`);
      return;
    }
    nav(`/CVE/service?name=${service}`);
  };

  return (
    <div className="bg-gray-900 flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header
          tittle={"Domain"}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 pb-8 w-full max-w-9xl  text-slate-400">
            <div className="mt-5 col-span-full xl:col-span-8 bg-slate-800 shadow-lg rounded-sm border border-slate-700">
              <header className="px-5 py-4 border-b  border-slate-700">
                <h2 className="font-semibold  text-slate-100">
                  Domain Management
                </h2>
              </header>
              <div className="p-3">
                {/* Table */}
                <div className="">
                  <table className="table-auto w-full  text-slate-300">
                    {/* Table header */}
                    <thead className="text-xs uppercase  text-slate-500  bg-slate-700 bg-opacity-50 rounded-sm">
                      <tr>
                        <th className="p-2">
                          <div className="font-semibold text-left flex items-center">
                            <input type="checkbox" className="mr-5" />{" "}
                            <span>Domain Name</span>
                          </div>
                        </th>
                        <th className="p-2">
                          <div className="font-semibold text-center">IP</div>
                        </th>
                        <th className="p-2">
                          <div className="font-semibold text-center">
                            service
                          </div>
                        </th>
                        <th className="p-2">
                          <div className="font-semibold text-center">
                            discovery date
                          </div>
                        </th>
                        <th className="p-2">
                          <div className="font-semibold text-center">
                            discovery reason
                          </div>
                        </th>
                        <th className="p-2">
                          <div className="font-semibold text-center">
                            action
                          </div>
                        </th>
                      </tr>
                    </thead>
                    {/* Table body */}
                    <tbody className="text-sm font-medium divide-y divide-slate-700">
                      <tr>
                        <td className="p-2 py-4">
                          <div className="flex items-center">
                            <input type="checkbox" className="mr-5" />{" "}
                            <Tooltip
                              message={
                                <>
                                  <div className="grid w-auto items-center gap-4">
                                    <table className="table-auto">
                                      <tbody>
                                        <tr>
                                          <td>autonomous_system:</td>
                                        </tr>
                                        <tr>
                                          <table className="table-auto ml-5">
                                            <tbody>
                                              <tr>
                                                <td>asn:</td>
                                                <td>
                                                  {test.autonomous_system.asn}
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>bgp_prefix:</td>
                                                <td>
                                                  {
                                                    test.autonomous_system
                                                      .bgp_prefix
                                                  }
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>country_code:</td>
                                                <td>
                                                  {
                                                    test.autonomous_system
                                                      .country_code
                                                  }
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>description:</td>
                                                <td>
                                                  {
                                                    test.autonomous_system
                                                      .description
                                                  }
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>name:</td>
                                                <td>
                                                  {test.autonomous_system.name}
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </tr>
                                        <tr>
                                          <td>dns:</td>
                                        </tr>
                                        <tr>
                                          <table className="table-auto ml-5">
                                            <tbody>
                                              {test.dns.map((item, i) => (
                                                <>
                                                  <tr>{i + 1}:</tr>
                                                  <tr>
                                                    <table className="table-auto ml-5">
                                                      <tbody>
                                                        <tr>
                                                          <td>Asset_Name:</td>
                                                          <td>
                                                            {item.Asset_Name}
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td>Record:</td>
                                                          <td>{item.Record}</td>
                                                        </tr>
                                                        <tr>
                                                          <td>Record_type:</td>
                                                          <td>
                                                            {item.Record_type}
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </tr>
                                                </>
                                              ))}
                                            </tbody>
                                          </table>
                                        </tr>
                                        <tr>
                                          <td>ssl:</td>
                                          <td></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </>
                              }
                            >
                              <div className="text-blue-700 hover:text-blue-500">
                                {data.domain}
                              </div>
                            </Tooltip>
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="text-center ">{data.ip}</div>
                        </td>
                        <td className="p-2">
                          <div
                            className="text-center underline text-blue-700 hover:text-blue-500"
                            onClick={() => {
                              nav("/service");
                            }}
                          >
                            view more
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="text-center">{data.discovery_on}</div>
                        </td>
                        <td className="p-2">
                          <div className="text-center ">
                            {data.discovery_reason}
                          </div>
                        </td>

                        <td className="p-2">
                          <div className="text-center ">
                            {data.discovery_reason}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* <div className="flex items-center justify-center mt-3 gap-4">
                    <button
                      className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-full select-none hover:bg-gray-700 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                      onClick={prevPage}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                        ></path>
                      </svg>
                      Previous
                    </button>
                    <div className="flex items-center gap-2">
                      {numbers.map((n, i) => (
                        <button
                          className={
                            currentPage === n
                              ? "relative h-10 max-h-[40px] bg-gray-900 w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-white transition-all hover:bg-gray-700 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                              : "relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-white transition-all hover:bg-gray-700 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          }
                          type="button"
                          key={i}
                          onClick={() => {
                            changePage(n);
                          }}
                        >
                          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            {n}
                          </span>
                        </button>
                      ))}
                    </div>
                    <button
                      className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-full select-none hover:bg-gray-700 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                      onClick={nextPage}
                    >
                      Next
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        ></path>
                      </svg>
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
        </main>
      </div>
    </div>
  );
};

export default Domain;

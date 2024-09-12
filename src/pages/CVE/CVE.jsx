import React, { useEffect, useState } from "react";
import { dataCVE, CVEData } from "../../axios/data";
import DoughnutChart from "../../charts/DoughnutChart";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";
import axios from "axios";
// Import utilities
import { tailwindConfig } from "../../utils/Utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield, faShieldHalved } from "@fortawesome/free-solid-svg-icons";

const CVE = () => {
  const [cveData, setcveData] = useState([
    {
      id: "",
      cvss: 0,
      type: "",
      is_exploit: "",
      reference: "",
    },
  ]);

  const data = [
    {
      id: "CVE-2024-8655",
      vendor: "",
      product: "",
      update: "2024-09-12",
      score: "5.3 Medium",
      discription: "",
    },
    {
      id: "CVE-2024-8655",
      vendor: "",
      product: "",
      update: "2024-09-12",
      score: "5.3 Medium",
      discription: "",
    },
    {
      id: "CVE-2024-8655",
      vendor: "",
      product: "",
      update: "2024-09-12",
      score: "5.3 Medium",
      discription: "",
    },
    {
      id: "CVE-2024-8655",
      vendor: "",
      product: "",
      update: "2024-09-12",
      score: "5.3 Medium",
      discription: "",
    },
    {
      id: "CVE-2024-8655",
      vendor: "",
      product: "",
      update: "2024-09-12",
      score: "5.3 Medium",
      discription: "",
    },
  ];
  const searchParams = new URLSearchParams(window.location.search);
  const service = searchParams.get("name");
  useEffect(() => {
    const data = CVEData("domain");
    setcveData(data.vulnerabilities);
  }, []);
  const [currentPage, setcurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = cveData.slice(firstIndex, lastIndex);
  const npage = Math.ceil(cveData.length / recordsPerPage);
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
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const refLink = (link) => {
    window.location.href = link;
  };
  const cvssColor = (cvss) => {
    if (cvss >= 0 && cvss < 4) {
      return "green";
    } else if (cvss >= 4 && cvss < 7) {
      return "yellow";
    } else if (cvss >= 7 && cvss < 9) {
      return "orange";
    } else if (cvss >= 9 && cvss <= 10) {
      return "red";
    }
    return "black";
  };
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
              <div className="px-1 rounded-sm border bg-blue-500 hover:bg-blue-700 cursor-pointer">
                CVE Management
              </div>
              <div className="px-1 rounded-sm border bg-lime-500 hover:bg-lime-700 cursor-pointer">
                CVE of All Domain
              </div>
            </div>
            <div className="flex mt-4 space-x-10">
              <div className="flex space-x-7 p-4 border-t-4 rounded-sm border-blue-700 bg-slate-800 w-[900px]">
                <select
                  id="countries"
                  class="w-48 border text-sm rounded-sm block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option selected>Select a tag</option>
                  <option value="US">No results found</option>
                </select>
                <select
                  id="countries"
                  class="w-48 border text-sm rounded-sm block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option selected>Empty</option>
                  <option value="CA">Low (0 - 3.9)</option>
                  <option value="FR">Medium (4.0 - 6.9)</option>
                  <option value="DE">High (7.0 - 8.9)</option>
                  <option value="DE">Critical (9.0 - 10.0)</option>
                </select>
                <input
                  type="text"
                  className="w-60 border text-sm rounded-sm block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search in CVEs"
                />
                <div className="ml-10 border text-sm rounded-sm flex items-center justify-center px-4 bg-blue-600 hover:bg-blue-700 cursor-pointer">
                  Search
                </div>
              </div>
              <div className="flex rounded-sm bg-slate-800 w-[300px]">
                <div className="flex items-center justify-center bg-blue-700 w-20 h-20">
                  <FontAwesomeIcon icon={faShieldHalved} size="2xl" />
                </div>
                <div className="text-lg p-2">
                  TOTAL <br />
                  <span className="font-bold">262540 CVE</span>
                </div>
              </div>
            </div>
            <table className="table-auto bg-slate-800 mt-4 w-[1230px]">
              <thead className="border-t-4 border-blue-700 font-bold">
                <tr>
                  <th className="p-2 text-left w-56">CVE</th>
                  <th className="p-2 text-left w-80">Vendors</th>
                  <th className="p-2 text-left w-80">Products</th>
                  <th className="p-2 w-48">Updated</th>
                  <th className="p-2 w-44">CVSS v3.1</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t-2 border-gray-500">
                  <td className="p-2 text-left text-blue-600">CVE-2024-8655</td>
                  <td className="p-2 text-left"></td>
                  <td className="p-2 text-left"></td>
                  <td className="p-2 text-center">2024-09-12</td>
                  <td className="p-2 text-center">
                    <span className="px-2 text-sm rounded-sm bg-orange-500">
                      5.3 Medium
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 text-sm" colSpan={5}>
                    A vulnerability was found in Mercury MNVR816 up to
                    2.0.1.0.5. It has been classified as problematic. This
                    affects an unknown part of the file /web-static/. The
                    manipulation leads to files or directories accessible. It is
                    possible to initiate the attack remotely. The exploit has
                    been disclosed to the public and may be used. The vendor was
                    contacted early about this disclosure but did not respond in
                    any way.
                  </td>
                </tr>
                <tr className="border-t-2 border-gray-500">
                  <td className="p-2 text-left text-blue-600">CVE-2024-8655</td>
                  <td className="p-2 text-left"></td>
                  <td className="p-2 text-left"></td>
                  <td className="p-2 text-center">2024-09-12</td>
                  <td className="p-2 text-center">
                    <span className="px-2 text-sm rounded-sm bg-orange-500">
                      5.3 Medium
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 text-sm" colSpan={5}>
                    A vulnerability was found in Mercury MNVR816 up to
                    2.0.1.0.5. It has been classified as problematic. This
                    affects an unknown part of the file /web-static/. The
                    manipulation leads to files or directories accessible. It is
                    possible to initiate the attack remotely. The exploit has
                    been disclosed to the public and may be used. The vendor was
                    contacted early about this disclosure but did not respond in
                    any way.
                  </td>
                </tr>
                <tr className="border-t-2 border-gray-500">
                  <td className="p-2 text-left text-blue-600">CVE-2024-8655</td>
                  <td className="p-2 text-left"></td>
                  <td className="p-2 text-left"></td>
                  <td className="p-2 text-center">2024-09-12</td>
                  <td className="p-2 text-center">
                    <span className="px-2 text-sm rounded-sm bg-orange-500">
                      5.3 Medium
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 text-sm" colSpan={5}>
                    A vulnerability was found in Mercury MNVR816 up to
                    2.0.1.0.5. It has been classified as problematic. This
                    affects an unknown part of the file /web-static/. The
                    manipulation leads to files or directories accessible. It is
                    possible to initiate the attack remotely. The exploit has
                    been disclosed to the public and may be used. The vendor was
                    contacted early about this disclosure but did not respond in
                    any way.
                  </td>
                </tr>
                <tr className="border-t-2 border-gray-500">
                  <td className="p-2 text-left text-blue-600">CVE-2024-8655</td>
                  <td className="p-2 text-left"></td>
                  <td className="p-2 text-left"></td>
                  <td className="p-2 text-center">2024-09-12</td>
                  <td className="p-2 text-center">
                    <span className="px-2 text-sm rounded-sm bg-orange-500">
                      5.3 Medium
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 text-sm" colSpan={5}>
                    A vulnerability was found in Mercury MNVR816 up to
                    2.0.1.0.5. It has been classified as problematic. This
                    affects an unknown part of the file /web-static/. The
                    manipulation leads to files or directories accessible. It is
                    possible to initiate the attack remotely. The exploit has
                    been disclosed to the public and may be used. The vendor was
                    contacted early about this disclosure but did not respond in
                    any way.
                  </td>
                </tr>
                <tr className="border-t-2 border-gray-500">
                  <td className="p-2 text-left text-blue-600">CVE-2024-8655</td>
                  <td className="p-2 text-left"></td>
                  <td className="p-2 text-left"></td>
                  <td className="p-2 text-center">2024-09-12</td>
                  <td className="p-2 text-center">
                    <span className="px-2 text-sm rounded-sm bg-orange-500">
                      5.3 Medium
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 text-sm" colSpan={5}>
                    A vulnerability was found in Mercury MNVR816 up to
                    2.0.1.0.5. It has been classified as problematic. This
                    affects an unknown part of the file /web-static/. The
                    manipulation leads to files or directories accessible. It is
                    possible to initiate the attack remotely. The exploit has
                    been disclosed to the public and may be used. The vendor was
                    contacted early about this disclosure but did not respond in
                    any way.
                  </td>
                </tr>
                <tr className="border-t-2 border-gray-500">
                  <td className="p-2 text-left text-blue-600">CVE-2024-8655</td>
                  <td className="p-2 text-left"></td>
                  <td className="p-2 text-left"></td>
                  <td className="p-2 text-center">2024-09-12</td>
                  <td className="p-2 text-center">
                    <span className="px-2 text-sm rounded-sm bg-orange-500">
                      5.3 Medium
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 text-sm" colSpan={5}>
                    A vulnerability was found in Mercury MNVR816 up to
                    2.0.1.0.5. It has been classified as problematic. This
                    affects an unknown part of the file /web-static/. The
                    manipulation leads to files or directories accessible. It is
                    possible to initiate the attack remotely. The exploit has
                    been disclosed to the public and may be used. The vendor was
                    contacted early about this disclosure but did not respond in
                    any way.
                  </td>
                </tr>
                <tr className="border-t-2 border-gray-500">
                  <td className="p-2 text-left text-blue-600">CVE-2024-8655</td>
                  <td className="p-2 text-left"></td>
                  <td className="p-2 text-left"></td>
                  <td className="p-2 text-center">2024-09-12</td>
                  <td className="p-2 text-center">
                    <span className="px-2 text-sm rounded-sm bg-orange-500">
                      5.3 Medium
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 text-sm" colSpan={5}>
                    A vulnerability was found in Mercury MNVR816 up to
                    2.0.1.0.5. It has been classified as problematic. This
                    affects an unknown part of the file /web-static/. The
                    manipulation leads to files or directories accessible. It is
                    possible to initiate the attack remotely. The exploit has
                    been disclosed to the public and may be used. The vendor was
                    contacted early about this disclosure but did not respond in
                    any way.
                  </td>
                </tr>
                <tr className="border-t-2 border-gray-500">
                  <td className="p-2 text-left text-blue-600">CVE-2024-8655</td>
                  <td className="p-2 text-left"></td>
                  <td className="p-2 text-left"></td>
                  <td className="p-2 text-center">2024-09-12</td>
                  <td className="p-2 text-center">
                    <span className="px-2 text-sm rounded-sm bg-orange-500">
                      5.3 Medium
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 text-sm" colSpan={5}>
                    A vulnerability was found in Mercury MNVR816 up to
                    2.0.1.0.5. It has been classified as problematic. This
                    affects an unknown part of the file /web-static/. The
                    manipulation leads to files or directories accessible. It is
                    possible to initiate the attack remotely. The exploit has
                    been disclosed to the public and may be used. The vendor was
                    contacted early about this disclosure but did not respond in
                    any way.
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="bg-slate-800 w-[1230]">
              <div className="flex items-center justify-center gap-4">
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
              </div>
            </div>
            {/*<div className="flex justify-between py-5">
              <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-slate-800 shadow-lg rounded-md border border-slate-700">
                <header className="px-5 py-4 border-b border-slate-700">
                  <h2 className="font-semibold text-slate-100">
                    Top Countries
                  </h2>
                </header>
                /~ Chart built with Chart.js 3 ~/
                /~ Change the height attribute to adjust the chart height ~/
                <DoughnutChart data={chartData} width={389} height={260} />
              </div>
              <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-slate-800 shadow-lg rounded-md border border-slate-700">
                <header className="px-5 py-4 border-b border-slate-700">
                  <h2 className="font-semibold text-slate-100">
                    Top Countries
                  </h2>
                </header>
                /~ Chart built with Chart.js 3 ~/
                /~ Change the height attribute to adjust the chart height ~/
                <DoughnutChart data={chartData} width={389} height={260} />
              </div>
              <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-slate-800 shadow-lg rounded-md border border-slate-700">
                <header className="px-5 py-4 border-b border-slate-700">
                  <h2 className="font-semibold text-slate-100">
                    Top Countries
                  </h2>
                </header>
                /~ Chart built with Chart.js 3 ~/
                /~ Change the height attribute to adjust the chart height ~/
                <DoughnutChart data={chartData} width={389} height={260} />
              </div>
            </div>
            <div className="flex justify-between py-5">
              <div className="rounded-md bg-slate-800 p-5 w-[389px]">
                <div className="flex justify-between">
                  <div className="flex space-x-5">
                    <div className="rounded-md px-3 py-3  bg-red-600"></div>
                    <div className="border-l-2 border-slate-700 pl-2">
                      vulnerabilities
                    </div>
                  </div>
                  <div>386</div>
                </div>
              </div>
              <div className="rounded-md bg-slate-800 p-5 w-[389px]">
                <div className="flex justify-between">
                  <div className="flex space-x-5">
                    <div className="rounded-md px-3 py-3  bg-green-600"></div>
                    <div className="border-l-2 border-slate-700 pl-2">
                      Ransomeware Check
                    </div>
                  </div>
                  <div>386</div>
                </div>
              </div>
              <div className="rounded-md bg-slate-800 p-5 w-[389px]">
                <div className="flex justify-between">
                  <div className="flex space-x-5">
                    <div className="rounded-md px-3 py-3  bg-blue-700"></div>
                    <div className="border-l-2 border-slate-700 pl-2">
                      Mobile App Security
                    </div>
                  </div>
                  <div>386</div>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 shadow-lg rounded-sm border px-5 py-4 border-b border-slate-700 mb-5">
              <h2 className="font-semibold text-slate-100">
                <input
                  className="bg-slate-800 outline-none"
                  type="text"
                  placeholder="Search ..."
                />
              </h2>
            </div>
            <div className="col-span-full xl:col-span-8 bg-slate-800 shadow-lg rounded-sm border border-slate-700">
              <header className="px-5 py-4 border-b  border-slate-700">
                <h2 className="font-semibold  text-slate-100">
                  Total CVEs: {cveData.length}
                </h2>
              </header>
              <div className="p-3">
                /~ Table ~/
                <div className="overflow-x-auto">
                  <table className="table-auto w-full text-slate-300">
                    /~ Table header ~/
                    <thead className="text-xs uppercase  text-slate-500  bg-slate-700 bg-opacity-50 rounded-sm">
                      <tr>
                        <th className="p-2">
                          <div className="font-semibold text-left flex items-center">
                            <input type="checkbox" className="mr-5" />{" "}
                            <span>Vulnerability</span>
                          </div>
                        </th>
                        <th className="p-2">
                          <div className="font-semibold text-center">Type</div>
                        </th>
                        <th className="p-2">
                          <div className="font-semibold text-center">CVSS</div>
                        </th>
                        <th className="p-2">
                          <div className="font-semibold text-center">
                            Exploited
                          </div>
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
                    /~ Table body ~/
                    <tbody className="text-sm font-medium divide-y divide-slate-700">
                      {cveData.length > 0
                        ? records.map((cve) => (
                            <tr key={cve.id}>
                              <td className="p-2">
                                <div className="flex items-center">
                                  <input type="checkbox" className="mr-5" />{" "}
                                  <div
                                    className="text-blue-500"
                                    onClick={() => {
                                      refLink(cve.reference);
                                    }}
                                  >
                                    {cve.id}
                                  </div>
                                </div>
                              </td>
                              <td className="p-2">
                                <div className="text-center">{cve.type}</div>
                              </td>
                              <td className="p-2">
                                <div
                                  className="text-center"
                                  style={{ color: cvssColor(cve.cvss) }}
                                >
                                  {cve.cvss}
                                </div>
                              </td>
                              <td className="p-2">
                                <div
                                  className={
                                    cve.is_exploit === "true"
                                      ? "text-center text-green-600"
                                      : "text-center text-red-600"
                                  }
                                >
                                  {cve.is_exploit}
                                </div>
                              </td>
                            </tr>
                          ))
                        : ""}
                    </tbody>
                  </table>
                  <div className="flex items-center justify-center mt-3 gap-4">
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
                  </div>
                </div>
              </div>
            </div>*/}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CVE;

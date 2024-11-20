import React, { useEffect, useState } from "react";
import { data } from "../../axios/data";
import DoughnutChart from "../../charts/DoughnutChart";
// Import utilities
import {
  faArrowUpRightFromSquare,
  faFilter,
  faMagnifyingGlass,
  faSort,
  faSquareCheck,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useNavigate } from "react-router-dom";
import { tailwindConfig } from "../../utils/Utils";
import ExploitedModal from "./ExploitedModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getCVE,
  getCVES,
  getDomainCVE,
} from "../../axios/CVEService/cveService";
const DomainCVE = () => {
  const itemsPerPage = 10; // Number of vulnerabilities per page
  const [modal, setmodal] = useState(false); //Exploited Modal
  const navigate = useNavigate();
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState({
    status: "",
    results: [
      {
        vulnerabilities: [
          {
            affects_detail: "",
            affects_url: "",
            api_operation_id: 0,
            api_type: 0,
            app: "",
            confidence: 0,
            criticality: 0,
            last_seen: null,
            loc_id: 0,
            severity: 0,
            status: "",
            tags: [],
            target_id: "",
            target_vuln_id: "",
            vt_created: null,
            vt_id: "",
            vt_name: "",
            vt_updated: null,
            vuln_id: "",
          },
        ],
        pagination: {
          count: 0,
          cursor_hash: "",
          cursors: [],
          sort: null,
        },
        scan_id: "",
        result_id: "",
      },
    ],
  });
  const [vulData, setvulData] = useState({
    labels: [],
    datasets: [
      {
        label: "Top Affected Products",
        data: [],
        backgroundColor: [],
        hoverBackgroundColor: [],
        borderWidth: 0,
      },
    ],
  });
  const backgroundColor = [
    tailwindConfig().theme.colors.indigo[500],
    tailwindConfig().theme.colors.blue[400],
    tailwindConfig().theme.colors.indigo[800],
    tailwindConfig().theme.colors.green[400],
    tailwindConfig().theme.colors.yellow[300],
    tailwindConfig().theme.colors.red[500],
    tailwindConfig().theme.colors.purple[600],
    tailwindConfig().theme.colors.pink[400],
    tailwindConfig().theme.colors.teal[500],
    tailwindConfig().theme.colors.gray[400],
  ];

  const hoverBackgroundColor = [
    tailwindConfig().theme.colors.indigo[600],
    tailwindConfig().theme.colors.blue[500],
    tailwindConfig().theme.colors.indigo[900],
    tailwindConfig().theme.colors.green[500],
    tailwindConfig().theme.colors.yellow[400],
    tailwindConfig().theme.colors.red[600],
    tailwindConfig().theme.colors.purple[700],
    tailwindConfig().theme.colors.pink[500],
    tailwindConfig().theme.colors.teal[600],
    tailwindConfig().theme.colors.gray[500],
  ];

  //Render cvss score color
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDomainCVE("vulnweb.com");
        console.log(response.data);
        setdata(response.data);
        setloading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    console.log(data);
  }, []);

  useEffect(() => {
    if (data !== null && data.services !== undefined) {
      vulChart();
    }
  }, [data]);

  const totalVul = () => {
    let total = 0;
    data.services.map((item) => {
      total += item.vulnerabilities.length;
    });
    return total;
  };

  const vulChart = () => {
    console.log(data);
    let vulPercentage = [];
    let vul = {
      labels: [],
      datasets: [
        {
          label: "Top Affected Products",
          data: [],
          backgroundColor: [],
          hoverBackgroundColor: [],
          borderWidth: 0,
        },
      ],
    };
    data.services.map((item) => {
      item.vulnerabilities.map((cve) => {
        if (!vul.labels.includes(cve.type)) {
          vul.labels.push(cve.type);
        }
        vulPercentage.push(cve.type);
      });
    });
    vul.labels.map((item, index) => {
      vul.datasets[0].data.push(vulPercentage.filter((x) => x === item).length);
      vul.datasets[0].backgroundColor.push(backgroundColor[index]);
      vul.datasets[0].hoverBackgroundColor.push(hoverBackgroundColor[index]);
    });
    setvulData(vul);
  };

  const chartDataVul = {
    labels: ["Apache httpd", "Debian", "OpenSSH"],
    datasets: [
      {
        label: "Top Affected Products",
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

  console.log(vulData);
  console.log(chartDataVul);

  if (loading) {
    return (
      <div class="flex flex-col gap-4 w-full h-screen items-center justify-center">
        <div class="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-cyan-400 rounded-full">
          <div class="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-zinc-700 rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* <div className="flex justify-between py-5">
        <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-zinc-900 shadow-lg rounded-md border border-zinc-700/60">
          <header className="px-5 py-4 border-b border-zinc-700/60">
            <h2 className="font-semibold text-slate-100">
              Top Affected Products
            </h2>
          </header>

          {vulData.labels.length !== 0 && (
            <DoughnutChart data={vulData} width={389} height={260} />
          )}
        </div>
        <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-zinc-900  shadow-lg rounded-md border border-zinc-700/60">
          <header className="px-5 py-4 border-b border-zinc-700/60">
            <h2 className="font-semibold text-slate-100">
              Vulnerabilities By Source
            </h2>
          </header>

          <DoughnutChart data={chartDataVul} width={389} height={260} />
        </div>
        <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-zinc-900  shadow-lg rounded-md border border-zinc-700/60">
          <header className="px-5 py-4 border-b border-zinc-700/60">
            <h2 className="font-semibold text-slate-100">
              Vulnerabilities By Serverity
            </h2>
          </header>

          <DoughnutChart data={chartDataVul} width={389} height={260} />
        </div>
      </div>
      <div className="flex justify-between py-5">
        <div className="rounded-md bg-zinc-900  p-5 w-[389px]">
          <div className="flex justify-between">
            <div className="flex space-x-5">
              <div className="rounded-md px-3 py-3  bg-red-600"></div>
              <div className="border-l-2 border-zinc-700/60 pl-2">
                Vulnerabilities
              </div>
            </div>
            <div className="text-right">{totalVul()}</div>
          </div>
        </div>
        <div className="rounded-md bg-zinc-900  p-5 w-[389px]">
          <div className="flex justify-between">
            <div className="flex space-x-5">
              <div className="rounded-md px-3 py-3  bg-green-600"></div>
              <div className="border-l-2 border-zinc-700/60 pl-2">
                Domain Check
              </div>
            </div>
            <div className="text-right">20</div>
          </div>
        </div>
        <div className="rounded-md bg-zinc-900  p-5 w-[389px]">
          <div className="flex justify-between">
            <div className="flex space-x-5">
              <div className="rounded-md px-3 py-3  bg-blue-700"></div>
              <div className="border-l-2 border-zinc-700/60 pl-2">Security</div>
            </div>
            <div className="text-right">115</div>
          </div>
        </div>
      </div> */}
      <div className="bg-zinc-900  shadow-lg rounded-sm border px-5 py-4 border-b border-zinc-700/60 mb-5">
        <h2 className="font-semibold text-slate-100 flex space-x-5">
          <div className="flex">
            <div>
              <FontAwesomeIcon icon={faFilter} /> Filter:
            </div>
            <select
              className="bg-zinc-900  outline-none px-1"
              name=""
              id="domain"
            >
              <option value="">All Domain</option>
            </select>
          </div>
          <span>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <input
            className="bg-zinc-900  outline-none"
            type="text"
            placeholder="Search ..."
          />
        </h2>
      </div>
      {modal && <ExploitedModal modal={modal} setmodal={setmodal} />}
      <div className="col-span-full xl:col-span-8 bg-zinc-900  shadow-lg rounded-sm border border-zinc-700/60">
        <header className="px-5 py-4 border-b  border-zinc-700/60">
          <h2 className="font-semibold  text-slate-100 ">Total CVEs:</h2>
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
                  <div
                    className="font-semibold text-center cursor-pointer"
                    onClick={() => handleSort("type")}
                  >
                    Type
                  </div>
                </th>
                <th className="p-2 ">
                  <div
                    className="font-semibold text-center cursor-pointer"
                    onClick={() => handleSort("cvss")}
                  >
                    CVSS <FontAwesomeIcon icon={faSort} />
                  </div>
                </th>
                <th className="p-2 ">
                  <div
                    className="font-semibold text-center cursor-pointer"
                    onClick={() => handleSort("is_exploit")}
                  >
                    Exploited <FontAwesomeIcon icon={faSort} />
                  </div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">
                    Assets-Incidents
                  </div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Actions</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.services.map((item) =>
                item.vulnerabilities.map((cve) => (
                  <tr key={cve.id}>
                    <td className="p-2">
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-5" />{" "}
                        <div
                          className="text-blue-500 cursor-pointer line-clamp-1"
                          onClick={() => {
                            navigate(`/CVE/${cve.id}`, {
                              state: { cveid: cve.id },
                            });
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
                            ? "text-center text-green-600 cursor-pointer"
                            : "text-center text-red-600 cursor-pointer"
                        }
                      >
                        {cve.is_exploit}
                      </div>
                    </td>
                    <td
                      className="p-2  text-blue-500 hover:text-blue-700 text-center cursor-pointer"
                      onClick={() => {
                        navigate("/asset");
                      }}
                    >
                      {" "}
                      View Assets{" "}
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </td>
                    <td className="p-2 flex justify-center items-center space-x-3 text-center cursor-pointer">
                      {/* <div className="text-red-500 hover:text-red-800">
                      <FontAwesomeIcon icon={faThumbsDown} />
                    </div>{" "} */}
                      <div className="text-blue-600 hover:text-blue-800">
                        <FontAwesomeIcon icon={faSquareCheck} />
                      </div>
                      <div
                        className="text-red-500 hover:text-red-800"
                        onClick={() => setmodal(true)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          {/* Pagination */}
          {/* <div className="flex items-center justify-between border-t border-zinc-700/60 bg-zinc-900  px-4 py-3 sm:px-6 text-white">
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <p className="text-sm">
                  Showing{" "}
                  <span className="font-medium">
                    {(currentPage - 1) * itemsPerPage + 1}
                  </span>{" "}
                  to{" "}
                  <span className="font-medium">
                    {Math.min(
                      currentPage * itemsPerPage,
                      filteredVulnerabilities.length
                    )}
                  </span>{" "}
                  of{" "}
                  <span className="font-medium">
                    {filteredVulnerabilities.length}
                  </span>{" "}
                  results
                </p>
              </div>
              <div className="flex space-x-5">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`flex items-center w-28 justify-center px-3 h-8 text-sm font-medium ${
                    currentPage === 1
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-white cursor-pointer"
                  } border rounded-lg dark:bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white`}
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
                </button>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`flex items-center w-24 justify-center px-3 h-8 text-sm font-medium ${
                    currentPage === totalPages
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-white cursor-pointer"
                  } border rounded-lg dark:bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white`}
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
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default DomainCVE;

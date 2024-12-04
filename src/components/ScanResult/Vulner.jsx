import React, { useEffect, useState } from "react";
import {
  getCVEDetail,
  getCVEOfDomain,
  getDomainCVE,
} from "../../axios/CVEService/cveService";
import { useNavigate } from "react-router-dom";
import {
  faArrowUpRightFromSquare,
  faMagnifyingGlass,
  faSort,
  faSquareCheck,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DomainCVEDetail from "../CVE/DomainCVEDetail";

const Vulner = ({ domain, port }) => {
  const itemsPerPage = 10;
  const navigate = useNavigate();
  const [loading, setloading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filteredVulnerabilities, setFilteredVulnerabilities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cveDetails, setCveDetails] = useState({
    status: false,
    domain: "",
    id: "",
  });
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  const [data, setdata] = useState({
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
  });
  useEffect(() => {
    if (!domain) return;
    const fetchCVE = async () => {
      try {
        const response = await getCVEOfDomain(`${domain}:${port}`);
        // console.log(response.data);
        setdata(response.data);
      } catch (error) {
        console.error("Error fetching domain CVE:", error);
      }
    };

    fetchCVE();
  }, [domain]);

  //filter and sort vulnerabilities render
  useEffect(() => {
    try {
      let filtered = filterVulnerabilities();
      // console.log(filtered);
      let sortedFiltered = sortVulnerabilities(filtered, sortConfig);
      // console.log(sortedFiltered);
      if (sortedFiltered.length > 0) {
        setFilteredVulnerabilities(sortedFiltered);
        setTotalPages(Math.ceil(sortedFiltered.length / itemsPerPage));
        setloading(false);
        // console.log("filtered and sorted");
      }
    } catch (error) {
      console.log(error);
    }
  }, [data, searchTerm, currentPage, sortConfig]);

  // console.log(domain);
  // console.log(port);
  // console.log(filteredVulnerabilities);

  //get cve name
  const getCVEName = (tag) => {
    let cve = "Unknown";
    tag.map((item) => {
      if (item.includes("CVE")) {
        cve = item;
      }

      if (item.includes("CWE") && !cve.includes("CVE")) {
        cve = item;
      }
    });
    return cve;
  };

  //filter vulnerabilities
  const filterVulnerabilities = () => {
    let filtered = data.vulnerabilities;
    if (searchTerm) {
      filtered = filtered.filter((item) =>
        getCVEName(item.tags).toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return filtered;
  };

  //sort vulnerabilities
  const sortVulnerabilities = (vulnerabilities, sortConfig) => {
    if (sortConfig.key !== null) {
      return vulnerabilities.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return vulnerabilities; // Return unsorted if no sortConfig
  };

  //handle sort
  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  //Render cvss score color
  const serverityColor = (score) => {
    switch (score) {
      case 5:
        return "text-red-600 bg-red-600/40";
      case 4:
        return "text-red-600 bg-red-600/40";
      case 3:
        return "text-amber-600 bg-amber-600/40";
      case 2:
        return "text-indigo-600 bg-indigo-600/40";
      case 1:
        return "text-green-600 bg-green-600/40";
      default:
        return "text-gray-600 bg-gray-600/40";
    }
  };

  //Render serverity class
  const serverityClass = (score) => {
    switch (score) {
      case 5:
        return "Critical";
      case 4:
        return "Critical";
      case 3:
        return "High";
      case 2:
        return "Low";
      case 1:
        return "Info";
      default:
        return "known";
    }
  };

  // get domain from reponse
  const getDomain = (url, port) => {
    let domain = "";
    if (url.includes("http")) {
      if (url) {
        domain = url.split("/")[2];
        if (domain) {
          domain = domain.includes(":") ? domain.split(":")[0] : domain;
        }
      }
      domain = `${domain}:${port}`;
    } else {
      domain = `${url}:${port}`;
    }
    console.log(domain);

    return domain;
  };

  //handle cve detail
  const handleCVEDetail = async (domain, cveId) => {
    if (cveDetails.id === cveId && cveDetails.domain === domain) {
      setCveDetails({ status: false, domain: "", id: "" });
    } else {
      setCveDetails({ status: true, domain: domain, id: cveId });
    }
  };
  console.log(cveDetails);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  //pagination vulnerabilities
  const displayVulnerabilities = filteredVulnerabilities.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  // console.log("dasdasd", displayVulnerabilities);
  console.log("domain", domain);
  console.log("port", port);

  return (
    <div className="bg-black min-h-96 mt-4">
      <div className="bg-zinc-900  shadow-lg rounded-sm border px-5 py-4 border-b border-zinc-700/60 mb-5">
        <h2 className="font-semibold text-slate-100 flex space-x-5">
          <span>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <input
            className="bg-zinc-900 outline-none"
            type="text"
            placeholder="Search ..."
            onChange={handleSearchChange}
          />
        </h2>
      </div>
      <div
        className={`flex justify-between ${
          cveDetails.status ? "space-x-5" : ""
        }`}
      >
        <div className="flex-col col-span-full xl:col-span-8 max-h-min bg-zinc-900 w-full shadow-lg rounded-sm border border-zinc-700/60">
          <header className="px-5 py-4 border-b  border-zinc-700/60">
            <h2 className="font-semibold  text-slate-100 ">
              Total CVEs:{" "}
              {filteredVulnerabilities ? (
                <>{filteredVulnerabilities.length}</>
              ) : (
                <>0</>
              )}
            </h2>
          </header>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="z-20">
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
                      Affects_Detail
                    </div>
                  </th>
                  <th className="p-2 ">
                    <div
                      className="font-semibold text-center cursor-pointer"
                      onClick={() => handleSort("severity")}
                    >
                      Serverity <FontAwesomeIcon icon={faSort} />
                    </div>
                  </th>
                  <th className="p-2 ">
                    <div
                      className="font-semibold text-center cursor-pointer"
                      onClick={() => handleSort("confidence")}
                    >
                      Confidential <FontAwesomeIcon icon={faSort} />
                    </div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">
                      Assets-Incidents
                    </div>
                  </th>
                  {/* <th className="p-2">
                  <div className="font-semibold text-center">Actions</div>
                </th> */}
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <>
                    {" "}
                    <>
                      <tr>
                        <td colSpan={6}>
                          <div className="animate-pulse w-full h-96 bg-zinc-900 flex items-center justify-center">
                            <div className="flex flex-col gap-4 items-center justify-center">
                              <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
                                <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </>
                  </>
                ) : (
                  <>
                    {" "}
                    {displayVulnerabilities.map((cve, index) => (
                      <tr key={index}>
                        <td className="p-2">
                          <div
                            className="flex items-center group relative"
                            onClick={() => {
                              handleCVEDetail(
                                getDomain(cve.affects_url, cve.port),
                                cve.vuln_id
                              );
                            }}
                          >
                            <input type="checkbox" className="mr-5" />{" "}
                            <span className="text-blue-500 cursor-pointer">
                              {getCVEName(cve.tags)}
                            </span>
                          </div>
                        </td>
                        <td className="p-2">
                          {cve.affects_detail ? (
                            <>
                              <div className="text-center text-green-500 ">
                                {cve.affects_detail}
                              </div>
                            </>
                          ) : (
                            <div className="text-center text-gray-400">
                              None
                            </div>
                          )}
                        </td>
                        <td className="p-2">
                          <div className="flex justify-center">
                            <span
                              className={`w-16 text-center px-2 inline-block rounded-md ${serverityColor(
                                cve.severity
                              )}`}
                            >
                              {serverityClass(cve.severity)}
                            </span>
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="text-center">{cve.confidence}</div>
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
                        {/* <td className="p-2 flex justify-center items-center space-x-3 text-center cursor-pointer">
                        <div className="text-blue-600 hover:text-blue-800">
                          <FontAwesomeIcon icon={faSquareCheck} />
                        </div>
                        <div
                          className="text-red-500 hover:text-red-800"
                          onClick={() => setmodal(true)}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </div>
                      </td> */}
                      </tr>
                    ))}
                  </>
                )}
              </tbody>
            </table>
            {/* Pagination */}
            <div className="flex items-center justify-between border-t border-zinc-700/60 bg-zinc-900  px-4 py-3 sm:px-6 text-white">
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
                        ? "cursor-not-allowed"
                        : "cursor-pointer"
                    } border rounded-lg border-zinc-700/60 text-gray-400 hover:bg-black hover:border-zinc-700 hover:text-white`}
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
                        ? "cursor-not-allowed"
                        : "cursor-pointer"
                    } border rounded-lg border-zinc-700/60 text-gray-400 hover:bg-black hover:border-zinc-700 hover:text-white`}
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
            </div>
          </div>
        </div>
        <div className="flex-col">
          {cveDetails.status && (
            <DomainCVEDetail
              cveDetails={cveDetails}
              setCveDetails={setCveDetails}
            />
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Vulner;

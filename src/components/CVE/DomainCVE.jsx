import React, { useEffect, useState } from "react";
import { data, serviceData } from "../../axios/data";
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
import { getCVEDetail, getDomainCVE } from "../../axios/CVEService/cveService";
import { getSubDomain } from "../../axios/ScanService/scanService";
import { dom } from "@fortawesome/fontawesome-svg-core";
import { prototype } from "postcss/lib/previous-map";
const DomainCVE = () => {
  const itemsPerPage = 10;
  const [modal, setmodal] = useState(false); //Exploited Modal
  const navigate = useNavigate();
  const [loading, setloading] = useState(true);
  const [chart, setchart] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filteredVulnerabilities, setFilteredVulnerabilities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("");
  const [domain, setdomain] = useState([]); // domain that have vunlnerabilities
  const [cveDetails, setCveDetails] = useState({});
  const [allDomain, setallDomain] = useState({
    status: "",
    results: [],
  }); // all subdomain of domain
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
        label: "",
        data: [],
        backgroundColor: [],
        hoverBackgroundColor: [],
        borderWidth: 0,
      },
    ],
  }); // chart data for vulnerabilities
  const [domainData, setdomainData] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        backgroundColor: [],
        hoverBackgroundColor: [],
        borderWidth: 0,
      },
    ],
  }); // chart data for domain
  const [securityData, setsecurityData] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        backgroundColor: [],
        hoverBackgroundColor: [],
        borderWidth: 0,
      },
    ],
  }); // chart data for security

  //fetch api data
  useEffect(() => {
    //fetch domain data
    const fetchData = async () => {
      const domain = localStorage.getItem("domain");
      if (domain) {
        const domainSet = new Set();
        try {
          const response = await getDomainCVE(domain);
          const domainResponse = await getSubDomain(domain);
          setdata(response.data);
          setallDomain(domainResponse.data);
          response.data.results
            .flatMap((item) => item.vulnerabilities)
            .forEach((item) => {
              const host = item.affects_url.split("/")[2]; // Extract the domain
              domainSet.add(host);
            });
          setdomain(Array.from(domainSet));
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchData();
    console.log(data);
    console.log(allDomain);
  }, []);

  //get the chart data
  useEffect(() => {
    try {
      if (data.status && allDomain.status) {
        setvulData(vulChart());
        setdomainData(domainChart());
        setsecurityData(securityChart());
        setchart(true);
      }
    } catch (error) {
      console.log(error);
    }
  }, [data, allDomain]);

  //filter and search vulnerabilities render
  useEffect(() => {
    try {
      let filtered = filterVulnerabilities();
      if (data.status && filtered.length > 0) {
        setFilteredVulnerabilities(filtered);
        setTotalPages(Math.ceil(filtered.length / itemsPerPage));
        console.log("filtered");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  }, [data, searchTerm, selectedDomain, currentPage]);

  // Define a reusable mapping for labels to base colors
  const labelColorMap = {
    CVE: "red",
    CWE: "yellow",
    VulnerDomain: "red",
    SecureDomain: "indigo",
    Critical: "red",
    High: "yellow",
    Low: "indigo",
    Info: "green",
  };

  // Generalized function to get background color or hover color
  const getColor = (label, shade) => {
    const colors = tailwindConfig().theme.colors;
    const color = labelColorMap[label] || "gray"; // Default to "gray" if label not found
    return colors[color][shade];
  };

  // Get background color
  const getBackgroundColor = (label) => getColor(label, 500);

  // Get hover background color
  const getHoverBackgroundColor = (label) => getColor(label, 600);

  //loading chart data
  const loadingChart = {
    labels: ["Loading ..."],
    datasets: [
      {
        label: "Numbers of Vulnerabilities",
        data: [1],
        backgroundColor: [getBackgroundColor("Loading ...")],
        hoverBackgroundColor: [getHoverBackgroundColor("Loading ...")],
        borderWidth: 0,
      },
    ],
  };

  //get the chart data for vulnerabilities
  const vulChart = () => {
    let vulnerabilities = data.results.flatMap((item) => item.vulnerabilities);
    // console.log(vulnerabilities);
    let vulPercentage = [];
    let vul = {
      labels: [],
      datasets: [
        {
          label: "Numbers of Vulnerabilities",
          data: [],
          backgroundColor: [],
          hoverBackgroundColor: [],
          borderWidth: 0,
        },
      ],
    };
    vulnerabilities.map((item) => {
      const cveName = getCVEName(item.tags).split("-")[0];
      if (!vul.labels.includes(cveName)) {
        vul.labels.push(cveName);
      }
      vulPercentage.push(cveName);
    });
    vul.labels.map((item, index) => {
      vul.datasets[0].data.push(vulPercentage.filter((x) => x === item).length);
      vul.datasets[0].backgroundColor.push(getBackgroundColor(item));
      vul.datasets[0].hoverBackgroundColor.push(getHoverBackgroundColor(item));
    });
    return vul;
  };

  //get the chart data for domain
  const domainChart = () => {
    let vul = {
      labels: ["VulnerDomain", "SecureDomain"],
      datasets: [
        {
          label: "Numbers of Domain",
          data: [],
          backgroundColor: [],
          hoverBackgroundColor: [],
          borderWidth: 0,
        },
      ],
    };
    vul.datasets[0].data.push(domain.length);
    vul.datasets[0].data.push(allDomain.results.length);
    vul.labels.map((item, index) => {
      vul.datasets[0].backgroundColor.push(getBackgroundColor(item));
      vul.datasets[0].hoverBackgroundColor.push(getHoverBackgroundColor(item));
    });
    return vul;
  };
  //get the chart data for security
  const securityChart = () => {
    const vulnerabilities = data.results.flatMap(
      (item) => item.vulnerabilities
    );
    // console.log(vulnerabilities);
    let percentage = [];
    let serviry = {
      Critical: 4,
      High: 3,
      Low: 2,
      Info: 1,
      Known: 0,
    };
    let vul = {
      labels: ["Critical", "High", "Low", "Info", "Known"],
      datasets: [
        {
          label: "Numbers of Vulnerabilities",
          data: [],
          backgroundColor: [],
          hoverBackgroundColor: [],
          borderWidth: 0,
        },
      ],
    };
    vulnerabilities.map((item) => {
      percentage.push(item.severity);
    });
    vul.labels.map((item, index) => {
      vul.datasets[0].data.push(
        percentage.filter((x) => x === serviry[item]).length
      );
      vul.datasets[0].backgroundColor.push(getBackgroundColor(item));
      vul.datasets[0].hoverBackgroundColor.push(getHoverBackgroundColor(item));
    });
    return vul;
  };

  //get vulnerability name
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
    let filtered = data.results.flatMap((item) => item.vulnerabilities);
    if (selectedDomain && selectedDomain !== "All Domain") {
      filtered = filtered.filter((item) =>
        item.affects_url.includes(selectedDomain)
      );
    }
    if (searchTerm) {
      filtered = filtered.filter((item) =>
        getCVEName(item.tags).toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    filtered.map((item) => {
      getcveDetail(item.affects_url, item.vuln_id);
    });
    return filtered;
  };

  //pagination vulnerabilities
  const displayVulnerabilities = data.status
    ? filteredVulnerabilities.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      )
    : [];

  //get cve detail
  const getcveDetail = async (domain, cveId) => {
    if (domain && cveId) {
      try {
        const response = await getCVEDetail(domain.split("/")[2], cveId);
        // console.log(response.data.request);
        setCveDetails((prevState) => ({
          ...prevState,
          [cveId]: response.data.request, // Store request under vulnId as key
        }));
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDomainChange = (e) => {
    setSelectedDomain(e.target.value);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  // console.log("search", searchTerm);
  // console.log("domain", selectedDomain);
  // console.log("filtered useState", filteredVulnerabilities);
  // console.log(totalPages);
  // console.log("alldomain", domain);

  //get total vulnerabilities that serverity is not 0
  const totalVul = () => {
    let total = 0;
    data.results.map((item) => {
      item.vulnerabilities.map((cve) => {
        if (cve.severity !== 0) {
          total += 1;
        }
      });
    });
    return total;
  };

  //get total vulnerabilities that serverity is 0
  const totalSecure = () => {
    let total = 0;
    data.results.map((item) => {
      item.vulnerabilities.map((cve) => {
        if (cve.severity === 0) {
          total += 1;
        }
      });
    });
    return total;
  };

  //Render cvss score color
  const serverityColor = (score) => {
    switch (score) {
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

  // console.log("vulData:", vulData);
  // console.log("domainData:", domainData);
  // console.log("securityData:", securityData);

  return (
    <>
      <div className="flex justify-between py-5">
        <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-zinc-900 shadow-lg rounded-md border border-zinc-700/60">
          <header className="px-5 py-4 border-b border-zinc-700/60">
            <h2 className="font-semibold text-slate-100">
              Vulnerabilities By Product
            </h2>
          </header>
          {vulData.labels.length > 0 ? (
            <DoughnutChart data={vulData} width={389} height={260} />
          ) : (
            <>
              <DoughnutChart data={loadingChart} width={389} height={260} />
              {vulData.labels}
            </>
            
          )}
        </div>
        <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-zinc-900  shadow-lg rounded-md border border-zinc-700/60">
          <header className="px-5 py-4 border-b border-zinc-700/60">
            <h2 className="font-semibold text-slate-100">
              Vulnerabilities By Source
            </h2>
          </header>
          {domainData.labels.length > 0 ? (
            <DoughnutChart data={domainData} width={389} height={260} />
          ) : (
            <>
              <DoughnutChart data={loadingChart} width={389} height={260} />
              {domainData.labels}
            </>
            
          )}
        </div>
        <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-zinc-900  shadow-lg rounded-md border border-zinc-700/60">
          <header className="px-5 py-4 border-b border-zinc-700/60">
            <h2 className="font-semibold text-slate-100">
              Vulnerabilities By Serverity
            </h2>
          </header>
          {securityData.labels.length > 0 ? (
            <DoughnutChart data={securityData} width={389} height={260} />
          ) : (
            <>
              <DoughnutChart data={loadingChart} width={389} height={260} />
              {securityData.labels}
            </>
          )}
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
            <div className="text-right">
              {data.status ? <>{totalVul()}</> : <>0</>}
            </div>
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
            <div className="text-right">
              {allDomain.status ? <>{allDomain.results.length}</> : <>0</>}
            </div>
          </div>
        </div>
        <div className="rounded-md bg-zinc-900  p-5 w-[389px]">
          <div className="flex justify-between">
            <div className="flex space-x-5">
              <div className="rounded-md px-3 py-3  bg-blue-700"></div>
              <div className="border-l-2 border-zinc-700/60 pl-2">Security</div>
            </div>
            <div className="text-right">
              {data.status ? <>{totalSecure()}</> : <>0</>}
            </div>
          </div>
        </div>
      </div>
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
              onChange={handleDomainChange}
            >
              <option value="">All Domain</option>
              {domain.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
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
      {modal && <ExploitedModal modal={modal} setmodal={setmodal} />}
      <div className="col-span-full xl:col-span-8 bg-zinc-900  shadow-lg rounded-sm border border-zinc-700/60">
        <header className="px-5 py-4 border-b  border-zinc-700/60">
          <h2 className="font-semibold  text-slate-100 ">
            Total CVEs:{" "}
            {data.status ? <>{filteredVulnerabilities.length}</> : <>0</>}
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
                    onClick={() => handleSort("cvss")}
                  >
                    Serverity <FontAwesomeIcon icon={faSort} />
                  </div>
                </th>
                <th className="p-2 ">
                  <div
                    className="font-semibold text-center cursor-pointer"
                    onClick={() => handleSort("is_exploit")}
                  >
                    Confidential <FontAwesomeIcon icon={faSort} />
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
                        <div className="flex items-center group relative">
                          <input type="checkbox" className="mr-5" />{" "}
                          {getCVEName(cve.tags).includes("CVE") ? (
                            <>
                              <div
                                className="text-blue-500 cursor-pointer line-clamp-1"
                                onClick={() => {
                                  navigate(`/CVE/${getCVEName(cve.tags)}`, {
                                    state: { cveid: getCVEName(cve.tags) },
                                  });
                                }}
                              >
                                {getCVEName(cve.tags)}
                              </div>
                            </>
                          ) : (
                            <>
                              <a
                                className="text-blue-500 cursor-pointer line-clamp-1"
                                href={`https://cwe.mitre.org/data/definitions/${
                                  getCVEName(cve.tags).split("-")[1]
                                }.html`}
                                target="_blank"
                              >
                                {getCVEName(cve.tags)}
                              </a>
                            </>
                          )}
                          <div className="invisible group-hover:visible transition-opacity duration-1000 delay-1000">
                            <div
                              className={`absolute z-10 pl-4 w-auto ${
                                index >= displayVulnerabilities.length - 4
                                  ? "bottom-0"
                                  : ""
                              }`}
                            >
                              <div className="border flex-col space-y-5 border-zinc-700 px-4 py-2 bg-zinc-900 rounded-md w-[450px] h-52 overflow-auto z-30">
                                <div className="text-sm text-gray-400">
                                  vt_Name: {cve.vt_name}
                                </div>
                                <div className="text-sm text-gray-400">
                                  Request:{" "}
                                  {cveDetails[cve.vuln_id]
                                    ? cveDetails[cve.vuln_id]
                                    : "Loading..."}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-2">
                        {cve.affects_detail ? (
                          <>
                            <div className="text-center text-gray-400">
                              {cve.affects_detail}
                            </div>
                          </>
                        ) : (
                          <div className="text-center text-green-500">
                            Updating
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
                      <td className="p-2 flex justify-center items-center space-x-3 text-center cursor-pointer">
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
                    currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"
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
      <ToastContainer />
    </>
  );
};

export default DomainCVE;

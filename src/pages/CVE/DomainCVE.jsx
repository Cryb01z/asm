import React, { useEffect, useState } from "react";
import { allCVEData, CVEData, data } from "../../axios/data";
import DoughnutChart from "../../charts/DoughnutChart";
// Import utilities
import {
  faArrowUpRightFromSquare,
  faFilter,
  faMagnifyingGlass,
  faSquareCheck,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { tailwindConfig } from "../../utils/Utils";

const DomainCVE = () => {
  const [test, setTest] = useState([]); // Store domain and service data
  const [vulnerabilities, setVulnerabilities] = useState([]); // Flattened vulnerabilities
  const [filteredVulnerabilities, setFilteredVulnerabilities] = useState([]); // Filtered vulnerabilities
  const [filter, setFilter] = useState({
    domain: "", // Selected domain
    scoreRange: "", // Selected CVSS score range
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of vulnerabilities per page

  useEffect(() => {
    setTest(data);
    // Extract vulnerabilities across all domains and services
    const flattenedVulnerabilities = [];
    data.forEach((domain) => {
      if (domain.services.length > 0) {
        domain.services.forEach((service) => {
          if (service.vulnerabilities.length > 0) {
            service.vulnerabilities.map((vul) => {
              flattenedVulnerabilities.push({
                domain: domain.domain,
                ...vul,
              });
            });
          }
        });
      }
    });
    setVulnerabilities(flattenedVulnerabilities);
    setFilteredVulnerabilities(flattenedVulnerabilities); // Initially set all vulnerabilities as filtered
  }, []);

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

  //Update filterState
  const handleFilterChange = (e) => {
    const { id, value } = e.target;
    setFilter((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Filter vulnerabilities based on domain and score
  useEffect(() => {
    const filtered = vulnerabilities.filter((vul) => {
      // Filter by domain
      const domainMatch = filter.domain
        ? vul.domain.toLowerCase().includes(filter.domain.toLowerCase())
        : true;

      // // Filter by score range
      // const score = parseFloat(vul.cvss);
      // const scoreMatch =
      //   score >= filter.scoreRange[0] && score <= filter.scoreRange[1];

      return domainMatch;
    });
    setCurrentPage(1);
    setFilteredVulnerabilities(filtered);
  }, [filter, vulnerabilities]);

  console.log(filter);

  // Pagination
  const paginatedData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredVulnerabilities.slice(startIndex, endIndex);
  };

  //Update current page
  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) {
      return; // Prevent the page from changing if out of bounds
    }
    setCurrentPage(newPage);
  };

  const totalPages = Math.ceil(filteredVulnerabilities.length / itemsPerPage);

  const chartData = {
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

  return (
    <>
      <div className="flex justify-between py-5">
        <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-slate-800 shadow-lg rounded-md border border-slate-700">
          <header className="px-5 py-4 border-b border-slate-700">
            <h2 className="font-semibold text-slate-100">
              Top Affected Products
            </h2>
          </header>

          <DoughnutChart data={chartData} width={389} height={260} />
        </div>
        <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-slate-800 shadow-lg rounded-md border border-slate-700">
          <header className="px-5 py-4 border-b border-slate-700">
            <h2 className="font-semibold text-slate-100">
              Vulnerabilities By Source
            </h2>
          </header>

          <DoughnutChart data={chartData} width={389} height={260} />
        </div>
        <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-slate-800 shadow-lg rounded-md border border-slate-700">
          <header className="px-5 py-4 border-b border-slate-700">
            <h2 className="font-semibold text-slate-100">
              Vulnerabilities By Serverity
            </h2>
          </header>

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
            <div className="text-right">386</div>
          </div>
        </div>
        <div className="rounded-md bg-slate-800 p-5 w-[389px]">
          <div className="flex justify-between">
            <div className="flex space-x-5">
              <div className="rounded-md px-3 py-3  bg-green-600"></div>
              <div className="border-l-2 border-slate-700 pl-2">
                Domain Check
              </div>
            </div>
            <div className="text-right">20</div>
          </div>
        </div>
        <div className="rounded-md bg-slate-800 p-5 w-[389px]">
          <div className="flex justify-between">
            <div className="flex space-x-5">
              <div className="rounded-md px-3 py-3  bg-blue-700"></div>
              <div className="border-l-2 border-slate-700 pl-2">Security</div>
            </div>
            <div className="text-right">115</div>
          </div>
        </div>
      </div>
      <div className="bg-slate-800 shadow-lg rounded-sm border px-5 py-4 border-b border-slate-700 mb-5">
        <h2 className="font-semibold text-slate-100 flex space-x-5">
          <div className="flex">
            <div>
              <FontAwesomeIcon icon={faFilter} /> Filter:
            </div>
            <select
              className="bg-slate-800 outline-none px-1"
              name=""
              id="domain"
              value={filter.domain}
              onChange={handleFilterChange}
            >
              <option value="">All Domain</option>
              {test.map((domain) => (
                <option key={domain.domain} value={domain.domain}>
                  {domain.domain}
                </option>
              ))}
            </select>
          </div>
          <span>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <input
            className="bg-slate-800 outline-none"
            type="text"
            placeholder="Search ..."
          />
        </h2>
      </div>
      <div className="col-span-full xl:col-span-8 bg-slate-800 shadow-lg rounded-sm border border-slate-700">
        <header className="px-5 py-4 border-b  border-slate-700">
          <h2 className="font-semibold  text-slate-100 ">
            Total CVEs: {filteredVulnerabilities.length}
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
                  <div className="font-semibold text-center">Type</div>
                </th>
                <th className="p-2 ">
                  <div className="font-semibold text-center">CVSS</div>
                </th>
                <th className="p-2 ">
                  <div className="font-semibold text-center">Exploited</div>
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
              {paginatedData().map((cve) => (
                <tr key={cve.id}>
                  <td className="p-2">
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-5" />{" "}
                      <NavLink to={`/CVE/${cve.id}`}>
                        <div className="text-blue-500 cursor-pointer line-clamp-1">
                          {cve.id}
                        </div>
                      </NavLink>
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
                  <td className="p-2  text-blue-500 hover:text-blue-700 text-center cursor-pointer">
                    {" "}
                    View Assets{" "}
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </td>
                  <td className="p-2  text-center cursor-pointer">
                    <span className="text-red-500 hover:text-red-800 mr-3">
                      <FontAwesomeIcon icon={faThumbsDown} />
                    </span>{" "}
                    <span className="text-blue-600 hover:text-blue-800">
                      <FontAwesomeIcon icon={faSquareCheck} />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination */}
          <div className="flex items-center justify-between border-t border-slate-700 bg-slate-800 px-4 py-3 sm:px-6 text-white">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default DomainCVE;

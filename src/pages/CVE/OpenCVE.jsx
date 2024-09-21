import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faShieldHalved } from "@fortawesome/free-solid-svg-icons";

const CVEList = () => {
  const [cveFilter, setcveFilter] = useState({
    tag: "",
    score: "",
    search: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const data = [
    {
      id: "CVE-2024-8655",
      vendor: "",
      product: "",
      update: "2024-09-12",
      score: "3.2",
      discription:
        "A vulnerability was found in Mercury MNVR816 up to 2.0.1.0.5. It has been classified as problematic. This affects an unknown part of the file /web-static/. The manipulation leads to files or directories accessible. It is possible to initiate the attack remotely. The exploit has been disclosed to the public and may be used. The vendor was contacted early about this disclosure but did not respond in any way.",
    },
    {
      id: "CVE-2024-8092",
      vendor: "",
      product: "",
      update: "2024-09-12",
      score: "5.3",
      discription:
        "A vulnerability was found in Mercury MNVR816 up to 2.0.1.0.5. It has been classified as problematic. This affects an unknown part of the file /web-static/. The manipulation leads to files or directories accessible. It is possible to initiate the attack remotely. The exploit has been disclosed to the public and may be used. The vendor was contacted early about this disclosure but did not respond in any way.",
    },
    {
      id: "CVE-2024-8091",
      vendor: "",
      product: "",
      update: "2024-09-12",
      score: "6.9",
      discription:
        "A vulnerability was found in Mercury MNVR816 up to 2.0.1.0.5. It has been classified as problematic. This affects an unknown part of the file /web-static/. The manipulation leads to files or directories accessible. It is possible to initiate the attack remotely. The exploit has been disclosed to the public and may be used. The vendor was contacted early about this disclosure but did not respond in any way.",
    },
    {
      id: "CVE-2024-8047",
      vendor: "",
      product: "",
      update: "2024-09-12",
      score: "9.8",
      discription:
        "A vulnerability was found in Mercury MNVR816 up to 2.0.1.0.5. It has been classified as problematic. This affects an unknown part of the file /web-static/. The manipulation leads to files or directories accessible. It is possible to initiate the attack remotely. The exploit has been disclosed to the public and may be used. The vendor was contacted early about this disclosure but did not respond in any way.",
    },
    {
      id: "CVE-2024-8044",
      vendor: "",
      product: "",
      update: "2024-09-12",
      score: "7.8",
      discription:
        "A vulnerability was found in Mercury MNVR816 up to 2.0.1.0.5. It has been classified as problematic. This affects an unknown part of the file /web-static/. The manipulation leads to files or directories accessible. It is possible to initiate the attack remotely. The exploit has been disclosed to the public and may be used. The vendor was contacted early about this disclosure but did not respond in any way.",
    },
    {
      id: "CVE-2024-8043",
      vendor: "",
      product: "",
      update: "2024-09-12",
      score: "5.4",
      discription:
        "A vulnerability was found in Mercury MNVR816 up to 2.0.1.0.5. It has been classified as problematic. This affects an unknown part of the file /web-static/. The manipulation leads to files or directories accessible. It is possible to initiate the attack remotely. The exploit has been disclosed to the public and may be used. The vendor was contacted early about this disclosure but did not respond in any way.",
    },
    {
      id: "CVE-2024-38014",
      vendor: "",
      product: "",
      update: "2024-09-12",
      score: "6.6",
      discription:
        "A vulnerability was found in Mercury MNVR816 up to 2.0.1.0.5. It has been classified as problematic. This affects an unknown part of the file /web-static/. The manipulation leads to files or directories accessible. It is possible to initiate the attack remotely. The exploit has been disclosed to the public and may be used. The vendor was contacted early about this disclosure but did not respond in any way.",
    },
    {
      id: "CVE-2022-25153",
      vendor: "",
      product: "",
      update: "2024-09-12",
      score: "8.4",
      discription:
        "A vulnerability was found in Mercury MNVR816 up to 2.0.1.0.5. It has been classified as problematic. This affects an unknown part of the file /web-static/. The manipulation leads to files or directories accessible. It is possible to initiate the attack remotely. The exploit has been disclosed to the public and may be used. The vendor was contacted early about this disclosure but did not respond in any way.",
    },
    {
      id: "CVE-2022-24386",
      vendor: "",
      product: "",
      update: "2024-09-12",
      score: "9.2",
      discription:
        "A vulnerability was found in Mercury MNVR816 up to 2.0.1.0.5. It has been classified as problematic. This affects an unknown part of the file /web-static/. The manipulation leads to files or directories accessible. It is possible to initiate the attack remotely. The exploit has been disclosed to the public and may be used. The vendor was contacted early about this disclosure but did not respond in any way.",
    },
    {
      id: "CVE-2022-24386",
      vendor: "",
      product: "",
      update: "2024-09-12",
      score: "9.2",
      discription:
        "A vulnerability was found in Mercury MNVR816 up to 2.0.1.0.5. It has been classified as problematic. This affects an unknown part of the file /web-static/. The manipulation leads to files or directories accessible. It is possible to initiate the attack remotely. The exploit has been disclosed to the public and may be used. The vendor was contacted early about this disclosure but did not respond in any way.",
    },
    {
      id: "CVE-2022-24386",
      vendor: "",
      product: "",
      update: "2024-09-12",
      score: "9.2",
      discription:
        "A vulnerability was found in Mercury MNVR816 up to 2.0.1.0.5. It has been classified as problematic. This affects an unknown part of the file /web-static/. The manipulation leads to files or directories accessible. It is possible to initiate the attack remotely. The exploit has been disclosed to the public and may be used. The vendor was contacted early about this disclosure but did not respond in any way.",
    },
    {
      id: "CVE-2022-24386",
      vendor: "",
      product: "",
      update: "2024-09-12",
      score: "9.2",
      discription:
        "A vulnerability was found in Mercury MNVR816 up to 2.0.1.0.5. It has been classified as problematic. This affects an unknown part of the file /web-static/. The manipulation leads to files or directories accessible. It is possible to initiate the attack remotely. The exploit has been disclosed to the public and may be used. The vendor was contacted early about this disclosure but did not respond in any way.",
    },
  ];

  //Render cvss score color
  const getScoreColor = (cvss) => {
    if (cvss >= 0 && cvss < 4) {
      return "bg-green-500";
    } else if (cvss >= 4 && cvss < 7) {
      return "bg-yellow-500";
    } else if (cvss >= 7 && cvss < 9) {
      return "bg-orange-600";
    } else if (cvss >= 9 && cvss <= 10) {
      return "bg-red-600";
    } else {
      return "bg-gray-500";
    }
  };

  //Add score level
  const getScore = (cvss) => {
    if (cvss >= 0 && cvss < 4) {
      return `${cvss} Low`;
    } else if (cvss >= 4 && cvss < 7) {
      return `${cvss} Medium`;
    } else if (cvss >= 7 && cvss < 9) {
      return `${cvss} High`;
    } else if (cvss >= 9 && cvss <= 10) {
      return `${cvss} Critical`;
    } else {
      return "Undefined";
    }
  };


  //Update filterState
  const handleFilterChange = (e) => {
    const { id, value } = e.target;
    setcveFilter((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  //Filter by score and cve ID
  const filterData = () => {
    return data.filter((cve) => {
      // Filter by score range
      const score = parseFloat(cve.score);
      let scoreMatch = true;
      if (cveFilter.score) {
        const [minScore, maxScore] = cveFilter.score.split(" - ").map(Number);
        scoreMatch = score >= minScore && score <= maxScore;
      }

      // Filter by search text
      const searchMatch = cve.id
        .toLowerCase()
        .includes(cveFilter.search.toLowerCase());

      // Combine the filters
      return scoreMatch && searchMatch;
    });
  };

  // Pagination
  const paginatedData = () => {
    const filteredData = filterData();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredData.slice(startIndex, endIndex);
  };

  //Update current page
  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) {
      return; // Prevent the page from changing if out of bounds
    }
    setCurrentPage(newPage);
  };

  const totalPages = Math.ceil(filterData().length / itemsPerPage);

  return (
    <>
      <div className="flex mt-4 space-x-10">
        <div className="flex space-x-7 p-4 border-t-4 rounded-sm border-blue-700 bg-slate-800 w-[900px]">
          <div className="py-2">
            <FontAwesomeIcon icon={faFilter} size="lg"/> <span className="text-lg">Filter:</span>
          </div>
          <select
            id="tag"
            value={cveFilter.tag}
            onChange={handleFilterChange}
            className="w-48 border text-sm rounded-sm block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select a tag</option>
            <option value="US">No results found</option>
          </select>
          <select
            id="score"
            value={cveFilter.score}
            onChange={handleFilterChange}
            className="w-48 border text-sm rounded-sm block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Empty</option>
            <option value="0 - 3.9">Low (0 - 3.9)</option>
            <option value="4 - 6.9">Medium (4.0 - 6.9)</option>
            <option value="7 - 8.9">High (7.0 - 8.9)</option>
            <option value="9 - 10">Critical (9.0 - 10.0)</option>
          </select>
          <input
            id="search"
            type="text"
            value={cveFilter.search}
            onChange={handleFilterChange}
            className="w-52 border text-sm rounded-sm block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search in CVEs"
          />
          <div className="ml-10 border text-sm rounded-sm flex items-center justify-center px-4 bg-blue-600 hover:bg-blue-700 cursor-pointer">
            Search
          </div>
        </div>
        <div className="flex rounded-sm bg-slate-800 w-[320px]">
          <div className="flex items-center justify-center bg-blue-700 w-20 h-20">
            <FontAwesomeIcon icon={faShieldHalved} size="2xl" />
          </div>
          <div className="text-lg p-2">
            TOTAL <br />
            <span className="font-bold">262540 CVE</span>
          </div>
        </div>
      </div>
      <table className="table-auto bg-slate-800 mt-4 w-full">
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
          {paginatedData().map((cve) => (
            <>
              <tr className="border-t-2 border-gray-500">
                <NavLink to={`/CVE/${cve.id}`}>
                  <td className="p-2 text-left text-blue-600 cursor-pointer">
                    {cve.id}
                  </td>
                </NavLink>
                <td className="p-2 text-left"></td>
                <td className="p-2 text-left"></td>
                <td className="p-2 text-center">{cve.update}</td>
                <td className="p-2 text-center">
                  <span
                    className={`px-2 text-sm rounded-sm ${getScoreColor(
                      cve.score
                    )}`}
                  >
                    {getScore(cve.score)}
                  </span>
                </td>
              </tr>
              <tr>
                <td className="p-2 text-sm" colSpan={5}>
                  {cve.discription}
                </td>
              </tr>
            </>
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
                {Math.min(currentPage * itemsPerPage, filterData().length)}
              </span>{" "}
              of <span className="font-medium">{filterData().length}</span>{" "}
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
    </>
  );
};

export default CVEList;

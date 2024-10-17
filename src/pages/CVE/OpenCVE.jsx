import { faFilter, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCVES, searchCVES } from "../../axios/cveService";

const OpenCVE = () => {
  const [cveFilter, setcveFilter] = useState({
    search: "",
  });
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [loading, setloading] = useState(false);
  const [cveData, setcveData] = useState({
    cves: [
      {
        id: "",
        descriptions: [
          {
            lang: "",
            value: "",
          },
        ],
        configurations: null,
        lastModified: "",
        score: 0,
      },
    ],
    page: 0,
    pageCount: 0,
    pageSize: 0,
  });

  useEffect(() => {
    console.log("useEffect running");
    const fetchData = async () => {
      if (cveFilter.search === "") {
        try {
          const response = await getCVES(currentPage, itemsPerPage);
          const cves = response.data;
          console.log(cves);
          setcveData(cves);
        } catch (error) {
          console.error("Error fetching CVEs:", error);
        } finally {
          setloading(true);
        }
      } else {
        try {
          const response = await searchCVES(
            cveFilter.search,
            currentPage,
            itemsPerPage
          );
          const cves = response.data;
          setcveData(cves);
        } catch (error) {
          console.error("Error fetching CVEs:", error);
        } finally {
          setloading(true);
        }
      }
    };
    fetchData();
  }, [currentPage, itemsPerPage, cveFilter]);
  console.log(cveData);

  //Filter change
  const handleFilterChange = async (key, e) => {
    setcveFilter((prev) => ({ ...prev, [key]: e.target.value }));
  };

  //Render cvss score color
  const getScoreColor = (cvss) => {
    if (cvss > 0 && cvss < 4) {
      return "bg-green-500";
    } else if (cvss >= 4 && cvss < 7) {
      return "bg-yellow-500";
    } else if (cvss >= 7 && cvss < 9) {
      return "bg-orange-600";
    } else if (cvss >= 9 && cvss <= 10) {
      return "bg-red-600";
    } else if (cvss === null) {
      return "bg-gray-500";
    } else {
      return "bg-gray-500";
    }
  };

  //Add score level
  const getScore = (cvss) => {
    if (cvss > 0 && cvss < 4) {
      return `${cvss} Low`;
    } else if (cvss >= 4 && cvss < 7) {
      return `${cvss} Medium`;
    } else if (cvss >= 7 && cvss < 9) {
      return `${cvss} High`;
    } else if (cvss >= 9 && cvss <= 10) {
      return `${cvss} Critical`;
    } else if (cvss === null) {
      return "Undefined";
    } else {
      return "Undefined";
    }
  };

  //Update current page
  const handlePageChange = async (newPage) => {
    if (newPage < 1 || newPage > totalPages) {
      return; // Prevent the page from changing if out of bounds
    }
    setCurrentPage(newPage);
  };

  //custom date format
  const customDate = (date) => {
    return new Date(date).toISOString().split("T")[0];
  };

  const totalPages = Math.ceil(cveData.pageCount / itemsPerPage);

  return (
    <>
      <div className="flex mt-4 justify-between">
        <div className="flex space-x-7 p-4 border-2 rounded-lg border-zinc-700/60 hover:border-zinc-700 hover:bg-zinc-900 w-[900px]">
          <div className="py-2">
            <FontAwesomeIcon icon={faFilter} size="lg" />{" "}
            <span className="text-lg">Filter:</span>
          </div>
          <select
            id="tag"
            value={cveFilter.tag}
            className="w-48 border text-sm rounded-sm block p-2.5 bg-black border-zinc-700/60 placeholder-gray-400"
          >
            <option value="">Select a tag</option>
            <option value="US">No results found</option>
          </select>
          <select
            id="score"
            value={cveFilter.score}
            className="w-48 border text-sm rounded-sm block p-2.5 bg-black border-zinc-700/60 placeholder-gray-400"
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
            onChange={(e) => handleFilterChange("search", e)}
            className="w-52 border text-sm rounded-sm block p-2.5 bg-black border-zinc-700/60 placeholder-gray-400"
            placeholder="Search in CVEs"
          />
          <div className="ml-10 font-semibold text-black text-sm rounded-md flex items-center justify-center px-4 bg-white hover:bg-white/80 cursor-pointer">
            Search
          </div>
        </div>
        <div className="flex rounded-lg bg-black border border-zinc-700/60 w-[320px] hover:bg-zinc-900">
          <div className="flex items-center justify-center w-20 h-20">
            <span className="text-blue-600">
              <FontAwesomeIcon icon={faShieldHalved} size="2xl" />
            </span>
          </div>
          <div className="text-lg p-2">
            TOTAL <br />
            <span className="font-bold">262540 CVE</span>
          </div>
        </div>
      </div>
      <table className="table-auto bg-zinc-900 mt-4 w-full">
        <thead className="border border-zinc-700 font-bold">
          <tr>
            <th className="p-2 text-left w-56">CVE</th>
            <th className="p-2 text-left w-80">Vendors</th>
            <th className="p-2 text-left w-80">Products</th>
            <th className="p-2 w-48">Updated</th>
            <th className="p-2 w-44">CVSS v3.1</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            cveData.cves.map((cve) => (
              <>
                <tr className="border-t-2 border-zinc-700">
                  <td
                    className="p-2 text-left text-blue-600 cursor-pointer"
                    onClick={() => {
                      navigate(`/CVE/${cve.id}`, { state: { cveid: cve.id } });
                    }}
                  >
                    {cve.id}
                  </td>
                  <td className="p-2 text-left">
                    {cve.configurations === null ? "" : ""}
                  </td>
                  <td className="p-2 text-left">
                    {cve.configurations === null ? "" : ""}
                  </td>
                  <td className="p-2 text-center">
                    {customDate(cve.lastModified)}
                  </td>
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
                    {cve.descriptions[0].value}
                  </td>
                </tr>
              </>
            ))
          ) : (
            <>
              <div className="animate-pulse">
                <div className="w-full h-96 bg-zinc-900"></div>
              </div>
            </>
          )}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="flex items-center justify-between border border-zinc-700 rounded-md bg-black px-4 py-3 sm:px-6 text-white">
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm">
              Showing{" "}
              <span className="font-medium">
                {(currentPage - 1) * itemsPerPage + 1}
              </span>{" "}
              to{" "}
              <span className="font-medium">
                {Math.min(currentPage * itemsPerPage, cveData.pageCount)}
              </span>{" "}
              of <span className="font-medium">{cveData.pageCount}</span>{" "}
              results
            </p>
          </div>
          <div className="flex space-x-5">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`flex items-center w-28 justify-center px-3 h-8 text-sm font-medium ${
                currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"
              } border rounded-lg bg-black border-zinc-700/60 text-gray-400 hover:bg-zinc-900 hover:border-zinc-700 hover:text-white`}
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
              } border rounded-lg bg-black border-zinc-700/60 text-gray-400 hover:bg-zinc-900 hover:border-zinc-700 hover:text-white`}
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

export default OpenCVE;

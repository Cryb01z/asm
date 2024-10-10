import React, { useEffect, useState } from "react";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import { data, serviceData } from "../../axios/data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faFilter,
  faMagnifyingGlass,
  faSquareCheck,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";

const Service = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [test, setTest] = useState([]); // Store domain and service data
  const [services, setservices] = useState([]); // Flattened service
  const [filterServices, setfilterServices] = useState([]); // Filtered service
  const [filter, setFilter] = useState({
    domain: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of vulnerabilities per page

  useEffect(() => {
    setTest(data);
    // Extract vulnerabilities across all domains and services
    const flattenedServices = [];
    data.forEach((domain) => {
      if (domain.services.length > 0) {
        domain.services.forEach((service) => {
          flattenedServices.push({ domain: domain.domain, ...service });
        });
      }
    });
    setservices(flattenedServices);
    setfilterServices(flattenedServices); // Initially set all service as filtered
  }, []);

  console.log(services);
  const nav = useNavigate();
  //Redirect to vul
  const handleRedirectToCVE = (service, vulnerabilities) => {
    if (vulnerabilities.length === 0) {
      toast.info(`There is no CVE of service:${service}`);
      return;
    }
    nav(`/CVE/service?name=${service}`);
  };

  //Update filterState
  const handleFilterChange = (e) => {
    const { id, value } = e.target;
    setFilter((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Filter service based on domain
  useEffect(() => {
    const filtered = services.filter((service) => {
      // Filter by domain
      const domainMatch = filter.domain
        ? service.domain.toLowerCase().includes(filter.domain.toLowerCase())
        : true;
      return domainMatch;
    });

    setfilterServices(filtered);
  }, [filter, services]);

  console.log(filter);

  // Pagination
  const paginatedData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filterServices.slice(startIndex, endIndex);
  };

  //Update current page
  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) {
      return; // Prevent the page from changing if out of bounds
    }
    setCurrentPage(newPage);
  };
  const totalPages = Math.ceil(filterServices.length / itemsPerPage);
  return (
    <div className="bg-gray-900 flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header
          tittle={"Service"}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 pb-8 w-full max-w-9xl  text-slate-400">
            <div className="bg-slate-800 shadow-lg rounded-sm border px-5 py-4 border-b border-slate-700 mb-5 mt-5">
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
            <div className="mt-5 col-span-full xl:col-span-8 bg-slate-800 shadow-lg rounded-sm border border-slate-700">
              <header className="px-5 py-4 border-b  border-slate-700">
                <h2 className="font-semibold  text-slate-100">
                  Total Services: {filterServices.length}
                </h2>
              </header>
              <div className="p-3">
                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="uppercase">
                        <th className="p-2">
                          <div className="font-semibold text-left flex items-center">
                            <input type="checkbox" className="mr-5" />{" "}
                            <span>Name</span>
                          </div>
                        </th>
                        <th className="p-2">
                          <div className="font-semibold text-center">Port</div>
                        </th>
                        <th className="p-2">
                          <div className="font-semibold text-center">
                            software
                          </div>
                        </th>
                        <th className="p-2">
                          <div className="font-semibold text-center">
                            version
                          </div>
                        </th>
                        <th className="p-2">
                          <div className="font-semibold text-center">
                            Vulnerabilites
                          </div>
                        </th>
                        <th className="p-2">
                          <div className="font-semibold text-center">
                            Domain
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
                    <tbody>
                      {paginatedData().map((service) => (
                        <tr>
                          <td className="p-2">
                            <div className="flex items-center">
                              <input type="checkbox" className="mr-5" />{" "}
                              <div className="text-blue-500">
                                {service.service_name}
                              </div>
                            </div>
                          </td>
                          <td className="p-2">
                            <div className="text-center">{service.port}</div>
                          </td>
                          <td className="p-2">
                            {service.software.map((item) => (
                              <div className="text-center">
                                {item.product !== ""
                                  ? item.vendor
                                  : "Not Found"}
                              </div>
                            ))}
                          </td>
                          <td className="p-2">
                            {service.software.map((item) => (
                              <div className="text-center">
                                {item.version !== ""
                                  ? item.version
                                  : "Not Found"}
                              </div>
                            ))}
                          </td>
                          <td className="p-2">
                            <div
                              className="text-center underline text-blue-700 hover:text-blue-500"
                              onClick={(e) => {
                                e.preventDefault();
                                handleRedirectToCVE(
                                  service.service_name,
                                  service.vulnerabilities
                                );
                              }}
                            >
                              view more
                            </div>
                          </td>
                          <td className="p-2">{service.domain}</td>
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
                              filterServices.length
                            )}
                          </span>{" "}
                          of{" "}
                          <span className="font-medium">
                            {filterServices.length}
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
            </div>
          </div>
          <ToastContainer />
        </main>
      </div>
    </div>
  );
};

export default Service;

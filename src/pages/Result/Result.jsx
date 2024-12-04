import {
  faArrowRightArrowLeft,
  faBug,
  faHandPointRight,
  faHome,
  faMessage,
  faReply,
  faSquarePollVertical,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getAllScanInfo,
  getScanInfo,
} from "../../axios/ScanService/scanService";
import Navbar from "../../components/Navbar/Navbar";
import HTTP from "../../components/ScanResult/HTTP";
import Links from "../../components/ScanResult/Links";
import Redirects from "../../components/ScanResult/Redirects";
import Summary from "../../components/ScanResult/Summary";
import Vulner from "../../components/ScanResult/Vulner";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { all } from "axios";
import Behaviour from "../../components/ScanResult/Behaviour";
import { dom } from "@fortawesome/fontawesome-svg-core";
const Result = () => {
  const [option, setoption] = useState("result");
  const location = useLocation();
  const { domain, optionState, port } = location.state || {};
  const [options, setoptions] = useState(optionState);
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();
  const [allData, setallData] = useState({});
  const [data, setdata] = useState({
    status: "",
    results: {
      domain: "",
      discovery_reason: "",
      is_online: true,
      discovery_on: "",
      ip: [""],
      services: [
        {
          http: {
            request: {
              method: "",
              uri: "",
            },
            response: {
              status_code: 0,
              status_reason: "",
              header_location: null,
              html_title: "",
            },
            full_info: {
              message: "",
              uuid: "",
              result: "",
              api: "",
              visibility: "",
              options: {},
              url: "",
              country: "",
            },
          },
          port: "",
          service_name: "",
          cpe: null,
          software: [
            {
              vendor: "",
              product: "",
              version: "",
            },
          ],
          vulnerabilities: [],
        },
      ],
      ssl: [
        {
          expiry_date: 0,
          issue_date: 0,
          id: "",
          grade: "",
          issuerSubject: "",
          subject_alt_names: [],
          subject_cn: [],
          serialNumber: "",
          raw: "",
          sigAlg: "",
          subject: "",
          validationType: "",
          version: "",
        },
      ],
      technology: [
        {
          categories: "",
          subtech: [
            {
              technology: "",
              version: "",
              description: "",
            },
          ],
        },
      ],
      autonomous_system: {
        asn: "",
        description: "",
        bgp_prefix: [],
        name: "",
        country_code: "",
      },
      operating_system: {
        vendor: "",
        cpe: null,
        port: 0,
      },
      dns: {
        ttl: 0,
        resolver: [],
        a: [],
        soa: [
          {
            name: "",
            ns: "",
            mailbox: "",
            serial: 0,
            refresh: 0,
            retry: 0,
            expire: 0,
            minttl: 0,
          },
        ],
        txt: [],
        all: [],
        status_code: "",
        axfr: {
          host: "",
        },
        timestamp: "",
      },
    },
  });

  // console.log("Domain:", domain);
  // console.log("OptionState:", options);

  useEffect(() => {
    console.log("UseEffect is called");
    const fetchData = async () => {
      const response = await getScanInfo(domain);
      // console.log(response.data.results);
      const id = await getId(response.data.results.services);
      // console.log(id);
      if (id) {
        const allInformation = await getAllScanInfo(id);
        // console.log("asdasd", allInformation);
        setallData(allInformation.data);
      }
      setdata(response.data);
      setloading(false);
    };
    if (domain && port !== "22") {
      fetchData();
    } else {
      setallData(null)
      setloading(false);
    }
  }, [domain]);
  // console.log(data);
  // console.log(domain);
  const handdleOption = (option) => {
    setoptions((prev) => (prev = option));
  };

  //get uuid
  const getId = async (services) => {
    // console.log(services);
    // console.log(port);
    const service = services.find((item) => item.port === port);
    // console.log("found", service);
    return service.http.full_info.uuid || null;
  };

  // Custom date formatter
  const customDate = (dateString) => {
    const date = new Date(dateString); // Parse the ISO date string
    if (isNaN(date)) {
      throw new Error("Invalid date format");
    }

    // Format to "Month Day" (e.g., "July 31")
    return date.toLocaleDateString("en-US", { month: "long", day: "numeric" });
  };

  // console.log("All Data", allData);

  if (loading) {
    return (
      <>
        {" "}
        <div className="bg-black text-gray-400 flex overflow-hidden h-screen pb-20">
          <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {/*  Site header */}
            <Navbar site={"scan"} />
            <div className="animate-pulse w-full h-screen bg-black flex items-center justify-center">
              <div className="flex flex-col gap-4 items-center justify-center">
                <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
                  <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="bg-black text-gray-400 flex overflow-hidden h-[calc(80%)] pb-20">
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Navbar site={"scan"} />

        {/*  site nav */}
        <div className="px-8 py-2 sticky top-[65px] z-10 bg-black">
          <div className="flex space-x-1 text-sm">
            <div className="flex items-center relative group">
              {/* Icon with hover */}
              <div
                className="px-2 pb-2 cursor-pointer z-10 text-gray-400"
                onClick={() => {
                  navigate("/scan");
                }}
              >
                <FontAwesomeIcon icon={faReply} size="lg" />
              </div>

              {/* Tooltip - only visible on hover */}
              <div className="absolute text-black w-[68px] bg-white px-2 py-1.5 top-8 -left-3 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-default">
                Go back
              </div>
            </div>

            <div className="px-2 pb-2 cursor-pointer border-b-2 border-indigo-400 z-10 text-white font-semibold">
              <span className="text-indigo-400">
                <FontAwesomeIcon icon={faSquarePollVertical} />
              </span>{" "}
              {domain}
            </div>
          </div>
          <div className="absolute bottom-2 left-0 w-full border-b-2 border-neutral-800"></div>
        </div>

        <div className=" text-white flex px-20">
          <div className="relative flex flex-col flex-1 ">
            <main className="mt-5 px-20">
              {port === "22" ? (
                <>
                  <div className="text-3xl font-bold mb-4">This is SSH service of {domain}</div>
                </>
              ) : (
                <>
                  <div className="flex justify-between">
                    <div className="text-2xl font-bold">
                      {allData.page.domain}
                    </div>
                    {/* <div className="flex space-x-2 text-sm">
                  <div className="bg-black border-2 border-zinc-700/60 px-2 py-1 rounded-md hover:bg-zinc-900 hover:border-zinc-700  cursor-pointer">
                    <FontAwesomeIcon icon={faMagnifyingGlass} /> Lookup{" "}
                    <FontAwesomeIcon icon={faCaretDown} />
                  </div>
                  <div className="bg-black border-2 border-zinc-700/60 px-2 py-1 rounded-md hover:bg-zinc-900 hover:border-zinc-700  cursor-pointer">
                    <FontAwesomeIcon icon={faShare} /> Go To
                  </div>
                  <div className="bg-black border-2 border-zinc-700/60 px-2 py-1 rounded-md hover:bg-zinc-900 hover:border-zinc-700  cursor-pointer">
                    <FontAwesomeIcon icon={faArrowRightRotate} /> Rescan
                  </div>
                </div> */}
                  </div>
                  <div className="flex justify-between my-3">
                    <div className="flex space-x-5">
                      <div className="text-gray-400 text-2xl">
                        {allData.page.ip}{" "}
                        <span
                          class={`fi fi-${allData.page.country.toLowerCase()}`}
                        ></span>
                      </div>
                      <div class="flex justify-center items-center">
                        <div class="text-xs bg-indigo-500 rounded-md px-2 py-1 font-bold hover:bg-indigo-700 cursor-pointer">
                          Public Scan
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2 text-sm">
                      {/* <div className="bg-zinc-700 px-2 py-1 rounded-md hover:bg-zinc-700/60 cursor-pointer">
                    <FontAwesomeIcon icon={faMessage} size="sm" /> {}
                    Add Verdict
                  </div>
                  <div className="bg-black border-2 border-zinc-700/60 px-2 py-1 rounded-md hover:bg-zinc-900 hover:border-zinc-700  cursor-pointer">
                    <FontAwesomeIcon icon={faCircleExclamation} /> {}
                    Report
                  </div> */}
                    </div>
                  </div>
                  <div className="font-bold">
                    Submitted URL:{" "}
                    <span className="font-normal text-gray-300">https://</span>
                    <span className="text-green-500">
                      {allData.page.domain}
                    </span>
                  </div>
                  <div className="font-bold">
                    Effective URL:{" "}
                    <span className="font-normal text-gray-300">https://</span>
                    <span className="text-green-500">
                      {allData.page.domain}
                    </span>
                  </div>
                  <div className="text-sm mb-2">
                    <span className="font-bold">Submission:</span> On{" "}
                    {customDate(data.results.discovery_on)} via api, from{" "}
                    <span className="px-2 rounded-md border border-zinc-700 bg-zinc-900">
                      {allData.submitter.country}{" "}
                      <span
                        class={`fi fi-${allData.submitter.country.toLowerCase()}`}
                      ></span>{" "}
                    </span>
                    — Scanned from
                    <span className="px-2 rounded-md border border-zinc-700 bg-zinc-900">
                      {allData.scanner.country}{" "}
                      <span
                        class={`fi fi-${allData.scanner.country.toLowerCase()}`}
                      ></span>{" "}
                    </span>
                  </div>
                </>
              )}
              <div className="flex flex-row text-sm">
                <button
                  className={
                    options === "Summary"
                      ? `px-3 py-1.5 bg-zinc-900 border-2 border-zinc-700 rounded-md ${
                          port === "22"
                            ? "cursor-not-allowed hidden"
                            : "cursor-pointer"
                        }`
                      : `px-3 py-1.5 bg-black border-2 border-zinc-700/60 rounded-md hover:bg-zinc-900 hover:border-zinc-700 ${
                          port === "22"
                            ? "cursor-not-allowed hidden"
                            : "cursor-pointer"
                        }`
                  }
                  onClick={() => {
                    if (port === "22") {
                      return;
                    }
                    handdleOption("Summary");
                  }}
                >
                  <span
                    className={`${
                      options === "Summary" ? "text-indigo-400" : ""
                    }`}
                  >
                    <FontAwesomeIcon icon={faHome} />
                  </span>{" "}
                  <span
                    className={`${options === "Summary" ? "font-bold" : ""}`}
                  >
                    Summary
                  </span>
                </button>
                <div
                  className={
                    options === "HTTP"
                      ? `px-3 py-1.5 bg-zinc-900 border-2 border-zinc-700 rounded-md ${
                          port === "22"
                            ? "cursor-not-allowed hidden"
                            : "cursor-pointer"
                        }`
                      : `px-3 py-1.5 bg-black border-2 border-zinc-700/60 rounded-md hover:bg-zinc-900 hover:border-zinc-700 ${
                          port === "22"
                            ? "cursor-not-allowed hidden"
                            : "cursor-pointer"
                        }`
                  }
                  onClick={() => {
                    if (port === "22") {
                      return;
                    }
                    handdleOption("HTTP");
                  }}
                >
                  <span
                    className={`${options === "HTTP" ? "text-indigo-400" : ""}`}
                  >
                    <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                  </span>{" "}
                  <span className={`${options === "HTTP" ? "font-bold" : ""}`}>
                    HTTP{" "}
                    <span
                      className={`px-1.5 ${
                        options === "HTTP" ? "bg-indigo-500" : "bg-zinc-700 "
                      } rounded-md`}
                    >
                      {allData ? allData.data.requests.length : ""}
                    </span>
                  </span>
                </div>
                <div
                  className={
                    options === "vulner"
                      ? "px-3 py-1.5 bg-zinc-900 border-2 border-zinc-700 rounded-md cursor-pointer"
                      : "px-3 py-1.5 bg-black border-2 border-zinc-700/60 rounded-md hover:bg-zinc-900 hover:border-zinc-700 cursor-pointer"
                  }
                  onClick={() => {
                    handdleOption("vulner");
                  }}
                >
                  <span
                    className={`${
                      options === "vulner" ? "text-indigo-400" : ""
                    }`}
                  >
                    <FontAwesomeIcon icon={faBug} />
                  </span>{" "}
                  <span
                    className={`${options === "vulner" ? "font-bold" : ""}`}
                  >
                    Vulnerabilities
                  </span>
                </div>
                {/* <div
                  className={
                    options === "Redirects"
                      ? "px-3 py-1.5 bg-zinc-900 border-2 border-zinc-700 rounded-md cursor-pointer"
                      : "px-3 py-1.5 bg-black border-2 border-zinc-700/60 rounded-md hover:bg-zinc-900 hover:border-zinc-700 cursor-pointer"
                  }
                  onClick={() => {
                    handdleOption("Redirects");
                  }}
                >
                  <span
                    className={`${
                      options === "Redirects" ? "text-indigo-400" : ""
                    }`}
                  >
                    <FontAwesomeIcon icon={faShare} />
                  </span>{" "}
                  <span
                    className={`${options === "Redirects" ? "font-bold" : ""}`}
                  >
                    Redirects
                  </span>
                </div> */}
                <div
                  className={
                    options === "Links"
                      ? `px-3 py-1.5 bg-zinc-900 border-2 border-zinc-700 rounded-md ${
                          port === "22"
                            ? "cursor-not-allowed hidden"
                            : "cursor-pointer"
                        }`
                      : `px-3 py-1.5 bg-black border-2 border-zinc-700/60 rounded-md hover:bg-zinc-900 hover:border-zinc-700 ${
                          port === "22"
                            ? "cursor-not-allowed hidden"
                            : "cursor-pointer"
                        }`
                  }
                  onClick={() => {
                    if (port === "22") {
                      return;
                    }
                    handdleOption("Links");
                  }}
                >
                  <span
                    className={`${
                      options === "Links" ? "text-indigo-400" : ""
                    }`}
                  >
                    <FontAwesomeIcon icon={faHandPointRight} />
                  </span>{" "}
                  <span className={`${options === "Links" ? "font-bold" : ""}`}>
                    Links{" "}
                    <span
                      className={`px-1.5 ${
                        options === "Links" ? "bg-indigo-500" : "bg-zinc-700 "
                      } rounded-md`}
                    >
                      {allData ? allData.data.links.length : ""}
                    </span>
                  </span>
                </div>
                <div
                  className={
                    options === "Behaviour"
                      ? `px-3 py-1.5 bg-zinc-900 border-2 border-zinc-700 rounded-md ${
                          port === "22"
                            ? "cursor-not-allowed hidden"
                            : "cursor-pointer"
                        }`
                      : `px-3 py-1.5 bg-black border-2 border-zinc-700/60 rounded-md hover:bg-zinc-900 hover:border-zinc-700 ${
                          port === "22"
                            ? "cursor-not-allowed hidden"
                            : "cursor-pointer"
                        }`
                  }
                  onClick={() => {
                    if (port === "22") {
                      return;
                    }
                    handdleOption("Behaviour");
                  }}
                >
                  <FontAwesomeIcon icon={faMessage} /> Behaviour
                </div>
              </div>
              {options === "Summary" && (
                <Summary data={data.results} allData={allData} />
              )}
              {options === "HTTP" && (
                <HTTP data={data.results} allData={allData} />
              )}
              {options === "Redirects" && <Redirects />}
              {options === "Links" && <Links allData={allData} />}
              {options === "Behaviour" && <Behaviour allData={allData} />}
              {options === "vulner" && (
                <Vulner domain={domain} port={port} />
              )}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Result;

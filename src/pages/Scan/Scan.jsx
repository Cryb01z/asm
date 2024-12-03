import {
  faBullseye,
  faCheck,
  faClock,
  faCodeCompare,
  faMagnifyingGlass,
  faPlus,
  faRotate,
  faTrashCan,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getScanInfo, scanDomain } from "../../axios/ScanService/scanService";
import Navbar from "../../components/Navbar/Navbar";
import AllResult from "../../components/Scan/AllResult";
import useAuthStore from "../../store/useAuthStore";
import ExportPDF from "../../components/ExportPDF/ExportPDF";
const Scan = () => {
  const [option, setoption] = useState("scan");
  const [scanModal, setscanModal] = useState(false);
  const totalScan = useRef({
    totalScan: 0,
    runningScan: 0,
    completedScan: 0,
    scheduledScan: 0,
    failedScan: 0,
  });
  const modalRef = useRef(null);
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const isAuthenticated = useAuthStore.getState().isAuthenticated();
  const [check, setcheck] = useState(false);
  const [dataChange, setsdataChange] = useState({
    domain: "",
    discovery_reason: "",
  });
  const [severity, setseverity] = useState({
    high: 0,
    medium: 0,
    low: 0,
    info: 0,
  });
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
  const flag = useRef(false);

  useEffect(() => {
    const fetchData = async () => {
      const domain = localStorage.getItem("domain");
      if (domain) {
        try {
          const response = await getScanInfo(domain);
          console.log(response);
          setdata(response.data);
          console.log(check);
          if (response.data.status === "success") {
            setloading(true);
          }
        } catch (error) {
          console.error("Failed to fetch data:", error);
        }
      }
    };
    fetchData();
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setscanModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // call scanning api
  const fetchScanAPI = async (domain) => {
    try {
      const response = await scanDomain(domain);
      return response;
    } catch (error) {
      throw new Error("Failed to trigger scan");
    }
  };

  //fetch stream
  const fetchStream = async (domain) => {
    try {
      const response = await fetch(
        `https://tools.caasm.tech/scan/${domain}/status/stream`,
        {
          headers: {
            Accept: "text/event-stream", // Optional, depends on your API
          },
        }
      );
      console.log(response);

      return response;
    } catch (error) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  };

  //fetch scan info
  const fetchScanInfoAPI = async (domain) => {
    try {
      const response = await getScanInfo(domain);
      return response;
    } catch (error) {
      throw new Error("Failed to retrieve scan info");
    }
  };

  const handleFetchStream = async (response) => {
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let toastId = null;

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      let boundary;
      while ((boundary = buffer.indexOf("\n")) >= 0) {
        const line = buffer.slice(0, boundary).trim();
        buffer = buffer.slice(boundary + 1);
        if (line) {
          try {
            const cleanLine = line.startsWith("data: ") ? line.slice(6) : line;
            const data = JSON.parse(cleanLine);
            console.log("Received (fetchStream):", data);

            if (data.status.startsWith("error")) {
              toast.error("Error: " + data.status, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
              });
              return false; // Exit on error
            }
            if (data.status === "finished") {
              console.log("Scanning completed.");
              toast.update(toastId, {
                render: "Scan completed!",
                type: "success",
                autoClose: 5000,
                isLoading: false,
                position: "top-right",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
              });
              return true; // Exit on completion
            }
            if (!toastId) {
              toastId = toast.info(
                `Processing: ${data.status} (${data.completed} of ${data.total})`,
                {
                  autoClose: false,
                  isLoading: true,
                  position: "top-right",
                  hideProgressBar: true,
                  closeOnClick: false,
                  pauseOnHover: true,
                  draggable: true,
                  theme: "dark",
                  transition: Bounce,
                }
              );
            } else {
              toast.update(toastId, {
                render: `Processing: ${data.status} (${data.completed} of ${data.total})`,
                type: "info",
                autoClose: false,
                isLoading: true,
                position: "top-right",
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
                transition: Bounce,
              });
            }
          } catch (err) {
            console.error("Failed to parse JSON (fetchStream):", line);
          }
        }
      }
    }
  };

  //set data change from input
  const handleScanChage = (value, e) => {
    setsdataChange({ ...dataChange, [value]: e.target.value });
  };

  //get domain from url
  const getDomain = (url) => {
    if (!url.includes("http")) {
      if (url.includes("www")) {
        return url.slice(4);
      }
      return url;
    }
    if (url === "") {
      return "";
    }
    return url.split("/")[2].includes("www")
      ? url.split("/")[2].slice(4)
      : url.split("/")[2];
  };

  //set scan data
  const handleScan = async () => {
    const domain = getDomain(dataChange.domain);
    //check if input is empty
    if (dataChange.domain === "" || dataChange.discovery_reason === "") {
      toast.error("Please fill all fields !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }
    //check if domain is valid
    if (!/^[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/.test(domain)) {
      toast.error("Invalid domain !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }

    try {
      const scanResponse = await fetchScanAPI(domain);
      console.log(scanResponse);
      if (scanResponse.status) {
        try {
          const streamResponse = await fetchStream(domain);
          console.log(streamResponse);
          const handleStream = await handleFetchStream(streamResponse);
          console.log(handleStream);
          if (handleStream) {
            try {
              const scanInfoResponse = await fetchScanInfoAPI(domain);
              console.log(scanInfoResponse);
              setdata(scanInfoResponse.data);
              localStorage.setItem("domain", domain);
              totalScan.current.totalScan = totalScan.current.totalScan + 1;
              totalScan.current.completedScan =
                totalScan.current.completedScan + 1;
              setloading(true);
            } catch (error) {
              console.error("Scan fetching error:", error);
              toast.error("Failed to Scan", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
              });
            }
          }
        } catch (error) {
          console.error("Stream fetching error:", error);
          toast.error("Failed to fetch stream", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        }
      }
    } catch (error) {
      console.error("Scan fetching error:", error);
    }
  };
  //custom date format
  const customDate = (date) => {
    return new Date(date).toISOString().split("T")[0];
  };
  console.log(data);

  //close modal
  const handleModal = () => {
    setscanModal(false);
  };

  return (
    <div className=" bg-black text-gray-400 flex h-screen overflow-hidden">
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Navbar site={"scan"} />
        <main className="">
          {/* nav site */}
          <div className="px-8 py-2 sticky top-[65px] z-10 bg-black">
            <div className="flex space-x-1 text-sm">
              <div
                className={`px-2 pb-2 cursor-pointer ${
                  option === "scan" ? "border-b-2 border-indigo-400 z-10" : ""
                }`}
                onClick={() => {
                  setoption("scan");
                }}
              >
                <span
                  className={`${option === "scan" ? "text-indigo-400" : ""}`}
                >
                  <FontAwesomeIcon icon={faBullseye} />
                </span>{" "}
                <span className={`${option === "scan" ? "text-white" : ""}`}>
                  Scans
                </span>
              </div>
              {/* <div
                className={`px-2 pb-2 cursor-pointer ${
                  option === "result" ? "border-b-2 border-indigo-400 z-10" : ""
                }`}
                onClick={() => {
                  setoption("result");
                }}
              >
                <span
                  className={`${option === "result" ? "text-indigo-400" : ""}`}
                >
                  <FontAwesomeIcon icon={faSquarePollVertical} />
                </span>{" "}
                <span className={`${option === "result" ? "text-white" : ""}`}>
                  Results
                </span>
              </div>
              <div
                className={`px-2 pb-2 cursor-pointer ${
                  option === "configure"
                    ? "border-b-2 border-indigo-400 z-10"
                    : ""
                }`}
                onClick={() => {
                  setoption("configure");
                }}
              >
                <span
                  className={`${
                    option === "configure" ? "text-indigo-400" : ""
                  }`}
                >
                  <FontAwesomeIcon icon={faGear} />
                </span>{" "}
                <span
                  className={`${option === "configure" ? "text-white" : ""}`}
                >
                  Configurations
                </span>
              </div> */}
            </div>
            <div className="absolute bottom-2 left-0 w-full border-b-2 border-neutral-800"></div>
          </div>

          {/* page content */}
          <div className="h-[calc(80%)] pb-20">
            {option === "scan" ? (
              <>
                <div className="mt-10 px-20">
                  <div className="flex justify-between">
                    <div>
                      <div className="text-xl font-semibold text-white">
                        Your Scans
                      </div>
                      <div className="text-sm">
                        Browse scans, delve into their details, or initiate a
                        new scan.
                      </div>
                    </div>
                    <div>
                      <div
                        className="px-4 py-2 rounded-md text-sm bg-white font-semibold text-black cursor-pointer hover:bg-white/80"
                        onClick={() => {
                          setscanModal(true);
                        }}
                      >
                        Create New Scan{" "}
                        <FontAwesomeIcon icon={faPlus} size="sm" />
                      </div>
                    </div>
                  </div>
                  {scanModal && (
                    <div className="overflow-y-auto overflow-x-hidden fixed inset-0 z-50 flex justify-center items-center">
                      <div className="relative p-4 w-full max-w-md max-h-full">
                        <div
                          className="relative  rounded-lg shadow bg-black border-2 border-zinc-700/60 hover:border-zinc-700"
                          ref={modalRef}
                        >
                          <button
                            type="button"
                            className="absolute top-3 end-2.5 text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
                            onClick={handleModal}
                          >
                            <svg
                              className="w-3 h-3"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 14"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                              />
                            </svg>
                            <span className="sr-only">Close modal</span>
                          </button>
                          <div className="p-4 md:p-5 text-center">
                            <div className="pb-3 flex-col space-y-3">
                              <h3 className="mb-5 text-lg text-left text-white font-semibold">
                                Create your scan
                              </h3>
                              <input
                                type="text"
                                className="flex justify-start w-full rounded-lg text-white bg-black border-2 border-zinc-700/60 p-2"
                                placeholder="example.com"
                                onChange={(e) => {
                                  handleScanChage("domain", e);
                                }}
                              />
                              <input
                                type="text"
                                className="flex justify-start w-full rounded-lg text-white bg-black border-2 border-zinc-700/60 p-2"
                                placeholder="Discovery reason"
                                onChange={(e) => {
                                  handleScanChage("discovery_reason", e);
                                }}
                              />
                            </div>
                            <div className="flex space-x-3 justify-end">
                              <button
                                data-modal-hide="popup-modal"
                                type="button"
                                className="py-2.5 w-20 px-5 ms-3 text-sm font-medium focus:outline-non rounded-lg border focus:z-10 focus:ring-4 focus:ring-gray-700 bg-black text-gray-400 border-zinc-700 hover:text-white hover:bg-zinc-900"
                                onClick={handleModal}
                              >
                                Back
                              </button>
                              <button
                                data-modal-hide="popup-modal"
                                type="button"
                                className="text-black w-20 font-semibold text-center bg-white hover:bg-white/80 focus:ring-4 focus:outline-none rounded-lg text-sm items-center px-5 py-2.5"
                                onClick={() => {
                                  handleScan();
                                  handleModal();
                                }}
                              >
                                Scan
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* <div className="mt-10">
                    <div className="flex justify-between uppercase">
                      <div className="flex-col space-y-2 py-4 px-4 border-2 border-zinc-700/60 rounded-md w-60 hover:bg-zinc-900 hover:border-zinc-700">
                        <div>
                          <span className="px-1 text-indigo-400 bg-indigo-400/40 rounded-md">
                            <FontAwesomeIcon icon={faBullseye} />
                          </span>{" "}
                          total scans
                        </div>
                        <div className="text-xl text-white">
                          {totalScan.current.totalScan}
                        </div>
                      </div>
                      <div className="flex-col space-y-2 py-4 px-4 border-2 border-zinc-700/60 rounded-md w-60 hover:bg-zinc-900 hover:border-zinc-700">
                        <div>
                          <span className="px-1 text-amber-600 bg-amber-600/40 rounded-md">
                            <FontAwesomeIcon icon={faCodeCompare} />
                          </span>{" "}
                          running scans
                        </div>
                        <div className="text-xl text-white">0</div>
                      </div>
                      <div className="flex-col space-y-2 py-4 px-4 border-2 border-zinc-700/60 rounded-md w-60 hover:bg-zinc-900 hover:border-zinc-700">
                        <div>
                          <span className="px-1 text-green-500 bg-green-800/50 rounded-md">
                            <FontAwesomeIcon icon={faCheck} />
                          </span>{" "}
                          completed scans
                        </div>
                        <div className="text-xl text-white">
                          {totalScan.current.completedScan}
                        </div>
                      </div>
                      <div className="flex-col space-y-2 py-4 px-4 border-2 border-zinc-700/60 rounded-md w-60 hover:bg-zinc-900 hover:border-zinc-700">
                        <div>
                          <span className="px-1 text-gray-500-500 bg-gray-500/40 rounded-md">
                            <FontAwesomeIcon icon={faClock} />
                          </span>{" "}
                          scheduled scans
                        </div>
                        <div className="text-xl text-white">0</div>
                      </div>
                      <div className="flex-col space-y-2 py-4 px-4 border-2 border-zinc-700/60 rounded-md w-60 hover:bg-zinc-900 hover:border-zinc-700">
                        <div>
                          <span className="px-1 text-red-600 bg-red-600/40 rounded-md">
                            <FontAwesomeIcon icon={faXmark} />
                          </span>{" "}
                          failed scans
                        </div>
                        <div className="text-xl text-white">0</div>
                      </div>
                    </div>
                  </div> */}

                  <div className="mt-6">
                    <div className="flex space-x-4">
                      <div className="relative w-full">
                        <input
                          className=" p-2 bg-black w-full border-2 border-zinc-700/60 rounded-md hover:bg-zinc-900 hover:border-zinc-700"
                          type="text"
                          placeholder="Search by URL"
                        />
                        <div className="absolute top-2 right-4">
                          <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                      </div>
                      {/* <div className="flex items-center justify-center px-4 border-2 border-zinc-700/60 rounded-md hover:bg-zinc-900 hover:border-zinc-700">
                        <FontAwesomeIcon icon={faTrashCan} />
                      </div> */}

                      <ExportPDF
                        domain={
                          data.status === "success"
                            ? getDomain(data.results.domain)
                            : ""
                        }
                      />

                      <div
                        className="flex items-center justify-center px-4 border-2 border-zinc-700/60 rounded-md hover:bg-zinc-900 hover:border-zinc-700"
                        onClick={() => {
                          setcheck(true);
                        }}
                      >
                        <FontAwesomeIcon icon={faRotate} />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="font-bold text-xl text-white">
                      Recent scans
                    </div>
                    <div className="mt-4">
                      <table className="w-full border-separate border-spacing-y-0 overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-black">
                        <thead className="sticky top-0">
                          <tr className="bg-[#18181b] rounded-lg uppercase font-extralight font-mono">
                            <th className="sticky left-0 text-left w-96 px-4 rounded-l-lg shadow-[34px_0px_29px_1px_rgba(11,11,13,0.8)] bg-[#18181b] cursor-pointer z-10">
                              DOMAIN
                            </th>
                            <th className="px-8 py-2 cursor-pointer">ip</th>
                            <th className="px-8 py-2 cursor-pointer">Status</th>
                            <th className="px-8 py-2 cursor-pointer">assets</th>
                            <th className="px-8 py-2 cursor-pointer">
                              discover reason
                            </th>
                            <th className="px-8 py-2 cursor-pointer rounded-r-lg shadow-none bg-[#18181b]">
                              discover date
                            </th>
                          </tr>
                        </thead>
                        <tbody className="text-white">
                          {loading ? (
                            <>
                              <tr className="transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted border border-x-0 border-neutral-700 bg-[#0E0E12] group group-hover:bg-[#18181B] group-hover:border-neutral-900 relative">
                                <td
                                  className="sticky left-0 text-left w-96 px-4 rounded-l-lg shadow-[34px_0px_29px_1px_rgba(11,11,13,0.8)] bg-[#18181b] cursor-pointer z-10"
                                  onClick={() => {
                                    navigate(
                                      `/result/${getDomain(
                                        data.results.domain
                                      )}`,
                                      {
                                        state: {
                                          domain: getDomain(
                                            data.results.domain
                                          ),
                                          optionState: "Summary",
                                          port: "443",
                                        },
                                      }
                                    );
                                  }}
                                >
                                  <span className="px-1 text-green-500 bg-green-800/50 rounded-full">
                                    <FontAwesomeIcon icon={faCheck} />
                                  </span>{" "}
                                  {getDomain(data.results.domain)}
                                </td>
                                <td className="px-8 text-center py-2 cursor-pointer">
                                  {data.results.ip}
                                </td>
                                <td className="px-8 py-2 text-center  cursor-pointer">
                                  <div className="flex space-x-1 justify-center">
                                    {/* <div className="px-4 rounded-md text-red-600 bg-red-600/40">
                                      {severity.high}
                                    </div>
                                    <div className="px-4 rounded-md text-amber-600 bg-amber-600/40">
                                      {severity.medium}
                                    </div>
                                    <div className="px-4 rounded-md text-indigo-400 bg-indigo-400/40">
                                      {severity.low}
                                    </div>
                                    <div className="px-4 rounded-md text-green-500 bg-green-800/50">
                                      {severity.info}
                                    </div> */}
                                    {data.results.is_online ? (
                                      <>
                                        <div className="flex space-x-5">
                                          <span className="absolute top-3.5 flex h-3 w-3 z-20">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-700 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400/70"></span>
                                          </span>
                                          <div>Online</div>
                                        </div>
                                      </>
                                    ) : (
                                      <>
                                        <div className="flex space-x-5">
                                          <span className="absolute top-3.5 flex h-3 w-3 z-20">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-700 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-400/70"></span>
                                          </span>
                                          <div>Down</div>
                                        </div>
                                      </>
                                    )}
                                  </div>
                                </td>
                                <td className="px-8 py-2 text-center  cursor-pointer">
                                  {data.results.technology !== null
                                    ? data.results.technology.length
                                    : 0}{" "}
                                  assets
                                </td>
                                <td className="px-8 py-2 text-center  cursor-pointer">
                                  {data.results.discovery_reason}
                                </td>
                                <td className="px-8 py-2 text-center  cursor-pointer rounded-r-lg">
                                  {customDate(data.results.discovery_on)}
                                </td>
                              </tr>
                            </>
                          ) : (
                            <>
                              {" "}
                              <tr className="transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted border border-x-0 border-neutral-700 bg-[#0E0E12] group-hover:bg-[#18181B] group-hover:border-neutral-900 relative">
                                <td colSpan={6}>
                                  <div className="animate-pulse">
                                    <div className="w-full h-10 bg-neutral-700 rounded-lg"></div>
                                  </div>
                                </td>
                              </tr>
                            </>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
            {option === "result" && <AllResult />}
          </div>
        </main>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Scan;

import React, { useState } from "react";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightArrowLeft,
  faBug,
  faFile,
  faFlag,
  faGear,
  faGlobe,
  faHouse,
  faLock,
  faPlay,
  faStarOfLife,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import RadarChart from "../../charts/RadarChart";
import CVECVSS from "./CVSS";
import CVSS from "./CVSS";
import Details from "./Details";
import POC from "./POC";
const CVEDetail = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [option, setoption] = useState("cvss");
  const [cvss, setcvss] = useState(4);
  const data = [
    {
      url: "",
      age: "",
      size: "",
      visibility: "",
      http: 0,
      ips: 0,
      report: 0,
      nation: "",
    },
  ];
  return (
    <div className=" bg-gray-900  flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header
          tittle={"CVE-2021-25216"}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <main>
          <div className="flex px-6 mt-4 space-x-5 pb-10 text-white">
            <div className="flex-col space-y-5">
              {/* Discriptions */}
              <div className="w-[950px] bg-slate-800 border-t-2 border-blue-600 rounded-sm px-2">
                <div className="text-xl font-bold">Description</div>
                <div className="flex">
                  <div>
                    A vulnerability classified as critical has been found in
                    playSMS 1.4.4/1.4.5/1.4.6/1.4.7. Affected is an unknown
                    function of the file
                    /playsms/index.php?app=main&inc=core_auth&route=forgot&op=forgot
                    of the component Template Handler. The manipulation of the
                    argument username/email/captcha leads to code injection. It
                    is possible to launch the attack remotely. The complexity of
                    an attack is rather high. The exploitability is told to be
                    difficult. The exploit has been disclosed to the public and
                    may be used. It is recommended to upgrade the affected
                    component. The project maintainer was informed early about
                    the issue. Investigation shows that playSMS up to 1.4.3
                    contained a fix but later versions re-introduced the flaw.
                    As long as the latest version of the playsms/tpl package is
                    used, the software is not affected. Version
                    {">"}=1.4.4 shall fix this issue for sure.
                  </div>
                  <div>
                    <div className="relative size-40">
                      <svg
                        className="size-full -rotate-90"
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="18"
                          cy="18"
                          r="16"
                          fill="none"
                          className="stroke-current text-neutral-700"
                          stroke-width="2"
                        ></circle>

                        <circle
                          cx="18"
                          cy="18"
                          r="16"
                          fill="none"
                          className="stroke-current text-red-500"
                          stroke-width="2"
                          stroke-dasharray="100"
                          stroke-dashoffset="4"
                          stroke-linecap="round"
                        ></circle>
                      </svg>
                      <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                        <span className="text-center text-2xl font-bold">
                          CVSSv3
                        </span>
                        <div className="text-center">9.8/10</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800 border-t-2 border-blue-600 px-2 pb-4">
                <div className="flex py-2 px-2 space-x-2 text-lg">
                  <div
                    className={
                      option === "country"
                        ? "px-1 bg-blue-700 hover:bg-blue-800 rounded-sm cursor-pointer"
                        : "px-1 bg-blue-500 hover:bg-blue-700 rounded-sm cursor-pointer"
                    }
                    onClick={() => {
                      setoption("country");
                    }}
                  >
                    <FontAwesomeIcon icon={faGlobe} /> Affected Countries
                  </div>
                  <div
                    className={
                      option === "cvss"
                        ? "px-1 bg-blue-700 hover:bg-blue-800 rounded-sm cursor-pointer"
                        : "px-1 bg-blue-500 hover:bg-blue-700 rounded-sm cursor-pointer"
                    }
                    onClick={() => {
                      setoption("cvss");
                    }}
                  >
                    <FontAwesomeIcon icon={faStarOfLife} /> CVSS
                  </div>
                  <div
                    className={
                      option === "details"
                        ? "px-1 bg-blue-700 hover:bg-blue-800 rounded-sm cursor-pointer"
                        : "px-1 bg-blue-500 hover:bg-blue-700 rounded-sm cursor-pointer"
                    }
                    onClick={() => {
                      setoption("details");
                    }}
                  >
                    <FontAwesomeIcon icon={faFile} /> Details
                  </div>
                  <div
                    className={
                      option === "poc"
                        ? "px-1 bg-blue-700 hover:bg-blue-800 rounded-sm cursor-pointer"
                        : "px-1 bg-blue-500 hover:bg-blue-700 rounded-sm cursor-pointer"
                    }
                    onClick={() => {
                      setoption("poc");
                    }}
                  >
                    <FontAwesomeIcon icon={faBug} /> Available PoC's & Exploits
                  </div>
                </div>

                {/* CVSS */}
                {option === "cvss" ? (
                  <>
                    <div className="mt-4 px-2">
                      <div className="flex space-x-2">
                        <div
                          className={
                            cvss === 4
                              ? "p-2 border-b-2 border-blue-600 cursor-pointer"
                              : "p-2 cursor-pointer"
                          }
                          onClick={() => {
                            setcvss(4);
                          }}
                        >
                          CVSS v4.0{" "}
                          <span className="px-1 bg-orange-500 round-sm text-sm">
                            6.3 Medium
                          </span>
                        </div>
                        <div
                          className={
                            cvss === 3
                              ? "p-2 border-b-2 border-blue-600 cursor-pointer"
                              : "p-2 cursor-pointer"
                          }
                          onClick={() => {
                            setcvss(3);
                          }}
                        >
                          CVSS v3.1{" "}
                          <span className="px-1 bg-orange-500 round-sm text-sm">
                            6.3 Medium
                          </span>
                        </div>
                        <div
                          className={
                            cvss === 2
                              ? "p-2 border-b-2 border-blue-600 cursor-pointer"
                              : "p-2 cursor-pointer"
                          }
                          onClick={() => {
                            setcvss(2);
                          }}
                        >
                          CVSS v3.0{" "}
                          <span className="px-1 bg-orange-500 round-sm text-sm">
                            6.3 Medium
                          </span>
                        </div>
                        <div
                          className={
                            cvss === 1
                              ? "p-2 border-b-2 border-blue-600 cursor-pointer"
                              : "p-2 cursor-pointer"
                          }
                          onClick={() => {
                            setcvss(1);
                          }}
                        >
                          CVSS v2.0{" "}
                          <span className="px-1 bg-orange-500 round-sm text-sm">
                            6.3 Medium
                          </span>
                        </div>
                      </div>
                      <CVSS version={cvss} />
                    </div>
                  </>
                ) : (
                  <></>
                )}

                {/* CVEDetails */}
                {option === "details" && <Details />}

                {/* POC & Exploit */}
                {option === "poc" && <POC />}
              </div>
            </div>
            <div className="flex-col space-y-5">
              <div className="w-[300px] bg-slate-800 border-t-2 border-blue-600 rounded-sm p-2">
                <div className="flex space-x-2">
                  <img
                    src="https://app.opencve.io/static/img/cve-icon.png"
                    alt=""
                  />
                  <div className="text-xl">MITRE</div>
                </div>
                <div className="flex">
                  <div className="flex-col font-bold">
                    <div>Status:</div>
                    <div>Assigner:</div>
                    <div>Published:</div>
                    <div>Updated:</div>
                    <div>Reserved:</div>
                    <div>Link:</div>
                  </div>
                  <div className="flex-col">
                    <div>PUBLISHED</div>
                    <div>VulDB</div>
                    <div>2024-09-16</div>
                    <div>2024-09-16</div>
                    <div> 2024-09-15</div>
                    <div className="text-blue-400 cursor-pointer">
                      CVE-2024-8880
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[300px] bg-slate-800 border-t-2 border-blue-600 rounded-sm p-2">
                <div className="flex space-x-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/1f/CISA_Logo.png"
                    width={30}
                    alt=""
                  />
                  <div className="text-xl"> Vulnrichment</div>
                </div>
                <div className="bg-blue-200 p-3 border-2 border-blue-600 mt-4 text-slate-500">
                  No data.
                </div>
              </div>
              <div className="w-[300px] bg-slate-800 border-t-2 border-blue-600 rounded-sm p-2">
                <div className="flex space-x-2">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNI4xfzCS1h96H558mIfuah3omwe-nLCaAeg&s"
                    width={30}
                    alt=""
                  />
                  <div className="text-xl">NVD</div>
                </div>
                <div className="flex">
                  <div className="flex-col font-bold">
                    <div>Status:</div>
                    <div>Published:</div>
                    <div>Modified:</div>
                    <div>Link:</div>
                  </div>
                  <div className="flex-col">
                    <div>Received</div>
                    <div>2024-09-16</div>
                    <div>2024-09-16</div>
                    <div className="text-blue-400 cursor-pointer">
                      CVE-2024-8880
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[300px] bg-slate-800 border-t-2 border-blue-600 rounded-sm p-2">
                <div className="flex space-x-2">
                  <img
                    src="https://static-00.iconduck.com/assets.00/redhat-icon-2048x2048-c81kj8ny.png"
                    width={30}
                    alt=""
                  />
                  <div className="text-xl">Redhat</div>
                </div>
                <div className="bg-blue-200 p-3 border-2 border-blue-600 mt-4 text-slate-500">
                  No data.
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CVEDetail;

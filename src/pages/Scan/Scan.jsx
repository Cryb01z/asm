import {
  faArrowRightArrowLeft,
  faBullseye,
  faCheck,
  faCodeCompare,
  faFlag,
  faGear,
  faGlobe,
  faHouse,
  faMagnifyingGlass,
  faPlus,
  faRotate,
  faSquarePollVertical,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Result from "../Result/Result";
import Test from "../test";
import { useNavigate } from "react-router-dom";
import AllResult from "./AllResult";

const Scan = () => {
  const [option, setoption] = useState("scan");
  const [setting, setsetting] = useState(false);
  const navigate = useNavigate();
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
    <div className=" bg-black text-gray-400 flex h-screen overflow-hidden">
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Test site={"scan"} />
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
              <div
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
              </div>
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
                      <div className="px-4 py-2 rounded-md text-sm bg-white font-semibold text-black cursor-pointer hover:bg-white/80">
                        Create New Scan{" "}
                        <FontAwesomeIcon icon={faPlus} size="sm" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-10">
                    <div className="flex justify-between uppercase">
                      <div className="flex-col space-y-2 py-4 px-4 border-2 border-zinc-700/60 rounded-md w-60 hover:bg-zinc-900 hover:border-zinc-700">
                        <div>
                          <span className="px-1 text-indigo-400 bg-indigo-400/40 rounded-md">
                            <FontAwesomeIcon icon={faBullseye} />
                          </span>{" "}
                          total scan
                        </div>
                        <div className="text-xl text-white">0</div>
                      </div>
                      <div className="flex-col space-y-2 py-4 px-4 border-2 border-zinc-700/60 rounded-md w-60 hover:bg-zinc-900 hover:border-zinc-700">
                        <div>
                          <span className="px-1 text-amber-600 bg-amber-600/40 rounded-md">
                            <FontAwesomeIcon icon={faCodeCompare} />
                          </span>{" "}
                          running scan
                        </div>
                        <div className="text-xl text-white">0</div>
                      </div>
                      <div className="flex-col space-y-2 py-4 px-4 border-2 border-zinc-700/60 rounded-md w-60 hover:bg-zinc-900 hover:border-zinc-700">
                        <div>
                          <span className="px-1 text-green-500 bg-green-500/40 rounded-md">
                            <FontAwesomeIcon icon={faCheck} />
                          </span>{" "}
                          completed scan
                        </div>
                        <div className="text-xl text-white">0</div>
                      </div>
                      <div className="flex-col space-y-2 py-4 px-4 border-2 border-zinc-700/60 rounded-md w-60 hover:bg-zinc-900 hover:border-zinc-700">
                        <div>
                          <span className="px-1 text-green-500 bg-green-500/40 rounded-md">
                            <FontAwesomeIcon icon={faCheck} />
                          </span>{" "}
                          completed scan
                        </div>
                        <div className="text-xl text-white">0</div>
                      </div>
                      <div className="flex-col space-y-2 py-4 px-4 border-2 border-zinc-700/60 rounded-md w-60 hover:bg-zinc-900 hover:border-zinc-700">
                        <div>
                          <span className="px-1 text-green-500 bg-green-500/40 rounded-md">
                            <FontAwesomeIcon icon={faCheck} />
                          </span>{" "}
                          completed scan
                        </div>
                        <div className="text-xl text-white">0</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="flex space-x-4">
                      <div className="relative w-full">
                        <input
                          className=" p-2 bg-black w-full border-2 border-zinc-700/60 rounded-md hover:bg-zinc-900 hover:border-zinc-700"
                          type="text"
                          placeholder="Search by name"
                        />
                        <div className="absolute top-2 right-4">
                          <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                      </div>
                      <div className="flex items-center justify-center px-4 border-2 border-zinc-700/60 rounded-md hover:bg-zinc-900 hover:border-zinc-700">
                        <FontAwesomeIcon icon={faTrashCan} />
                      </div>
                      <div className="flex items-center justify-center px-4 border-2 border-zinc-700/60 rounded-md hover:bg-zinc-900 hover:border-zinc-700">
                        <FontAwesomeIcon icon={faRotate} />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="font-bold text-xl text-white">
                      Recent scans
                    </div>
                    <div className="mt-4">
                      <div id="detailed-pricing" class="w-full overflow-x-auto">
                        <div class="overflow-hidden min-w-max">
                          <div class="grid grid-cols-9 p-2 text-sm font-medium border-t border-2 rounded-lg  bg-zinc-900 border-zinc-700 text-white cursor-pointer">
                            <div className="col-span-2">
                              <div class="flex flex-row items-center gap-2.5">
                                <input
                                  id="hr1"
                                  type="checkbox"
                                  class="peer hidden"
                                />
                                <label
                                  htmlFor="hr1"
                                  class="h-5 w-5 flex rounded-md border border-[#a2a1a833] light:bg-[#e8e8e8] dark:bg-[#212121] peer-checked:bg-white transition"
                                >
                                  <svg
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    class="w-5 h-5 light:stroke-[#e8e8e8] dark:stroke-[#212121]"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M4 12.6111L8.92308 17.5L20 6.5"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    ></path>
                                  </svg>
                                </label>
                                <span className="ml-4">URL</span>
                              </div>
                            </div>

                            <div>Age</div>
                            <div> </div>
                            <div>Size</div>
                            <div>
                              <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                            </div>
                            <div>IPs</div>
                            <div>
                              <FontAwesomeIcon icon={faFlag} />
                            </div>
                            <div>
                              <FontAwesomeIcon icon={faHouse} />
                            </div>
                          </div>

                          <div class="mt-3 grid grid-cols-9 p-2 text-sm font-medium border-2 rounded-lg  bg-black border-zinc-700 text-white hover:bg-zinc-900 cursor-pointer">
                            <div className="col-span-2">
                              <div class="flex flex-row items-center gap-2.5">
                                <input
                                  id="hr2"
                                  type="checkbox"
                                  class="peer hidden"
                                />
                                <label
                                  htmlFor="hr2"
                                  class="h-5 w-5 flex rounded-md border border-[#a2a1a833] light:bg-[#e8e8e8] dark:bg-[#212121] peer-checked:bg-white transition"
                                >
                                  <svg
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    class="w-5 h-5 light:stroke-[#e8e8e8] dark:stroke-[#212121]"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M4 12.6111L8.92308 17.5L20 6.5"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    ></path>
                                  </svg>
                                </label>
                                <span
                                  className="ml-4 text-green-500"
                                  onClick={() => {
                                    navigate(`/result/giz.proseed-al.de`);
                                  }}
                                >
                                  giz.proseed-al.de
                                </span>
                              </div>
                            </div>

                            <div>27 seconds</div>
                            <div>
                              <FontAwesomeIcon icon={faGlobe} />
                            </div>
                            <div>3 MB</div>
                            <div>85</div>
                            <div>3</div>
                            <div>2</div>
                            <div>
                              <img
                                src="https://flagcdn.com/de.svg"
                                width={25}
                                height={25}
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="mt-3 grid grid-cols-9 p-2 text-sm font-medium border-2 rounded-lg  bg-black border-zinc-700 text-white hover:bg-zinc-900 cursor-pointer">
                            <div className="col-span-2">
                              <div class="flex flex-row items-center gap-2.5">
                                <input
                                  id="hr3"
                                  type="checkbox"
                                  class="peer hidden"
                                />
                                <label
                                  htmlFor="hr3"
                                  class="h-5 w-5 flex rounded-md border border-[#a2a1a833] light:bg-[#e8e8e8] dark:bg-[#212121] peer-checked:bg-white transition"
                                >
                                  <svg
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    class="w-5 h-5 light:stroke-[#e8e8e8] dark:stroke-[#212121]"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M4 12.6111L8.92308 17.5L20 6.5"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    ></path>
                                  </svg>
                                </label>
                                <span
                                  className="ml-4 text-green-500"
                                  onClick={() => {
                                    navigate(
                                      `/result/antoanthucpham.angiang.gov.vn`
                                    );
                                  }}
                                >
                                  antoanthucpham.angiang.gov.vn
                                </span>
                              </div>
                            </div>

                            <div>27 seconds</div>
                            <div>
                              <FontAwesomeIcon icon={faGlobe} />
                            </div>
                            <div>3 MB</div>
                            <div>85</div>
                            <div>3</div>
                            <div>2</div>
                            <div>
                              <img
                                src="https://flagcdn.com/vn.svg"
                                width={25}
                                height={25}
                                alt="Vietnam"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
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
    </div>
  );
};

export default Scan;

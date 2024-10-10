import {
  faBullseye,
  faCheck,
  faCircle,
  faMagnifyingGlass,
  faMicrochip,
  faPlus,
  faRotate,
  faServer,
  faShapes,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { data } from "../../axios/data";
import Test from "../test";
import Inventory from "./Inventory";

const Asset = () => {
  const test = data[0];
  const navigate = useNavigate();
  const [option, setoption] = useState("asset");

  return (
    <div className="bg-black  text-gray-400 flex h-screen overflow-hidden">
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Test site={"asset"} />
        <main>
          {/* nav site */}
          <div className="px-8 py-2 sticky top-[65px] z-10 bg-black">
            <div className="flex space-x-1 text-sm">
              <div
                className={`px-2 pb-2 cursor-pointer ${
                  option === "asset" ? "border-b-2 border-indigo-400 z-10" : ""
                }`}
                onClick={() => {
                  setoption("asset");
                }}
              >
                <span
                  className={`${option === "asset" ? "text-indigo-400" : ""}`}
                >
                  <FontAwesomeIcon icon={faServer} />
                </span>{" "}
                <span className={`${option === "asset" ? "text-white" : ""}`}>
                  Asset Groups
                </span>
              </div>
              <div
                className={`px-2 pb-2 cursor-pointer ${
                  option === "Inventory"
                    ? "border-b-2 border-indigo-400 z-10"
                    : ""
                }`}
                onClick={() => {
                  setoption("Inventory");
                }}
              >
                <span
                  className={`${
                    option === "Inventory" ? "text-indigo-400" : ""
                  }`}
                >
                  <FontAwesomeIcon icon={faShapes} />
                </span>{" "}
                <span
                  className={`${option === "Inventory" ? "text-white" : ""}`}
                >
                  Inventory
                </span>
              </div>
              <div
                className={`px-2 pb-2 cursor-pointer ${
                  option === "Technologies"
                    ? "border-b-2 border-indigo-400 z-10"
                    : ""
                }`}
                onClick={() => {
                  setoption("Technologies");
                }}
              >
                <span
                  className={`${
                    option === "Technologies" ? "text-indigo-400" : ""
                  }`}
                >
                  <FontAwesomeIcon icon={faMicrochip} />
                </span>{" "}
                <span
                  className={`${option === "Technologies" ? "text-white" : ""}`}
                >
                  Technologies
                </span>
              </div>
            </div>
            <div className="absolute bottom-2 left-0 w-full border-b-2 border-neutral-800"></div>
          </div>

          {option === "asset" ? (
            <>
              <div className="px-20 mt-10 pb-96 font-extralight">
                <div className="flex justify-between">
                  <div>
                    <div className="text-xl font-semibold text-white">
                      Your Assets
                    </div>
                    <div className="text-sm">
                      Add Assets for scanning. Select an Asset Group to view all
                      Assets in that group, or check out Inventory for a full
                      Asset list.
                    </div>
                  </div>
                  <div>
                    <div className="px-4 py-2 rounded-md text-sm bg-white font-semibold text-black cursor-pointer hover:bg-white/80">
                      Add New Assets <FontAwesomeIcon icon={faPlus} size="sm" />
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex space-x-4">
                    <div className="relative w-full">
                      <input
                        className="p-2 bg-black w-full border border-zinc-700/60 rounded-md hover:bg-zinc-900 hover:border-zinc-700"
                        type="text"
                        placeholder="Search by name"
                      />
                      <div className="absolute top-2 right-4">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </div>
                    </div>
                    <div className="flex items-center justify-center px-4 border border-zinc-700/60 rounded-md hover:bg-zinc-900 hover:border-zinc-700">
                      <FontAwesomeIcon icon={faTrashCan} />
                    </div>
                    <div className="flex items-center justify-center px-4 border border-zinc-700/60 rounded-md hover:bg-zinc-900 hover:border-zinc-700">
                      <FontAwesomeIcon icon={faRotate} />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div id="detailed-pricing" class="w-full overflow-x-auto">
                    <div class="overflow-hidden min-w-max">
                      <div class="grid grid-cols-7 p-2 text-sm font-medium border-t border rounded-lg  bg-zinc-900 border-zinc-700 ">
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
                            <span className="ml-4">ASSET NAME</span>
                          </div>
                        </div>

                        <div>SOURCE</div>
                        <div>TOTAL ASSETS</div>
                        <div>DURATION</div>
                        <div>LAST UPDATED</div>
                        <div></div>
                      </div>

                      <div class="mt-3 grid grid-cols-7 p-2 text-sm font-medium border rounded-lg  bg-black border-zinc-700  hover:bg-zinc-900 cursor-pointer">
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
                            <div>
                              <span className="px-1 ml-3 text-green-500 bg-green-500/40 rounded-full">
                                <FontAwesomeIcon icon={faCheck} />
                              </span>{" "}
                              <span className="font-semibold text-white">
                                antoanthucpham.angiang.gov.vn
                              </span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="text-xs px-2 inline-flex items-center gap-1 border border-zinc-700 rounded-md">
                            <span className="text-indigo-700">
                              <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </span>
                            Auto Discovery
                          </div>
                        </div>
                        <div>
                          {" "}
                          <div className="text-xs px-2 inline-flex items-center gap-1 border border-zinc-700 rounded-md">
                            <span className="">
                              <FontAwesomeIcon icon={faCircle} size="xs" />
                            </span>
                            161 assets
                          </div>
                        </div>
                        <div>7m58s</div>
                        <div>3d ago</div>
                        <div>
                          <div className="text-sm px-2 inline-flex items-center gap-1 border border-zinc-700 rounded-md">
                            <span className="text-indigo-700">
                              <FontAwesomeIcon icon={faBullseye} size="xs" />
                            </span>
                            Start vulnerability scan
                          </div>
                        </div>
                      </div>
                      <div class="mt-3 grid grid-cols-7 p-2 text-sm font-medium border rounded-lg  bg-black border-zinc-700  hover:bg-zinc-900 cursor-pointer">
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
                            <div>
                              <span className="px-1 ml-3 text-green-500 bg-green-500/40 rounded-full">
                                <FontAwesomeIcon icon={faCheck} />
                              </span>{" "}
                              <span className="font-semibold text-white">
                                giz.proseed-al.de
                              </span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="text-xs px-2 inline-flex items-center gap-1 border border-zinc-700 rounded-md">
                            <span className="text-indigo-700">
                              <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </span>
                            Auto Discovery
                          </div>
                        </div>
                        <div>
                          {" "}
                          <div className="text-xs px-2 inline-flex items-center gap-1 border border-zinc-700 rounded-md">
                            <span className="">
                              <FontAwesomeIcon icon={faCircle} size="xs" />
                            </span>
                            161 assets
                          </div>
                        </div>
                        <div>7m58s</div>
                        <div>3d ago</div>
                        <div>
                          <div className="text-sm px-2 inline-flex items-center gap-1 border border-zinc-700 rounded-md">
                            <span className="text-indigo-700">
                              <FontAwesomeIcon icon={faBullseye} size="xs" />
                            </span>
                            Start vulnerability scan
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
          {option === "Inventory" && <Inventory/>}
          <ToastContainer />
        </main>
      </div>
    </div>
  );
};

export default Asset;

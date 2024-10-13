import {
  faHouse,
  faMagnifyingGlass,
  faMicrochip,
  faReply,
  faServer,
  faShapes,
  faSort,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import TechInfo from "./TechInfo";
import getTechInfo from "../../axios/techinfo";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Test from "../Test";
const DomainInventory = () => {
  const navigate = useNavigate();
  const [option, setoption] = useState("Inventory");
  const data = [
    {
      asset: "webmail1.yenbai.gov.vn",
      port: "8080",
      ip: "103.42.54.6",
      technologies: [],
      status: "404",
      tittle: "--",
      cname: "--",
      contentLength: "2102",
    },
    {
      asset: "vms.yenbai.gov.vn",
      port: "8080",
      ip: "103.42.54.6",
      technologies: ["Windows Server", "Nginx"],
      status: "301",
      tittle: "--",
      cname: "--",
      contentLength: "2102",
    },
    {
      asset: "tu.yenbai.gov.vn",
      port: "8080",
      ip: "103.42.54.7",
      technologies: ["WordPress", "Ubuntu"],
      status: "404",
      tittle: "--",
      cname: "--",
      contentLength: "2102",
    },
    {
      asset: "id.yenbai.gov.vn",
      port: "8080",
      ip: "113.160.153.26",
      technologies: ["Cloudflare", "Apache"],
      status: "301",
      tittle: "--",
      cname: "--",
      contentLength: "2102",
    },
    {
      asset: "hcc.yenbai.gov.vn",
      port: "8080",
      ip: "113.176.25.127",
      technologies: ["Apache", "jQuery"],
      status: "403",
      tittle: "--",
      cname: "--",
      contentLength: "2102",
    },
    {
      asset: "edr.yenbai.gov.vn",
      port: "8080",
      ip: "103.42.54.6",
      technologies: [],
      status: "200",
      tittle: "--",
      cname: "--",
      contentLength: "2102",
    },
  ];

  const getStatusColor = (status) => {
    if (status === "200") return "bg-green-500/20 text-green-400";
    if (status === "301") return "bg-[#272748] text-[#7E8CFF]";
    if (status === "403") return "bg-[#3E1B0D] text-[#FF6800]";
    if (status === "404") return "bg-neutral-800/70";
  };

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
              <div className="flex items-center relative group">
                {/* Icon with hover */}
                <div
                  className="px-2 pb-2 cursor-pointer z-10 text-gray-400"
                  onClick={() => {
                    navigate("/asset");
                  }}
                >
                  <FontAwesomeIcon icon={faReply} size="lg" />
                </div>

                {/* Tooltip - only visible on hover */}
                <div className="absolute text-black w-[68px] bg-white px-2 py-1.5 top-8 -left-3 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-default">
                  Go back
                </div>
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

          {/* Content */}
          <div className="px-36 mt-10">
            <div className="relative w-full">
              <input
                className=" p-2 bg-black w-full border-2 border-zinc-700/60 rounded-lg hover:bg-zinc-900 hover:border-zinc-700"
                type="text"
                placeholder="Search your assets..."
              />
              <div className="absolute top-2 right-4">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
            </div>
            <div className="overflow-x-auto mt-5 scrollbar scrollbar-thumb-gray-500 scrollbar-track-zinc-700">
              <table className="w-[130%] border-separate border-spacing-y-0 overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-zinc-700">
                <thead className="sticky top-0">
                  <tr className="bg-[#18181b] rounded-lg uppercase font-extralight font-mono">
                    <th className="sticky left-0 text-left w-96 px-4 rounded-l-lg shadow-[34px_0px_29px_1px_rgba(11,11,13,0.8)] bg-[#18181b] cursor-pointer z-10">
                      asset <FontAwesomeIcon icon={faSort} />
                    </th>
                    <th className="px-8 cursor-pointer">
                      ip <FontAwesomeIcon icon={faSort} />
                    </th>
                    <th className="px-8 cursor-pointer">
                      Technologies <FontAwesomeIcon icon={faSort} />
                    </th>
                    <th className="px-8 cursor-pointer">
                      status <FontAwesomeIcon icon={faSort} />
                    </th>
                    <th className="px-8 cursor-pointer">
                      tittle <FontAwesomeIcon icon={faSort} />
                    </th>
                    <th className="px-8 cursor-pointer">
                      cname <FontAwesomeIcon icon={faSort} />
                    </th>
                    <th className="px-8 cursor-pointer rounded-r-lg">
                      content length <FontAwesomeIcon icon={faSort} />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr className="transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted border border-x-0 border-neutral-700 bg-[#0E0E12] group group-hover:bg-[#18181B] group-hover:border-neutral-900 relative h-12">
                      <td className="bg-[#121215] border-b px-4 border-zinc-700/60 m-0 group-first:border-t group-hover:bg-[#18181B] group-hover:border-neutral-900 border-l sticky left-0 group-first:rounded-tl-lg shadow-[34px_0px_29px_1px_rgba(11,11,13,0.8)] group-hover:shadow-none z-10 group-hover:z-20">
                        <div className="flex justify-between ">
                          <div className="flex items-center space-x-2">
                            <div className="bg-neutral-800 px-1 rounded-md">
                              <FontAwesomeIcon icon={faHouse} size="xs" />
                            </div>
                            <div>{item.asset}</div>
                            <div>
                              <span class="relative flex h-2 w-2">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-700/70 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-2 w-2 bg-amber-400/70"></span>
                              </span>
                            </div>
                          </div>
                          <div className="px-1 bg-[#3E3D3D] rounded-md">
                            {item.port}
                          </div>
                        </div>
                      </td>
                      <td className="px-8 text-[#A1A1AB] border-b border-zinc-700/60 p-0 m-0 group-first:border-t group-hover:bg-[#18181B] group-hover:border-neutral-900 py-[1rem]">
                        <div className="flex justify-center items-center">
                          <div className="bg-[#3E3D3D] inline-block px-3 text-center rounded-md">
                            {item.ip}
                          </div>
                        </div>
                      </td>
                      <td className="px-8 text-[#A1A1AB] border-b border-zinc-700/60 p-0 m-0 group-first:border-t group-hover:bg-[#18181B] group-hover:border-neutral-900 py-[1rem]">
                        <div className="flex justify-center items-center">
                          {item.technologies.length === 0 ? (
                            <>
                              <div className="text-center">--</div>
                            </>
                          ) : (
                            <>
                              <div className="flex space-x-2">
                                {item.technologies.map((tech) => (
                                  <TechInfo tech={getTechInfo(tech)} />
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      </td>
                      <td className="px-8 text-[#A1A1AB] border-b border-zinc-700/60 p-0 m-0 group-first:border-t group-hover:bg-[#18181B] group-hover:border-neutral-900 py-[1rem]">
                        <div className="flex justify-center items-center">
                          <div
                            className={`${getStatusColor(
                              item.status
                            )} inline-block px-3 text-center rounded-md`}
                          >
                            {item.status}
                          </div>
                        </div>
                      </td>
                      <td className="px-8 text-[#A1A1AB] border-b border-zinc-700/60 p-0 m-0 group-first:border-t group-hover:bg-[#18181B] group-hover:border-neutral-900 py-[1rem]">
                        <div className="flex justify-center items-center">
                          <div className="text-center">{item.tittle}</div>
                        </div>
                      </td>
                      <td className="px-8 text-[#A1A1AB] border-b border-zinc-700/60 p-0 m-0 group-first:border-t group-hover:bg-[#18181B] group-hover:border-neutral-900 py-[1rem]">
                        <div className="flex justify-center items-center">
                          <div className="text-center">{item.cname}-</div>
                        </div>
                      </td>
                      <td className="px-8 text-[#A1A1AB] border-b border-zinc-700/60 p-0 m-0 group-first:border-t group-hover:bg-[#18181B] group-hover:border-neutral-900 py-[1rem]">
                        <div className="flex justify-center items-center">
                          <div className="bg-neutral-800/70 inline-block px-2 text-center rounded-md">
                            {item.contentLength}
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}

                  {/* <tr className="transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted border border-x-0 border-neutral-700 bg-[#0E0E12] group group-hover:bg-[#18181B] group-hover:border-neutral-900 relative h-12">
              <td className="bg-[#121215] border-b px-4 border-zinc-700/60 m-0 group-first:border-t group-hover:bg-[#18181B] group-hover:border-neutral-900 border-l sticky left-0 group-first:rounded-tl-lg shadow-[34px_0px_29px_1px_rgba(11,11,13,0.8)] group-hover:shadow-none z-10 group-hover:z-20">
                <div className="flex justify-between ">
                  <div className="flex items-center space-x-2">
                    <div className="bg-neutral-800 px-1 rounded-md">
                      <FontAwesomeIcon icon={faHouse} size="xs" />
                    </div>
                    <div>webmail1.yenbai.gov.vn</div>
                    <div>
                      <span class="relative flex h-2 w-2">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-700/70 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-amber-400/70"></span>
                      </span>
                    </div>
                  </div>
                  <div className="px-1 bg-[#3E3D3D] rounded-md">8080</div>
                </div>
              </td>
              <td className="px-8 text-[#A1A1AB] border-b border-zinc-700/60 p-0 m-0 group-first:border-t group-hover:bg-[#18181B] group-hover:border-neutral-900 py-[1rem]">
                <div className="flex justify-center items-center">
                  <div className="bg-[#3E3D3D] inline-block px-3 text-center rounded-md">
                    103.42.54.5
                  </div>
                </div>
              </td>
              <td className="px-8 text-[#A1A1AB] border-b border-zinc-700/60 p-0 m-0 group-first:border-t group-hover:bg-[#18181B] group-hover:border-neutral-900 py-[1rem]">
                <div className="flex justify-center items-center">
                  <div className="text-center">--</div>
                </div>
              </td>
              <td className="px-8 text-[#A1A1AB] border-b border-zinc-700/60 p-0 m-0 group-first:border-t group-hover:bg-[#18181B] group-hover:border-neutral-900 py-[1rem]">
                <div className="flex justify-center items-center">
                  <div className="bg-neutral-800/70 inline-block px-3 text-center rounded-md">
                    404
                  </div>
                </div>
              </td>
              <td className="px-8 text-[#A1A1AB] border-b border-zinc-700/60 p-0 m-0 group-first:border-t group-hover:bg-[#18181B] group-hover:border-neutral-900 py-[1rem]">
                <div className="flex justify-center items-center">
                  <div className="text-center">--</div>
                </div>
              </td>
              <td className="px-8 text-[#A1A1AB] border-b border-zinc-700/60 p-0 m-0 group-first:border-t group-hover:bg-[#18181B] group-hover:border-neutral-900 py-[1rem]">
                <div className="flex justify-center items-center">
                  <div className="text-center">--</div>
                </div>
              </td>
              <td className="px-8 text-[#A1A1AB] border-b border-zinc-700/60 p-0 m-0 group-first:border-t group-hover:bg-[#18181B] group-hover:border-neutral-900 py-[1rem]">
                <div className="flex justify-center items-center">
                  <div className="bg-neutral-800/70 inline-block px-2 text-center rounded-md">
                    2102
                  </div>
                </div>
              </td>
            </tr> */}
                </tbody>
              </table>
            </div>
          </div>
          <ToastContainer />
        </main>
      </div>
    </div>
  );
};

export default DomainInventory;

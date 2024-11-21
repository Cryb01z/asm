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
import React, { useEffect, useState } from "react";
import TechInfo from "./TechInfo";
import getTechInfo from "../../axios/TechnologyInfo/techinfo";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Navbar/Navbar";
import {
  getDomainInfo,
  getSubDomainInfo,
} from "../../axios/AssetService/assetService";
const Inventory = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { domain } = location.state || {};
  const [loading, setloading] = useState(true);
  const [option, setoption] = useState("Inventory");
  const [data, setdata] = useState({
    status: "",
    results: [
      {
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
    ],
  });

  useEffect(() => {
    console.log(domain);
    const fetchApi = async () => {
      try {
        const response = await getSubDomainInfo(domain);
        setdata(response.data);
        setloading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, [domain]);
  console.log(data);

  const displayTech = data.status
    ? data.results.filter((item) => item.technology !== null)
    : [];
  console.log(displayTech);

  const getStatusColor = (status) => {
    if (status === "200") return "bg-green-500/20 text-green-400";
    if (status === "301") return "bg-[#272748] text-[#7E8CFF]";
    if (status === "403") return "bg-[#3E1B0D] text-[#FF6800]";
    if (status === "404") return "bg-neutral-800/70";
  };

  if (loading) {
    return (
      <div className="bg-black  text-gray-400 flex h-screen overflow-hidden">
        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <Navbar site={"asset"} />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black  text-gray-400 flex h-screen overflow-hidden">
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Navbar site={"asset"} />
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
            <div className="overflow-x-auto mt-5 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-black h-[500px]">
              <table className="w-[130%] border-separate border-spacing-y-0 overflow-x-scroll scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-black">
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
                      tittle <FontAwesomeIcon icon={faSort} />
                    </th>
                    <th className="px-8 cursor-pointer">
                      status <FontAwesomeIcon icon={faSort} />
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
                  {displayTech.length > 0 &&
                    displayTech.map((item, index) => {
                      let pos = index;
                      return (
                        <>
                          <tr className="transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted border border-x-0 border-neutral-700 bg-[#0E0E12] group group-hover:bg-[#18181B] group-hover:border-neutral-900 relative h-12">
                            <td className="bg-[#121215] border-b px-4 border-zinc-700/60 m-0 group-first:border-t group-hover:bg-[#18181B] group-hover:border-neutral-900 border-l sticky left-0 group-first:rounded-tl-lg shadow-[34px_0px_29px_1px_rgba(11,11,13,0.8)] group-hover:shadow-none z-10 group-hover:z-20">
                              <div className="flex justify-between ">
                                <div className="flex items-center space-x-2">
                                  <div className="bg-neutral-800 px-1 rounded-md">
                                    <FontAwesomeIcon icon={faHouse} size="xs" />
                                  </div>
                                  <div>{item.domain}</div>
                                  <div>
                                    <span class="relative flex h-2 w-2">
                                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-700/70 opacity-75"></span>
                                      <span class="relative inline-flex rounded-full h-2 w-2 bg-amber-400/70"></span>
                                    </span>
                                  </div>
                                </div>
                                <div className="px-1 bg-[#3E3D3D] rounded-md">
                                  {item.services !== null ? (
                                    <>{item.services[0].port}</>
                                  ) : (
                                    <>None</>
                                  )}
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
                              <div className="flex justify-center items-center w-auto">
                                <div className="flex space-x-2">
                                  {item.technology.map((tech) =>
                                    tech.subtech.map((subtech) => (
                                      <TechInfo
                                        tech={getTechInfo(subtech.technology)} // Pass the result of getTechInfo
                                        catagory={tech.categories}
                                        version={subtech.version}
                                        position={
                                          pos >= displayTech.length / 2
                                            ? "bottom"
                                            : ""
                                        }
                                      />
                                    ))
                                  )}
                                </div>
                              </div>
                            </td>
                            <td className="px-8 text-[#A1A1AB] border-b border-zinc-700/60 p-0 m-0 group-first:border-t group-hover:bg-[#18181B] group-hover:border-neutral-900 py-[1rem]">
                              <div className="flex justify-center items-center">
                                <div className="text-center">
                                  {item.autonomous_system.asn}
                                </div>
                              </div>
                            </td>
                            <td className="px-8 text-[#A1A1AB] border-b border-zinc-700/60 p-0 m-0 group-first:border-t group-hover:bg-[#18181B] group-hover:border-neutral-900 py-[1rem]">
                              <div className="flex justify-center items-center">
                                <div
                                  className={`inline-block px-3 text-center rounded-md`}
                                >
                                  {item.is_online ? (
                                    <>
                                      <div className="flex space-x-5">
                                        <span className="absolute top-6 flex h-3 w-3 z-20">
                                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-700 opacity-75"></span>
                                          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400/70"></span>
                                        </span>
                                        <div>Online</div>{" "}
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      <div className="flex space-x-5">
                                        <span className="absolute top-6 flex h-3 w-3 z-20">
                                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-700 opacity-75"></span>
                                          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-400/70"></span>
                                        </span>
                                        <div>Down</div>{" "}
                                      </div>
                                    </>
                                  )}
                                </div>
                              </div>
                            </td>
                            <td className="px-8 text-[#A1A1AB] border-b border-zinc-700/60 p-0 m-0 group-first:border-t group-hover:bg-[#18181B] group-hover:border-neutral-900 py-[1rem]">
                              <div className="flex justify-center items-center">
                                <div className="text-center">
                                  {item.autonomous_system.name}
                                </div>
                              </div>
                            </td>
                            <td className="px-8 text-[#A1A1AB] border-b border-zinc-700/60 p-0 m-0 group-first:border-t group-hover:bg-[#18181B] group-hover:border-neutral-900 py-[1rem]">
                              <div className="flex justify-center items-center">
                                <div className="bg-neutral-800/70 inline-block px-2 text-center rounded-md">
                                  --
                                </div>
                              </div>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  {/* {data.results.map((item, index) =>
                    item.technology !== null ? (
                      <>
                        <tr className="transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted border border-x-0 border-neutral-700 bg-[#0E0E12] group group-hover:bg-[#18181B] group-hover:border-neutral-900 relative h-12">
                          <td className="bg-[#121215] border-b px-4 border-zinc-700/60 m-0 group-first:border-t group-hover:bg-[#18181B] group-hover:border-neutral-900 border-l sticky left-0 group-first:rounded-tl-lg shadow-[34px_0px_29px_1px_rgba(11,11,13,0.8)] group-hover:shadow-none z-10 group-hover:z-20">
                            <div className="flex justify-between ">
                              <div className="flex items-center space-x-2">
                                <div className="bg-neutral-800 px-1 rounded-md">
                                  <FontAwesomeIcon icon={faHouse} size="xs" />
                                </div>
                                <div>{item.domain}</div>
                                <div>
                                  <span class="relative flex h-2 w-2">
                                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-700/70 opacity-75"></span>
                                    <span class="relative inline-flex rounded-full h-2 w-2 bg-amber-400/70"></span>
                                  </span>
                                </div>
                              </div>
                              <div className="px-1 bg-[#3E3D3D] rounded-md">
                                {item.services !== null ? (
                                  <>{item.services[0].port}</>
                                ) : (
                                  <>None</>
                                )}
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
                            <div className="flex justify-center items-center w-auto">
                              <div className="flex space-x-2">
                                {item.technology.map((tech, index) =>
                                  tech.subtech.map((subtech) => (
                                    <TechInfo
                                      tech={getTechInfo(subtech.technology)} // Pass the result of getTechInfo
                                      catagory={tech.categories}
                                      version={subtech.version}
                                      position={
                                        index >= item.technology.length / 2
                                          ? "bottom"
                                          : ""
                                      }
                                    />
                                  ))
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="px-8 text-[#A1A1AB] border-b border-zinc-700/60 p-0 m-0 group-first:border-t group-hover:bg-[#18181B] group-hover:border-neutral-900 py-[1rem]">
                            <div className="flex justify-center items-center">
                              <div className="text-center">
                                {item.autonomous_system.asn}
                              </div>
                            </div>
                          </td>
                          <td className="px-8 text-[#A1A1AB] border-b border-zinc-700/60 p-0 m-0 group-first:border-t group-hover:bg-[#18181B] group-hover:border-neutral-900 py-[1rem]">
                            <div className="flex justify-center items-center">
                              <div
                                className={`inline-block px-3 text-center rounded-md`}
                              >
                                {item.is_online ? (
                                  <>
                                    <div className="flex space-x-5">
                                      <span className="absolute top-6 flex h-3 w-3 z-20">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-700 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400/70"></span>
                                      </span>
                                      <div>Online</div>{" "}
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    <div className="flex space-x-5">
                                      <span className="absolute top-6 flex h-3 w-3 z-20">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-700 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-400/70"></span>
                                      </span>
                                      <div>Down</div>{" "}
                                    </div>
                                  </>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="px-8 text-[#A1A1AB] border-b border-zinc-700/60 p-0 m-0 group-first:border-t group-hover:bg-[#18181B] group-hover:border-neutral-900 py-[1rem]">
                            <div className="flex justify-center items-center">
                              <div className="text-center">
                                {item.autonomous_system.name}
                              </div>
                            </div>
                          </td>
                          <td className="px-8 text-[#A1A1AB] border-b border-zinc-700/60 p-0 m-0 group-first:border-t group-hover:bg-[#18181B] group-hover:border-neutral-900 py-[1rem]">
                            <div className="flex justify-center items-center">
                              <div className="bg-neutral-800/70 inline-block px-2 text-center rounded-md">
                                --
                              </div>
                            </div>
                          </td>
                        </tr>
                      </>
                    ) : (
                      <></>
                    )
                  )} */}
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

export default Inventory;

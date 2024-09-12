import React, { useState } from "react";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightArrowLeft,
  faFlag,
  faGear,
  faGlobe,
  faHouse,
  faLock,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Scan = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [option, setoption] = useState(false);
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
    <div className=" bg-gray-900 text-slate-400 flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header
          tittle={"My Scan"}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <main>
          <div className="text-white">
            <div className="flex justify-center mt-10 text-4xl uppercase font-bold">
              <div>ASM Management</div>
            </div>
            <div className="mt-6 flex justify-center items-center">
              <input
                className="bg-slate-600 w-[700px] text-xl rounded-s-lg p-2"
                placeholder="URL to scan"
                type="text"
              />
              <div className="p-2.5 bg-green-500 hover:bg-green-600 cursor-pointer">
                <FontAwesomeIcon icon={faPlay} /> Start Scan
              </div>
              <div
                className="p-2.5 rounded-r-lg bg-gray-500 hover:bg-gray-600 cursor-pointer"
                onClick={() => setoption(!option)}
              >
                <FontAwesomeIcon icon={faGear} /> Options
              </div>
            </div>
            {option ? (
              <>
                <div className="px-52 mt-5 ">
                  <div className="border-t-2">
                    <div className="flex mt-5">
                      <div className="w-56 text-lg">Discription</div>
                      <input
                        type="text"
                        placeholder="Add some note ..."
                        className="px-2 w-[700px] bg-slate-600 rounded-sm text-lg"
                      />
                    </div>
                    <div className="flex mt-5">
                      <div className="w-56 text-lg">Custom User Agent</div>
                      <input
                        type="text"
                        placeholder="Custom User Agent - This will override the previous option"
                        className="px-2 w-[700px] bg-slate-600 rounded-sm text-lg"
                      />
                    </div>
                    <div className="flex mt-5">
                      <div className="w-56 text-lg">HTTP referer</div>
                      <input
                        type="text"
                        placeholder="http://example.com - Setting a custom HTTP referer header, use a full URL."
                        className="px-2 w-[700px] bg-slate-600 rounded-sm text-lg"
                      />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
            <div className="px-48 mt-4">
              <div className="font-bold text-2xl">Recent scans</div>
              <div className="px-4">
                <table className="table-auto">
                  <thead>
                    <tr>
                      <th className="text-left px-2">
                        <FontAwesomeIcon icon={faLock} />
                      </th>
                      <th className="text-left px-2 w-[500px]">URL</th>
                      <th className="text-left px-2">Age</th>
                      <th className="px-2"></th>
                      <th className="text-left px-2">Size</th>
                      <th className="text-left px-2">
                        <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                      </th>
                      <th className="text-left px-2">IPs</th>
                      <th className="text-left px-2">
                        <FontAwesomeIcon icon={faFlag} />
                      </th>
                      <th className="text-left px-2">
                        <FontAwesomeIcon icon={faHouse} />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-left px-2 text-green-500">
                        <FontAwesomeIcon icon={faLock} />
                      </td>
                      <NavLink to="/result/giz.proseed-al.de">
                        <td className="text-left px-2 text-green-500">
                          giz.proseed-al.de
                        </td>
                      </NavLink>
                      <td className="text-left px-2">27 seconds</td>
                      <td className="text-left px-2">
                        <FontAwesomeIcon icon={faGlobe} />
                      </td>
                      <td className="text-right px-2">3 MB</td>
                      <td className="text-left px-2 text-green-500">85</td>
                      <td className="text-left px-2">3</td>
                      <td className="text-left px-2">2</td>
                      <td className="text-left px-2">
                        <img
                          src="https://flagcdn.com/de.svg"
                          width={25}
                          height={25}
                          alt=""
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="text-left px-2 text-green-500">
                        <FontAwesomeIcon icon={faLock} />
                      </td>
                      <td className="text-left px-2 text-green-500">
                        antoanthucpham.angiang.gov.vn
                      </td>
                      <td className="text-left px-2">27 seconds</td>
                      <td className="text-left px-2">
                        <FontAwesomeIcon icon={faGlobe} />
                      </td>
                      <td className="text-right px-2">3 MB</td>
                      <td className="text-left px-2 text-green-500">85</td>
                      <td className="text-left px-2">3</td>
                      <td className="text-left px-2">2</td>
                      <td className="text-left px-2">
                        <img
                          src="https://flagcdn.com/vn.svg"
                          width={25}
                          height={25}
                          alt="Vietnam"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Scan;

import React, { useState } from "react";
import {
  faBullseye,
  faSquarePollVertical,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DomainCVE from "../../components/CVE/DomainCVE";
import Navbar from "../../components/Navbar/Navbar";
import OpenCVE from "../../components/CVE/OpenCVE";

const CVE = () => {
  const [cve, setcve] = useState("openCVE");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex bg-black h-screen overflow-hidden">
      <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Navbar site={"CVE"} />
        <main>
          <div className="pb-8 w-full max-w-9xl text-gray-400 relative">
            <div className="py-2 sticky top-[65px] z-10 bg-black">
              <div className="flex space-x-1 text-sm px-8">
                <div
                  className={`px-2 pb-2 cursor-pointer ${
                    cve === "openCVE" ? "border-b-2 border-indigo-400 z-10" : ""
                  }`}
                  onClick={() => {
                    setcve("openCVE");
                  }}
                >
                  <span
                    className={`${cve === "openCVE" ? "text-indigo-400" : ""}`}
                  >
                    <FontAwesomeIcon icon={faBullseye} />
                  </span>{" "}
                  <span className={`${cve === "openCVE" ? "text-white" : ""}`}>
                    CVE Management
                  </span>
                </div>
                <div
                  className={`px-2 pb-2 cursor-pointer ${
                    cve === "domain" ? "border-b-2 border-indigo-400 z-10" : ""
                  }`}
                  onClick={() => {
                    setcve("domain");
                  }}
                >
                  <span
                    className={`${cve === "domain" ? "text-indigo-400" : ""}`}
                  >
                    <FontAwesomeIcon icon={faSquarePollVertical} />
                  </span>{" "}
                  <span className={`${cve === "domain" ? "text-white" : ""}`}>
                    CVE of All Domain
                  </span>
                </div>
              </div>
              <div className="absolute bottom-2 left-0 w-full border-b-2 border-neutral-800"></div>
            </div>
            <div className="px-28 text-white">
              {cve === "openCVE" && <OpenCVE />}
              {cve === "domain" && <DomainCVE />}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CVE;

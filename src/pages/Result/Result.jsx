import {
  faArrowRightArrowLeft,
  faArrowRightRotate,
  faCaretDown,
  faCircleExclamation,
  faCrosshairs,
  faHandPointRight,
  faHome,
  faLink,
  faMagnifyingGlass,
  faMessage,
  faQrcode,
  faRectangleList,
  faReply,
  faShare,
  faSquarePollVertical,
  faBug,
} from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons/faFile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Test from "../Test";
import HTTP from "./HTTP";
import Links from "./Links";
import Redirects from "./Redirects";
import Summary from "./Summary";
import { scanResult } from "../../axios/test";
import CVE from "./Vulner";
import Vulner from "./Vulner";
const Result = () => {
  const [option, setoption] = useState("result");
  const [options, setoptions] = useState("Summary");
  const navigate = useNavigate();
  const [data, setdata] = useState({
    domain: "",
    discovery_reason: "",
    discovery_on: "",
    ip: "",
    services: [
      {
        http: {
          request: {
            method: "",
            uri: "",
          },
          response: {
            protocol: "",
            status_code: "",
            status_reason: "",
            header_location: "",
            html_title: "",
          },
        },
        port: "",
        service_name: "",
        software: [
          {
            vendor: "",
            product: "",
            version: "",
          },
        ],
        vulnerabilities: [
          {
            id: "",
            cvss: "",
            type: "",
            is_exploit: "",
            reference: "",
          },
        ],
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
        subject_cn: [""],
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
        category: "",
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
      bgp_prefix: "",
      name: "",
      country_code: "",
    },
    operating_system: {
      vendor: "",
      cpe: "",
      kernel_version: "",
    },
    dns: [
      {
        Asset_Name: "",
        Record_Type: "",
        Record: "",
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await scanResult();
      // console.log(response);
      setdata(response);
    };
    fetchData();
  }, []);
  // console.log(data);

  const handdleOption = (option) => {
    setoptions((prev) => (prev = option));
  };

  return (
    <div className="bg-black text-gray-400 flex overflow-hidden h-[calc(80%)] pb-20">
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Test site={"scan"} />

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
              {data.domain}
            </div>
          </div>
          <div className="absolute bottom-2 left-0 w-full border-b-2 border-neutral-800"></div>
        </div>
        <div className=" text-white flex px-20">
          <div className="relative flex flex-col flex-1 ">
            <main className="mt-5 px-20">
              <div className="flex justify-between">
                <div className="text-2xl font-bold">{data.domain}</div>
                <div className="flex space-x-2 text-sm">
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
                </div>
              </div>
              <div className="flex justify-between my-3">
                <div className="flex space-x-5">
                  <div className="text-gray-400 text-xl">{data.ip}</div>
                  <div class="flex justify-center items-center">
                    <div class="text-xs bg-indigo-500 rounded-md px-2 py-1 font-bold hover:bg-indigo-700 cursor-pointer">
                      Public Scan
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2 text-sm">
                  <div className="bg-zinc-700 px-2 py-1 rounded-md hover:bg-zinc-700/60 cursor-pointer">
                    <FontAwesomeIcon icon={faMessage} size="sm" /> {}
                    Add Verdict
                  </div>
                  <div className="bg-black border-2 border-zinc-700/60 px-2 py-1 rounded-md hover:bg-zinc-900 hover:border-zinc-700  cursor-pointer">
                    <FontAwesomeIcon icon={faCircleExclamation} /> {}
                    Report
                  </div>
                </div>
              </div>
              <div className="font-bold">
                Submitted URL:{" "}
                <span className="font-normal text-gray-300">https://</span>
                <span className="text-green-500">{data.domain}</span>
              </div>
              <div className="font-bold">
                Effective URL:{" "}
                <span className="font-normal text-gray-300">https://</span>
                <span className="text-green-500">{data.domain}/</span>
              </div>
              <div className="text-sm mb-2">
                <span className="font-bold">Submission:</span> On July 31 via
                automatic, source certstream-suspicious
              </div>
              <div className="flex flex-row text-sm">
                <div
                  className={
                    options === "Summary"
                      ? "px-3 py-1.5 bg-zinc-900 border-2 border-zinc-700 rounded-md cursor-pointer"
                      : "px-3 py-1.5 bg-black border-2 border-zinc-700/60 rounded-md hover:bg-zinc-900 hover:border-zinc-700 cursor-pointer"
                  }
                  onClick={() => {
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
                </div>
                <div
                  className={
                    options === "HTTP"
                      ? "px-3 py-1.5 bg-zinc-900 border-2 border-zinc-700 rounded-md cursor-pointer"
                      : "px-3 py-1.5 bg-black border-2 border-zinc-700/60 rounded-md hover:bg-zinc-900 hover:border-zinc-700 cursor-pointer"
                  }
                  onClick={() => {
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
                      {data.services.length}
                    </span>
                  </span>
                </div>
                {/* <div
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
                </div> */}
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
                </div>
                <div
                  className={
                    options === "Links"
                      ? "px-3 py-1.5 bg-zinc-900 border-2 border-zinc-700 rounded-md cursor-pointer"
                      : "px-3 py-1.5 bg-black border-2 border-zinc-700/60 rounded-md hover:bg-zinc-900 hover:border-zinc-700 cursor-pointer"
                  }
                  onClick={() => {
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
                  <span
                    className={`${options === "Links" ? "font-bold" : ""}`}
                  >
                    Links{" "}
                    <span className={`px-1.5 ${options === "Links" ? "bg-indigo-500" : "bg-zinc-700 "} rounded-md`}>4</span>
                  </span>
                </div> */}
                {/* <div
                  className={
                    options === "Behaviour"
                      ? "px-3 py-1.5 bg-zinc-900 border-2 border-zinc-700 rounded-md cursor-pointer"
                      : "px-3 py-1.5 bg-black border-2 border-zinc-700/60 rounded-md hover:bg-zinc-900 hover:border-zinc-700 cursor-pointer"
                  }
                  onClick={() => {
                    handdleOption("Behaviour");
                  }}
                >
                  <FontAwesomeIcon icon={faMessage} /> Behaviour
                </div>
                <div
                  className={
                    options === "Indicators"
                      ? "px-3 py-1.5 bg-zinc-900 border-2 border-zinc-700 rounded-md cursor-pointer"
                      : "px-3 py-1.5 bg-black border-2 border-zinc-700/60 rounded-md hover:bg-zinc-900 hover:border-zinc-700 cursor-pointer"
                  }
                  onClick={() => {
                    handdleOption("Indicators");
                  }}
                >
                  <FontAwesomeIcon icon={faCrosshairs} /> Indicators
                </div>
                <div
                  className={
                    options === "Similar"
                      ? "px-3 py-1.5 bg-zinc-900 border-2 border-zinc-700 rounded-md cursor-pointer ml-1"
                      : "px-3 py-1.5 bg-black border-2 border-zinc-700/60 rounded-md hover:bg-zinc-900 hover:border-zinc-700 cursor-pointer ml-1"
                  }
                  onClick={() => {
                    handdleOption("Similar");
                  }}
                >
                  <FontAwesomeIcon icon={faLink} /> Similar
                </div>
                <div
                  className={
                    options === "DOM"
                      ? "px-3 py-1.5 bg-zinc-900 border-2 border-zinc-700 rounded-md cursor-pointer"
                      : "px-3 py-1.5 bg-black border-2 border-zinc-700/60 rounded-md hover:bg-zinc-900 hover:border-zinc-700 cursor-pointer"
                  }
                  onClick={() => {
                    handdleOption("DOM");
                  }}
                >
                  <FontAwesomeIcon icon={faRectangleList} /> DOM
                </div>
                <div
                  className={
                    options === "Content"
                      ? "px-3 py-1.5 bg-zinc-900 border-2 border-zinc-700 rounded-md cursor-pointer"
                      : "px-3 py-1.5 bg-black border-2 border-zinc-700/60 rounded-md hover:bg-zinc-900 hover:border-zinc-700 cursor-pointer"
                  }
                  onClick={() => {
                    handdleOption("Content");
                  }}
                >
                  <FontAwesomeIcon icon={faFile} /> Content
                </div>
                <div
                  className={
                    options === "API"
                      ? "px-3 py-1.5 bg-zinc-900 border-2 border-zinc-700 rounded-md cursor-pointer"
                      : "px-3 py-1.5 bg-black border-2 border-zinc-700/60 rounded-md hover:bg-zinc-900 hover:border-zinc-700 cursor-pointer"
                  }
                  onClick={() => {
                    handdleOption("API");
                  }}
                >
                  <FontAwesomeIcon icon={faQrcode} /> API
                </div>
                <div className="px-3 py-1.5 border-2 rounded-sm bg-gray-400 ml-1 cursor-pointer">
                  <FontAwesomeIcon icon={faMessage} /> Verdicts
                </div> */}
              </div>
              {options === "Summary" && <Summary data={data} />}
              {options === "HTTP" && <HTTP data={data} />}
              {options === "Redirects" && <Redirects />}
              {options === "Links" && <Links />}
              {options === "vulner" && <Vulner data={data} />}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Result;

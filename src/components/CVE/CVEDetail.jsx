import {
  faBug,
  faFile,
  faGlobe,
  faReply,
  faStar,
  faStarOfLife,
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CVSS from "./CVSS";
import Details from "./Details";
import { getCVE } from "../../axios/CVEService/cveService";
import POC from "./POC";
import Navbar from "../Navbar/Navbar";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Repos from "./Repos";
const CVEDetail = () => {
  const [option, setoption] = useState("cvss");
  const [cvss, setcvss] = useState(3);
  const [load, setload] = useState(false);
  const location = useLocation();
  const { cveid } = location.state || {};
  const navigate = useNavigate();
  const [data, setdata] = useState({
    id: "",
    sourceIdentifier: "",
    vulnStatus: "",
    published: "",
    lastModified: "",
    descriptions: [
      {
        lang: "en",
        value: "",
      },
    ],
    references: [
      {
        url: "",
        source: "",
        tags: null,
      },
    ],
    metrics: {
      cvssMetricV4: null,
      cvssMetricV31: [
        {
          source: "",
          type: "",
          cvssData: {
            version: "",
            vectorString: "",
            attackVector: "",
            attackComplexity: "",
            privilegesRequired: "",
            userInteraction: "",
            scope: "",
            confidentialityImpact: "",
            integrityImpact: "",
            availabilityImpact: "",
            baseScore: 0,
            baseSeverity: "",
          },
          exploitabilityScore: 0,
          impactScore: 0,
        },
      ],
      cvssMetricV30: null,
      cvssMetricV2: [
        {
          source: "",
          type: "",
          cvssData: {
            version: "",
            vectorString: "",
            accessVector: "",
            accessComplexity: "",
            authentication: "",
            confidentialityImpact: "",
            integrityImpact: "",
            availabilityImpact: "",
            baseScore: 0,
          },
          baseSeverity: "HIGH",
          exploitabilityScore: 0,
          impactScore: 0,
          obtainAllPrivilege: false,
          obtainUserPrivilege: false,
          obtainOtherPrivilege: false,
          userInteractionRequired: false,
        },
      ],
    },
    weaknesses: [
      {
        source: "",
        type: "",
        description: [
          {
            lang: "",
            value: "",
          },
        ],
      },
    ],
    configurations: null,
  });

  useEffect(() => {
    console.log("useEffect running");
    console.log("location.state:", location.state);
    console.log("cveid:", cveid);

    if (!cveid) {
      console.error("cveid is undefined");
      return;
    }
    console.log("useEffect running");
    const fetchData = async () => {
      try {
        console.log(cveid);
        const response = await getCVE(cveid);
        console.log(response);
        const cveDetail = response.data;
        setdata(cveDetail);
      } catch (error) {
        console.error("Error fetching CVEs:", error);
      } finally {
        setload(true);
      }
    };
    fetchData();
  }, [cveid]);
  console.log(data);
  console.log(cveid);

  //Get stroke for cvss circle name
  const getCVSSType = (metrics) => {
    if (metrics.cvssMetricV31 !== null) {
      return "CVSSv3.1";
    } else if (metrics.cvssMetricV2 !== null) {
      return "CVSSv2.0";
    } else if (metrics.cvssMetricV30 !== null) {
      return "CVSSv3.0";
    }
    return "Undefined";
  };

  //Get stroke for cvss circle
  const getStroke = (metrics, type) => {
    switch (type) {
      case "cvss":
        if (metrics.cvssMetricV31 !== null) {
          return cvssCircle(metrics.cvssMetricV31[0].cvssData.baseScore);
        } else if (metrics.cvssMetricV2 !== null) {
          return cvssCircle(metrics.cvssMetricV2[0].cvssData.baseScore);
        } else if (metrics.cvssMetricV30 !== null) {
          return cvssCircle(metrics.cvssMetricV30[0].cvssData.baseScore);
        }
        return cvssCircle(0);

      case "color":
        if (metrics.cvssMetricV31 !== null) {
          return getCircleColor(metrics.cvssMetricV31[0].cvssData.baseScore);
        } else if (metrics.cvssMetricV2 !== null) {
          return getCircleColor(metrics.cvssMetricV2[0].cvssData.baseScore);
        } else if (metrics.cvssMetricV30 !== null) {
          return getCircleColor(metrics.cvssMetricV30[0].cvssData.baseScore);
        }
        return getCircleColor(0);
      case "score":
        if (metrics.cvssMetricV31 !== null) {
          return `${metrics.cvssMetricV31[0].cvssData.baseScore} /10`;
        } else if (metrics.cvssMetricV2 !== null) {
          return `${metrics.cvssMetricV2[0].cvssData.baseScore} /10`;
        } else if (metrics.cvssMetricV30 !== null) {
          return `${metrics.cvssMetricV30[0].cvssData.baseScore} /10`;
        }
        return `0 /10`;

      default:
    }
  };

  //Get stroke for cvss circle
  const cvssCircle = (cvss) => {
    return 100 - cvss * 10;
  };

  //Get color for cvss circle
  const getCircleColor = (cvss) => {
    if (cvss > 0 && cvss < 4) {
      return "text-green-500";
    } else if (cvss >= 4 && cvss < 7) {
      return "text-yellow-500";
    } else if (cvss >= 7 && cvss < 9) {
      return "text-orange-600";
    } else if (cvss >= 9 && cvss <= 10) {
      return "text-red-600";
    } else {
      return "text-gray-500";
    }
  };

  //Get color for cvss
  const getScoreColor = (cvss) => {
    if (cvss > 0 && cvss < 4) {
      return "bg-green-500";
    } else if (cvss >= 4 && cvss < 7) {
      return "bg-yellow-500";
    } else if (cvss >= 7 && cvss < 9) {
      return "bg-orange-600";
    } else if (cvss >= 9 && cvss <= 10) {
      return "bg-red-600";
    } else if (cvss === null) {
      return "bg-gray-500";
    } else {
      return "bg-gray-500";
    }
  };

  //Add score level
  const getScore = (cvss) => {
    if (cvss > 0 && cvss < 4) {
      return `${cvss} Low`;
    } else if (cvss >= 4 && cvss < 7) {
      return `${cvss} Medium`;
    } else if (cvss >= 7 && cvss < 9) {
      return `${cvss} High`;
    } else if (cvss >= 9 && cvss <= 10) {
      return `${cvss} Critical`;
    } else if (cvss === null) {
      return "Undefined";
    } else {
      return "Undefined";
    }
  };

  //Custom date
  const customDate = (date) => {
    if (!date) {
      return "Invalid date";
    }
    const parsedDate = new Date(date);
    if (isNaN(parsedDate)) {
      return "Invalid date";
    }
    return parsedDate.toISOString().split("T")[0];
  };
  return (
    <div className=" bg-black flex h-screen overflow-hidden">
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Navbar site={"CVE"} />
        <main>
          <div className="px-8 py-2 sticky top-[65px] z-10 bg-black">
            <div className="flex space-x-1 text-sm">
              <div className="flex items-center relative group">
                {/* Icon with hover */}
                <div
                  className="px-2 pb-2 cursor-pointer z-10 text-gray-400"
                  onClick={() => {
                    navigate("/cve");
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
                  <FontAwesomeIcon icon={faBug} />
                </span>{" "}
                {data.id}
              </div>
            </div>
            <div className="absolute bottom-2 left-0 w-full border-b-2 border-neutral-800"></div>
          </div>
          <div className="flex justify-center space-x-5 px-28 mt-4 pb-10 w-full text-gray-400">
            <div className="flex-col space-y-5">
              {/* Descriptions */}
              <div className="w-full max-w-screen-xl border border-zinc-700 bg-black hover:bg-zinc-900 rounded-sm p-2">
                <div className="text-xl font-bold text-white">Description</div>
                <div className="flex p-2 justify-between relative">
                  <div className="break-all w-full pr-20">
                    {data.descriptions[0].value}
                  </div>
                  <div className="align-middle">
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
                          className={`stroke-current ${getStroke(
                            data.metrics,
                            "color"
                          )}`}
                          stroke-width="2"
                          stroke-dasharray="100"
                          stroke-dashoffset={getStroke(data.metrics, "cvss")}
                          stroke-linecap="round"
                        ></circle>
                      </svg>
                      <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                        <span className="text-center text-2xl font-bold">
                          {getCVSSType(data.metrics)}
                        </span>
                        <div className="text-center">
                          {getStroke(data.metrics, "score")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-black border border-zinc-700  px-2 pb-4 ">
                <div className="relative">
                  <div className="flex py-2 px-2 space-x-2 text-lg">
                    {/* <div
                      className={
                        option === "country"
                          ? "px-1 border-b-2 border-indigo-400 z-10 rounded-sm cursor-pointer"
                          : "px-1  rounded-sm cursor-pointer"
                      }
                      onClick={() => {
                        setoption("country");
                      }}
                    >
                      <span
                        className={`${
                          option === "country" ? "text-indigo-400" : ""
                        }`}
                      >
                        <FontAwesomeIcon icon={faGlobe} />
                      </span>{" "}
                      <span
                        className={`${
                          option === "country" ? "text-white" : ""
                        }`}
                      >
                        Affected Countries
                      </span>
                    </div> */}
                    <div
                      className={
                        option === "cvss"
                          ? "px-1 border-b-2 border-indigo-400 z-10 rounded-sm cursor-pointer"
                          : "px-1  rounded-sm cursor-pointer"
                      }
                      onClick={() => {
                        setoption("cvss");
                      }}
                    >
                      <span
                        className={`${
                          option === "cvss" ? "text-indigo-400" : ""
                        }`}
                      >
                        <FontAwesomeIcon icon={faStarOfLife} />
                      </span>{" "}
                      <span
                        className={`${option === "cvss" ? "text-white" : ""}`}
                      >
                        CVSS
                      </span>
                    </div>
                    <div
                      className={
                        option === "details"
                          ? "px-1 border-b-2 border-indigo-400 z-10 rounded-sm cursor-pointer"
                          : "px-1  rounded-sm cursor-pointer"
                      }
                      onClick={() => {
                        setoption("details");
                      }}
                    >
                      <span
                        className={`${
                          option === "details" ? "text-indigo-400" : ""
                        }`}
                      >
                        <FontAwesomeIcon icon={faFile} />
                      </span>{" "}
                      <span
                        className={`${
                          option === "details" ? "text-white" : ""
                        }`}
                      >
                        Details
                      </span>
                    </div>
                    <div
                      className={
                        option === "repos"
                          ? "px-1 border-b-2 border-indigo-400 z-10 rounded-sm cursor-pointer"
                          : "px-1  rounded-sm cursor-pointer"
                      }
                      onClick={() => {
                        setoption("repos");
                      }}
                    >
                      <span
                        className={`${
                          option === "repos" ? "text-indigo-400" : ""
                        }`}
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </span>{" "}
                      <span
                        className={`${option === "repos" ? "text-white" : ""}`}
                      >
                        GitHub Repo
                      </span>
                    </div>
                    {/* <div
                      className={
                        option === "poc"
                          ? "px-1 border-b-2 border-indigo-400 z-10 rounded-sm cursor-pointer"
                          : "px-1  rounded-sm cursor-pointer"
                      }
                      onClick={() => {
                        setoption("poc");
                      }}
                    >
                      <span
                        className={`${
                          option === "poc" ? "text-indigo-400" : ""
                        }`}
                      >
                        <FontAwesomeIcon icon={faBug} />
                      </span>{" "}
                      <span
                        className={`${option === "poc" ? "text-white" : ""}`}
                      >
                        Available PoC's & Exploits
                      </span>
                    </div> */}
                  </div>
                  <div className="absolute bottom-2 left-0 w-full border-b-2 border-zinc-700/60"></div>
                </div>

                {/* CVSS */}
                {option === "cvss" ? (
                  <>
                    <div className="mt-4 px-2">
                      <div className="relative">
                        <div className="flex space-x-2">
                          <div
                            className={
                              cvss === 3
                                ? "p-2 border-b-2 border-indigo-400 cursor-pointer"
                                : "p-2 cursor-pointer"
                            }
                            onClick={() => {
                              setcvss(3);
                            }}
                          >
                            <span
                              className={`${cvss === 3 ? "text-white" : ""}`}
                            >
                              CVSS v3.1
                            </span>{" "}
                            <span
                              className={`px-1 ${
                                data.metrics.cvssMetricV31 !== null
                                  ? getScoreColor(
                                      data.metrics.cvssMetricV31[0].cvssData
                                        .baseScore
                                    )
                                  : ""
                              } round-md text-sm text-white`}
                            >
                              {data.metrics.cvssMetricV31 !== null
                                ? getScore(
                                    data.metrics.cvssMetricV31[0].cvssData
                                      .baseScore
                                  )
                                : ""}
                            </span>
                          </div>
                          <div
                            className={
                              cvss === 2
                                ? "p-2 border-b-2 border-indigo-400 cursor-pointer"
                                : "p-2 cursor-pointer"
                            }
                            onClick={() => {
                              setcvss(2);
                            }}
                          >
                            <span
                              className={`${cvss === 2 ? "text-white" : ""}`}
                            >
                              CVSS v3.0
                            </span>{" "}
                            <span
                              className={`px-1 ${
                                data.metrics.cvssMetricV30 !== null
                                  ? getScoreColor(
                                      data.metrics.cvssMetricV30[0].cvssData
                                        .baseScore
                                    )
                                  : ""
                              } round-md text-sm text-white`}
                            >
                              {data.metrics.cvssMetricV30 !== null
                                ? getScore(
                                    data.metrics.cvssMetricV30[0].cvssData
                                      .baseScore
                                  )
                                : ""}
                            </span>
                          </div>
                          <div
                            className={
                              cvss === 1
                                ? "p-2 border-b-2 border-indigo-400 cursor-pointer"
                                : "p-2 cursor-pointer"
                            }
                            onClick={() => {
                              setcvss(1);
                            }}
                          >
                            <span
                              className={`${cvss === 1 ? "text-white" : ""}`}
                            >
                              CVSS v2.0
                            </span>{" "}
                            <span
                              className={`px-1 ${
                                data.metrics.cvssMetricV2 !== null
                                  ? getScoreColor(
                                      data.metrics.cvssMetricV2[0].cvssData
                                        .baseScore
                                    )
                                  : ""
                              } round-md text-sm text-white`}
                            >
                              {data.metrics.cvssMetricV2 !== null
                                ? getScore(
                                    data.metrics.cvssMetricV2[0].cvssData
                                      .baseScore
                                  )
                                : ""}
                            </span>
                          </div>
                        </div>
                        <div className="absolute  left-0 w-full border-b-2 border-zinc-700/60"></div>
                      </div>

                      {cvss === 3 && (
                        <CVSS metric={data.metrics.cvssMetricV31} />
                      )}
                      {cvss === 2 && (
                        <CVSS metric={data.metrics.cvssMetricV30} />
                      )}
                      {cvss === 1 && (
                        <CVSS metric={data.metrics.cvssMetricV2} />
                      )}
                    </div>
                  </>
                ) : (
                  <></>
                )}

                {/* CVEDetails */}
                {option === "details" && (
                  <Details
                    references={data.references}
                    config={data.configurations}
                  />
                )}

                {/* POC & Exploit */}
                {option === "poc" && <POC />}

                {/* Repos */}
                {option === "repos" && <Repos />}
              </div>
            </div>
            <div className="flex-col space-y-5">
              <div className="w-full max-w-sm border border-zinc-700 bg-black hover:bg-zinc-900 p-2">
                <div className="flex space-x-2">
                  <img
                    src="https://app.opencve.io/static/img/cve-icon.png"
                    alt=""
                  />
                  <div className="text-xl text-white">MITRE</div>
                </div>
                <div className="flex">
                  <div className="flex-col font-bold text-white">
                    <div>Status:</div>
                    <div>Assigner:</div>
                    <div>Published:</div>
                    <div>Updated:</div>
                    <div>Link:</div>
                  </div>
                  <div className="flex-col">
                    <div>{data.vulnStatus}</div>
                    <div>
                      {data.weaknesses ? data.weaknesses[0].source : ""}
                    </div>
                    <div>{customDate(data.published)}</div>
                    <div>{customDate(data.lastModified)}</div>
                    <a
                      href={`https://www.cve.org/CVERecord?id=${data.id}`}
                      target="_blank"
                      className="text-blue-400 cursor-pointer"
                    >
                      {data.id}
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-[300px] border border-zinc-700 bg-black hover:bg-zinc-900 p-2">
                <div className="flex space-x-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/1f/CISA_Logo.png"
                    width={30}
                    alt=""
                  />
                  <div className="text-xl text-white"> Vulnrichment</div>
                </div>
                <div className="p-3 border-2 border-zinc-700/60 bg-zinc-900 mt-4">
                  No data.
                </div>
              </div>
              <div className="w-[300px] border border-zinc-700 bg-black hover:bg-zinc-900 p-2">
                <div className="flex space-x-2">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNI4xfzCS1h96H558mIfuah3omwe-nLCaAeg&s"
                    width={30}
                    alt=""
                  />
                  <div className="text-xl text-white">NVD</div>
                </div>
                <div className="flex">
                  <div className="flex-col font-bold text-white">
                    <div>Status:</div>
                    <div>Published:</div>
                    <div>Modified:</div>
                    <div>Link:</div>
                  </div>
                  <div className="flex-col">
                    <div>{data.vulnStatus}</div>
                    <div>{customDate(data.published)}</div>
                    <div>{customDate(data.lastModified)}</div>
                    <a
                      href={`https://nvd.nist.gov/vuln/detail/${data.id}`}
                      target="_blank"
                      className="text-blue-400 cursor-pointer"
                    >
                      {data.id}
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-[300px] border border-zinc-700 bg-black hover:bg-zinc-900 p-2">
                <div className="flex space-x-2">
                  <img
                    src="https://static-00.iconduck.com/assets.00/redhat-icon-2048x2048-c81kj8ny.png"
                    width={30}
                    alt=""
                  />
                  <div className="text-xl text-white">Redhat</div>
                </div>
                <div className="p-3 border-2 border-zinc-700/60 bg-zinc-900 mt-4">
                  No data.
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CVEDetail;

import {
  faAngleDown,
  faAngleUp,
  faCheck,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DOMPurify from "dompurify";
import React, { useEffect, useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCVEDetail } from "../../axios/CVEService/cveService";
import copy from "copy-to-clipboard";
const DomainCVEDetail = ({ cveDetails, setCveDetails }) => {
  const [expand, setexpand] = useState([]);
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState({
    affects_detail: "",
    affects_url: "",
    api_operation_id: null,
    api_type: null,
    app: "",
    comment: null,
    confidence: 0,
    criticality: 0,
    cvss2: "",
    cvss3: "",
    cvss4: "",
    cvss4_score: 0,
    cvss_score: 0,
    description: "",
    details: "",
    highlights: [],
    impact: "",
    issue_url: null,
    loc_id: 0,
    long_description: "",
    recommendation: "",
    references: [
      {
        href: "",
        rel: "",
      },
    ],
    request: "",
    response_info: true,
    severity: 0,
    source: "",
    status: "",
    tags: [],
    target_id: "",
    target_vuln_id: "",
    vt_created: null,
    vt_id: "",
    vt_name: "",
    vt_updated: null,
    vuln_id: "",
  });
  const [copied, setCopied] = useState(false);
  const toastId = "error-toast";
  console.log("CVE Detail", cveDetails);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await getCVEDetail(cveDetails.domain, cveDetails.id);
        console.log("asdasdas", response);
        if (response.data.status_code) {
          throw new Error("Not Availabel");
        } else {
          setloading(false);
          setdata(response.data);
        }
      } catch (error) {
        if (!toast.isActive(toastId)) {
          toast.error("Not Available", {
            toastId,
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
    };
    fetchApi();
  }, []);
  console.log(data);

  // close modal
  const closeModal = () => {
    setCveDetails({
      status: false,
      domain: "",
      id: "",
    });
  };

  // Copy clipboard
  const copyToClipboard = (text) => {
    setCopied(true);
    copy(text);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  //handle expand
  const handleExpand = (index) => {
    if (expand.includes(index)) {
      setexpand(expand.filter((item) => item !== index));
    } else {
      setexpand([...expand, index]);
    }
  };

  //Render cvss score color
  const serverityColor = (score) => {
    switch (score) {
      case 4:
        return "text-red-600 bg-red-600/40";
      case 3:
        return "text-amber-600 bg-amber-600/40";
      case 2:
        return "text-indigo-600 bg-indigo-600/40";
      case 1:
        return "text-green-600 bg-green-600/40";
      default:
        return "text-gray-600 bg-gray-600/40";
    }
  };

  //Render serverity class
  const serverityClass = (score) => {
    switch (score) {
      case 4:
        return "Critical";
      case 3:
        return "High";
      case 2:
        return "Low";
      case 1:
        return "Info";
      default:
        return "known";
    }
  };

  //Render CVSS2
  const renderCVSS2 = (score) => {
    // Mapping of CVSS string values to NIST descriptions
    const mapping = {
      "AV:N": "Attack Vector: Network",
      "AV:A": "Attack Vector: Adjacent Network",
      "AV:L": "Attack Vector: Local",
      "AC:H": "Attack Complexity: High",
      "AC:M": "Attack Complexity: Medium",
      "AC:L": "Attack Complexity: Low",
      "Au:N": "Privileges Required: None",
      "Au:S": "Privileges Required: Single",
      "Au:M": "Privileges Required: Multiple",
      "C:N": "Confidentiality: None",
      "C:P": "Confidentiality: Partial",
      "C:C": "Confidentiality: Complete",
      "I:N": "Integrity: None",
      "I:P": "Integrity: Partial",
      "I:c": "Integrity: Complete",
      "A:N": "Availability: None",
      "A:P": "Availability: Partial",
      "A:C": "Availability: Complete",
    };

    // Split the input CVSS string by '/'
    const cvssParts = score.split("/");

    // Build the result string based on the mapping
    const result = cvssParts.map((part) => mapping[part]).filter(Boolean);

    return result;
  };

  // Render CVSS3
  const renderCVSS3 = (score) => {
    // Mapping of CVSS string values to NIST descriptions
    const mapping = {
      "AV:N": "Attack Vector: Network",
      "AV:A": "Attack Vector: Adjacent Network",
      "AV:L": "Attack Vector: Local",
      "AV:P": "Attack Vector: Physical",
      "PR:N": "Privileges Required: None",
      "PR:L": "Privileges Required: Low",
      "PR:H": "Privileges Required: High",
      "AC:H": "Attack Complexity: High",
      "AC:L": "Attack Complexity: Low",
      "UI:N": "User Interaction: None",
      "UI:R": "User Interaction: Required",
      "S:U": "Scope: Unchanged",
      "S:C": "Scope: Changed",
      "C:N": "Confidentiality: None",
      "C:L": "Confidentiality: Low",
      "C:H": "Confidentiality: High",
      "I:N": "Integrity: None",
      "I:L": "Integrity: Low",
      "I:H": "Integrity: High",
      "A:N": "Availability: None",
      "A:L": "Availability: Low",
      "A:H": "Availability: High",
    };

    // Split the input CVSS string by '/'
    const cvssParts = score.split("/");

    // Build the result string based on the mapping
    const result = cvssParts.map((part) => mapping[part]).filter(Boolean);

    return result;
  };
  // Render CVSS4
  const renderCVSS4 = (score) => {
    // Mapping of CVSS string values to NIST descriptions
    const mapping = {
      "AV:N": "Attack Vector: Network",
      "AV:A": "Attack Vector: Adjacent Network",
      "AV:L": "Attack Vector: Local",
      "AV:P": "Attack Vector: Physical",

      "AC:H": "Attack Complexity: High",
      "AC:M": "Attack Complexity: Medium",
      "AC:L": "Attack Complexity: Low",

      "PR:N": "Privileges Required: None",
      "PR:L": "Privileges Required: Low",
      "PR:H": "Privileges Required: High",

      "UI:N": "User Interaction: None",
      "UI:R": "User Interaction: Required",

      "S:U": "Scope: Unchanged",
      "S:C": "Scope: Changed",

      "C:N": "Confidentiality: None",
      "C:L": "Confidentiality: Low",
      "C:H": "Confidentiality: High",

      "I:N": "Integrity: None",
      "I:L": "Integrity: Low",
      "I:H": "Integrity: High",

      "A:N": "Availability: None",
      "A:L": "Availability: Low",
      "A:H": "Availability: High",

      "M:A": "Modified Attack Vector",
      "M:C": "Modified Confidentiality Impact",
      "M:I": "Modified Integrity Impact",

      "CR:N": "Exploitability: None",
      "CR:L": "Exploitability: Low",
      "CR:H": "Exploitability: High",
      "CR:M": "Exploitability: Moderate",

      "RC:N": "Remediation Level: None",
      "RC:H": "Remediation Level: High",
      "RC:M": "Remediation Level: Moderate",
      "RC:L": "Remediation Level: Low",
    };

    // Split the input CVSS string by '/'
    const cvssParts = score.split("/");

    // Build the result string based on the mapping
    const result = cvssParts.map((part) => mapping[part]).filter(Boolean);

    return result;
  };

  if (loading) {
    return <div></div>;
  }

  return (
    <div className="relative bg-zinc-900 max-w-lg min-w-[32rem] p-4 shadow-lg text-gray-400 rounded-sm border border-zinc-700/60">
      <button
        type="button"
        className="absolute top-3 end-2.5 text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
        onClick={() => {
          closeModal();
        }}
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
      <div className="block space-y-5">
        <div className="flex space-x-4">
          <div>
            <span
              className={`w-16 text-center px-2 inline-block rounded-full ${serverityColor(
                data.severity
              )}`}
            >
              {serverityClass(data.severity)}
            </span>
          </div>
          <div className="font-bold break-words text-pretty overflow-hidden text-white">
            {data.vt_name ? data.vt_name : "None"}
          </div>
        </div>
        <div className="flex space-x-5">
          <div className="font-bold text-white">URL:</div>
          <div className="break-words text-pretty overflow-hidden cursor-pointer hover:text-blue-500">
            {data.affects_url ? data.affects_url : "None"}
          </div>
        </div>
        <div
          className="flex space-x-2  cursor-pointer"
          onClick={() => {
            handleExpand("detail");
          }}
        >
          <div className="font-bold text-white">Attack Details </div>
          <span className="">
            {" "}
            <FontAwesomeIcon
              icon={expand.includes("detail") ? faAngleUp : faAngleDown}
            />
          </span>
        </div>
        <div
          className={`${expand.includes("detail") ? "break-words text-pretty overflow-hidden" : "hidden"}`}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data.details ? data.details : "None"),
          }}
        ></div>
        <div
          className="flex space-x-2  cursor-pointer"
          onClick={() => {
            handleExpand("description");
          }}
        >
          <div className="font-bold text-white">Vulnerability Description </div>
          <span className="">
            {" "}
            <FontAwesomeIcon
              icon={expand.includes("description") ? faAngleUp : faAngleDown}
            />
          </span>
        </div>
        <div className={`${expand.includes("description") ? "" : "hidden"}`}>
          {data.description ? data.description : "None"}
        </div>
        <div
          className="flex space-x-2  cursor-pointer"
          onClick={() => {
            handleExpand("request");
          }}
        >
          <div className="font-bold text-white"> HTTP Request </div>
          <span className="">
            {" "}
            <FontAwesomeIcon
              icon={expand.includes("request") ? faAngleUp : faAngleDown}
            />
          </span>
        </div>
        <div className={`${expand.includes("request") ? "px-2" : "hidden"}`}>
          <div className="relative break-words rounded-lg p-2 font-mono text-sm whitespace-pre-wrap bg-black max-w-full overflow-auto">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              title="Copy to clipboard"
            >
              {copied ? (
                <span className="text-green-500">
                  <FontAwesomeIcon icon={faCheck} />
                </span>
              ) : (
                <span
                  onClick={() => {
                    copyToClipboard(data.request);
                  }}
                  className="text-gray-500 hover:text-zinc-100"
                >
                  <FontAwesomeIcon icon={faCopy} size="xl" />
                </span>
              )}
            </button>
            <span className="pt-4">{data.request ? data.request : "None"}</span>
          </div>
        </div>
        {/* <div
          className="flex space-x-2  cursor-pointer"
          onClick={() => {
            handleExpand("reponse");
          }}
        >
          <div className="font-bold text-white">HTTP Reponse </div>
          <span className="">
            {" "}
            <FontAwesomeIcon
              icon={expand.includes("reponse") ? faAngleUp : faAngleDown}
            />
          </span>
        </div>
        <div className={`${expand.includes("reponse") ? "px-2" : "hidden"}`}>
          <div className="relative break-words rounded-lg p-2 font-mono text-sm whitespace-pre-wrap bg-black max-w-full overflow-auto">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              title="Copy to clipboard"
            >
              {copied ? (
                <span className="text-green-500">
                  <FontAwesomeIcon icon={faCheck} />
                </span>
              ) : (
                <span
                  onClick={() => {
                    copyToClipboard(data.response);
                  }}
                  className="text-gray-500 hover:text-zinc-100"
                >
                  <FontAwesomeIcon icon={faCopy} size="xl" />
                </span>
              )}
            </button>
            <span className="pt-4">{data.request ? data.response_info : "None"}</span>
          </div>
        </div> */}
        <div
          className="flex space-x-2  cursor-pointer"
          onClick={() => {
            handleExpand("impact");
          }}
        >
          <div className="font-bold text-white">
            The impact of this vulnerability{" "}
          </div>
          <span className="">
            {" "}
            <FontAwesomeIcon
              icon={expand.includes("impact") ? faAngleUp : faAngleDown}
            />
          </span>
        </div>
        <div className={`${expand.includes("impact") ? "" : "hidden"}`}>
          <div className="break-words overflow-hidden text-pretty">
            {data.impact}
          </div>
        </div>
        <div
          className="flex space-x-2  cursor-pointer"
          onClick={() => {
            handleExpand("fix");
          }}
        >
          <div className="font-bold text-white">
            How to fix this vulnerability{" "}
          </div>
          <span className="">
            {" "}
            <FontAwesomeIcon
              icon={expand.includes("fix") ? faAngleUp : faAngleDown}
            />
          </span>
        </div>
        <div className={`${expand.includes("fix") ? "" : "hidden"}`}>
          <div className="break-words overflow-hidden text-pretty">
            {data.recommendation}
          </div>
        </div>
        <div
          className="flex space-x-2 items-center cursor-pointer"
          onClick={() => {
            handleExpand("classify");
          }}
        >
          <div className="font-bold text-white">Classification </div>
          <span className="">
            {" "}
            <FontAwesomeIcon
              icon={expand.includes("classify") ? faAngleUp : faAngleDown}
            />
          </span>
        </div>
        <div className={`${expand.includes("classify") ? "" : "hidden"}`}>
          <div className="flex space-x-5">
            <div className="font-semibold text-white">CVSS2:</div>
            <div className="flex-col">
              <div>{data.cvss2}</div>
              {renderCVSS2(data.cvss2).map((item, index) => (
                <div>{item}</div>
              ))}
            </div>
          </div>
          <div className="flex space-x-5">
            <div className="font-semibold text-white">CVSS3:</div>
            <div className="flex-col">
              <div>{data.cvss3}</div>
              {renderCVSS3(
                data.cvss3.includes("CVSS")
                  ? data.cvss3.replace("CVSS:3.0/", "")
                  : data.cvss3
              ).map((item, index) => (
                <div>{item}</div>
              ))}
            </div>
          </div>
          <div className="flex space-x-5">
            <div className="font-semibold text-white">CVSS4:</div>
            <div className="overflow-hidden break-words text-pretty">
              {data.cvss4}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DomainCVEDetail;

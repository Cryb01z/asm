import { faCube, faMicrochip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
const Details = ({ references, config }) => {
  const [reference, setreferences] = useState([
    {
      url: "",
      source: "cna@vuldb.com",
      tags: null,
    },
  ]);

  useEffect(() => {
    setreferences(references);
  }, [references]);
  console.log(reference);
  console.log(references);
  console.log(config);

  const getRefIcon = (url) => {
    if (url.includes("vuldb.com")) {
      return "/icon/vuldb.png";
    } else if (url.includes("github.com")) {
      return "/icon/github.png";
    } else if (url.includes("x.com")) {
      return "/icon/twitter.png";
    } else if (url.includes("dlink.com")) {
      return "/icon/dlink.png";
    } else if (url.includes("splunk")){
      return "/icon/splunk.png";
    }
    return "/icon/info.svg";
  };

  return (
    <div className="px-2 mt-4">
      <div className="flex space-x-10 max-w-6xl justify-between">
        <div className="w-full hover:bg-zinc-900 border border-zinc-700 rounded-sm ">
          <div className="p-2 text-white font-semibold">
            <FontAwesomeIcon icon={faMicrochip} /> Configuration
          </div>
          <div className="border-t-2 border-zinc-700"></div>
          {config !== null ? (
            <>
              {config[0].nodes.map((node, index) => (
                <div className="p-2">
                  <div className="py-2 font-bold text-white">
                    Nodes {index + 1}
                  </div>
                  <table className="w-full text-white">
                    <thead>
                      <tr className="border-b-2 border-zinc-700">
                        <th className="text-left px-2">Operator</th>
                        <th className="text-left px-2">Negate</th>
                        <th className="text-left px-2">CPEMatch</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b-2 border-zinc-700">
                        <td className="text-left px-2">{node.operator}</td>
                        <td className="text-left px-2">{node.negate ? "True":"False"}</td>
                        <td className="text-left px-2">{node.cpeMatch.map((item) => (
                          <div className="text-left px-2">{item.criteria}</div>
                        ))}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))}
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="w-full rounded-sm border-2 h-96 hover:bg-zinc-900 border-zinc-700 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-black">
          <div className="p-2 text-white font-semibold">
            <FontAwesomeIcon icon={faCube} /> References
          </div>
          <div className="border-t-2 border-zinc-700"></div>
          <table className="table">
            <thead>
              <tr className="text-white">
                <th className="p-2 text-left w-32">Provider</th>
                <th className="p-2 text-left ">Link</th>
              </tr>
            </thead>
            <tbody>
              {reference.map((ref) => (
                <tr className="border-t-2 border-zinc-700">
                  <td className="p-2 text-left w-32">
                    <span className="align-middle">
                      <img
                        className="bg-white rounded-full"
                        src={getRefIcon(ref.url)}
                        width={25}
                        height={25}
                        alt=""
                      />
                    </span>
                  </td>
                  <a
                    href={ref.url}
                    target="_blank"
                    className="p-2 text-left text-pretty break-words overflow-hidden hover:text-blue-500 cursor-pointer "
                  >
                    {ref.url}
                  </a>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Details;

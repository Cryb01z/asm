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

  const getRefIcon = (url) => {
    if (url.includes("vuldb.com")) {
      return "/icon/vuldb.png";
    } else if (url.includes("github.com")) {
      return "/icon/github.png";
    } else if (url.includes("x.com")){
      return "/icon/twitter.png";
    } else if (url.includes("dlink.com")){
      return "/icon/dlink.png";      
    }
    return "/icon/info.svg";
  };

  return (
    <div className="px-2 mt-4">
      <div className="flex space-x-10 justify-between">
        <div className="w-full hover:bg-zinc-900 border border-zinc-700 rounded-sm ">
          <div className="p-2 text-white font-semibold">
            <FontAwesomeIcon icon={faMicrochip} /> Affected Software
          </div>
          <div className="border-t-2 border-zinc-700"></div>
          <div className="p-2">
            <div className="py-2 font-bold text-white">Configuration 1</div>
            <table className="w-full text-white">
              <thead>
                <tr>
                  <td className="text-left px-2">Type</td>
                  <td className="text-left px-2">Vendor</td>
                  <td className="text-left px-2">Products</td>
                  <td className="text-left px-2">Action</td>
                </tr>
              </thead>
            </table>
          </div>
          {config === null ? (
            <>
              <div className="border-t-2 border-zinc-700"></div>
            </>
          ) : (
            <>
              <tr className="border-t-2 border-zinc-700"></tr>
              <div className="p-2">
                <div className="flex text-sm">
                  <div className="text-left w-20">App</div>
                  <div className="text-left w-20">Apache</div>
                  <div className="text-left w-36">Http Server</div>
                  <div className="text-left w-24">
                    <span className="p-1 text-black bg-white hover:bg-white/80 rounded-sm cursor-pointer ">
                      Show Cpe List
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="w-full rounded-sm border-2 hover:bg-zinc-900 border-zinc-700 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-black">
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
                    className="p-2 text-left break-all hover:text-blue-500 cursor-pointer "
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

import {
  faCircleDown,
  faCircleExclamation,
  faCirclePlus,
  faEye,
  faFile,
  faLock,
  faMagnifyingGlass,
  faShare,
  faSquareMinus,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
const HTTP = ({ data }) => {
  const [expandedRows, setExpandedRows] = useState([]);
  const [expandHeader, setexpandHeader] = useState([]);
  const [allExpanded, setAllExpanded] = useState(false);

  const handleToggleExpand = (index) => {
    setExpandedRows((prevExpandedRows) =>
      prevExpandedRows.includes(index)
        ? prevExpandedRows.filter((i) => i !== index)
        : [...prevExpandedRows, index]
    );
  };

  const handleExpandHeader = (index) => {
    setexpandHeader((preExpandHeader) =>
      preExpandHeader.includes(index)
        ? preExpandHeader.filter((i) => i !== index)
        : [...preExpandHeader, index]
    );
  };

  const handleExpandAll = () => {
    console.log("asdasd");
    
    if (allExpanded) {
      // Collapse all
      setExpandedRows([]);
      setexpandHeader([]);
    } else {
      // Expand all
      const allIndexes = data.services.map((_, index) => index);
      console.log(allIndexes);

      setExpandedRows(allIndexes);
      setexpandHeader(allIndexes);
    }
    setAllExpanded(!allExpanded);
  };

  return (
    <div className="mt-6 pb-20">
      <div className="flex justify-between text-center">
        <div className="font-bold text-xl">17 HTTP transactions</div>
        <div className="flex space-x-0.5 text-sm">
          <div className="border-2 border-zinc-700 rounded-md px-1 bg-indigo-500 cursor-pointer">
            <FontAwesomeIcon icon={faFile} /> Everything
          </div>
          <div className="border-2 border-zinc-700 rounded-md px-1 bg-black cursor-pointer">
            <FontAwesomeIcon icon={faFile} /> HTML
          </div>
          <div className="border-2 border-zinc-700 rounded-md px-1 bg-black cursor-pointer">
            <FontAwesomeIcon icon={faFile} /> Script
          </div>
          <div className="border-2 border-zinc-700 rounded-md px-1 bg-black cursor-pointer">
            <FontAwesomeIcon icon={faFile} /> AJAX
          </div>
          <div className="border-2 border-zinc-700 rounded-md px-1 bg-black cursor-pointer">
            <FontAwesomeIcon icon={faFile} /> CSS
          </div>
          <div className="border-2 border-zinc-700 rounded-md px-1 bg-black cursor-pointer">
            <FontAwesomeIcon icon={faFile} /> Image
          </div>
          <div
            className="ml-1 border-2 border-zinc-700 rounded-md px-1 bg-zinc-900 cursor-pointer"
            onClick={() => handleExpandAll()}
          >
            {allExpanded ? (
              <>
                <FontAwesomeIcon icon={faSquareMinus} /> Collapse all
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faSquarePlus} /> ExpandAll
              </>
            )}
          </div>
        </div>
      </div>
      <div>0 data transactions</div>
      <table class="table-auto w-full">
        <thead>
          <tr className="">
            <th class="text-left px-2">
              Method <br /> Protocol
            </th>
            <th class="text-left px-2 align-bottom">Status</th>
            <th class="text-left px-2 ">
              Resource <br />
              Path
            </th>
            <th class="text-left px-2">
              IP <br />
              Location
            </th>
            <th className="text-left px-2"></th>
          </tr>
        </thead>
        <tbody>
          {data.services.map((item, index) =>
            item.http.response ? (
              item.http.response.status_code !== "404" && "400" ? (
                <React.Fragment key={index}>
                  <tr className="border-t border-zinc-700">
                    <td class="px-2 align-top">
                      <FontAwesomeIcon icon={faLock} />{" "}
                      {item.http.request.method} <br />
                      H2
                    </td>
                    <td class="px-2 align-top">
                      {item.http.response.status_code}
                    </td>
                    <td class="px-2 align-top text-left">
                      <span className="text-green-500">
                        {item.http.request.uri}
                      </span>
                    </td>
                    <td class="px-2 align-top text-left">
                      <span className="flex">
                        <div>
                          <span className="text-green-500">{data.ip}</span>{" "}
                          <br />
                          <span className="">
                            {data.autonomous_system.description}
                          </span>
                        </div>
                      </span>
                    </td>
                    <td className="text-right px-2">
                      <div className="">
                        <div
                          className="inline-block border-2 border-zinc-700 rounded-full bg-black px-3 hover:bg-zinc-900 cursor-pointer"
                          onClick={() => handleToggleExpand(index)}
                        >
                          <FontAwesomeIcon icon={faCirclePlus} size="xs" />
                        </div>
                      </div>
                    </td>
                  </tr>
                  {expandedRows.includes(index) && (
                    <tr>
                      <td colSpan="7">
                        <div className="bg-zinc-900 w-full mt-2">
                          <div className="p-2">
                            <div className="bg-zinc-700/60 pb-8 w-full px-2">
                              <div className="flex justify-between">
                                <div className="font-semibold">General</div>
                                <div className="flex text-sm">
                                  <div className="px-1 border-2 rounded-sm bg-gray-600 mr-1">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />{" "}
                                    Check archive.org
                                  </div>
                                  <div
                                    className="px-1 border-2 rounded-sm bg-slate-800 cursor-pointer"
                                    onClick={() => handleExpandHeader(index)}
                                  >
                                    <FontAwesomeIcon icon={faEye} /> Show
                                    headers
                                  </div>
                                  <div className="px-1 border-2 rounded-sm bg-orange-400">
                                    <FontAwesomeIcon icon={faCircleDown} />{" "}
                                    Download
                                  </div>
                                  <div className="px-1 border-2 rounded-sm bg-red-500">
                                    <FontAwesomeIcon icon={faShare} /> Go to
                                  </div>
                                </div>
                              </div>
                              <div className="flex ml-20 space-x-5">
                                <div className="flex-col text-right">
                                  <div>Full URL</div>
                                  <div>Method</div>
                                  <div>Protocol</div>
                                  <div>Port</div>
                                  <div>Service</div>
                                  <div>Software</div>
                                </div>
                                <div className="flex-col text-left">
                                  <div>{item.http.request.uri}</div>
                                  <div>{item.http.request.method}</div>
                                  <div>{item.http.response.protocol}</div>
                                  <div>{item.port}</div>
                                  <div>{item.service_name}</div>
                                  <div>
                                    {item.software[0].vendor}-
                                    {item.software[0].version}
                                  </div>
                                </div>
                              </div>
                              {/* Request */}
                              {expandedRows.includes(index) &&
                                expandHeader.includes(index) && (
                                  <div className="flex mt-2 ">
                                    <div className="w-[558px]">
                                      <div className="text-lg">
                                        Request headers
                                      </div>
                                      <div className="flex ml-[100px] mt-2 space-x-5">
                                        <div className="flex-col text-right">
                                          <div>Referer</div>
                                          <div>Method</div>
                                        </div>
                                        <div className="flex-col text-left">
                                          <div>http://{data.domain}</div>
                                          <div className="w-80">
                                            {item.http.request.method}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="space-y-4">
                                      <div className="text-lg">
                                        Response headers
                                      </div>
                                      <div className="flex mt-2 space-x-5 ml-8">
                                        <div className="flex-col text-right">
                                          <div>Protocol</div>
                                          <div>Status</div>
                                          <div>Status reason</div>
                                          <div>Header location</div>
                                          <div>Html title</div>
                                        </div>
                                        <div className="flex-col text-left">
                                          <div>
                                            {item.http.response.protocol}
                                          </div>
                                          <div>
                                            {item.http.response.status_code}
                                          </div>
                                          <div>
                                            {item.http.response.status_reason}
                                          </div>
                                          <div>
                                            {item.http.response.header_location}
                                          </div>
                                          <div>
                                            {item.http.response.html_title}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ) : (
                <></>
              )
            ) : (
              <></>
            )
          )}
        </tbody>
      </table>
      <div className="mt-4 font-semibold text-xl">Failed requests</div>
      <div>
        These URLs were requested, but there was no response received. You will
        also see them in the list above.
      </div>
      <div className="ml-28">
        {data.services.map((item, index) => (
          <React.Fragment key={index}>
            {!item.http.response ? ( // Corrected from `reponse` to `response`
              <>
                <div className="flex space-x-5 mt-4">
                  <div className="flex-col text-right font-bold">
                    <div>Domain</div>
                    <div>URL</div>
                  </div>
                  <div className="flex-col text-left">
                    <div className="text-green-500">{data.domain}</div>
                    <div>{item.http.request.uri}</div>
                  </div>
                </div>
              </>
            ) : null}{" "}
            {/* Render conditionally based on response */}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default HTTP;

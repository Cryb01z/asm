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
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
const HTTP = ({ data, allData }) => {
  const [expandedRows, setExpandedRows] = useState([]);
  const [expandHeader, setexpandHeader] = useState([]);
  const [allExpanded, setAllExpanded] = useState(false);
  const [filter, setfilter] = useState("all");

  useEffect(() => {}), [filter];

  // fiter http response base on type
  const filterData = () => {
    let data = {};
    if (filter === "all") {
      data = allData.data.requests;
    } else {
      data = allData.data.requests.filter(
        (item) => item.response.type === filter
      );
    }
    return data;
  };

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

  // format the size
  const formatSize = (sizeInBytes) => {
    if (sizeInBytes < 1024) return `${Math.floor(sizeInBytes / 100)} B`;
    const sizeInKb = sizeInBytes / 1024;

    if (sizeInKb < 1024) {
      return `${Math.floor(sizeInKb.toFixed(2))} KB`; // If less than 1024 KB, it's KB
    } else {
      const sizeInMb = sizeInKb / 1024;
      return `${Math.floor(sizeInMb.toFixed(2))} MB`; // If 1024 KB or more, it's MB
    }
  };

  const getPath = (url) => {
    let urlParts = url.includes("?") ? url.split("?")[0] : url;
    // console.log(urlParts);

    urlParts = urlParts.split("/");
    // console.log(urlParts);

    let resource = urlParts[urlParts.length - 1];
    let path = urlParts.slice(2, urlParts.length - 1).join("/");
    // console.log("Path:", path);
    // console.log("Resource:", resource);
    return { path, resource };
  };
  getPath("https://www.google.com/asdasdasd/sadasdasd/search?q=hello");

  console.log(data);
  console.log(allData);

  const displayData = filterData();

  return (
    <div className="mt-6 pb-20">
      <div className="flex justify-between text-center">
        <div className="font-bold text-xl">
          {allData.data.requests.length} HTTP transactions
        </div>
        <div className="flex space-x-0.5 text-sm">
          <div
            className="border-2 border-zinc-700 rounded-md px-1 bg-indigo-500 cursor-pointer"
            onClick={() => {
              setfilter("all");
            }}
          >
            <FontAwesomeIcon icon={faFile} /> Everything
          </div>
          <div
            className="border-2 border-zinc-700 rounded-md px-1 bg-black cursor-pointer"
            onClick={() => {
              setfilter("Document");
            }}
          >
            <FontAwesomeIcon icon={faFile} /> HTML
          </div>
          <div
            className="border-2 border-zinc-700 rounded-md px-1 bg-black cursor-pointer"
            onClick={() => {
              setfilter("Script");
            }}
          >
            <FontAwesomeIcon icon={faFile} /> Script
          </div>
          {/* <div className="border-2 border-zinc-700 rounded-md px-1 bg-black cursor-pointer">
            <FontAwesomeIcon icon={faFile} /> AJAX
          </div> */}
          <div
            className="border-2 border-zinc-700 rounded-md px-1 bg-black cursor-pointer"
            onClick={() => {
              setfilter("Stylesheet");
            }}
          >
            <FontAwesomeIcon icon={faFile} /> CSS
          </div>
          <div
            className="border-2 border-zinc-700 rounded-md px-1 bg-black cursor-pointer"
            onClick={() => {
              setfilter("Image");
            }}
          >
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
              Size <br />
              x-fer
            </th>
            {/* <th class="text-left px-2">
              Time <br />
              Latency{" "}
            </th> */}
            <th class="text-left px-2">
              Type <br />
              MIME-Type{" "}
            </th>
            <th class="text-left px-2">
              IP <br />
              Location
            </th>
            <th className="text-left px-2"></th>
          </tr>
        </thead>
        <tbody>
          {displayData.map((item, index) => (
            <React.Fragment key={index}>
              <tr className="border-t border-zinc-700">
                <td class="px-2 align-top">
                  {item.response.response.securityState === "secure" ? (
                    <>
                      <FontAwesomeIcon icon={faLock} />
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faTriangleExclamation} />
                    </>
                  )}{" "}
                  {item.request.request.method} <br />
                  {item.response.response.protocol}
                </td>
                <td class="px-2 align-top">
                  {item.response.response.status}
                  <br />
                  {item.response.response.statusText}
                </td>
                <td class="px-2 align-top text-left max-w-96">
                  <span className="text-green-500">
                    {getPath(item.response.response.url).resource ||
                      "Primary Request"}
                  </span>
                  <br />{" "}
                  <span className="break-words text-pretty overflow-hidden">
                    {getPath(item.response.response.url).path}
                  </span>
                </td>
                <td class="px-2 align-top text-left">
                  <span className="font-bold">
                    {formatSize(item.response.size)}
                  </span>
                  <br />{" "}
                  <span className="text-gray-400">
                    {formatSize(item.response.encodedDataLength)}
                  </span>
                </td>
                <td class="px-2 align-top text-left">
                  <span className="font-bold">{item.response.type}</span>
                  <br />{" "}
                  <span className="text-gray-400">
                    {item.response.response.mimeType}
                  </span>
                </td>
                <td class="px-2 align-top text-left">
                  <span className="flex">
                    {item.response.asn ? (
                      <>
                        <div>
                          <span className="text-green-500">
                            {item.response.asn.ip || "N/A"}
                          </span>{" "}
                          <br />
                          <div className="flex space-x-2">
                            <span
                              className={`fi fi-${item.response.geoip.country.toLowerCase()}`}
                            ></span>{" "}
                            <span className="line-clamp-1">
                              {item.response.asn.name}
                            </span>
                          </div>
                        </div>
                      </>
                    ) : (
                      "N/A"
                    )}
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
                              {/* <div className="px-1 border-2 rounded-sm bg-gray-600 mr-1">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />{" "}
                                Check archive.org
                              </div> */}
                              <div
                                className="px-1 border-2 rounded-sm bg-slate-800 cursor-pointer"
                                onClick={() => handleExpandHeader(index)}
                              >
                                <FontAwesomeIcon icon={faEye} /> Show headers
                              </div>
                              {/* <div className="px-1 border-2 rounded-sm bg-orange-400">
                                <FontAwesomeIcon icon={faCircleDown} /> Download
                              </div>
                              <div className="px-1 border-2 rounded-sm bg-red-500">
                                <FontAwesomeIcon icon={faShare} /> Go to
                              </div> */}
                            </div>
                          </div>
                          <div className="flex ml-20 space-x-5">
                            <div className="flex-col text-right">
                              <div>Full URL</div>
                              <div>Protocol</div>
                              <div>Security</div>
                              <div>Server</div>
                              <div>Reverse DNS</div>
                              <div>Software</div>
                              <div>Resource Hash</div>
                              {item.response.response.securityState ===
                                "secure" && <div>Security Headers</div>}
                            </div>
                            <div className="flex-col text-left">
                              <div>{item.response.response.url}</div>
                              <div>{item.response.response.protocol}</div>
                              <div className="text-green-500">
                                {item.response.response.securityDetails
                                  ? item.response.response.securityDetails
                                      .protocol
                                  : "N/A"}
                                ,{" "}
                                {item.response.response.securityDetails
                                  ? item.response.response.securityDetails
                                      .cipher
                                  : "N/A"}
                              </div>
                              <div>
                                {item.response.geoip ? (
                                  <>
                                    <span
                                      className={`fi fi-${item.response.geoip.country.toLowerCase()}`}
                                    ></span>{" "}
                                    <span className="text-green-500">
                                      {item.response.asn.ip}{" "}
                                    </span>{" "}
                                    {item.response.geoip.city},{" "}
                                    {item.response.geoip.country_name},{" "}
                                    <span className="text-green-500">
                                      ASN{item.response.asn.asn}
                                    </span>{" "}
                                    ({item.response.asn.description})
                                  </>
                                ) : (
                                  "N/A"
                                )}
                              </div>
                              <div className="text-green-500">
                                {item.response.rdns
                                  ? item.response.rdns.ptr
                                  : "N/A"}
                              </div>
                              <div className="">
                                /
                                {item.response.response.headers[
                                  "X-Powered-By"
                                ] || item.response.response.headers.server}
                              </div>
                              <div className="text-green-500">
                                {item.response.hash}
                              </div>
                              {item.response.response.securityState ===
                                "secure" && (
                                <div className="bg-black rounded-lg">
                                  <div className="flex space-x-2 justify-center p-2">
                                    <div className="flex-col text-right">
                                      <div>Name</div>
                                      {item.response.response.securityHeaders.map(
                                        (item) => (
                                          <div>{item.name}</div>
                                        )
                                      )}
                                    </div>
                                    <div className="flex-col text-left">
                                      <div>Value</div>
                                      {item.response.response.securityHeaders.map(
                                        (item) => (
                                          <div>{item.value}</div>
                                        )
                                      )}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                          {expandedRows.includes(index) &&
                            expandHeader.includes(index) && (
                              <div className="flex mt-2 ">
                                <div className="w-[558px]">
                                  <div className="text-lg font-bold">
                                    Request headers
                                  </div>
                                  <div className="flex ml-[100px] mt-2 space-x-5">
                                    <div className="flex-col text-right font-bold">
                                      <div className="line-clamp-1">
                                        Upgrade-Insecure-Requests:
                                      </div>
                                      <div>User-Agent:</div>
                                    </div>
                                    <div className="flex-col text-left">
                                      <div>
                                        {
                                          item.request.request.headers[
                                            "Upgrade-Insecure-Requests"
                                          ]
                                        }
                                      </div>
                                      <div className="w-80">
                                        {
                                          item.request.request.headers[
                                            "User-Agent"
                                          ]
                                        }
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {item.response.response.securityState ===
                                "secure" ? (
                                  <>
                                    <div className="space-y-4">
                                      <div className="text-lg font-bold">
                                        Response headers
                                      </div>
                                      <div className="flex mt-2 space-x-5 ml-8">
                                        <div className="flex-col text-right font-bold">
                                          <div>content-encoding</div>
                                          <div>x-content-type-options</div>
                                          <div>expires</div>
                                          <div>alt-svc</div>
                                          <div>date</div>
                                          <div>content-type</div>
                                          <div>vary</div>
                                          <div>last-modified</div>
                                          <div>x-frame-options</div>
                                          <div>strict-transport-security</div>
                                          <div>link</div>
                                          <div>cache-control</div>
                                          <div>timing-allow-origin</div>
                                          <div>cross-origin-opener-policy</div>
                                          <div>
                                            cross-origin-resource-policy
                                          </div>
                                          <div>access-control-allow-origin</div>
                                          <div>x-xss-protection</div>
                                          <div>server</div>
                                        </div>
                                        <div className="flex-col text-left">
                                          <div>
                                            {
                                              item.response.response.headers[
                                                "content-encoding"
                                              ]
                                            }
                                          </div>
                                          <div>
                                            {
                                              item.response.response.headers[
                                                "x-content-type-options"
                                              ]
                                            }
                                          </div>
                                          <div>
                                            {
                                              item.response.response.headers[
                                                "expires"
                                              ]
                                            }
                                          </div>
                                          <div>
                                            {
                                              item.response.response.headers[
                                                "alt-svc"
                                              ]
                                            }
                                          </div>
                                          <div>
                                            {
                                              item.response.response.headers[
                                                "date"
                                              ]
                                            }
                                          </div>
                                          <div>
                                            {
                                              item.response.response.headers[
                                                "content-type"
                                              ]
                                            }
                                          </div>
                                          <div>
                                            {
                                              item.response.response.headers[
                                                "vary"
                                              ]
                                            }
                                          </div>
                                          <div>
                                            {
                                              item.response.response.headers[
                                                "last-modified"
                                              ]
                                            }
                                          </div>
                                          <div>
                                            {
                                              item.response.response.headers[
                                                "x-frame-options"
                                              ]
                                            }
                                          </div>
                                          <div>
                                            {
                                              item.response.response.headers[
                                                "strict-transport-security"
                                              ]
                                            }
                                          </div>
                                          <div>
                                            {
                                              item.response.response.headers[
                                                "link"
                                              ]
                                            }
                                          </div>
                                          <div>
                                            {
                                              item.response.response.headers[
                                                "cache-control"
                                              ]
                                            }
                                          </div>
                                          <div>
                                            {
                                              item.response.response.headers[
                                                "timing-allow-origin"
                                              ]
                                            }
                                          </div>
                                          <div>
                                            {
                                              item.response.response.headers[
                                                "cross-origin-opener-policy"
                                              ]
                                            }
                                          </div>
                                          <div>
                                            {
                                              item.response.response.headers[
                                                "cross-origin-resource-policy"
                                              ]
                                            }
                                          </div>
                                          <div>
                                            {
                                              item.response.response.headers[
                                                "access-control-allow-origin"
                                              ]
                                            }
                                          </div>
                                          <div>
                                            {
                                              item.response.response.headers[
                                                "x-xss-protection"
                                              ]
                                            }
                                          </div>
                                          <div>
                                            {
                                              item.response.response.headers[
                                                "server"
                                              ]
                                            }
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    <div className="space-y-4">
                                      <div className="text-lg font-bold">
                                        Response headers
                                      </div>
                                      <div className="flex mt-2 space-x-5 ml-8">
                                        <div className="flex-col text-right font-bold">
                                          <div>Accept-Ranges</div>
                                          <div>Cache-Control</div>
                                          <div>Connection</div>
                                          <div>Content-Length</div>
                                          <div>Content-Type</div>
                                          <div>Date</div>
                                          <div>ETag</div>
                                          <div>Keep-Alive</div>
                                          <div>Last-Modified</div>
                                          <div>X-Powered-By</div>
                                        </div>
                                        <div className="flex-col text-left">
                                          <div>
                                            {
                                              item.response.response.headers[
                                                "Accept-Ranges"
                                              ]
                                            }
                                          </div>
                                          <div>
                                            {
                                              item.response.response.headers[
                                                "Cache-Control"
                                              ]
                                            }
                                          </div>
                                          <div>
                                            {
                                              item.response.response.headers[
                                                "Connection"
                                              ]
                                            }
                                          </div>
                                          <div>
                                            {
                                              item.response.response.headers[
                                                "Content-Length"
                                              ]
                                            }
                                          </div>
                                          <div>
                                            {
                                              item.response.response.headers[
                                                "Content-Type"
                                              ]
                                            }
                                          </div>
                                          <div>
                                            {
                                              item.response.response.headers[
                                                "Date"
                                              ]
                                            }
                                          </div>
                                          <div>
                                            {
                                              item.response.response.headers[
                                                "ETag"
                                              ]
                                            }
                                          </div>
                                          <div>
                                            {
                                              item.response.response.headers[
                                                "Keep-Alive"
                                              ]
                                            }
                                          </div>
                                          <div>
                                            {
                                              item.response.response.headers[
                                                "Last-Modified"
                                              ]
                                            }
                                          </div>
                                          <div>
                                            {
                                              item.response.response.headers[
                                                "X-Powered-By"
                                              ]
                                            }
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                )}
                              </div>
                            )}
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
          {/*{data.services &&
            data.services.map((item, index) =>
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
                                      <FontAwesomeIcon
                                        icon={faMagnifyingGlass}
                                      />{" "}
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

                                    <div>Port</div>
                                    <div>Service</div>
                                    <div>Software</div>
                                  </div>
                                  <div className="flex-col text-left">
                                    <div>{item.http.request.uri}</div>
                                    <div>{item.http.request.method}</div>

                                    <div>{item.port}</div>
                                    <div>{item.service_name}</div>
                                    <div>
                                      {item.software[0].vendor}-
                                      {item.software[0].version
                                        ? item.software[0].version
                                        : "N/A"}
                                    </div>
                                  </div>
                                </div>
                                /~ Request ~/
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
                                              {item.http.response.protocol
                                                ? item.http.response.protocol
                                                : "HTTP/1.1"}
                                            </div>
                                            <div>
                                              {item.http.response.status_code}
                                            </div>
                                            <div>
                                              {item.http.response.status_reason}
                                            </div>
                                            <div>
                                              {
                                                item.http.response
                                                  .header_location
                                              }
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
            )}*/}
        </tbody>
      </table>
      <div className="mt-4 font-semibold text-xl">Failed requests</div>
      <div>
        These URLs were requested, but there was no response received. You will
        also see them in the list above.
      </div>
      <div className="ml-28">
        {data.services &&
          data.services.map((item, index) => (
            <React.Fragment key={index}>
              {!item.http.response ? ( // Corrected from `response` to `response`
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

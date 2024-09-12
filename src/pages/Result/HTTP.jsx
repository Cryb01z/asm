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
const HTTP = () => {
  const data = [
    {
      method: "GET",
      protocol: "H2",
      status: 200,
      resource: "style.css",
      path: "giz.proseed-al.de/wp-content/themes/divi-child/",
      size: "207 B",
      transfer: "285 B",
      time: "15ms",
      latency: "14ms",
      type: "Stylesheet",
      mimeType: "text/css",
      ip: "193.53.251.217",
      location: "(MITTWALD-AS Mittwald CM Service GmbH und Co. KG, DE)",
      fullUrl: "https://giz.proseed-al.de/",
      security: "TLS 1.3, , AES_256_GCM",
      server:
        "193.53.251.217 , Germany, ASN15817 (MITTWALD-AS Mittwald CM Service GmbH und Co. KG, DE),",
      reverseDNS: "N/A",
      software: "Apache /",
      resourceHash:
        "29e212433726bc4665c94a033e5bee2df691131fe7739de1cb2104a61028dce5",
      requestHeader: {
        referer: "https://giz.proseed-al.de/",
        userAgent:
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
      },
      reponseHeader: {
        cacheControl: "max-age=0",
        contentEncode: "gzip",
        contentLength: "28981",
        contentType: "text/html; charset=UTF-8",
        date: "Wed, 31 Jul 2024 08:51:35 GMT",
        expires: "Wed, 31 Jul 2024 08:51:35 GMT",
        link: "<https://giz.proseed-al.de/>; rel=shortlink",
        server: "Apache",
        vary: "Accept-Encoding",
      },
      redirectHeader: {
        cacheControl: "max-age=0",
        contentEncode: "0",
        contentLength: "text/html; charset=UTF-8",
        contentType: "text/html; charset=UTF-8",
        date: "Wed, 31 Jul 2024 08:51:35 GMT",
        expires: "Wed, 31 Jul 2024 08:51:35 GMT",
        location: "https://giz.proseed-al.de/",
        server: "Apache",
        redirectBy: "WordPress",
      },
    },
    {
      method: "GET",
      protocol: "H2",
      status: 200,
      resource: "jquery.fitvids.js",
      path: "giz.proseed-al.de/wp-content/themes/Divi/includes/builder/feature/dynamic-assets/assets/js/",
      size: "207 B",
      transfer: "285 B",
      time: "15ms",
      latency: "14ms",
      type: "Script",
      mimeType: "application/javascript",
      ip: "193.53.251.217",
      location: "(MITTWALD-AS Mittwald CM Service GmbH und Co. KG, DE)",
      fullUrl: "https://giz.proseed-al.de/",
      security: "TLS 1.3, , AES_256_GCM",
      server:
        "193.53.251.217 , Germany, ASN15817 (MITTWALD-AS Mittwald CM Service GmbH und Co. KG, DE),",
      reverseDNS: "N/A",
      software: "Apache /",
      resourceHash:
        "29e212433726bc4665c94a033e5bee2df691131fe7739de1cb2104a61028dce5",
      requestHeader: {
        referer: "https://giz.proseed-al.de/",
        userAgent:
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
      },
      reponseHeader: {
        cacheControl: "max-age=0",
        contentEncode: "gzip",
        contentLength: "28981",
        contentType: "text/html; charset=UTF-8",
        date: "Wed, 31 Jul 2024 08:51:35 GMT",
        expires: "Wed, 31 Jul 2024 08:51:35 GMT",
        link: "<https://giz.proseed-al.de/>; rel=shortlink",
        server: "Apache",
        vary: "Accept-Encoding",
      },
      redirectHeader: {
        cacheControl: "max-age=0",
        contentEncode: "0",
        contentLength: "text/html; charset=UTF-8",
        contentType: "text/html; charset=UTF-8",
        date: "Wed, 31 Jul 2024 08:51:35 GMT",
        expires: "Wed, 31 Jul 2024 08:51:35 GMT",
        location: "https://giz.proseed-al.de/",
        server: "Apache",
        redirectBy: "WordPress",
      },
    },
    {
      method: "GET",
      protocol: "H2",
      status: 200,
      resource: "scripts.min.js",
      path: "giz.proseed-al.de/wp-content/themes/Divi/js/",
      size: "207 B",
      transfer: "285 B",
      time: "15ms",
      latency: "14ms",
      type: "Script",
      mimeType: "application/javascript",
      ip: "193.53.251.217",
      location: "(MITTWALD-AS Mittwald CM Service GmbH und Co. KG, DE)",
      fullUrl: "https://giz.proseed-al.de/",
      security: "TLS 1.3, , AES_256_GCM",
      server:
        "193.53.251.217 , Germany, ASN15817 (MITTWALD-AS Mittwald CM Service GmbH und Co. KG, DE),",
      reverseDNS: "N/A",
      software: "Apache /",
      resourceHash:
        "29e212433726bc4665c94a033e5bee2df691131fe7739de1cb2104a61028dce5",
      requestHeader: {
        referer: "https://giz.proseed-al.de/",
        userAgent:
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
      },
      reponseHeader: {
        cacheControl: "max-age=0",
        contentEncode: "gzip",
        contentLength: "28981",
        contentType: "text/html; charset=UTF-8",
        date: "Wed, 31 Jul 2024 08:51:35 GMT",
        expires: "Wed, 31 Jul 2024 08:51:35 GMT",
        link: "<https://giz.proseed-al.de/>; rel=shortlink",
        server: "Apache",
        vary: "Accept-Encoding",
      },
      redirectHeader: {
        cacheControl: "max-age=0",
        contentEncode: "0",
        contentLength: "text/html; charset=UTF-8",
        contentType: "text/html; charset=UTF-8",
        date: "Wed, 31 Jul 2024 08:51:35 GMT",
        expires: "Wed, 31 Jul 2024 08:51:35 GMT",
        location: "https://giz.proseed-al.de/",
        server: "Apache",
        redirectBy: "WordPress",
      },
    },
    {
      method: "GET",
      protocol: "H2",
      status: 200,
      resource: "logo_giz.svg",
      path: "giz.proseed-al.de/wp-content/uploads/static/",
      size: "207 B",
      transfer: "285 B",
      time: "15ms",
      latency: "14ms",
      type: "Image",
      mimeType: "image/svg+xml",
      ip: "193.53.251.217",
      location: "(MITTWALD-AS Mittwald CM Service GmbH und Co. KG, DE)",
      fullUrl: "https://giz.proseed-al.de/",
      security: "TLS 1.3, , AES_256_GCM",
      server:
        "193.53.251.217 , Germany, ASN15817 (MITTWALD-AS Mittwald CM Service GmbH und Co. KG, DE),",
      reverseDNS: "N/A",
      software: "Apache /",
      resourceHash:
        "29e212433726bc4665c94a033e5bee2df691131fe7739de1cb2104a61028dce5",
      requestHeader: {
        referer: "https://giz.proseed-al.de/",
        userAgent:
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
      },
      reponseHeader: {
        cacheControl: "max-age=0",
        contentEncode: "gzip",
        contentLength: "28981",
        contentType: "text/html; charset=UTF-8",
        date: "Wed, 31 Jul 2024 08:51:35 GMT",
        expires: "Wed, 31 Jul 2024 08:51:35 GMT",
        link: "<https://giz.proseed-al.de/>; rel=shortlink",
        server: "Apache",
        vary: "Accept-Encoding",
      },
      redirectHeader: {
        cacheControl: "max-age=0",
        contentEncode: "0",
        contentLength: "text/html; charset=UTF-8",
        contentType: "text/html; charset=UTF-8",
        date: "Wed, 31 Jul 2024 08:51:35 GMT",
        expires: "Wed, 31 Jul 2024 08:51:35 GMT",
        location: "https://giz.proseed-al.de/",
        server: "Apache",
        redirectBy: "WordPress",
      },
    },
    {
      method: "GET",
      protocol: "H2",
      status: 200,
      resource: "modules.ttf",
      path: "proseed-albania.civiservice.de/wp-content/themes/Divi/core/admin/fonts/modules/all/",
      size: "0",
      transfer: "",
      time: "",
      latency: "",
      type: "",
      mimeType: "",
      ip: "193.53.251.217",
      location: "(MITTWALD-AS Mittwald CM Service GmbH und Co. KG, DE)",
      fullUrl: "https://giz.proseed-al.de/",
      security: "TLS 1.3, , AES_256_GCM",
      server:
        "193.53.251.217 , Germany, ASN15817 (MITTWALD-AS Mittwald CM Service GmbH und Co. KG, DE),",
      reverseDNS: "N/A",
      software: "Apache /",
      resourceHash:
        "29e212433726bc4665c94a033e5bee2df691131fe7739de1cb2104a61028dce5",
      requestHeader: {
        referer: "",
        userAgent: "",
      },
      reponseHeader: {
        cacheControl: "",
        contentEncode: "",
        contentLength: "",
        contentType: "",
        date: "",
        expires: "",
        link: "",
        server: "",
        vary: "",
      },
      redirectHeader: {
        cacheControl: "",
        contentEncode: "",
        contentLength: "",
        contentType: "",
        date: "",
        expires: "",
        location: "",
        server: "",
        redirectBy: "",
      },
    },
  ];
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
    if (allExpanded) {
      // Collapse all
      setExpandedRows([]);
      setexpandHeader([]);
    } else {
      // Expand all
      const allIndexes = data.map((_, index) => index);
      console.log(allIndexes);
      
      setExpandedRows(allIndexes);
      setexpandHeader(allIndexes);
    }
    setAllExpanded(!allExpanded);
  };

  return (
    <div className="mt-6 h-[calc(80%)]">
      <div className="flex justify-between text-center">
        <div className="font-bold text-xl">17 HTTP transactions</div>
        <div className="flex  text-sm">
          <div className="border-2 rounded-sm px-1 bg-green-500 cursor-pointer">
            <FontAwesomeIcon icon={faFile} /> Everything
          </div>
          <div className="border-2 rounded-sm px-1 bg-gray-400 cursor-pointer">
            <FontAwesomeIcon icon={faFile} /> HTML
          </div>
          <div className="border-2 rounded-sm px-1 bg-gray-400 cursor-pointer">
            <FontAwesomeIcon icon={faFile} /> Script
          </div>
          <div className="border-2 rounded-sm px-1 bg-gray-400 cursor-pointer">
            <FontAwesomeIcon icon={faFile} /> AJAX
          </div>
          <div className="border-2 rounded-sm px-1 bg-gray-400 cursor-pointer">
            <FontAwesomeIcon icon={faFile} /> CSS
          </div>
          <div className="border-2 rounded-sm px-1 bg-gray-400 cursor-pointer">
            <FontAwesomeIcon icon={faFile} /> Image
          </div>
          <div
            className="ml-1 border-2 rounded-sm px-1 bg-gray-600 cursor-pointer"
            onClick={() => handleExpandAll()}
          >
            {allExpanded ? <><FontAwesomeIcon icon={faSquareMinus}/> Collapse all</> : <><FontAwesomeIcon icon={faSquarePlus} /> ExpandAll</>}
          </div>
        </div>
      </div>
      <div>0 data transactions</div>
      <table class="table-auto">
        <thead>
          <tr className="">
            <th class="text-left px-2">
              Method <br /> Protocol
            </th>
            <th class="text-left px-2 align-bottom">Status</th>
            <th class="text-left px-2 w-[500px]">
              Resource <br />
              Path
            </th>
            <th class="text-left px-2">
              Size
              <br />
              x-fer
            </th>
            <th class="text-left px-2">
              Time <br />
              Latency
            </th>
            <th class="text-left px-2">
              Type <br />
              MIME-Type
            </th>
            <th class="text-left px-2 w-48">
              IP <br />
              Location
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <tr className="border-t">
                <td class="px-2 align-top">
                  <FontAwesomeIcon icon={faLock} /> {item.method} <br />
                  {item.protocol}
                </td>
                <td class="px-2 align-top">{item.status}</td>
                <td class="px-2 align-top text-left">
                  <span className="text-green-500">{item.resource}</span> <br />
                  {item.path}
                </td>
                <td class="px-2 align-top text-left">
                  {item.size} <br />
                  <span className="text-gray-400">
                    <span className="text-gray-400">{item.transfer}</span>
                  </span>
                </td>
                <td class="px-2 align-top text-left">
                  {item.time} <br />
                  <span className="text-gray-400">
                    <span className="text-gray-400">{item.latency}</span>
                  </span>
                </td>
                <td class="px-2 align-top text-left">
                  {item.type}
                  <br />
                  {item.mimeType}
                </td>
                <td class="px-2 align-top text-left w-48">
                  <span className="flex">
                    <div>
                      <span className="text-green-500">{item.ip}</span> <br />
                      <span className="line-clamp-1">{item.location}</span>
                    </div>
                    <div>
                      <div
                        className="mt-2 border-2 rounded-sm bg-slate-600 px-1.5 hover:bg-slate-800"
                        onClick={() => handleToggleExpand(index)}
                      >
                        <FontAwesomeIcon icon={faCirclePlus} size="xs" />
                      </div>
                    </div>
                  </span>
                </td>
              </tr>
              {expandedRows.includes(index) && (
                <tr>
                  <td colSpan="7">
                    <div className="bg-gray-500 w-[1128px] mt-2">
                      <div className="p-1.5">
                        <div className="bg-gray-400 pb-8 w-[1116px] px-2">
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
                                <FontAwesomeIcon icon={faEye} /> Show headers
                              </div>
                              <div className="px-1 border-2 rounded-sm bg-orange-400">
                                <FontAwesomeIcon icon={faCircleDown} /> Download
                              </div>
                              <div className="px-1 border-2 rounded-sm bg-red-500">
                                <FontAwesomeIcon icon={faShare} /> Go to
                              </div>
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
                            </div>
                            <div className="flex-col text-left">
                              <div>{item.fullUrl}</div>
                              <div>{item.protocol}</div>
                              <div>{item.security}</div>
                              <div>{item.server}</div>
                              <div>N/A</div>
                              <div>{item.reverseDNS}</div>
                              <div>{item.resource}</div>
                            </div>
                          </div>
                          {/* Request */}
                          {expandedRows.includes(index) &&
                            expandHeader.includes(index) && (
                              <div className="flex mt-2 ">
                                <div className="w-[558px]">
                                  <div className="text-lg">Request headers</div>
                                  <div className="flex ml-[100px] mt-2 space-x-5">
                                    <div className="flex-col text-right">
                                      <div>Referer</div>
                                      <div>User-Agent</div>
                                    </div>
                                    <div className="flex-col text-left">
                                      <div>{item.requestHeader.referer}</div>
                                      <div className="w-80">
                                        {item.requestHeader.userAgent}
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
                                      <div>cache-control</div>
                                      <div>content-encoding</div>
                                      <div>content-length</div>
                                      <div>content-type</div>
                                      <div>date</div>
                                      <div>expires</div>
                                      <div>link</div>
                                      <div>server</div>
                                      <div>vary</div>
                                    </div>
                                    <div className="flex-col text-left">
                                      <div>
                                        {item.reponseHeader.cacheControl}
                                      </div>
                                      <div>
                                        {item.reponseHeader.contentEncode}
                                      </div>
                                      <div>
                                        {item.reponseHeader.contentLength}
                                      </div>
                                      <div>
                                        {item.reponseHeader.contentType}
                                      </div>
                                      <div>{item.reponseHeader.date}</div>
                                      <div>{item.reponseHeader.expires}</div>
                                      <div>{item.reponseHeader.link}</div>
                                      <div>{item.reponseHeader.server}</div>
                                      <div>{item.reponseHeader.vary}</div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="text-lg">
                                      Redirect headers
                                    </div>
                                    <div className="flex mt-2 space-x-5 ml-8">
                                      <div className="flex-col text-right">
                                        <div>cache-control</div>
                                        <div>content-encoding</div>
                                        <div>content-length</div>
                                        <div>content-type</div>
                                        <div>date</div>
                                        <div>expires</div>
                                        <div>location</div>
                                        <div>server</div>
                                        <div>x-redirect-by</div>
                                      </div>
                                      <div className="flex-col text-left">
                                        <div>
                                          {item.redirectHeader.cacheControl}
                                        </div>
                                        <div>
                                          {item.redirectHeader.contentEncode}
                                        </div>
                                        <div>
                                          {item.redirectHeader.contentLength}
                                        </div>
                                        <div>
                                          {item.redirectHeader.contentType}
                                        </div>
                                        <div>{item.redirectHeader.date}</div>
                                        <div>{item.redirectHeader.expires}</div>
                                        <div>
                                          {item.redirectHeader.location}
                                        </div>
                                        <div>{item.redirectHeader.server}</div>
                                        <div>
                                          {item.redirectHeader.redirectBy}
                                        </div>
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
          ))}
        </tbody>
      </table>
      <div className="mt-4 font-semibold text-xl">Failed requests</div>
      <div>
        These URLs were requested, but there was no response received. You will
        also see them in the list above.
      </div>
      <div className="ml-28">
        <div className="flex space-x-5 mt-4">
          <div className="flex-col text-right font-bold">
            <div>Domain</div>
            <div>URL</div>
          </div>
          <div className="flex-col text-left">
            <div className="text-green-500">proseed-albania.civiservice.de</div>
            <div>
              https://proseed-albania.civiservice.de/wp-content/themes/Divi/core/admin/fonts/modules/all/modules.woff
            </div>
          </div>
        </div>
        <div className="flex space-x-5 mt-4">
          <div className="flex-col text-right font-bold">
            <div>Domain</div>
            <div>URL</div>
          </div>
          <div className="flex-col text-left">
            <div className="text-green-500">proseed-albania.civiservice.de</div>
            <div>
              https://proseed-albania.civiservice.de/wp-content/themes/Divi/core/admin/fonts/modules/all/modules.ttf
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HTTP;

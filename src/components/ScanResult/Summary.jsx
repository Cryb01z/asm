import {
  faArrowRightArrowLeft,
  faCaretDown,
  faCrosshairs,
  faMaximize,
  faSearch,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { getSubDomain } from "../../axios/ScanService/scanService";
import getTechInfo from "../../axios/TechnologyInfo/techinfo";
import { all } from "axios";
const Summary = ({ data, allData }) => {
  const [option, setoption] = useState("ASNs");
  const [expandTech, setexpandTech] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [subDomain, setsubDomain] = useState({
    status: "",
    results: [],
  });
  const displayedItems = showMore
    ? subDomain.results
    : subDomain.results.slice(0, 10);

  useEffect(() => {
    const fetchSubDomain = async () => {
      try {
        const response = await getSubDomain(getDomain(data.domain));
        setsubDomain(response.data);
        setsubDomain(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    if (data.domain !== "") {
      fetchSubDomain();
    }
  }, []);
  console.log(subDomain);

  //get domain from url
  const getDomain = (url) => {
    if (!url.includes("http")) {
      if (url.includes("www")) {
        return url.slice(4);
      }
      return url;
    }
    if (url === "") {
      return "";
    }
    return url.split("/")[2].includes("www")
      ? url.split("/")[2].slice(4)
      : url.split("/")[2];
  };

  //handle expand technology
  const handleExpandTech = (index) => {
    setexpandTech((preExpandTech) =>
      preExpandTech.includes(index)
        ? preExpandTech.filter((i) => i !== index)
        : [...preExpandTech, index]
    );
  };

  console.log(data);

  //calculate the months left from today
  const monthsLeft = (expiry_date) => {
    const expiryDate = new Date(expiry_date);
    const currentDate = new Date(); // Current date

    // Get the difference in years and months
    let yearsDiff = expiryDate.getFullYear() - currentDate.getFullYear();
    let monthsDiff = expiryDate.getMonth() - currentDate.getMonth();

    // Calculate the total months difference
    let totalMonths = yearsDiff * 12 + monthsDiff;

    // If the current day is greater than the expiry day, subtract one month
    if (expiryDate.getDate() < currentDate.getDate()) {
      totalMonths--;
    }

    return totalMonths;
  };

  //format the soa record
  const formatSerialDate = (serial) => {
    const serialStr = serial.toString(); // Ensure it's a string
    const year = serialStr.slice(0, 4);
    const month = serialStr.slice(4, 6);
    const day = serialStr.slice(6, 8);
    return `${year}-${month}-${day}`;
  };

  // Format the date
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);

    // Get day, month, and year
    const day = date.getDate();
    const year = date.getFullYear();

    // Array of month names
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = months[date.getMonth()];

    // Add suffix to the day (st, nd, rd, th)
    const suffix =
      day % 10 === 1 && day !== 11
        ? "st"
        : day % 10 === 2 && day !== 12
        ? "nd"
        : day % 10 === 3 && day !== 13
        ? "rd"
        : "th";

    // Return formatted date string
    return `${month} ${day}${suffix}, ${year}`;
  };

  const handdleOption = (option) => {
    setoption((prev) => (prev = option));
    setShowMore(false);
  };
  // console.log(data.ssl);

  // Format the UNIX timestamp
  const formatUnixTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'long' }); 
    const day = date.getDate();
    return `${month} ${day}, ${year}`;
  };
 
  // Calculate expire year
  const calculateExpireYear = (validFrom, validTo) => {
    const startDate = new Date(validFrom * 1000); 
    const endDate = new Date(validTo * 1000);
    const differenceInTime = endDate - startDate;
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25; 
    const years = (differenceInTime / millisecondsInYear).toFixed(2);
    if (parseFloat(years) === 1) {
      return "a year";
    }

    return parseFloat(years) + " years";
  };

  return (
    <div className="flex justify-between w-full space-x-20 text-white lg:flex-1">
      <div className="flex flex-col">
        <div className="text-xl py-2 font-bold ">Summary</div>
        <div className="border-2 p-3 w-full rounded-sm border-zinc-700/60">
          <div className="pb-2 border-b-2 border-zinc-700/60">
            This website contacted{" "}
            <span className="font-bold">
              {allData.lists.ips ? allData.lists.ips.length : 0} IPs
            </span>{" "}
            in {allData.lists.countries ? allData.lists.countries.length : 0}{" "}
            {""}
            countries across{" "}
            <span className="font-bold">
              {allData.lists.domains ? allData.lists.domains.length : 0} domains
            </span>{" "}
            {}
            to perform{" "}
            <span className="font-bold">
              {allData.lists.urls ? allData.lists.urls.length : 0} HTTP
              transactions
            </span>
            . The main IP is
            <span className="text-green-500"> {allData.page.ip}</span>, located
            in{" "}
            <span className="font-bold">
              {allData.page.city} - {allData.page.country}
            </span>{" "}
            and belongs to{" "}
            <span className="text-green-500 cursor-pointer">
              {allData.page.asnname}
            </span>
            . The main domain is
            <span className="text-green-500"> {allData.page.domain}</span>.
            <div>
              TLS certificate: Issued by {allData.lists.certificates[0].issuer} on {formatUnixTimestamp(allData.lists.certificates[0].validFrom)}.
              Valid for: {calculateExpireYear(allData.lists.certificates[0].validFrom, allData.lists.certificates[0].validTo)}.
            </div>
          </div>
          <div className="pb-2 border-b-2 border-zinc-700/60">
            <span className="text-green-500">{allData.page.domain}</span> scanned{" "}
            <span className="font-bold">1 times</span> on asm
          </div>
          {/* <div className="pb-2 border-b-2 border-zinc-700/60">
              <span className="font-bold">urlscan.io Verdict:</span> No
              classification
            </div>
            <div className="pb-2 border-b-2 border-zinc-700/60 font-bold">
              Live information
            </div> */}
          <div className="pb-2 border-b-2 border-zinc-700/60">
            <span className="font-bold">Google Safe Browsing:</span> No
            classification for {allData.page.domain}
          </div>
          <div>
            <span className="font-bold">
              Current DNS A record: {allData.page.domain}
            </span>{" "}
            ({allData.page.asn} - {allData.page.asnname})
          </div>
        </div>
        <div className="text-xl font-bold py-2">Domain & information</div>
        <div className="flex space-x-2 p-2 border-2 rounded-md border-zinc-700">
          <div
            className={
              option === "ASNs"
                ? "py-2 px-3 rounded-md bg-zinc-900 border border-zinc-700 font-bold cursor-pointer"
                : "py-2  px-3 rounded-md hover:border hover:border-zinc-700 hover:text-indigo-400 hover:bg-zinc-900 cursor-pointer"
            }
            onClick={() => {
              handdleOption("ASNs");
            }}
          >
            IP/ASNs
          </div>
          <div
            className={
              option === "detail"
                ? "py-2 px-3 rounded-md bg-zinc-900 border border-zinc-700 font-bold cursor-pointer"
                : "py-2  px-3 rounded-md hover:border hover:border-zinc-700 hover:text-indigo-400 hover:bg-zinc-900 cursor-pointer"
            }
            onClick={() => {
              handdleOption("detail");
            }}
          >
            IP Detail
          </div>
          <div
            className={
              option === "domain"
                ? "py-2 px-3 rounded-md bg-zinc-900 border border-zinc-700 font-bold cursor-pointer"
                : "py-2  px-3 rounded-md hover:border hover:border-zinc-700 hover:text-indigo-400 hover:bg-zinc-900 cursor-pointer"
            }
            onClick={() => {
              handdleOption("domain");
            }}
          >
            Domains
          </div>
          <div
            className={
              option === "domainTree"
                ? "py-2 px-3 rounded-md bg-zinc-900 border border-zinc-700 font-bold cursor-pointer"
                : "py-2  px-3 rounded-md hover:border hover:border-zinc-700 hover:text-indigo-400 hover:bg-zinc-900 cursor-pointer"
            }
            onClick={() => {
              handdleOption("domainTree");
            }}
          >
            Domain Tree
          </div>
          <div
            className={
              option === "link"
                ? "py-2 px-3 rounded-md bg-zinc-900 border border-zinc-700 font-bold cursor-pointer"
                : "py-2  px-3 rounded-md hover:border hover:border-zinc-700 hover:text-indigo-400 hover:bg-zinc-900 cursor-pointer"
            }
            onClick={() => {
              handdleOption("link");
            }}
          >
            Links
          </div>
          <div
            className={
              option === "cert"
                ? "py-2 px-3 rounded-md bg-zinc-900 border border-zinc-700 font-bold cursor-pointer"
                : "py-2  px-3 rounded-md hover:border hover:border-zinc-700 hover:text-indigo-400 hover:bg-zinc-900 cursor-pointer"
            }
            onClick={() => {
              handdleOption("cert");
            }}
          >
            Certs
          </div>
          {/* <div
              className={
                option === "frame"
                  ? "py-2 px-3 rounded-md bg-zinc-900 border border-zinc-700 font-bold cursor-pointer"
                  : "py-2  px-3 rounded-md hover:border hover:border-zinc-700 hover:text-indigo-400 hover:bg-zinc-900 cursor-pointer"
              }
              onClick={() => {
                handdleOption("frame");
              }}
            >
              Frames
            </div> */}
        </div>
        {/*IP/ASNs */}
        {option === "ASNs" ? (
          <div className="table-auto border-2 border-zinc-700 rounded-sm text-sm mt-2 mb-10 p-2">
            <thead>
              <tr>
                <th className="text-left p-2">
                  <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                </th>
                <th className="text-left p-2">IP Address</th>
                <th className="text-left p-2">AS Autonomous System</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2">
                <td className="text-left p-2 font-bold">
                  {data.services ? data.services.length : 0}
                </td>
                <td className="text-left p-2 text-green-500">{data.ip}</td>
                <td className="text-left p-2">
                  (
                  <span className="text-green-500">
                    {data.autonomous_system
                      ? data.autonomous_system.bgp_prefix.map((item) => {
                          return `"${item}"` + " ";
                        })
                      : ""}
                  </span>{" "}
                  (
                  {data.autonomous_system
                    ? data.autonomous_system.description
                    : ""}
                  ))
                </td>
              </tr>
            </tbody>
          </div>
        ) : (
          ""
        )}
        {/* IP detail */}
        {option === "detail" ? (
          <div className="border-2 border-zinc-700 rounded-sm text-sm mt-2 mb-10 p-2">
            <div className="font-bold px-6">
              {data.services ? data.services.length : 0}{" "}
              <FontAwesomeIcon icon={faArrowRightArrowLeft} /> {data.ip}(
              {data.autonomous_system
                ? data.autonomous_system.country_code
                : ""}
              ){" "}
              {/* <span className="text-orange-500">
                  4 redirects <FontAwesomeIcon icon={faShare} />
                </span> */}
            </div>
            <div className="space-y-2">
              <div className="px-6">
                <div className="flex justify-between">
                  <div className="px-4 text-green-500">{data.domain} </div>
                  <div className="px-2 bg-gray-400 rounded-sm">
                    Domain Lookup <FontAwesomeIcon icon={faCaretDown} />
                  </div>
                </div>
                <div className="px-4 mt-2">
                  <div className="flex justify-around">
                    <div className="flex space-x-5">
                      <div className="text-green-500">Resolver:</div>
                      <div className="font-semibold">
                        {data.dns
                          ? data.dns.resolver.map((item) => <div>{item}</div>)
                          : ""}
                      </div>
                    </div>
                    <div className="">
                      <div className="text-green-500 uppercase">
                        soa Record for {data.dns ? data.dns.soa[0].name : ""}
                      </div>
                      <div className="font-semibold">
                        <div className="flex space-x-4">
                          <div className="flex-col">
                            <div>name:</div>
                            <div>ns:</div>
                            <div>mailbox:</div>
                            <div>serial:</div>
                            <div>refresh:</div>
                            <div>retry:</div>
                            <div>expire:</div>
                            <div>minttl:</div>
                          </div>
                          <div className="flex-col">
                            {}
                            <div>{data.dns ? data.dns.soa[0].name : ""}</div>
                            <div>{data.dns ? data.dns.soa[0].ns : ""}</div>
                            <div>
                              {data.dns
                                ? data.dns.soa[0].mailbox.replace(".", "@")
                                : ""}
                            </div>
                            <div>
                              {data.dns
                                ? formatSerialDate(data.dns.soa[0].serial)
                                : ""}
                            </div>
                            <div>
                              {data.dns ? data.dns.soa[0].refresh / 3600 : ""}{" "}
                              hours
                            </div>
                            <div>
                              {data.dns ? data.dns.soa[0].retry / 3600 : ""}{" "}
                              hours
                            </div>
                            <div>
                              {data.dns ? data.dns.soa[0].expire / 86400 : ""}{" "}
                              hours
                            </div>
                            <div>
                              {data.dns ? data.dns.soa[0].minttl / 3600 : ""}{" "}
                              hours
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {/* domains */}
        {option === "domain" ? (
          <div className="border-2 border-zinc-700 rounded-sm text-sm mt-2 mb-10 p-2">
            <div className="font-bold ml-10">Apex Domain</div>
            <div className="table-auto text-sm">
              <thead>
                <tr>
                  <th className="text-right px-2">
                    <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                  </th>
                  <th className="text-left px-2">Subdomains</th>
                  {/* <th className="text-left px-2">Transfer</th> */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-right font-bold px-2 align-top">
                    {subDomain.results.length}
                  </td>
                  <td className="text-left text-green-500 px-2 ">
                    <span>{getDomain(data.domain)}</span>
                    {displayedItems.map((item, index) => (
                      <div>
                        <a
                          key={index}
                          href={`http://${item}`}
                          target="_blank"
                          className="ml-4 text-gray-500 cursor-pointer hover:text-green-500"
                        >
                          {item}
                        </a>
                      </div>
                    ))}
                    {subDomain.results.length > 10 && (
                      <button
                        className="ml-4 text-blue-500"
                        onClick={() => setShowMore(!showMore)}
                      >
                        {showMore ? "Show Less" : "Show More"}
                      </button>
                    )}
                  </td>
                </tr>
              </tbody>
            </div>
          </div>
        ) : (
          ""
        )}

        {/* Domain Tree */}
        {option === "domainTree" ? (
          <div className="border-2 border-zinc-700 rounded-sm text-sm mt-2 mb-10 p-2">
            <div className="table-auto text-sm">
              <thead>
                <tr>
                  <th className="text-right px-2">
                    <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                  </th>
                  <th className="text-left px-2">Domain</th>
                  <th className="text-left px-2">Requested by</th>
                </tr>
              </thead>
              <tbody className="">
                {displayedItems.map((item, index) => (
                  <tr key={index}>
                    <td className="text-right font-bold px-2">{index + 1}</td>
                    <td className="text-left text-green-500 px-2">{item}</td>
                    <td className="text-left px-2 text-gray-500">
                      {data.domain}
                    </td>
                  </tr>
                ))}
              </tbody>
              {subDomain.results.length > 10 && (
                <button
                  className="mt-2 ml-4 text-blue-500"
                  onClick={() => setShowMore(!showMore)} // Toggle showMore state
                >
                  {showMore ? "Show Less" : "Show More"}
                </button>
              )}
            </div>
          </div>
        ) : (
          ""
        )}

        {/* Links */}
        {option === "link" ? (
          <>
            <div className="border-2 border-zinc-700 rounded-sm text-sm mt-2 mb-10 p-2">
              <div>
                This site contains links to these domains. Also see{" "}
                <span className="text-green-500 hover:underline cursor-pointer">
                  Links
                </span>
                .
              </div>
              <div className="px-2 mt-2 font-bold">
                Domain
                <br />
                <span className="text-green-500 hover:underline cursor-pointer">
                  {data.domain}
                </span>
              </div>
            </div>
          </>
        ) : (
          ""
        )}

        {/* Certs */}
        {option === "cert" ? (
          <>
            {Object.keys(data.ssl).length !== 0 ? (
              <>
                {" "}
                <div className=" border-2 border-zinc-700 rounded-sm text-sm mt-2 mb-10 p-4">
                  {" "}
                  <div className="flex-col space-y-2 text-gray-400">
                    <div className="flex">
                      <div className="uppercase w-40 text-white">host:</div>
                      <div>{data.ssl.host}</div>
                    </div>
                    <div className="flex">
                      <div className="uppercase w-40 text-white">subject:</div>
                      <div>{data.ssl.subject}</div>
                    </div>
                    <div className="flex">
                      <div className="uppercase w-40 text-white">
                        subject_cn:
                      </div>
                      <div className="w-1/2 break-words text-wrap overflow-hidden">
                        {data.ssl.subject_cn}
                      </div>
                    </div>
                    <div className="flex">
                      <div className="uppercase w-40 text-white">
                        subject_alt_names:
                      </div>
                      <div>
                        {data.ssl.subject_alt_names.length > 0
                          ? data.ssl.subject_alt_names.map(item)
                          : "None"}
                      </div>
                    </div>
                    <div className="flex">
                      <div className="uppercase w-40 text-white">version:</div>
                      <div>{data.ssl.version}</div>
                    </div>
                    <div className="flex">
                      <div className="uppercase w-40 text-white">
                        issuerSubject:
                      </div>
                      <div className="w-1/2 break-words text-wrap overflow-hidden">
                        {data.ssl.issuerSubject}
                      </div>
                    </div>
                    <div className="flex">
                      <div className="uppercase w-40 text-white">cipher:</div>
                      <div>{data.ssl.cipher}</div>
                    </div>
                    <div className="flex">
                      <div className="uppercase w-40 text-white">sigAlg:</div>
                      <div>{data.ssl.sigAlg}</div>
                    </div>
                    <div className="flex">
                      <div className="uppercase w-40 text-white">
                        expiry_date:
                      </div>
                      <div>{data.ssl.expiry_date}</div>
                    </div>
                    <div className="flex">
                      <div className="uppercase w-40 text-white">
                        issue_date:
                      </div>
                      <div>{data.ssl.issue_date}</div>
                    </div>
                    <div className="flex">
                      <div className="uppercase w-40 text-white">grade:</div>
                      <div>{data.ssl.grade}</div>
                    </div>
                    <div className="flex">
                      <div className="uppercase w-40 text-white">id:</div>
                      <div>{data.ssl.id}</div>
                    </div>
                    <div className="flex">
                      <div className="uppercase w-40 text-white">
                        serialNumber::
                      </div>
                      <div>{data.ssl.serialNumber}</div>
                    </div>
                  </div>
                  <div className="mt-5 text-center">
                    <pre className="whitespace-pre-wrap inline-block p-4 rounded border-2 border-zinc-700/60">
                      {data.ssl.raw}
                    </pre>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className=" border-2 border-zinc-700 rounded-sm text-sm mt-2 mb-10 p-4">
                  <div className="p-2">
                    <div className="border-2 border-zinc-700/60 p-2 rounded-sm">
                      No data!
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        ) : (
          ""
        )}
        {/* Frames */}
        {option === "frame" ? (
          <>
            <div className="border-2 border-zinc-700 rounded-sm text-sm mt-2 mb-10 p-2">
              <div>This page contains 1 frames:</div>
              <div className="px-1 border-2 border-zinc-700 mt-3 rounded-md">
                <div>
                  <span className="font-bold">Primary Page:</span> https://
                  <span className="text-green-500">{data.domain}/</span>
                </div>
                <div className="text-gray-400">
                  Frame ID: F3A268DA933FB0DC32E22C13DAE9DE05
                </div>
                <div>
                  <span className="font-bold">Requests:</span>{" "}
                  {data.services.length} HTTP requests in this frame
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>

      <div className="flex-col w-[800px]">
        <div className="flex py-2 justify-between space-x-28">
          <div className="text-xl font-bold">Screenshot</div>
          {/* <div className="flex space-x-2">
              <div className="">
                <span className="align-middle px-1 text-sm rounded-sm border-2 bg-gray-500">
                  <FontAwesomeIcon icon={faCrosshairs} /> Live screenshot
                </span>
              </div>
              <div className="">
                <span className="align-middle px-1 text-sm rounded-sm border-2 bg-gray-500">
                  <FontAwesomeIcon icon={faMaximize} /> Full Image
                </span>
              </div>
            </div> */}
        </div>
        <img
          className="rounded-sm w-full h-[250px]"
          src={`https://mini.s-shot.ru/1920x1080/JPEG/1024/Z100/?https://${data.domain}/`}
          alt="screenshot"
        />
        <div className="mt-4 min-w-96 space-y-4">
          {/* <div className="font-semibold text-xl">Page Title</div>
            <div>
              GIZ – ProSEED Albania | ProSEED - Programme for Sustainable Economic
              and Regional Development, Promoting Employment, Vocation
            </div> */}
          <div className="flex justify-between">
            <div className="font-semibold text-xl">Page URL History</div>
            <div className="py-1 px-2 text-xs rounded-md bg-zinc-700 hover:bg-zinc-700/60">
              Show full URLs
            </div>
          </div>
          <div className="flex flex-row">
            <div>1.</div>
            <div>
              {/* <div>
                  https://
                  <span className="text-green-500">
                    gizdemo.civiservice.de/
                  </span>{" "}
                  <span className="px-1 rounded-sm bg-orange-400">HTTP 301</span>
                </div> */}
              <div>
                https://
                <span className="text-green-500">{data.domain}/</span>{" "}
                <span className="px-1 rounded-md bg-indigo-500 cursor-pointer">
                  Page URL
                </span>
              </div>
            </div>
          </div>
          <div className="font-bold text-xl">Detected technologies</div>
          {data.technology ? (
            <>
              {data.technology.map((item, index) => (
                <React.Fragment key={index}>
                  <div className="border-b-2 pb-2">
                    <div className="flex justify-between">
                      <div className="flex space-x-3">
                        <img
                          src={`${
                            getTechInfo(item.subtech[0].technology).icon
                          }`}
                          width={20}
                          height={20}
                          alt="Updating"
                          className="rounded-full"
                        />
                        <div className="text-green-500">
                          {item.subtech[0].technology}{" "}
                          <span className="text-gray-500">
                            ({item.categories})
                          </span>
                        </div>
                      </div>
                      <div
                        className="px-2 border-2 border-zinc-700/60 rounded-md bg-black hover:bg-zinc-900 cursor-pointer"
                        onClick={() => {
                          handleExpandTech(index);
                        }}
                      >
                        Expand
                      </div>
                    </div>
                    {expandTech.includes(index) && (
                      <div className="text-md text-gray-400">
                        <div>
                          <span className="font-bold">Version:</span>{" "}
                          {item.subtech[0].version}
                        </div>
                        <div className="font-bold">Discription:</div>
                        <li className="ml-4 max-w-sm">
                          {getTechInfo(item.subtech[0].technology).description}
                        </li>
                      </div>
                    )}
                  </div>
                </React.Fragment>
              ))}
            </>
          ) : (
            <></>
          )}
          <div className="font-bold text-xl">Page Statistics</div>
          <div className="flex justify-around">
            <div className="flex flex-col text-center">
              <div className="text-2xl text-blue-500">
                {data.services ? data.services.length : 0}
              </div>
              <div className="text-lg text-gray-400">Requests</div>
              <div className="text-2xl text-blue-500">
                {data.autonomous_system
                  ? data.autonomous_system.bgp_prefix.length
                  : 0}
              </div>
              <div className="text-lg text-gray-400">Prefix</div>
            </div>
            <div className="flex flex-col text-center">
              <div className="text-2xl text-blue-500">
                {data.services ? data.services.length : 0}
              </div>
              <div className="text-lg text-gray-400">ASSETS</div>
              <div className="text-2xl text-blue-500">1</div>
              <div className="text-lg text-gray-400">Countries</div>
            </div>
            <div className="flex flex-col text-center">
              <div className="text-2xl text-blue-500">
                {data.dns ? data.dns.resolver.length : 0}
              </div>
              <div className="text-lg text-gray-400">DNS</div>
              <div className="text-2xl text-blue-500">
                <div className="relative flex space-x-5">
                  {data.is_online ? (
                    <>
                      <span className="absolute top-3.5 flex h-3 w-3 z-20">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-700 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400/70"></span>
                      </span>
                      <div>On</div>
                    </>
                  ) : (
                    <>
                      <span className="absolute top-3.5 flex h-3 w-3 z-20">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-700 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-400/70"></span>
                      </span>
                      <div>Down</div>
                    </>
                  )}
                </div>
              </div>
              <div className="text-lg text-gray-400">Status</div>
            </div>
            <div className="flex flex-col text-center">
              <div className="text-2xl text-blue-500">
                {subDomain.results.length}
              </div>
              <div className="text-lg text-gray-400">Subdomains</div>
              <div className="text-2xl text-blue-500">
                {Object.keys(data.ssl).length !== 0 ? data.ssl.version : "None"}
              </div>
              <div className="text-lg text-gray-400">SSL cert</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;

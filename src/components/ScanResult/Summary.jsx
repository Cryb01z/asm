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
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();
    return `${month} ${day}, ${year}`;
  };

  // Format the UNIX timestamp in certificate
  const formatTimestampForCert = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    if (month === 0) {
      return `${year - 1} - 12 - ${day}`;
    }
    return `${year} - ${month} - ${day}`;
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
    if (parseFloat(years) < 1) {
      return Math.floor(parseFloat(years) * 12) + " months";
    }

    return parseFloat(years) + " years";
  };

  // find ASN
  const findAsn = (ip) => {
    return allData.meta.processors.asn.data.find((item) => item.ip === ip);
  };

  // format the size
  const formatSize = (sizeInBytes) => {
    const sizeInKb = sizeInBytes / 1024;

    if (sizeInKb < 1024) {
      return `${sizeInKb.toFixed(2)} KB`; // If less than 1024 KB, it's KB
    } else {
      const sizeInMb = sizeInKb / 1024;
      return `${sizeInMb.toFixed(2)} MB`; // If 1024 KB or more, it's MB
    }
  };
  console.log(allData);

  return (
    <div className="flex justify-between w-full space-x-20 text-white lg:flex-1">
      <div className="flex flex-col max-w-[1300px]">
        <div className="text-xl py-2 font-bold ">Summary</div>
        <div className="border-2 p-3 max-w-[1300px] rounded-sm border-zinc-700/60">
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
              {allData.lists.certificates.length > 0 && (
                <>
                  TLS certificate: Issued by{" "}
                  {allData.lists.certificates[0].issuer} on{" "}
                  {formatUnixTimestamp(allData.lists.certificates[0].validFrom)}
                  . Valid for:{" "}
                  {calculateExpireYear(
                    allData.lists.certificates[0].validFrom,
                    allData.lists.certificates[0].validTo
                  )}
                  .
                </>
              )}
            </div>
          </div>
          <div className="pb-2 border-b-2 border-zinc-700/60">
            <span className="text-green-500">{allData.page.domain}</span>{" "}
            scanned <span className="font-bold">1 times</span> on asm
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
          <div
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
          </div>
        </div>
        {/*IP/ASNs */}
        {option === "ASNs" ? (
          <div className="table-auto border-2 border-zinc-700 rounded-sm text-sm mt-2 mb-10 p-2">
            <thead>
              <tr>
                <th className="text-left p-2">
                  <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                </th>
                <th className="text-right p-2">IP Address</th>
                <th className="text-left p-2">
                  AS <span className="">Autonomous System</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {allData.stats.ipStats.map((item, index) => (
                <tr className="border-b-2">
                  <td className="text-left p-2 font-bold">
                    {item.requests ? item.requests : 0}
                  </td>
                  <td className="text-right p-2 text-green-500">
                    {item.ip} {""}
                    <span
                      class={`fi fi-${item.countries[0].toLowerCase()}`}
                    ></span>
                  </td>
                  <td className="text-left p-2">
                    <span className="text-green-500">{item.asn.asn} </span> (
                    {item.asn.name})
                  </td>
                </tr>
              ))}
            </tbody>
          </div>
        ) : (
          ""
        )}
        {/* IP detail */}
        {option === "detail" ? (
          <div className="block space-y-2">
            {allData.stats.ipStats.map((item, index) => (
              <div className="border-2 border-zinc-700 rounded-sm text-sm mt-2 p-2">
                <div className="flex space-x-2">
                  <span className="font-bold">
                    {item.requests}{" "}
                    <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                  </span>
                  <span
                    class={`fi fi-${item.countries[0].toLowerCase()}`}
                  ></span>
                  <div>{item.ip}</div>
                  <div>
                    ({item.geoip.city || "N/A"} - {item.geoip.country_name})
                  </div>
                </div>
                <div>
                  <span className="text-green-500">ASN{item.asn.asn}</span>(
                  {item.asn.description})
                </div>
                {item.rdns ? (
                  <>
                    <div>
                      PTR:{" "}
                      <span className="text-green-500">{item.rdns.ptr}</span>
                    </div>
                  </>
                ) : (
                  <></>
                )}
                <div className="text-green-500">{item.domains[0]}</div>
              </div>
            ))}
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
                  <th className="text-right px-2">Transfer</th>
                </tr>
              </thead>
              <tbody>
                {allData.stats.domainStats.map((item, index) => (
                  <tr>
                    <td className="text-right font-bold px-2 align-top">
                      {item.count}
                    </td>
                    <td className="text-left text-green-500 px-2 ">
                      <span>{item.domain}</span>
                      {item.initiators.map((domain, index) => (
                        <div className="flex space-x-2">
                          <span
                            className={`fi fi-${item.countries[0].toLowerCase()}`}
                          ></span>
                          <a
                            key={index}
                            href={`http://${domain}`}
                            target="_blank"
                            className="ml-4 text-gray-500 cursor-pointer hover:text-green-500"
                          >
                            {domain}
                          </a>
                        </div>
                      ))}
                    </td>
                    <td className="text-right px-2">{formatSize(item.size)}</td>
                  </tr>
                ))}
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
                {allData.stats.domainStats.map((item, index) => (
                  <tr key={index}>
                    <td className="text-right font-bold px-2">{item.count}</td>
                    <td className="text-left text-green-500 px-2">
                      {item.domain}
                    </td>
                    <td className="text-left px-2 text-gray-500">
                      {item.initiators[0]}
                    </td>
                  </tr>
                ))}
              </tbody>
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
                  {allData.lists.linkDomains[0]}
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
            <div className="border-2 border-zinc-700 rounded-sm text-sm mt-2 mb-10 p-2">
              <div className="table-auto text-sm">
                <thead>
                  <tr>
                    <th className="text-left px-2">
                      Subject <span className="text-gray-400">Issuer</span>
                    </th>
                    <th className="text-left px-2">Validity</th>
                    <th className="text-left px-2">Valid</th>
                  </tr>
                </thead>
                <tbody className="">
                  {allData.lists.certificates.map((item, index) => (
                    <tr key={index}>
                      <td className="text-left font-bold px-2">
                        {item.subjectName}-{" "}
                        <span className="text-gray-400">{item.issuer}</span>
                      </td>
                      <td className="text-left text-green-500 px-2">
                        {formatTimestampForCert(item.validFrom)} -{" "}
                        {formatTimestampForCert(item.validTo)}
                      </td>
                      <td className="text-left px-2 text-gray-500">
                        {calculateExpireYear(item.validFrom, item.validTo)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </div>
            </div>

            {/* {Object.keys(data.ssl).length !== 0 ? (
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
            )} */}
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
                  <span className="text-green-500">{allData.page.domain}/</span>
                </div>
                <div className="text-gray-400">
                  Frame ID: {allData.data.requests[0].request.frameId}
                </div>
                <div>
                  <span className="font-bold">Requests:</span>{" "}
                  {allData.data.requests.length} HTTP requests in this frame
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>

      <div className="flex-col max-w-xl">
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
          src={`https://mini.s-shot.ru/1920x1080/JPEG/1024/Z100/?${allData.task.url}`}
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
              <div>
                https://
                <span className="text-green-500">
                  {allData.page.domain}/
                </span>{" "}
                <span className="px-1 rounded-md bg-indigo-500 cursor-pointer">
                  Page URL
                </span>
              </div>
            </div>
          </div>
          <div className="font-bold text-xl">Detected technologies</div>
          {allData.meta.processors.wappa ? (
            <>
              {allData.meta.processors.wappa.data.map((item, index) => (
                <React.Fragment key={index}>
                  <div className="border-b-2 pb-2">
                    <div className="flex justify-between">
                      <div className="flex space-x-3">
                        <img
                          src={`${getTechInfo(item.app).icon}`}
                          width={20}
                          height={20}
                          alt="Updating"
                          className="rounded-full"
                        />
                        <div className="text-green-500">
                          {item.app}{" "}
                          <span className="text-gray-500">
                            ({item.categories[0].name})
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
                          <span className="font-bold">Overall confidence:</span>{" "}
                          {item.confidenceTotal}%
                        </div>
                        <div className="font-bold">Detected patterns:</div>
                        {item.confidence.map((confidence, index) => (
                          <li className="ml-4 max-w-sm">
                            {confidence.pattern}
                          </li>
                        ))}
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
                {allData.data.requests.length}
              </div>
              <div className="text-lg text-gray-400">Requests</div>
              <div className="text-2xl text-blue-500">
                {allData.stats.ipStats ? allData.stats.ipStats.length : 0}
              </div>
              <div className="text-lg text-gray-400">IPs</div>
            </div>
            <div className="flex flex-col text-center">
              <div className="text-2xl text-blue-500">
                {allData.stats.securePercentage}%
              </div>
              <div className="text-lg text-gray-400">HTTPS</div>
              <div className="text-2xl text-blue-500">
                {allData.stats.uniqCountries ? allData.stats.uniqCountries : 0}
              </div>
              <div className="text-lg text-gray-400">Countries</div>
            </div>
            <div className="flex flex-col text-center">
              <div className="text-2xl text-blue-500">
                {allData.stats.IPv6Percentage
                  ? allData.stats.IPv6Percentage + "%"
                  : 0}
              </div>
              <div className="text-lg text-gray-400">IPv6</div>
              <div className="text-2xl text-blue-500">
                {allData.stats.tlsStats
                  ? formatSize(allData.stats.tlsStats[0].size).split(" ")[0]
                  : 0}
                <span className="text-base text-gray-400">
                  {allData.stats.tlsStats
                    ? formatSize(allData.stats.tlsStats[0].size).split(" ")[1]
                    : ""}
                </span>
              </div>
              <div className="text-lg text-gray-400">Transfer</div>
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

import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Canvg } from "canvg";
import React, { useEffect, useState } from "react";
import { getCVEDetail, getDomainCVE } from "../../axios/CVEService/cveService";
import { getScanInfo } from "../../axios/ScanService/scanService";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ExportPDF = ({ domain }) => {
  const [data, setdata] = useState({
    status: "",
    results: {
      domain: "",
      discovery_reason: "",
      is_online: true,
      discovery_on: "",
      ip: [""],
      services: [
        {
          http: {
            request: {
              method: "",
              uri: "",
            },
            response: {
              status_code: 0,
              status_reason: "",
              header_location: null,
              html_title: "",
            },
          },
          port: "",
          service_name: "",
          cpe: null,
          software: [
            {
              vendor: "",
              product: "",
              version: "",
            },
          ],
          vulnerabilities: [],
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
          subject_cn: [],
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
          categories: "",
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
        bgp_prefix: [],
        name: "",
        country_code: "",
      },
      operating_system: {
        vendor: "",
        cpe: null,
        port: 0,
      },
      dns: {
        ttl: 0,
        resolver: [],
        a: [],
        soa: [
          {
            name: "",
            ns: "",
            mailbox: "",
            serial: 0,
            refresh: 0,
            retry: 0,
            expire: 0,
            minttl: 0,
          },
        ],
        txt: [],
        all: [],
        status_code: "",
        axfr: {
          host: "",
        },
        timestamp: "",
      },
    },
  });
  const [cves, setcves] = useState({
    status: "",
    results: [
      {
        vulnerabilities: [
          {
            affects_detail: "",
            affects_url: "",
            api_operation_id: 0,
            api_type: 0,
            app: "",
            confidence: 0,
            criticality: 0,
            last_seen: null,
            loc_id: 0,
            severity: 0,
            status: "",
            tags: [],
            target_id: "",
            target_vuln_id: "",
            vt_created: null,
            vt_id: "",
            vt_name: "",
            vt_updated: null,
            vuln_id: "",
          },
        ],
        pagination: {
          count: 0,
          cursor_hash: "",
          cursors: [],
          sort: null,
        },
        scan_id: "",
        result_id: "",
      },
    ],
  });
  const [cveDetails, setcveDetails] = useState({
    affects_detail: "",
    affects_url: "",
    api_operation_id: 0,
    api_type: 0,
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
    response_info: false,
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

  useEffect(() => {
    const fetchData = async () => {
      if (domain) {
        try {
          console.log(domain);
          const dataResponse = await getScanInfo(domain);
          console.log(dataResponse);
          const cveResponse = await getDomainCVE(domain);
          console.log(cveResponse);
          if (
            dataResponse.data.status === "success" &&
            cveResponse.data.status === "success"
          ) {
            setdata(dataResponse.data);
            setcves(cveResponse.data);
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchData();
  }, [domain]);
  console.log(data);
  console.log(cves);

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

  const getCveData = async (url, id) => {
    const cveData = [];
    try {
      const response = await getCVEDetail(getDomain(url), id); // Ensure getCVEDetail is asynchronous
      console.log(response);

      cveData.push(["Vulnerability ID", response.data.vuln_id || "N/A"]);
      cveData.push(["Affected URL", response.data.affects_url || "N/A"]);
      cveData.push(["Description", response.data.description || "N/A"]);
      cveData.push(["Tags", response.data.tags.join(", ") || "N/A"]);
      cveData.push(["Type", response.data.vt_name || "N/A"]);
      if (response.data.references.length > 0) {
        response.data.references.forEach((ref) => {
          cveData.push(["Reference URL", ref.href || "N/A"]);
          cveData.push(["Reference", ref.rel || "N/A"]);
        });
      }
      cveData.push(["CVSS Score", response.data.cvss_score || "N/A"]);
      cveData.push(["Confidence Level", response.data.confidence || "N/A"]);
      cveData.push(["Criticality Level", response.data.criticality || "N/A"]);
      cveData.push(["CVSS v4 Score", response.data.cvss4 || "N/A"]);
      cveData.push(["CVSS v3 Score", response.data.cvss3 || "N/A"]);
      cveData.push(["CVSS v2 Score", response.data.cvss2 || "N/A"]);
      cveData.push(["Source", response.data.source || "N/A"]);
      cveData.push(["Severity Level", response.data.severity || "N/A"]);
    } catch (error) {
      console.log(error);
    }
    return cveData;
  };

  const exportPDF = async () => {
    let toastId = null;
    toastId = toast.info(`Generating PDF report for ${domain}...`, {
      autoClose: false,
      isLoading: true,
      position: "top-right",
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      transition: Bounce,
    });
    const pdf = new jsPDF("landscape", "mm", "a4");
    const svgString = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 34 34"
      width="34"
      height="34"
    >
      <path
        d="M21.9688 2.0043C5.42727 1.69307 2.31157 18.3581 12.7067 22.5173M31.9957 21.865C32.3073 5.34145 15.6241 2.22913 11.4604 12.6129M12.1402 31.9957C28.6817 32.3069 31.7974 15.6419 21.4023 11.4827M2.00431 12.0486C1.69274 28.5721 18.3759 31.6845 22.5396 21.3006"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  `;

    // Create a canvas
    const canvas = document.createElement("canvas");
    canvas.width = 5; // Width of SVG
    canvas.height = 5; // Height of SVG

    // Get 2D rendering context
    const ctx = canvas.getContext("2d");

    // Use Canvg to render the SVG onto the canvas
    const canvgInstance = Canvg.fromString(ctx, svgString);
    canvgInstance.render(); // No `await` needed

    // Convert the canvas to image data
    const imgData = canvas.toDataURL("image/png");

    // Add image to PDF
    pdf.addImage(imgData, "PNG", 15, 5, 5, 5); // Position (10,10) and size (34x34)
    pdf.text("ASM Scan Report", 20, 10);
    pdf.text("Basic Info:", 15, 17);

    autoTable(pdf, {
      head: [["Field", "Value"]], // Table headers
      body: [
        ["Domain", data.results.domain],
        ["Discovery Reason", data.results.discovery_reason],
        ["Is Online", data.results.is_online.toString()],
        ["Discovery On", data.results.discovery_on],
        ["IP", data.results.ip.join(", ")],
      ],
      startY: 20, // Start below the header
    });

    let nextY = pdf.lastAutoTable.finalY + 10;
    if (nextY > pdf.internal.pageSize.height - 30) {
      pdf.addPage();
      nextY = 20; // Reset the Y position for the new page
    }
    pdf.text("Services:", 15, nextY - 3);
    nextY = pdf.lastAutoTable.finalY + 10;
    if (nextY > pdf.internal.pageSize.height - 30) {
      pdf.addPage();
      nextY = 20; // Reset the Y position for the new page
    }
    const technologyData = data.results.technology.map((tech) => [
      tech.subtech[0].technology || "N/A",
      tech.categories || "N/A",
      tech.subtech[0].version || "N/A",
    ]);
    autoTable(pdf, {
      head: [["Name", "Category", "Version"]], // Table headers
      body: technologyData,
      startY: nextY, // Start below the header
    });

    nextY = pdf.lastAutoTable.finalY + 10;
    if (nextY > pdf.internal.pageSize.height - 30) {
      pdf.addPage();
      nextY = 20; // Reset the Y position for the new page
    }
    pdf.addPage();
    nextY = 20;
    pdf.text("Vulnerabilities:", 15, 10);
    const cveData = cves.results.flatMap((cve) => cve.vulnerabilities);
    let count = 0;
    for (const item of cveData) {
      count = +1;
      const cveDetails = await getCveData(item.affects_url, item.vuln_id); // Fetch CVE data

      if (cveDetails && cveDetails.length > 0) {
        // Create a table for the current CVE
        autoTable(pdf, {
          head: [["Field", "Value"]], // Table headers
          body: cveDetails, // The data for the CVE
          startY: nextY, // Start below the previous table
        });
        if (count < cveData.length - 1) {
          pdf.addPage();
          nextY = 20;
        }
      }
    }
    pdf.save(`${domain}-report.pdf`);
    toast.dismiss(toastId);
    toast.success(`PDF generated successfully!`, {
      autoClose: 5000,
      isLoading: false,
      position: "top-right",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  return (
    <div
      className="flex items-center justify-center px-4 border-2 border-zinc-700/60 rounded-md hover:bg-zinc-900 hover:border-zinc-700"
      onClick={exportPDF}
    >
      <FontAwesomeIcon icon={faCloudArrowDown} />
      <ToastContainer />
    </div>
  );
};

export default ExportPDF;

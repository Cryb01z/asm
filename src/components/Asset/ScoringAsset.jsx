import React, { useEffect, useState } from "react";
import { getCVEOfDomain } from "../../axios/CVEService/cveService";

const ScoringAsset = ({ domain, port }) => {
  const initialValue = parseInt(
    localStorage.getItem(`${domain}:${port}`) || 0,
    10
  );

  const [selectedValue, setSelectedValue] = useState(initialValue);

  const severityLevels = [
    { value: 4, label: "Critical" },
    { value: 3, label: "High" },
    { value: 2, label: "Medium" },
    { value: 1, label: "Low" },
    { value: 0, label: "Unknown" },
  ];

  const [data, setdata] = useState({
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
  });

  useEffect(() => {
    const fetchData = async () => {
      console.log(domain, port);

      if (domain && port) {
        try {
          const response = await getCVEOfDomain(`${domain}:${port}`);
          // console.log(response.data);
          setdata(response.data);
        } catch (error) {
          console.error("Error fetching domain CVE:", error);
        }
      }
    };
    fetchData();
  }, []);

  console.log(data);

  const handleChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setSelectedValue(value);
    localStorage.setItem(`${domain}:${port}`, value); // Save the value persistently
  };

  //Render cvss score color
  const serverityColor = (score) => {
    switch (score) {
      case 4:
        return "text-red-600 bg-red-600/50";
      case 3:
        return "text-amber-600 bg-amber-600/50";
      case 2:
        return "text-indigo-600 bg-indigo-600/50";
      case 1:
        return "text-green-600 bg-green-600/50";
      default:
        return "text-gray-600 bg-gray-600/50";
    }
  };

  console.log(domain, port);

  return (
    /* From Uiverse.io by Javierrocadev */
    <div className="relative group rounded-lg w-20 text-center overflow-hidden border-2 border-zinc-700">
      <select
        className={`appearance-none text-center relative ring-0 outline-none border text-sm font-bold rounded-lg py-2 block w-full ${serverityColor(
          selectedValue
        )}`}
        value={selectedValue}
        onChange={handleChange}
        aria-label="Severity Selector"
      >
        {severityLevels.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ScoringAsset;

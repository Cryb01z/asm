import React, { useEffect, useState } from "react";
import RadarChart from "../../charts/RadarChart";

const CVSS = ({ metric }) => {
  const flagLabel = ["version", "baseSeverity", "baseScore"];
  const flagData = [
    "HIGH",
    "LOW",
    "NONE",
    "UNCHANGED",
    "NETWORK",
    "COMPLETE",
    "SINGLE",
    "PARTIAL",
  ];
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState([
    {
      source: "",
      type: "",
      cvssData: {
        version: "",
        vectorString: "",
        attackVector: "",
        attackComplexity: "",
        privilegesRequired: "",
        userInteraction: "",
        scope: "",
        confidentialityImpact: "",
        integrityImpact: "",
        availabilityImpact: "",
        baseScore: 0,
        baseSeverity: "",
      },
      exploitabilityScore: 0,
      impactScore: 0,
    },
  ]);
  const [chartData, setchartData] = useState({
    labels: [],
    datasets: [
      {
        label: "CVE Metrics",
        data: [], // Pass "High", "Low", "None" as data
      },
    ],
  });

  const x = {
    attackComplexity: "LOW",
    attackVector: "NETWORK",
    availabilityImpact: "HIGH",
    baseSeverity: "HIGH",
    confidentialityImpact: "HIGH",
    integrityImpact: "HIGH",
    privilegesRequired: "LOW",
    scope: "UNCHANGED",
    userInteraction: "NONE",
    vectorString: "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H",
  };

  useEffect(() => {
    const labels = [];
    const datasets = [];
    if (metric) {
      setdata((prev) => (prev = metric));
      Object.entries(metric[0].cvssData).forEach(([key, value]) => {
        if (!flagLabel.includes(key) && flagData.includes(value)) {
          labels.push(key);
          if (value === "NETWORK") {
            datasets.push("HIGH");
          } else if (value === "UNCHANGED") {
            datasets.push("NONE");
          } else if (value === "COMPLETE") {
            datasets.push("HIGH");
          } else if (value === "SINGLE") {
            datasets.push("LOW");
          } else if (value === "PARTIAL") {
            datasets.push("LOW");
          } else {
            datasets.push(value);
          }
        }
      });
    }
    console.log(labels, datasets);
    setchartData((prev) => ({
      ...prev,
      labels: labels,
      datasets: [{ ...prev.datasets[0], data: datasets }],
    }));
  }, [metric]);
  console.log(data);
  console.log(chartData);

  const getColor = (value) => {
    switch (value) {
      case "HIGH":
      case "NETWORK":
      case "COMPLETE":
        return "bg-red-600";
      case "LOW":
      case "PARTIAL":
      case "SINGLE":
        return "bg-orange-500";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <>
      {data[0].cvssData.version !== "" ? (
        <div className="flex justify-around mt-4 space-x-5 pr-4">
          <div className="flex-col space-y-3">
            {Object.entries(data[0].cvssData)
              .slice(0, Math.ceil(Object.entries(data[0].cvssData).length / 2))
              .map(
                ([key, value]) =>
                  !flagLabel.includes(key) && (
                    <div className="flex justify-between p-2 bg-zinc-900 border border-zinc-700 rounded-sm">
                      <span>{key}</span>
                      <span
                        className={`ml-5 px-1 ${getColor(
                          value
                        )} rounded-sm text-white`}
                      >
                        {value}
                      </span>
                    </div>
                  )
              )}
          </div>
          <div className="flex-col space-y-3">
            {Object.entries(data[0].cvssData)
              .slice(Math.ceil(Object.entries(data[0].cvssData).length / 2))
              .map(
                ([key, value]) =>
                  !flagLabel.includes(key) && (
                    <div className="flex justify-between p-2 bg-zinc-900 border border-zinc-700 rounded-sm">
                      <span>{key}</span>
                      <span
                        className={`ml-5 px-1 ${getColor(
                          value
                        )} rounded-sm text-white`}
                      >
                        {value}
                      </span>
                    </div>
                  )
              )}
          </div>
          <div className="">
            <RadarChart data={chartData} />
          </div>
        </div>
      ) : (
        <div className="w-full p-4 bg-black">
          <div className="w-full bg-zinc-900 border border-zinc-700/60">
            <div className="p-4">No data.</div>
          </div>
        </div>
      )}
    </>
  );
};

export default CVSS;

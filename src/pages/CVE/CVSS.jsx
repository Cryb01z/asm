import React from "react";
import RadarChart from "../../charts/RadarChart";

const CVSS = ({ version }) => {
  const chartData = {
    labels: [
      "Attack Vector",
      "Attack Complexity",
      "Privileges Required",
      "User Interaction",
      "Scope",
      "Confidentiality Impact",
      "Integrity Impact",
      "Availability Impact",
    ],
    datasets: [
      {
        label: "CVE Metrics",
        data: ["High", "Low", "High", "None", "Low", "High", "None", "Low"], // Pass "High", "Low", "None" as data
      },
    ],
  };
  return (
    <div className="flex mt-4 space-x-5">
      <div className="flex-col space-y-3">
        <div className="flex justify-between p-2 bg-slate-400  rounded-sm">
          <span>Attack Vector</span>
          <span className="ml-5 px-1 bg-red-600 rounded-sm">Network</span>
        </div>
        <div className="flex justify-between p-2 bg-slate-400  rounded-sm">
          <span>Attack Complexity</span>
          <span className="ml-5 px-1 bg-red-600 rounded-sm">High</span>
        </div>
        <div className="flex justify-between p-2 bg-slate-400  rounded-sm">
          <span>Privileges Required</span>
          <span className="ml-5 px-1 bg-red-600 rounded-sm">High</span>
        </div>
        <div className="flex justify-between p-2 bg-slate-400  rounded-sm">
          <span>Scope</span>
          <span className="ml-5 px-1 bg-gray-600 rounded-sm">Unchanged</span>
        </div>
      </div>
      <div className="flex-col space-y-3">
        <div className="flex justify-between p-2 bg-slate-400  rounded-sm">
          <span>Confidentiality Impact</span>
          <span className="ml-5 px-1 bg-red-600 rounded-sm">Network</span>
        </div>
        <div className="flex justify-between p-2 bg-slate-400  rounded-sm">
          <span>Integrity Impact</span>
          <span className="ml-5 px-1 bg-red-600 rounded-sm">Network</span>
        </div>
        <div className="flex justify-between p-2 bg-slate-400  rounded-sm">
          <span>Availability Impact</span>
          <span className="ml-5 px-1 bg-orange-500 rounded-sm">low</span>
        </div>
        <div className="flex justify-between p-2 bg-slate-400 rounded-sm">
          <span>User Interaction</span>
          <span className="ml-5 px-1 bg-gray-600 rounded-sm">none</span>
        </div>
      </div>
      <div className="ml-16">
        <RadarChart data={chartData} />
      </div>
    </div>
  );
};

export default CVSS;

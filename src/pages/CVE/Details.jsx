import { faCube, faMicrochip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Details = () => {
  return (
    <div className="px-2 mt-4">
      <div className="flex justify-between">
        <div className="w-[440px] h-[350px] bg-slate-400 rounded-sm border-2">
          <div className="p-2">
            <FontAwesomeIcon icon={faMicrochip} /> Affected Software
          </div>
          <div className="border-t-2"></div>
          <div className="p-2">
            <div className="py-2 font-bold">Configuration 1</div>
            <div className="flex">
              <div className="text-left w-20 ">Type</div>
              <div className="text-left w-20">Vendor</div>
              <div className="text-left w-36">Products</div>
              <div className="text-left w-24">Action</div>
            </div>
          </div>
          <div className="border-t-2"></div>
          <div className="p-2">
            <div className="flex text-sm">
              <div className="text-left w-20">App</div>
              <div className="text-left w-20">Apache</div>
              <div className="text-left w-36">Http Server</div>
              <div className="text-left w-24">
                <span className="p-1 bg-slate-600 rounded-sm cursor-pointer hover:bg-slate-800">
                  Show Cpe List
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[440px] h-[350px]  bg-slate-400 rounded-sm border-2 overflow-y-auto">
          <div className="p-2">
            <FontAwesomeIcon icon={faCube} /> References
          </div>
          <div className="border-t-2"></div>
          <table className="table">
            <thead>
              <tr>
                <th className="p-2 text-left w-32">Reference</th>
                <th className="p-2 text-left ">Link</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t-2">
                <td className="p-2 text-left w-32">
                  <span className="px-1 bg-slate-600 rounded-sm">Misc</span>
                </td>
                <td className="p-2 text-left break-all hover:text-blue-500 cursor-pointer">
                  https://httpd.apache.org/security/vulnerabilities_24.html
                </td>
              </tr>
              <tr className="border-t-2">
                <td className="p-2 text-left w-32">
                  <span className="px-1 bg-slate-600 rounded-sm">Misc</span>
                </td>
                <td className="p-2 text-left break-all hover:text-blue-500 cursor-pointer">
                  https://httpd.apache.org/security/vulnerabilities_24.html
                </td>
              </tr>
              <tr className="border-t-2">
                <td className="p-2 text-left w-32">
                  <span className="px-1 bg-slate-600 rounded-sm">Misc</span>
                </td>
                <td className="p-2 text-left break-all hover:text-blue-500 cursor-pointer">
                  https://httpd.apache.org/security/vulnerabilities_24.html
                </td>
              </tr>
              <tr className="border-t-2">
                <td className="p-2 text-left w-32">
                  <span className="px-1 bg-slate-600 rounded-sm">Misc</span>
                </td>
                <td className="p-2 text-left break-all hover:text-blue-500 cursor-pointer">
                  https://httpd.apache.org/security/vulnerabilities_24.html
                </td>
              </tr>
              <tr className="border-t-2">
                <td className="p-2 text-left w-32">
                  <span className="px-1 bg-slate-600 rounded-sm">Misc</span>
                </td>
                <td className="p-2 text-left break-all hover:text-blue-500 cursor-pointer">
                  https://httpd.apache.org/security/vulnerabilities_24.html
                </td>
              </tr>
              <tr className="border-t-2">
                <td className="p-2 text-left w-32">
                  <span className="px-1 bg-slate-600 rounded-sm">Misc</span>
                </td>
                <td className="p-2 text-left break-all hover:text-blue-500 cursor-pointer">
                  https://httpd.apache.org/security/vulnerabilities_24.html
                </td>
              </tr>
              <tr className="border-t-2">
                <td className="p-2 text-left w-32">
                  <span className="px-1 bg-slate-600 rounded-sm">Misc</span>
                </td>
                <td className="p-2 text-left break-all hover:text-blue-500 cursor-pointer">
                  https://httpd.apache.org/security/vulnerabilities_24.html
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Details;

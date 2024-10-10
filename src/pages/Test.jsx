import {
  faBullseye,
  faHouseFire,
  faLayerGroup,
  faServer,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Test = ({ site }) => {
  const [options, setoptions] = useState(site);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="bg-black sticky top-0 z-20">
      {/* Header  */}
      <div className="flex justify-between w-full items-center px-8 pt-5 pb-3 border-b-2 border-neutral-800 relative">
        {/* logo */}
        <div className="flex space-x-3">
          <svg
            width="24"
            height="24"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.9688 2.0043C5.42727 1.69307 2.31157 18.3581 12.7067 22.5173M31.9957 21.865C32.3073 5.34145 15.6241 2.22913 11.4604 12.6129M12.1402 31.9957C28.6817 32.3069 31.7974 15.6419 21.4023 11.4827M2.00431 12.0486C1.69274 28.5721 18.3759 31.6845 22.5396 21.3006"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
            ></path>
          </svg>
          <div className="text-gray-400 text-sm">ASM</div>
        </div>

        {/* Centered navbar */}
        <div className="absolute left-1/2 top-9 -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-row items-center justify-center space-x-1 text-sm text-neutral-400 border-2 rounded-lg border-neutral-800 px-2 py-1">
            <div
              className={`px-5 rounded-md cursor-pointer ${
                options === "dashboard"
                  ? "bg-neutral-700/60"
                  : "hover:bg-neutral-700/45"
              }`}
              onClick={() => {
                setoptions("dashboard");
                navigate("/dashboard");
              }}
            >
              <span
                className={`${
                  options === "dashboard" ? "text-indigo-400" : ""
                }`}
              >
                <FontAwesomeIcon icon={faHouseFire} />
              </span>{" "}
              <span
                className={`${options === "dashboard" ? "text-white" : ""}`}
              >
                Dashboard
              </span>
            </div>
            <div
              className={`px-5 rounded-md cursor-pointer ${
                options === "asset"
                  ? "bg-neutral-700/60"
                  : "hover:bg-neutral-700/45"
              }`}
              onClick={() => {
                setoptions("asset");
                navigate("/asset");
              }}
            >
              <span
                className={`${options === "asset" ? "text-indigo-400" : ""}`}
              >
                <FontAwesomeIcon icon={faServer} />
              </span>{" "}
              <span className={`${options === "asset" ? "text-white" : ""}`}>
                Assets
              </span>
            </div>
            <div
              className={`px-5 rounded-md cursor-pointer ${
                options === "scan"
                  ? "bg-neutral-700/60"
                  : "hover:bg-neutral-700/45"
              }`}
              onClick={() => {
                setoptions("scan");
                navigate("/scan");
              }}
            >
              <span
                className={`${options === "scan" ? "text-indigo-400" : ""}`}
              >
                <FontAwesomeIcon icon={faBullseye} />
              </span>{" "}
              <span className={`${options === "scan" ? "text-white" : ""}`}>
                Scan
              </span>
            </div>
            <div
              className={`px-5 rounded-md cursor-pointer ${
                options === "CVE"
                  ? "bg-neutral-700/60"
                  : "hover:bg-neutral-700/45"
              }`}
              onClick={() => {
                setoptions("CVE");
                navigate("/CVE");
              }}
            >
              <span className={`${options === "CVE" ? "text-indigo-400" : ""}`}>
                <FontAwesomeIcon icon={faShieldHalved} />
              </span>{" "}
              <span className={`${options === "CVE" ? "text-white" : ""}`}>
                Vulnerabilities
              </span>
            </div>
          </div>
        </div>

        {/* user */}
        <div className="flex items-center space-x-10 text-gray-400">
          <div className="flex justify-center">
            <div className="text-white font-semibold px-2 py-1 rounded-md border border-zinc-700/60 hover:bg-neutral-700/45 cursor-pointer">Changelog</div>
          </div>
          <div className="relative ml-3">
            <button
              type="button"
              className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">Open user menu</span>
              <img
                className="h-8 w-8 rounded-full"
                src="../../../public/img/ava.jpg"
                alt=""
              />
            </button>

            {menuOpen && (
              <div className="absolute border-2 right-0 border-neutral-800 z-10 mt-3 w-40 origin-top-right rounded-md bg-black py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="flex space-x-3 px-4 py-2">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="../../../public/img/ava.jpg"
                    alt=""
                  />
                  <div className="flex items-center">@ahihi</div>
                </div>
                <div className="border-t-2 border-neutral-800"></div>
                <div className="flex-col px-4 py-2 text-sm">
                  <div className="cursor-pointer py-1">Your Profile</div>
                  <div className="cursor-pointer py-1">Settings</div>
                  <NavLink to="/login">
                    <div className="cursor-pointer py-1">Logout</div>
                  </NavLink>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;

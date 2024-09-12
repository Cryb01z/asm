import React, { useState } from "react";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faMagnifyingGlass,
  faArrowRightRotate,
  faShare,
  faMessage,
  faCircleExclamation,
  faArrowRightArrowLeft,
  faHandPointRight,
  faCrosshairs,
  faQrcode,
  faLink,
  faRectangleList,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons/faFile";
import Summary from "./Summary";
import Redirects from "./Redirects";
import Links from "./Links";
import HTTP from "./HTTP";
const Result = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [options, setoptions] = useState("Summary");
  const handdleOption = (option) => {
    setoptions((prev) => (prev = option));
  };
  return (
    <div className=" bg-gray-900 text-white flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header
          tittle={"Scanning Result"}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main className="mt-5 px-20">
          <div className="flex justify-between">
            <div className="text-2xl font-bold">giz.proseed-al.de</div>
            <div className="flex space-x-2 text-sm">
              <div className="bg-gray-400 px-2 py-1 rounded-sm hover:bg-gray-500  cursor-pointer">
                <FontAwesomeIcon icon={faMagnifyingGlass} /> Lookup{" "}
                <FontAwesomeIcon icon={faCaretDown} />
              </div>
              <div className="bg-gray-400 px-2 py-1 rounded-sm hover:bg-gray-500  cursor-pointer">
                <FontAwesomeIcon icon={faShare} /> Go To
              </div>
              <div className="bg-gray-400 px-2 py-1 rounded-sm hover:bg-gray-500  cursor-pointer">
                <FontAwesomeIcon icon={faArrowRightRotate} /> Rescan
              </div>
            </div>
          </div>
          <div className="flex justify-between my-3">
            <div className="flex space-x-5">
              <div className="text-gray-400 text-xl">193.53.251.217</div>
              <div class="flex justify-center items-center">
                <div class="text-xs bg-green-500 rounded-sm px-2 py-1 font-bold hover:bg-green-700 cursor-pointer">
                  Public Scan
                </div>
              </div>
            </div>
            <div className="flex space-x-2 text-sm">
              <div className="bg-blue-400 px-2 py-1 rounded-sm hover:bg-blue-700">
                <FontAwesomeIcon icon={faMessage} /> {}
                Add Verdict
              </div>
              <div className="bg-gray-400 px-2 py-1 rounded-sm hover:bg-gray-500  cursor-pointer">
                <FontAwesomeIcon icon={faCircleExclamation} /> {}
                Report
              </div>
            </div>
          </div>
          <div className="font-bold">
            Submitted URL:{" "}
            <span className="font-normal text-gray-300">https://</span>
            <span className="text-green-500">gizdemo.civiservice.de/</span>
          </div>
          <div className="font-bold">
            Effective URL:{" "}
            <span className="font-normal text-gray-300">https://</span>
            <span className="text-green-500">giz.proseed-al.de/</span>
          </div>
          <div className="text-sm mb-2">
            <span className="font-bold">Submission:</span> On July 31 via
            automatic, source certstream-suspicious (July 31st 2024, 8:51:40 am
            UTC) — Scanned from
          </div>
          <div className="flex flex-row text-xs">
            <div
              className={
                options === "Summary"
                  ? "px-3 py-1.5 border-2 rounded-sm bg-blue-700 hover:bg-blue-900 cursor-pointer"
                  : "px-3 py-1.5 border-2 rounded-sm bg-blue-500 hover:bg-blue-700 cursor-pointer"
              }
              onClick={() => {
                handdleOption("Summary");
              }}
            >
              <FontAwesomeIcon icon={faHome} /> Summary
            </div>
            <div
              className={
                options === "HTTP"
                  ? "px-3 py-1.5 border-2 rounded-sm bg-blue-700 hover:bg-blue-900 cursor-pointer"
                  : "px-3 py-1.5 border-2 rounded-sm bg-blue-500 hover:bg-blue-700 cursor-pointer"
              }
              onClick={() => {
                handdleOption("HTTP");
              }}
            >
              <FontAwesomeIcon icon={faArrowRightArrowLeft} /> HTTP{" "}
              <span className="px-1.5 bg-green-500 rounded-sm">17</span>
            </div>
            <div
              className={
                options === "Redirects"
                  ? "px-3 py-1.5 border-2 rounded-sm bg-blue-700 hover:bg-blue-900 cursor-pointer"
                  : "px-3 py-1.5 border-2 rounded-sm bg-blue-500 hover:bg-blue-700 cursor-pointer"
              }
              onClick={() => {
                handdleOption("Redirects");
              }}
            >
              <FontAwesomeIcon icon={faShare} /> Redirects
            </div>
            <div
              className={
                options === "Links"
                  ? "px-3 py-1.5 border-2 rounded-sm bg-blue-700 hover:bg-blue-900 cursor-pointer"
                  : "px-3 py-1.5 border-2 rounded-sm bg-blue-500 hover:bg-blue-700 cursor-pointer"
              }
              onClick={() => {
                handdleOption("Links");
              }}
            >
              <FontAwesomeIcon icon={faHandPointRight} /> Links{" "}
              <span className="px-1.5 bg-green-500 rounded-sm">4</span>
            </div>
            <div
              className={
                options === "Behaviour"
                  ? "px-3 py-1.5 border-2 rounded-sm bg-blue-700 hover:bg-blue-900 cursor-pointer"
                  : "px-3 py-1.5 border-2 rounded-sm bg-blue-500 hover:bg-blue-700 cursor-pointer"
              }
              onClick={() => {
                handdleOption("Behaviour");
              }}
            >
              <FontAwesomeIcon icon={faMessage} /> Behaviour
            </div>
            <div
              className={
                options === "Indicators"
                  ? "px-3 py-1.5 border-2 rounded-sm bg-blue-700 hover:bg-blue-900 cursor-pointer"
                  : "px-3 py-1.5 border-2 rounded-sm bg-blue-500 hover:bg-blue-700 cursor-pointer"
              }
              onClick={() => {
                handdleOption("Indicators");
              }}
            >
              <FontAwesomeIcon icon={faCrosshairs} /> Indicators
            </div>
            <div
              className={
                options === "Similar"
                  ? "px-3 py-1.5 border-2 rounded-sm bg-blue-700 hover:bg-blue-900 cursor-pointer ml-1"
                  : "px-3 py-1.5 border-2 rounded-sm bg-blue-500 hover:bg-blue-700 cursor-pointer ml-1"
              }
              onClick={() => {
                handdleOption("Similar");
              }}
            >
              <FontAwesomeIcon icon={faLink} /> Similar
            </div>
            <div
              className={
                options === "DOM"
                  ? "px-3 py-1.5 border-2 rounded-sm bg-blue-700 hover:bg-blue-900 cursor-pointer"
                  : "px-3 py-1.5 border-2 rounded-sm bg-blue-500 hover:bg-blue-700 cursor-pointer"
              }
              onClick={() => {
                handdleOption("DOM");
              }}
            >
              <FontAwesomeIcon icon={faRectangleList} /> DOM
            </div>
            <div
              className={
                options === "Content"
                  ? "px-3 py-1.5 border-2 rounded-sm bg-blue-700 hover:bg-blue-900 cursor-pointer"
                  : "px-3 py-1.5 border-2 rounded-sm bg-blue-500 hover:bg-blue-700 cursor-pointer"
              }
              onClick={() => {
                handdleOption("Content");
              }}
            >
              <FontAwesomeIcon icon={faFile} /> Content
            </div>
            <div
              className={
                options === "API"
                  ? "px-3 py-1.5 border-2 rounded-sm bg-blue-700 hover:bg-blue-900 cursor-pointer"
                  : "px-3 py-1.5 border-2 rounded-sm bg-blue-500 hover:bg-blue-700 cursor-pointer"
              }
              onClick={() => {
                handdleOption("API");
              }}
            >
              <FontAwesomeIcon icon={faQrcode} /> API
            </div>
            <div className="px-3 py-1.5 border-2 rounded-sm bg-gray-400 ml-1 cursor-pointer">
              <FontAwesomeIcon icon={faMessage} /> Verdicts
            </div>
          </div>
          {options === "Summary" ? <Summary /> : <></>}
          {options === "HTTP" ? <HTTP /> : <></>}
          {options === "Redirects" ? <Redirects/> : <></>}
          {options === "Links" ? <Links/> : <></>}
        </main>
      </div>
    </div>
  );
};
export default Result;

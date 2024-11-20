import { faBug, faGem, faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AllResult = () => {
  return (
    <div className="px-5 mt-5">
      <div className="flex justify-between">
        <div className="flex space-x-5">
          <div className="flex-col p-3 border border-zinc-700/60 rounded-lg w-auto">
            <div className="flex items-center justify-between w-full pb-4">
              <div className="text-sm">
                <span className="px-1 bg-zinc-900/60 rounded-md">
                  <FontAwesomeIcon icon={faBug} />
                </span>{" "}
                VULNERABILITIES
              </div>
              <div>0</div>
            </div>
            <div className="border-b-4 border-green-500 w-60 rounded-lg opacity-0"></div>
          </div>
          <div className="flex-col p-3 border border-zinc-700/60 rounded-lg w-auto">
            <div className="flex items-center justify-between w-full pb-4">
              <div className="text-sm">
                <span className="px-1 bg-zinc-900/60 rounded-md">
                  <FontAwesomeIcon icon={faInfo} />
                </span>{" "}
                INFO
              </div>
              <div>0</div>
            </div>
            <div className="border-b-4 border-green-500 w-60 rounded-lg"></div>
          </div>
          <div className="flex-col p-3 border border-zinc-700/60 rounded-lg w-auto">
            <div className="flex items-center justify-between w-full pb-4">
              <div className="text-sm">
                <span className="px-1 bg-zinc-900/60 rounded-md">
                  <FontAwesomeIcon icon={faGem} />
                </span>{" "}
                AFFECTED ASSETS
              </div>
              <div>0</div>
            </div>
            <div className="border-b-4 border-red-500 w-60 rounded-lg"></div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-col items-center">
            <div className="text-white font-semibold">Results</div>
            <div>
              View the results of your scans. Apply filters to narrow down your
              results.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllResult;

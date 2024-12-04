import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Behaviour = ({ allData }) => {
  console.log(allData);

  return (
    <div className="min-h-80">
      <div className="mt-4">
        <div className="text-3xl font-bold">
          {allData.data.globals.length} JavaScript Global Variables
        </div>
        <div className="mt-2 text-xl">
          <FontAwesomeIcon icon={faCircleQuestion} /> These are the non-standard
          "global" variables defined on the window object. These can be helpful
          in identifying possible client-side frameworks and code.
        </div>
        <div className="flex flex-wrap space-x-2 mt-2 ">
          {allData.data.globals.map((global, index) => (
            <div className="p-2 bg-zinc-900 rounded-md border border-zinc-700 cursor-pointer">
              <span className="text-green-500">{global.type}</span> | {global.prop}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Behaviour;

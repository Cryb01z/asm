import { faPaperPlane, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Links = ({ allData }) => {
  console.log(allData);

  return (
    <div className="mt-4 min-h-80">
      <div className="text-2xl font-bold">{allData.data.links.length} Outgoing links</div>
      <div className="py-4">
        These are links going to different origins than the main page.
      </div>
      {allData.data.links.map((link, index) => (
        <div className="space-y-1 mt-2 pb-3 border-b border-zinc-700 ">
          <div>
            <span className="font-bold">URL</span>:{" "}
            <span className="text-gray-400">{link.href.split("/")[0]}//</span>
            <span className="text-green-500">{link.href.split("/")[2]}/</span>
            <span className="font-semibold">{link.href.split("/").slice(3).join("/")}</span>
          </div>
          <div>
            <span className="font-bold">Title</span>: {link.text}
          </div>
          {/* <div className="flex space-x-2">
            <div className="px-2 rounded-sm bg-green-600 hover:bg-green-800">
              <FontAwesomeIcon icon={faSearch} /> Search URL
            </div>
            <div className="px-2 rounded-sm bg-green-600 hover:bg-green-800">
              <FontAwesomeIcon icon={faSearch} /> Search Domain
            </div>
            <div className="px-2 rounded-sm bg-green-600 hover:bg-green-800">
              <FontAwesomeIcon icon={faPaperPlane} /> Scan URL
            </div>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default Links;

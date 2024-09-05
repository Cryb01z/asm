import { faPaperPlane, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Links = () => {
  return (
    <div className="mt-4 h-[calc(80%)]">
      <div className="text-2xl font-bold">4 Outgoing links</div>
      <div className="py-4">
        These are links going to different origins than the main page.
      </div>
      <div className="space-y-1 mt-2 pb-3 border-b-2">
        <div>
          <span className="font-bold">URL</span>: https://
          <span className="text-green-500">www.giz.de</span>
          /en/worldwide/123154.html
        </div>
        <div>
          <span className="font-bold">Title</span>: Legal Information
        </div>
        <div className="flex space-x-2">
          <div className="px-2 rounded-sm bg-green-600 hover:bg-green-800"><FontAwesomeIcon icon={faSearch}/> Search URL</div>
          <div className="px-2 rounded-sm bg-green-600 hover:bg-green-800"><FontAwesomeIcon icon={faSearch}/> Search Domain</div>
          <div className="px-2 rounded-sm bg-green-600 hover:bg-green-800"><FontAwesomeIcon icon={faPaperPlane}/> Scan URL</div>
        </div>
      </div>
      <div className="space-y-1 mt-2 pb-3 border-b-2">
        <div>
          <span className="font-bold">URL</span>: https://
          <span className="text-green-500">www.giz.de</span>
          /en/worldwide/123154.html
        </div>
        <div>
          <span className="font-bold">Title</span>: Legal Information
        </div>
        <div className="flex space-x-2">
          <div className="px-2 rounded-sm bg-green-600 hover:bg-green-800"><FontAwesomeIcon icon={faSearch}/> Search URL</div>
          <div className="px-2 rounded-sm bg-green-600 hover:bg-green-800"><FontAwesomeIcon icon={faSearch}/> Search Domain</div>
          <div className="px-2 rounded-sm bg-green-600 hover:bg-green-800"><FontAwesomeIcon icon={faPaperPlane}/> Scan URL</div>
        </div>
      </div>
      <div className="space-y-1 mt-2 pb-3 border-b-2">
        <div>
          <span className="font-bold">URL</span>: https://
          <span className="text-green-500">www.giz.de</span>
          /en/worldwide/123154.html
        </div>
        <div>
          <span className="font-bold">Title</span>: Legal Information
        </div>
        <div className="flex space-x-2">
          <div className="px-2 rounded-sm bg-green-600 hover:bg-green-800"><FontAwesomeIcon icon={faSearch}/> Search URL</div>
          <div className="px-2 rounded-sm bg-green-600 hover:bg-green-800"><FontAwesomeIcon icon={faSearch}/> Search Domain</div>
          <div className="px-2 rounded-sm bg-green-600 hover:bg-green-800"><FontAwesomeIcon icon={faPaperPlane}/> Scan URL</div>
        </div>
      </div>
      <div className="space-y-1 mt-2 pb-3 border-b-2">
        <div>
          <span className="font-bold">URL</span>: https://
          <span className="text-green-500">www.giz.de</span>
          /en/worldwide/123154.html
        </div>
        <div>
          <span className="font-bold">Title</span>: Legal Information
        </div>
        <div className="flex space-x-2">
          <div className="px-2 rounded-sm bg-green-600 hover:bg-green-800"><FontAwesomeIcon icon={faSearch}/> Search URL</div>
          <div className="px-2 rounded-sm bg-green-600 hover:bg-green-800"><FontAwesomeIcon icon={faSearch}/> Search Domain</div>
          <div className="px-2 rounded-sm bg-green-600 hover:bg-green-800"><FontAwesomeIcon icon={faPaperPlane}/> Scan URL</div>
        </div>
      </div>
    </div>
  );
};

export default Links;

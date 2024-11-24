import {
  faGlobe,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";

const TechInfo = ({ tech, name, catagory, version, position }) => {
  const [data, setdata] = useState({
    description: "",
    icon: "",
    link: "",
    name: "",
    ps: "",
    version: "",
  });
  const [isTop, setIsTop] = useState(true); // To track position of the tooltip
  const tooltipRef = useRef(null);
  useEffect(() => {
    setdata(tech);
  }, []);
  // console.log(data.icon);
  return (
    <>
      <div className="relative group/techinfo w-auto">
        {data !== null ? (
          <>
            <div className="bg-zinc-900 border-2 border-zinc-700/60 rounded-lg p-1">
              <img
                src={data.icon}
                width="15"
                height="15"
                loading="lazy"
                alt=""
                className=""
              />
            </div>
            {/* tech info */}
            <div className="invisible group-hover/techinfo:visible hover:visible transition-opacity duration-1000 delay-1000">
              <div
                className={`absolute z-10 pt-4 pl-4 w-auto ${
                  position === "bottom" ? "bottom-0" : ""
                }`}
              >
                <div className="border border-zinc-700/60 bg-zinc-900 rounded-md w-96">
                  <div className="p-4">
                    <div className="pb-2">
                      <img src={data.icon} alt="" height={20} width={20} />
                    </div>
                    <div className="flex justify-between">
                      <div className="font-semibold">
                        {name}-({version? version : "N/A"})
                      </div>
                      <div className="border border-zinc-700/60 rounded-lg px-1">
                        {catagory.toUpperCase()}
                      </div>
                    </div>
                    <div className="border-t-2 my-2 border-zinc-700/60"></div>
                    <div className="text-sm text-pretty">
                      {data.description}
                    </div>
                    <a
                      className="flex space-x-3 mt-2 group/link cursor-pointer text-xs"
                      href={data.link}
                      target="_blank"
                    >
                      <div>
                        <FontAwesomeIcon icon={faGlobe} />
                      </div>
                      <div>{data.link}</div>
                      <div className="group-hover/link:text-sky-700">
                        <FontAwesomeIcon icon={faUpRightFromSquare} size="sm" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default TechInfo;

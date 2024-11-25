import {
  faBullseye,
  faHouseFire,
  faServer,
  faShieldHalved,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useAuthStore from "../../store/useAuthStore";

const Navbar = ({ site }) => {
  const [options, setoptions] = useState(site);
  const [menuOpen, setMenuOpen] = useState(false);
  const [changeLogModal, setchangeLogModal] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const changeLogRef = useRef(null);
  const logout = useAuthStore((state) => state.logout);
  const data = [
    {
      user: "ahihi",
      comment: "check roi",
      action: "delete",
      type: "vulnerabilities",
      avatar: "/img/ava.jpg",
    },
    {
      user: "ahuhu",
      comment: "khong co loi",
      action: "exploited",
      type: "vulnerabilities",
      avatar: "/img/ava.jpg",
    },
    {
      user: "ahoho",
      comment: "test roi",
      action: "delete",
      type: "asset",
      avatar: "/img/ava.jpg",
    },
    {
      user: "ahihi",
      comment: "unexploited",
      action: "delete",
      type: "vulnerabilities",
      avatar: "/img/ava.jpg",
    },
    {
      user: "ahuhu",
      comment: "khong co loi",
      action: "exploited",
      type: "vulnerabilities",
      avatar: "/img/ava.jpg",
    },
    {
      user: "ahoho",
      comment: "test roi",
      action: "delete",
      type: "asset",
      avatar: "/img/ava.jpg",
    },
  ];

  const handleHover = (e) => {
    const hoveredItem = e.currentTarget;
    hoveredItem.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  const handleLogout = () => {
    logout();
    localStorage.removeItem("domain"); 
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        changeLogRef.current &&
        !changeLogRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
        setchangeLogModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
            {/* <div
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
            </div> */}
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
            <div
              className={`px-5 rounded-md cursor-pointer ${
                options === "credential"
                  ? "bg-neutral-700/60"
                  : "hover:bg-neutral-700/45"
              }`}
              onClick={() => {
                setoptions("credential");
                navigate("/credential");
              }}
            >
              <span className={`${options === "credential" ? "text-indigo-400" : ""}`}>
                <FontAwesomeIcon icon={faUserSecret} />
              </span>{" "}
              <span className={`${options === "credential" ? "text-white" : ""}`}>
                Credential Leak
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-10 text-gray-400">
          {/* changelog */}
          {/*<div className="relative w-full" ref={changeLogRef}>
            <div
              className="flex justify-center"
              onClick={() => {
                setchangeLogModal(!changeLogModal);
                if (menuOpen) {
                  setMenuOpen(false);
                }
              }}
            >
              <div className="text-white font-semibold px-2 py-1 rounded-md border border-zinc-700/60 hover:bg-neutral-700/45 cursor-pointer">
                Changelog
              </div>
              <span className="absolute -right-1 top-6 flex h-3 w-3 z-20">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-700 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400/70"></span>
              </span>
            </div>
            {changeLogModal && (
              <div className="absolute p-2 z-20 right-0 top-10 max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-black text-sm border-2 bg-black border-zinc-700 rounded-md">
                {data.map((item, index) => (
                  <div key={item.user + item.comment} className="relative">
                    <div
                      className="pb-2 cursor-pointer group"
                      onMouseEnter={handleHover}
                    >
                      <div className="hover:bg-zinc-900 rounded-md w-40">
                        <div className="font-semibold capitalize text-white">
                          {item.type}
                        </div>
                        <table className="w-full">
                          <thead>
                            <tr>
                              <th className="w-20 text-left pl-1 text-green-600">
                                User
                              </th>
                              <th className="w-20 text-left px-1 text-sky-500">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="w-20 items-center pl-1">
                                <img
                                  src={item.avatar}
                                  alt=""
                                  className="h-6 w-6 rounded-full"
                                />
                              </td>
                              <td className="w-20 text-left items-center pl-1 text-red-600">
                                {item.action}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="border border-zinc-700 mt-2"></div>
                      /~ full log ~/
                      <div
                        className={`absolute ${
                          index === data.length - 1 ? "bottom-16" : "top-16"
                        } invisible group-hover:visible bg-black border border-zinc-700/60 rounded-md z-30`}
                      >
                        <div className="flex-col w-40 p-2">
                          <div className="text-white font-mono">Comment</div>
                          <div>{item.comment}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>*/}

          {/* user */}
          <div className="relative ml-3 w-full" ref={menuRef}>
            <button
              type="button"
              className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              onClick={() => {
                setMenuOpen(!menuOpen);
                if (changeLogModal) {
                  setchangeLogModal(false);
                }
              }}
            >
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">Open user menu</span>
              <img className="h-8 w-8 rounded-full" src="/img/ava.jpg" alt="" />
            </button>

            {menuOpen && (
              <div className="absolute border-2 right-0 border-neutral-800 z-10 mt-3 w-40 origin-top-right rounded-md bg-black py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="flex space-x-3 px-4 py-2">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="/img/ava.jpg"
                    alt=""
                  />
                  <div className="flex items-center">@ahihi</div>
                </div>
                <div className="border-t-2 border-neutral-800"></div>
                <div className="flex-col px-4 py-2 text-sm">
                  <div className="cursor-pointer py-1">Your Profile</div>
                  <div className="cursor-pointer py-1">Settings</div>
                  <div className="cursor-pointer py-1" onClick={handleLogout}>
                    Logout
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDorks } from "../../axios/GithubDorkService/githubService";

const CredentialLeak = () => {
  const [search, setsearch] = useState("");
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState({ status: "success", results: [] });

  // Fetching data from the API
  const githubDorking = async (key) => {
    console.log(key);
    if (key !== "") {
      try {
        const response = await getDorks(key);
        console.log(response);
        if (response.data.status === "success") {
          setdata(response.data);
          setloading(false);
          toast.success("Found some repo!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        } else {
          setdata({ status: "failed", results: [] });
          setloading(true);
          toast.error("No repo found !", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  // handling the search
  const handleSearch = (key) => {
    setsearch(key);
  };

  //get the username
  const getUser = (url) => {
    const user = url.split("/")[3];
    return user;
  };
  return (
    <div className="flex h-screen overflow-hidden bg-black">
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Navbar site={"credential"} />
        <main>
          <div className="px-20 mt-10 pb-40 font-extralight">
            <div className="flex justify-between">
              <div>
                <div className="text-xl font-semibold text-white">
                  Credential Leak
                </div>
                <div className="text-sm">
                  Credential leakage refers to the unintended exposure of
                  valuable digital access data such as usernames, passwords, API
                  keys, or cryptographic keys.
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex space-x-4">
                <div className="relative w-full">
                  <input
                    className="p-2 bg-black w-full border border-zinc-700/60 rounded-md hover:bg-zinc-900 hover:border-zinc-700"
                    type="text"
                    placeholder="Search by keyword"
                    onChange={(e) => handleSearch(e.target.value)}
                  />
                  <div
                    className="absolute top-2 right-4"
                    onClick={() => {
                      githubDorking(search);
                    }}
                  >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2 col-span-full w-full xl:col-span-8 bg-zinc-900  shadow-lg rounded-md border border-zinc-700/60">
              <header className="px-5 py-2 border-b  border-zinc-700/60">
                <h2 className="font-semibold pb-2 text-slate-100 ">
                  Total result:{" "}
                  {data.status === "success" ? data.results.length : 0}
                </h2>
                {loading ? (
                  <></>
                ) : (
                  <>
                    <div className="overflow-auto h-96 scrollbar-thin text-gray-400 scrollbar-thumb-zinc-700 scrollbar-track-black">
                      {data.results.map((item, index) => (
                        <div
                          className="flex space-x-5 p-2 border-b-2 border-zinc-700"
                          key={index}
                        >
                          <a
                            href={`https://github.com/${getUser(item)}`}
                            target="_blank"
                            className="text-left text-white font-bold w-40 hover:text-blue-600 cursor-pointer"
                          >
                            @_{getUser(item)}
                          </a>
                          <a
                            href={item}
                            target="_blank"
                            className="text-left hover:text-blue-600 cursor-pointer w-80 text-pretty"
                          >
                            {item}
                          </a>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </header>
            </div>
          </div>
        </main>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CredentialLeak;

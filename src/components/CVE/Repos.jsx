import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { getDorks } from "../../axios/GithubDorkService/githubService";

const Repos = () => {
  const [search, setsearch] = useState("");
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState({ status: "success", results: [] });
  useEffect(() => {
    const fetch = async (key) => {
      try {
        const response = await getDorks(key);
        setdata(response.data);
        if (response.data.status === "success") {
          setloading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (search !== "") {
      fetch(search);
    }
  }, [search]);
  console.log(data);

  const handleSearch = (key) => {
    setsearch(key);
  };

  const getUser = (url) => {
    const user = url.split("/")[3];
    return user;
  };

  return (
    <div className="p-2">
      <div className="relative w-full mb-5">
        <input
          className=" p-2 bg-black w-full border-2 border-zinc-700/60 rounded-md hover:bg-zinc-900 hover:border-zinc-700"
          type="text"
          placeholder="Search Key"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <div className="absolute top-2 right-4">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
      <div className="col-span-full w-full xl:col-span-8 bg-zinc-900  shadow-lg rounded-md border border-zinc-700/60">
        <header className="px-5 py-4 border-b  border-zinc-700/60">
          <h2 className="font-semibold pb-2 text-slate-100 ">
            Total result: {data.status ? data.results.length : 0}
          </h2>
          {loading ? (
            <></>
          ) : (
            <>
              <div className="overflow-auto h-80 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-black">
                {data.results.map((item, index) => (
                  <div className="flex space-x-5 p-2 border-b-2 border-zinc-700">
                    <a
                      href={`https://github.com/${getUser(item)}`}
                      target="_blank"
                      className="text-left w-40 hover:text-blue-600 cursor-pointer"
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
  );
};

export default Repos;

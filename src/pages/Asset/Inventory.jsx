import {
  faHouse,
  faMagnifyingGlass,
  faSort,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Inventory = () => {
  return (
    <div className="px-36 mt-10">
      <div className="relative w-full">
        <input
          className=" p-2 bg-black w-full border-2 border-zinc-700/60 rounded-lg hover:bg-zinc-900 hover:border-zinc-700"
          type="text"
          placeholder="Search your assets..."
        />
        <div className="absolute top-2 right-4">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
      <div className="overflow-x-auto mt-5 scrollbar scrollbar-thumb-gray-500 scrollbar-track-zinc-700">
        <table className="w-[130%] border-separate border-spacing-y-0 overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-zinc-700">
          <thead className="sticky top-0">
            <tr className="bg-[#18181b] rounded-lg uppercase font-extralight font-mono">
              <th className="sticky left-0 text-left w-96 px-4 rounded-l-lg shadow-[34px_0px_29px_1px_rgba(11,11,13,0.8)] bg-[#18181b] cursor-pointer z-10">
                asset <FontAwesomeIcon icon={faSort} />
              </th>
              <th className="px-8 cursor-pointer">
                ip <FontAwesomeIcon icon={faSort} />
              </th>
              <th className="px-8 cursor-pointer">
                Technologies <FontAwesomeIcon icon={faSort} />
              </th>
              <th className="px-8 cursor-pointer">
                status <FontAwesomeIcon icon={faSort} />
              </th>
              <th className="px-8 cursor-pointer">
                tittle <FontAwesomeIcon icon={faSort} />
              </th>
              <th className="px-8 cursor-pointer">
                cname <FontAwesomeIcon icon={faSort} />
              </th>
              <th className="px-8 cursor-pointer rounded-r-lg">
                content length <FontAwesomeIcon icon={faSort} />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted border border-x-0 border-neutral-700 bg-[#0E0E12] group group-hover:bg-[#18181B] group-hover:border-neutral-900 relative h-12">
              <td className="bg-[#121215] border-b px-4 border-zinc-700/60 m-0 group-first:border-t group-hover:bg-[#18181B] group-hover:border-neutral-900 border-l sticky left-0 group-first:rounded-tl-lg shadow-[34px_0px_29px_1px_rgba(11,11,13,0.8)] group-hover:shadow-none z-10 group-hover:z-20">
                <div className="flex justify-between ">
                  <div className="flex items-center space-x-2">
                    <div className="bg-neutral-800 px-1 rounded-md">
                      <FontAwesomeIcon icon={faHouse} size="xs" />
                    </div>
                    <div>webmail1.yenbai.gov.vn</div>
                    <div>
                      <span class="relative flex h-2 w-2">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-700/70 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-amber-400/70"></span>
                      </span>
                    </div>
                  </div>
                  <div className="px-1 bg-[#3E3D3D] rounded-md">8080</div>
                </div>
              </td>
              <td className="px-8 text-[#A1A1AB] border-b border-zinc-700/60 p-0 m-0 group-first:border-t group-hover:bg-[#18181B] group-hover:border-neutral-900 py-[1rem]">
                <div className="flex justify-center items-center">
                  <div className="bg-[#3E3D3D] inline-block px-3 text-center rounded-md">
                    103.42.54.5
                  </div>
                </div>
              </td>
              <td className="px-8 text-[#A1A1AB] border-b border-zinc-700/60 p-0 m-0 group-first:border-t group-hover:bg-[#18181B] group-hover:border-neutral-900 py-[1rem]">
                <div className="flex justify-center items-center">
                  <div className="text-center">--</div>
                </div>
              </td>
              <td className="px-8 text-[#A1A1AB] border-b border-zinc-700/60 p-0 m-0 group-first:border-t group-hover:bg-[#18181B] group-hover:border-neutral-900 py-[1rem]">
                <div className="flex justify-center items-center">
                  <div className="bg-neutral-800/70 inline-block px-3 text-center rounded-md">
                    404
                  </div>
                </div>
              </td>
              <td className="px-8 text-[#A1A1AB] border-b border-zinc-700/60 p-0 m-0 group-first:border-t group-hover:bg-[#18181B] group-hover:border-neutral-900 py-[1rem]">
                <div className="flex justify-center items-center">
                  <div className="text-center">--</div>
                </div>
              </td>
              <td className="px-8 text-[#A1A1AB] border-b border-zinc-700/60 p-0 m-0 group-first:border-t group-hover:bg-[#18181B] group-hover:border-neutral-900 py-[1rem]">
                <div className="flex justify-center items-center">
                  <div className="text-center">--</div>
                </div>
              </td>
              <td className="px-8 text-[#A1A1AB] border-b border-zinc-700/60 p-0 m-0 group-first:border-t group-hover:bg-[#18181B] group-hover:border-neutral-900 py-[1rem]">
              <div className="flex justify-center items-center">
                  <div className="bg-neutral-800/70 inline-block px-2 text-center rounded-md">
                    2102
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;

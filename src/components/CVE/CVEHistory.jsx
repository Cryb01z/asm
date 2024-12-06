import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Font } from "canvg";
import React from "react";

const CVEHistory = ({ change }) => {
  console.log(change);

  // Convert the date to the desired format
  const convertDate = (inputDate) => {
    const date = new Date(inputDate);
    const formattedDate = date.toUTCString().replace("GMT", "+0000");
    return formattedDate;
  };

  const getActionColor = (action) => {
    switch (action) {
      case "Added":
        return "text-green-500";
      case "Removed":
        return "text-red-500";
      case "Changed":
        return "text-yellow-500";
      default:
        return "text-gray-500";
    }
  };
  return (
    <div className="block space-y-5 px-2 max-w-7xl">
      {change ? (
        <>
          {change.map((item) =>
            item.details.length > 0 ? (
              <>
                <div className="block space-y-2 border-b-2 border-zinc-700">
                  <div className="block border-b-2 border-zinc-700">
                    <div className="text-white text-lg font-semibold">
                      Event: {item.eventName}
                    </div>
                    <div className="flex space-x-2">
                      <FontAwesomeIcon icon={faClock} />
                      <div>{convertDate(item.created)}</div>
                    </div>
                  </div>
                  <table className="w-full table-fixed">
                    <thead>
                      <tr className="text-white">
                        <th className="px-4 py-2 w-28">Type</th>
                        <th className="px-4 py-2 w-full">Change</th>
                        <th className="px-4 py-2 w-28">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.details.map((detail, index) => (
                        <tr
                          className={`${index % 2 === 0 ? "" : "bg-zinc-900"}`}
                        >
                          <td className="border px-4 py-2 text-center align-top text-gray-200">
                            {detail.type}
                          </td>
                          <td className="border px-4 py-2">
                            <div className="block space-y-2 break-words text-pretty overflow-hidden">
                              <div>
                                <span className="text-gray-200">
                                  Old Value:{" "}
                                </span>
                                {detail.oldValue ? detail.oldValue : "N/A"}
                              </div>
                              <div>
                                <span className="text-gray-200">
                                  New Value:{" "}
                                </span>
                                {detail.newValue ? detail.newValue : "N/A"}
                              </div>
                            </div>
                          </td>
                          <td className={`border px-4 py-2 text-center align-top ${getActionColor(detail.action)}`}>
                            {detail.action}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            ) : (
              <></>
            )
          )}
        </>
      ) : (
        <>
          <div className="p-3 border-2 border-zinc-700/60 bg-zinc-900 mt-4">
            No data.
          </div>
        </>
      )}
    </div>
  );
};

export default CVEHistory;

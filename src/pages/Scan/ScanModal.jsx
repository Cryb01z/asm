import React from "react";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ScanModal = ({ scanModal, setscanModal }) => {
  const handleModal = () => {
    setscanModal(false);
  };

  return (
    <div className="overflow-y-auto overflow-x-hidden fixed inset-0 z-50 flex justify-center items-center">
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative  rounded-lg shadow bg-black border-2 border-zinc-700/60 hover:border-zinc-700">
          <button
            type="button"
            className="absolute top-3 end-2.5 text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
            onClick={handleModal}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-4 md:p-5 text-center">
            <div className="pb-3 flex-col space-y-3">
              <h3 className="mb-5 text-lg text-left text-white font-semibold">
                Create your scan
              </h3>
              <input
                type="text"
                className="flex justify-start w-full rounded-lg text-white bg-black border-2 border-zinc-700/60 p-2"
                placeholder="example.com"
              />
              <input
                type="text"
                className="flex justify-start w-full rounded-lg text-white bg-black border-2 border-zinc-700/60 p-2"
                placeholder="Discovery reason"
              />
            </div>
            <div className="flex space-x-3 justify-end">
              <button
                data-modal-hide="popup-modal"
                type="button"
                className="py-2.5 w-20 px-5 ms-3 text-sm font-medium focus:outline-non rounded-lg border focus:z-10 focus:ring-4 focus:ring-gray-700 bg-black text-gray-400 border-zinc-700 hover:text-white hover:bg-zinc-900"
                onClick={handleModal}
              >
                Back
              </button>
              <button
                data-modal-hide="popup-modal"
                type="button"
                className="text-black w-20 font-semibold text-center bg-white hover:bg-white/80 focus:ring-4 focus:outline-none rounded-lg text-sm items-center px-5 py-2.5"
                onClick={() => {
                  toast.success("Delete successfully !", {
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
                  handleModal();
                }}
              >
                Scan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanModal;

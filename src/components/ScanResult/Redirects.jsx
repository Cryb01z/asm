import React from "react";

const Redirects = () => {
  return (
    <div className="mt-6">
      <div className="text-2xl font-bold">Page URL History</div>
      <div className="mt-2">
        This captures the URL locations of the websites, including HTTP
        redirects and client-side redirects via JavaScript or Meta fields.
      </div>
      <div className="flex flex-row px-2 py-4 border-b-2">
        <div>1.</div>
        <div>
          <div>
            https://
            <span className="text-green-500">gizdemo.civiservice.de/</span>{" "}
            <span className="px-1 rounded-sm bg-orange-400">HTTP 301</span>
          </div>
          <div>
            https://
            <span className="text-green-500">giz.proseed-al.de/</span>{" "}
            <span className="px-1 rounded-sm bg-green-700">Page URL</span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="font-bold text-2xl">Redirected requests</div>
        <div className="py-3">There were HTTP redirect chains for the following requests:</div>
      </div>
      <div className="text-lg text-orange-500">Request Chain 10</div>
      <ul className="px-2 space-y-1 list-disc list-inside">
        <li>https://<span className="text-green-500">proseed-albania.civiservice.de</span>/wp-content/uploads/2024/04/318877803_1185939735437371_4212225261097150020_n.jpg <span className="px-1 rounded-sm bg-orange-400">HTTP 301</span></li>
        <li>https://<span className="text-green-500">giz.proseed-al.de</span>/wp-content/uploads/2024/04/318877803_1185939735437371_4212225261097150020_n.jpg</li>
      </ul>
      <div className="text-lg text-orange-500">Request Chain 11</div>
      <ul className="px-2 space-y-1 list-disc list-inside">
        <li>https://<span className="text-green-500">proseed-albania.civiservice.de</span>/wp-content/uploads/2024/04/318877803_1185939735437371_4212225261097150020_n.jpg <span className="px-1 rounded-sm bg-orange-400">HTTP 301</span></li>
        <li>https://<span className="text-green-500">giz.proseed-al.de</span>/wp-content/uploads/2024/04/318877803_1185939735437371_4212225261097150020_n.jpg</li>
      </ul>
      <div className="text-lg text-orange-500">Request Chain 12</div>
      <ul className="px-2 space-y-1 list-disc list-inside">
        <li>https://<span className="text-green-500">proseed-albania.civiservice.de</span>/wp-content/uploads/2024/04/318877803_1185939735437371_4212225261097150020_n.jpg <span className="px-1 rounded-sm bg-orange-400">HTTP 301</span></li>
        <li>https://<span className="text-green-500">giz.proseed-al.de</span>/wp-content/uploads/2024/04/318877803_1185939735437371_4212225261097150020_n.jpg</li>
      </ul>
    </div>
  );
};

export default Redirects;

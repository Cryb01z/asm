import axios from "axios";

const scanDomain = async (domain) => {
  return await axios.get(`http://171.244.21.38:65534/scan/${domain}`);
};

const getScanInfo = async (domain) => {
  return await axios.get(`http://171.244.21.38:65534/info/${domain}`);
};

const getScanProcess = async (domain) => {
  return await axios.get(
    `http://171.244.21.38:65534/scan/${domain}/status/stream`
  );
};

const getSubDomain = async (domain) => {
  return await axios.get(`http://171.244.21.38:65534/check/${domain}/all`);
};

export { getScanInfo, scanDomain, getScanProcess, getSubDomain };

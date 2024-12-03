import axios from "axios";

const scanDomain = async (domain) => {
  return await axios.get(`https://tools.caasm.tech/scan/${domain}`);
};

const getScanInfo = async (domain) => {
  return await axios.get(`https://tools.caasm.tech/info/${domain}`);
};

const getURLScanInfo = async (id) => {
  return await axios.get(`https://tools.caasm.tech/information/${id}`);
};

const getScanProcess = async (domain) => {
  return await axios.get(
    `https://tools.caasm.tech/scan/${domain}/status/stream`
  );
};

const getSubDomain = async (domain) => {
  return await axios.get(`https://tools.caasm.tech/check/${domain}/all`);
};

const getAllScanInfo = async (id) => {
  return await axios.get(`https://tools.caasm.tech/information?id=${id}`);
};

export {
  getScanInfo,
  scanDomain,
  getScanProcess,
  getSubDomain,
  getAllScanInfo,
  getURLScanInfo,
};

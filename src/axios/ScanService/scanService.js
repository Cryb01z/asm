import axios from "axios";
const toolApi = "https://tools.caasm.tech";

const scanDomain = async (domain) => {
  return await axios.get(`${toolApi}/scan/${domain}`);
};

const reScanDomain = async (domain) => {
  return await axios.get(`${toolApi}/rescan/${domain}`);
};

const getScanInfo = async (domain) => {
  return await axios.get(`${toolApi}/info/${domain}`);
};

const getURLScanInfo = async (id) => {
  return await axios.get(`${toolApi}/information/${id}`);
};

const getScanProcess = async (domain) => {
  return await axios.get(
    `${toolApi}/scan/${domain}/status/stream`
  );
};

const getSubDomain = async (domain) => {
  return await axios.get(`${toolApi}/check/${domain}/all`);
};

const getAllScanInfo = async (id) => {
  return await axios.get(`${toolApi}/information?id=${id}`);
};

export {
  getScanInfo,
  scanDomain,
  getScanProcess,
  getSubDomain,
  getAllScanInfo,
  getURLScanInfo,
  reScanDomain,
};

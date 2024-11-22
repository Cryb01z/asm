import axios from "axios";
import { axiosClient } from "../AxiosClient";
const getCVE = async (cveId) => {
  return await axiosClient.get(`/Cves/${cveId}`);
};

const getCVES = async (page, pageSize) => {
  return await axiosClient.get(`/Cves?page=${page}&pageSize=${pageSize}`);
};

const searchCVES = async (search, page, pageSize) => {
  return await axiosClient.get(
    `/Cves?search=${search}&page=${page}&pageSize=${pageSize}`
  );
};

const getTotalCVE = async () => {
  return await axiosClient.get(`/Cve/Count`);
};

const getCVEDetail = async (domain, cveId) => {
  return await axios.get(
    `https://tools.caasm.tech/vulnerability?url=${domain}&vuln_id=${cveId}`
  );
};

const getDomainCVE = async (domain) => {
  return await axios.get(
    `https://tools.caasm.tech/result/domain/vuln/all?domain=${domain}`
  );
};

export { getCVE, getCVES, getTotalCVE, searchCVES, getDomainCVE, getCVEDetail };

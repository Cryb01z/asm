import { axiosClient } from "./AxiosClient";
import axios from "axios";
const getCVE = async (cveId) => {
  return await axios.get(`http://4.194.251.93/Cves/${cveId}`);
};

const getCVES = async (page, pageSize) => {
  return await axios.get(
    `http://4.194.251.93/Cves?page=${page}&pageSize=${pageSize}`
  );
};

const searchCVES = async (search, page, pageSize) => {
  return await axios.get(`http://4.194.251.93/Cves?search=${search}&page=${page}&pageSize=${pageSize}`);
};

const getTotalCVE = async () => {
  return await axios.get(`http://4.194.251.93/Cve/Count`);
};

export { getCVE, getCVES, getTotalCVE, searchCVES };

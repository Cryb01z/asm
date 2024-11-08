import { axiosClient } from "./AxiosClient";
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

export { getCVE, getCVES, getTotalCVE, searchCVES };

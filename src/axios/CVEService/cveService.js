import axios from "axios";
import { axiosClient } from "../AxiosClient";
const toolApi = "https://tools.caasm.tech";
const getCVE = async (cveId) => {
  return await axiosClient.get(`/Cves/${cveId}`);
};

const searchCVES = async (search, page, pageSize, scoreFrom, scoreTo) => {
  if (search) {
    return await axiosClient.get(
      `/Cves?search=${search}&page=${page}&pageSize=${pageSize}&ScoreFrom=${scoreFrom}&ScoreTo=${scoreTo}`
    );
  }
  return await axiosClient.get(
    `/Cves?page=${page}&pageSize=${pageSize}&ScoreFrom=${scoreFrom}&ScoreTo=${scoreTo}`
  );
};

const getTotalCVE = async () => {
  return await axiosClient.get(`/Cves/Count`);
};

const getCVEDetail = async (domain, cveId) => {
  if (cveId) {
    return await axios.get(
      `${toolApi}/vulnerability/detail?target=${domain}&vuln_id=${cveId}`
    );
  }
  return await axios.get(`${toolApi}/vulnerability/detail?target=${domain}`);
};

const getCVEOfDomain = async (domain) => {
  return await axios.get(`${toolApi}/vulnerability?target=${domain}`);
};

const getDomainCVE = async (domain) => {
  return await axios.get(`${toolApi}/result/domain/vuln/all?domain=${domain}`);
};

const deleteDomainCVE = async (domain, id) => {
  return await axios.delete(
    `${toolApi}/vulnerability?target=${domain}&vuln_id=${id}`
  );
};

export {
  getCVE,
  getTotalCVE,
  searchCVES,
  getDomainCVE,
  getCVEDetail,
  getCVEOfDomain,
  deleteDomainCVE,
};

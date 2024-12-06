import axios from "axios";
const toolApi = "https://tools.caasm.tech";
const getDomainInfo = async (domain) => {
  return await axios.get(`${toolApi}/info/${domain}`);
};

const getSubDomainInfo = async (domain) => {
  return await axios.get(
    `${toolApi}/result/domain/all?domain=${domain}`
  );
};

export { getDomainInfo, getSubDomainInfo };

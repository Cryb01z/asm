import axios from "axios";

const getDomainInfo = async (domain) => {
  return await axios.get(`https://tools.caasm.tech/info/${domain}`);
};

const getSubDomainInfo = async (domain) => {
  return await axios.get(
    `https://tools.caasm.tech/result/domain/all?domain=${domain}`
  );
};

export { getDomainInfo, getSubDomainInfo };

import axios from "axios";

const getDomainInfo = async (domain) => {
  return await axios.get(`http://171.244.21.38:65534/info/${domain}`);
};

const getSubDomainInfo = async (domain) => {
  return await axios.get(
    `http://171.244.21.38:65534/result/domain/all?domain=${domain}`
  );
};

export { getDomainInfo, getSubDomainInfo };

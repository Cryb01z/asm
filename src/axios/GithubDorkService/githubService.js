import axios from "axios"
const toolApi = "https://tools.caasm.tech";
const getDorks = async (query) => {
  return await axios.get(`${toolApi}/dorking/github/${query}`);
}

export { getDorks };
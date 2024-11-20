import axios from "axios"

const getDorks = async (query) => {
  return await axios.get(`http://171.244.21.38:65534/dorking/github/${query}`);
}

export { getDorks };
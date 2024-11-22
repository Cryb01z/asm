import axios from "axios"

const getDorks = async (query) => {
  return await axios.get(`https://tools.caasm.tech/dorking/github/${query}`);
}

export { getDorks };
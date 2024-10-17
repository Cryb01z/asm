import axios from "axios";

const postLogin = async (data) => {
  return await axios.post("http://4.194.251.93/Login", data);
};

export { postLogin };

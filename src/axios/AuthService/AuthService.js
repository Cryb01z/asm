import { axiosClient } from "../AxiosClient";

const postLogin = async (data) => {
  return await axiosClient.post("/login", data);
};

export { postLogin };

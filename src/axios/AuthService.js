import { Await } from "react-router-dom";
import { axiosClient } from "./AxiosClient";
import { Axios } from "axios";

const postLogin = async (data) => {
  return await axiosClient.post("/login", data);
};

export { postLogin };

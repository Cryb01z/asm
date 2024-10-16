import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://4.194.251.93/",
  timeout: 300000,
});

const noAuth = [
  {
    url: "/login",
    method: "post",
  },
  {
    url: "/accounts",
    method: "post",
  },
];

const onRequest = (config) => {
  const { url, method } = config;
  const permitAuthen = noAuth.some((o) => o.url === url && o.method === method);
  if (!permitAuthen) {
    const accessToken = localStorage.getItem("accessToken");
    config.headers = { Authorization: `Bearer ${accessToken}` };
  }

  return config;
};
const onResponse = (response) => {
  return { data: response.data };
};
const onError = (error) => {
  return { err: error };
};
axiosClient.interceptors.request.use(onRequest);
axiosClient.interceptors.response.use(onResponse, onError);

export { axiosClient };

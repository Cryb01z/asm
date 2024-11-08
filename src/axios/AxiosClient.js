import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.caasm.tech/",
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
  if (response.status === 200) {
    return { data: response.data }; // Successful response
  } else {
    return Promise.reject({ err: "Unexpected status code", details: response });
  }
};

const onError = (error) => {
  if (error.response) {
    // Server responded with an error
    return Promise.reject({
      err: `Error: ${error.response.status}`,
      details: error.response.data,
    });
  } else if (error.request) {
    // No response was received
    return Promise.reject({ err: "Network error", details: error.request });
  } else {
    // Something else went wrong
    return Promise.reject({ err: `Error: ${error.message}` });
  }
};
axiosClient.interceptors.request.use(onRequest);
axiosClient.interceptors.response.use(onResponse, onError);

export { axiosClient };

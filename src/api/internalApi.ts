import axios from "axios";
import Cookies from "universal-cookie";

const defaultOptions = {
  baseURL: process.env.REACT_APP_BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
};

export const cookies = new Cookies();

const instance = axios.create(defaultOptions);

instance.interceptors.request.use((config) => {
  const newConfig = { ...config };

  const token = cookies.get("token");

  newConfig.headers.Authorization = token ? `bearer ${token}` : "";

  // this is a hack to bypass caching issue on ie11
  if (
    navigator.userAgent.indexOf("Trident/") > -1 &&
    newConfig.method === "get"
  ) {
    newConfig.params = { timestamp: new Date().getTime() };
  }
  return newConfig;
});

export default instance;

import axios from "axios";
import { BASE_URL } from "./constants";

//creating an axios instance
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

//interceptors are functions that run before or after a req/res to modify or process it respectively
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("token"); //access auth token from browser local storage
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken.trim()}`; //check accessToken exists, it adds the auth header to req
    }
    return config; //modified config is returned
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;

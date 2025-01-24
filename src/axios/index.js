import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "fand-h.vercel.app/api",
  withCredentials: true,
});

export default axiosInstance;

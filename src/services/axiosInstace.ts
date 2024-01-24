import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "",
});

axiosInstance.interceptors.request.use(config => {
  return config;
}, error => {
  return Promise.reject(error);
});

export default axiosInstance;
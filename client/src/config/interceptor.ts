import axios from 'axios';

let axiosInstance = axios.create({
  baseURL: process.env.BACKEND
});

export default axiosInstance;
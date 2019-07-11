import axios from 'axios';

let axiosInstance = axios.create({
  baseURL: 'https://metascrapper-backend.herokuapp.com/'
});

export default axiosInstance;
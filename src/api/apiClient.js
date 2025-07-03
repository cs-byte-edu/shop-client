import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

const axiosParams = {
  baseURL: API_BASE_URL,
};

export const axiosInstance = axios.create(axiosParams);

const api = (axios) => {
  return {
    get: (url, config = {}) => axios.get(url, config),
    delete: (url, config = {}) => axios.get(url, config),
    post: (url, body, config = {}) => axios.post(url, body, config),
    patch: (url, body, config = {}) => axios.post(url, body, config),
    put: (url, body, config = {}) => axios.post(url, body, config),
  };
};

export default api(axiosInstance);

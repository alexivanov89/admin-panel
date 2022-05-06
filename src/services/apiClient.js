import axios from 'axios';
import { API_KEY, API_URL, CLIENT_SECRET } from '../config';
import { store } from '../store';
import { setIsError, setStatusCode } from '../store/slices/errorSlice';

const token = btoa(`10d8c9d:${CLIENT_SECRET}`);

const axiosInstance = axios.create({
  baseURL: API_URL,
  responseType: 'json',
  headers: {
    'X-Api-Factory-Application-Id': API_KEY,
    'Access-Control-Allow-Credentials': true,
    Authorization: `Basic ${token}`,
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const { auth } = store.getState();
    const { accessToken } = auth;

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    store.dispatch(setIsError(true));
    store.dispatch(setStatusCode(error.response.status));
    throw new Error(error);
  },
);

export const apiClient = () => {
  return axiosInstance;
};

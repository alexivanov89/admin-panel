import axios from 'axios';
import { API_KEY, API_URL, CLIENT_SECRET } from '../config';

const token = btoa(`10d8c9d:${CLIENT_SECRET}`);

const axiosInstance = axios.create({
  baseURL: API_URL,
  responseType: 'json',
  headers: {
    'X-Api-Factory-Application-Id': API_KEY,
    'Access-Control-Allow-Credentials': true,
    Authorization: `Basic ${token}`,
  },
});

export const apiClient = () => {
  return axiosInstance;
};

import { apiClient } from './apiClient';

export const authService = {
  login: (body) => apiClient().post('/auth/login', body),
};

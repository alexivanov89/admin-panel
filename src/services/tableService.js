import { apiClient } from './apiClient';

export const tableService = {
  getCity: () => apiClient().get('/db/city'),
  getCityById: (dataId) => apiClient().get(`/db/city/${dataId}`),
  getPoint: (options = '') => apiClient().get(`/db/point${options}`),
  getPointById: (dataId) => apiClient().get(`/db/point/${dataId}`),
  getCar: (options = '') => apiClient().get(`/db/car${options}`),
  getCarById: (dataId) => apiClient().get(`/db/car/${dataId}`),
  getCategory: () => apiClient().get('/db/category'),
  getRate: (options = '') => apiClient().get(`/db/rate${options}`),
  getRateType: () => apiClient().get('/db/rateType'),
  postOrder: (body) => apiClient().post('/db/order/', body),
  getOrder: (options = '', param = {}) => apiClient().get(`/db/order${options}`, param),
  getOrderById: (orderId) => apiClient().get(`/db/order/${orderId}`),
  getOrderStatus: () => apiClient().get(`/db/orderStatus`),
};

import { BASE_URL } from '../constants/constants';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('refreshToken'),
  },
});

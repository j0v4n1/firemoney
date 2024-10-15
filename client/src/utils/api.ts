import { BASE_URL } from '../constants/constants';
import { UserData } from '../types/common.types';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('refreshToken'),
  },
});

const sendUserData = (userData: UserData) =>
  axiosInstance.post<UserData>('users/register', userData);

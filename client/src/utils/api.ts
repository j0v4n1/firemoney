import { BASE_URL } from '../constants/constants';
import {
  UserResponse,
  User,
  VerificationCodeResponse,
  Response,
  TokenResponse,
} from '../types/common.types';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  config.headers!.Authorization = localStorage.getItem('token');
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !error.config._isRetry) {
      originalRequest._isRetry = true;
      return axios
        .get<TokenResponse>('users/refresh', {
          baseURL: BASE_URL,
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        })
        .then((response) => {
          localStorage.setItem('token', response.data.accessToken);
          return axiosInstance.request(originalRequest);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return Promise.reject(error);
  }
);

export const sendUserData = (
  userData: Omit<User, 'id' | 'isActivatedEmail' | 'accessToken' | 'isActivatedNumber'>
) => axiosInstance.post<UserResponse>('users/register', userData);

export const getUserData = () => axiosInstance.get<UserResponse>('users/auth');

export const sendPhoneNumber = (number: string) =>
  axiosInstance.post<VerificationCodeResponse>('users/verification', { number });

export const sendVerificationCode = (verificationCode: number) =>
  axiosInstance.post<UserResponse>('users/verify', { verificationCode });

export const sendEmailForActivation = (email: string) =>
  axiosInstance.post<Response>('users/activation', { email });

export const logout = (id: string) => axiosInstance.post('users/logout', { id });

export const login = (number: string, password: string) =>
  axiosInstance.post<UserResponse>('users/login', { number, password });

export const resetPassword = (number: string) =>
  axiosInstance.post<VerificationCodeResponse>('users/reset', { number });

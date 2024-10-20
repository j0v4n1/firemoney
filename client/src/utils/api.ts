import { BASE_URL } from '../constants/constants';
import {
  UserDataResponse,
  UserData,
  VerificationCodeResponse,
  Response,
} from '../types/common.types';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('refreshToken'),
  },
});

export const sendUserData = (userData: UserData) =>
  axiosInstance.post<UserDataResponse>('users/register', userData);

export const sendPhoneNumber = (number: string) =>
  axiosInstance.post<VerificationCodeResponse>('users/verification', { number });

export const sendVerificationCode = (verificationCode: number) =>
  axiosInstance.post<Response>('users/verify', { verificationCode });

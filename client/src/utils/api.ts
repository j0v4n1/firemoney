import { BASE_URL } from '../constants/constants';
import { UserResponse, User, VerificationCodeResponse, Response } from '../types/common.types';
import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { setIsAuthorizedUser, setUser } from '../store/slices/user/user';
import React, { SetStateAction } from 'react';

const refreshToken = localStorage.getItem('refreshToken');

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const apiResponse = (
  dispatch: Dispatch,
  setLoading: React.Dispatch<SetStateAction<boolean>>
) => {
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        axios
          .get<UserResponse>('users/refresh', {
            baseURL: BASE_URL,
            headers: {
              'Content-Type': 'application/json',
              Authorization: refreshToken,
            },
          })
          .then((response) => {
            localStorage.setItem('refreshToken', response.data.refreshToken);
            dispatch(setUser(response.data.user));
            dispatch(setIsAuthorizedUser(true));
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
      }
      return Promise.reject(error);
    }
  );
};

export const sendUserData = (
  userData: Omit<User, 'id' | 'isActivatedEmail' | 'accessToken' | 'isActivatedNumber'>
) => axiosInstance.post<UserResponse>('users/register', userData);

export const getUserData = (token: string) =>
  axiosInstance.get<UserResponse>('users/auth', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });

export const sendPhoneNumber = (number: string) =>
  axiosInstance.post<VerificationCodeResponse>('users/verification', { number });

export const sendVerificationCode = (verificationCode: number) =>
  axiosInstance.post<UserResponse>('users/verify', { verificationCode });

export const sendEmailForActivation = (email: string) =>
  axiosInstance.post<Response>('users/activation', { email });

export const logout = (id: string) => axiosInstance.post('users/logout', { id });

export const login = (number: string, password: string) =>
  axiosInstance.post<UserResponse>('users/login', { number, password });

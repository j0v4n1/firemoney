import { Dispatch } from '@reduxjs/toolkit';
import { ModalTypes } from '../components/modal/modal.types';
import {
  setIsConflict,
  setIsSendingRequest,
  setNumber,
  setType,
  setIsResendCodeVisible,
} from '../store/slices/modal/modal';
import { sendPhoneNumber } from './api';

export const sendNumber = (number: string, dispatch: Dispatch, isCodeVisible: boolean) => {
  sendPhoneNumber(number)
    .then((data) => {
      dispatch(setIsSendingRequest(false));
      dispatch(setType(ModalTypes.VERIFY));
      dispatch(setNumber(''));
      console.log(data.data.verificationCode);
      if (isCodeVisible) {
        return;
      }
      setTimeout(() => {
        dispatch(setIsResendCodeVisible(true));
      }, 10000);
    })
    .catch((error) => {
      dispatch(setIsSendingRequest(false));
      if (error.status === 409) {
        dispatch(setIsSendingRequest(false));
        return dispatch(setIsConflict(true));
      }
    });
};

export const toggleLockScroll = (scrollState: 'lock' | 'unlock') => {
  const widthWithScrollbar = window.innerWidth;
  const widthWithoutScrollbar = document.documentElement.clientWidth;
  const scrollBarWidth = widthWithScrollbar - widthWithoutScrollbar;
  if (scrollState === 'lock') {
    document.body.style.paddingRight = `${scrollBarWidth}px`;
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.paddingRight = '0';
    document.body.style.overflow = '';
  }
};

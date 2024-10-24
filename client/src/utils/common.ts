import { Dispatch } from '@reduxjs/toolkit';
import { ModalTypes } from '../components/modal/modal.types';
import {
  setIsConflict,
  setIsDataSending,
  setNumber,
  setType,
  setIsResendCodeVisible,
} from '../store/slices/modal/modal';
import { sendPhoneNumber } from './api';

export const sendNumber = (number: string, dispatch: Dispatch, isCodeVisible: boolean) => {
  sendPhoneNumber(number)
    .then((data) => {
      if (data.data.status === 'failure') {
        dispatch(setIsDataSending(false));
        return dispatch(setIsConflict(true));
      }
      dispatch(setIsDataSending(false));
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
      dispatch(setIsDataSending(false));
      console.log(error);
    });
};

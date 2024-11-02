import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalState } from './modal.types';
import { ModalTypes } from '../../../components/modal/modal.types';

const initialState: ModalState = {
  isOpened: false,
  type: ModalTypes.LOGIN,
  name: '',
  lastName: '',
  number: '',
  verificationCode: null,
  email: '',
  password: '',
  repeatPassword: '',
  isSendingRequest: false,
  isConflict: false,
  isResendCodeButtonVisible: false,
  isButtonDisabled: false,
  timesResendCode: 0,
};

const modal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state) {
      state.isOpened = true;
    },
    closeModal(state) {
      state.isOpened = false;
    },
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setLastName(state, action: PayloadAction<string>) {
      state.lastName = action.payload;
    },
    setNumber(state, action: PayloadAction<string>) {
      let value = action.payload;
      value = value.replace(/[^0-9]/g, '');
      if (!value.startsWith('7')) {
        value = '7' + value;
      }
      state.number = '+' + value;
    },
    setVerificationCode(state, action: PayloadAction<number | null>) {
      if (action.payload === null) {
        state.verificationCode = null;
      } else {
        state.verificationCode = +action.payload;
      }
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
    setRepeatPassword(state, action: PayloadAction<string>) {
      state.repeatPassword = action.payload;
    },
    setIsSendingRequest(state, action: PayloadAction<boolean>) {
      state.isSendingRequest = action.payload;
    },
    setIsConflict(state, action: PayloadAction<boolean>) {
      state.isConflict = action.payload;
    },
    setType(state, action: PayloadAction<ModalTypes>) {
      state.type = action.payload;
    },
    setIsResendCodeVisible(state, action: PayloadAction<boolean>) {
      state.isResendCodeButtonVisible = action.payload;
    },
    setIsButtonDisabled(state, action: PayloadAction<boolean>) {
      state.isButtonDisabled = action.payload;
    },
    setTimesResendCode(state, action: PayloadAction<number>) {
      state.timesResendCode = action.payload;
    },
  },
});

export const {
  openModal,
  closeModal,
  setEmail,
  setIsConflict,
  setIsSendingRequest,
  setLastName,
  setName,
  setNumber,
  setPassword,
  setRepeatPassword,
  setVerificationCode,
  setType,
  setIsResendCodeVisible,
  setIsButtonDisabled,

  setTimesResendCode,
} = modal.actions;
export default modal.reducer;

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
  isDataSending: false,
  isConflict: false,
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
    setName(state, action: PayloadAction<React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string>) {
      if (typeof action.payload === 'string') {
        state.name = action.payload;
      } else {
        state.name = action.payload.target.value;
      }
    },
    setLastName(state, action: PayloadAction<React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string>) {
      if (typeof action.payload === 'string') {
        state.lastName = action.payload;
      } else {
        state.lastName = action.payload.target.value;
      }
    },
    setNumber(state, action: PayloadAction<React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string>) {
      if (typeof action.payload === 'string') {
        state.lastName = action.payload;
      } else {
        let value = action.payload.target.value;
        value = value.replace(/[^0-9]/g, '');
        if (!value.startsWith('7')) {
          value = '7' + value;
        }
        state.number = '+' + value;
      }
    },
    setVerificationCode(
      state,
      action: PayloadAction<React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | null>
    ) {
      if (action.payload === null) {
        state.verificationCode = null;
      } else {
        state.verificationCode = +action.payload.target.value;
      }
    },
    setEmail(state, action: PayloadAction<React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string>) {
      if (typeof action.payload === 'string') {
        state.email = action.payload;
      } else {
        state.email = action.payload.target.value;
      }
    },
    setPassword(state, action: PayloadAction<React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string>) {
      if (typeof action.payload === 'string') {
        state.password = action.payload;
      } else {
        state.password = action.payload.target.value;
      }
    },
    setRepeatPassword(
      state,
      action: PayloadAction<React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string>
    ) {
      if (typeof action.payload === 'string') {
        state.repeatPassword = action.payload;
      } else {
        state.repeatPassword = action.payload.target.value;
      }
    },
    setIsDataSending(state, action: PayloadAction<boolean>) {
      state.isDataSending = action.payload;
    },
    setIsConflict(state, action: PayloadAction<boolean>) {
      state.isConflict = action.payload;
    },
    setType(state, action: PayloadAction<ModalTypes>) {
      state.type = action.payload;
    },
  },
});

export const {
  openModal,
  closeModal,
  setEmail,
  setIsConflict,
  setIsDataSending,
  setLastName,
  setName,
  setNumber,
  setPassword,
  setRepeatPassword,
  setVerificationCode,
  setType,
} = modal.actions;
export default modal.reducer;

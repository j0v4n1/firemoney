import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../../types/common.types';

const initialState = {
  id: '',
  name: '',
  lastName: '',
  email: '',
  number: '',
  isActivatedNumber: false,
  isActivatedEmail: false,
  isAuthorizedUser: false,
  accessToken: '',
  isLoggingOut: false,
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Omit<User, 'password'>>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.number = action.payload.number;
      state.isActivatedNumber = action.payload.isActivatedNumber;
      state.isActivatedEmail = action.payload.isActivatedEmail;
      state.accessToken = action.payload.accessToken;
    },
    clearUser: (state) => {
      state.id = '';
      state.name = '';
      state.lastName = '';
      state.email = '';
      state.number = '';
      state.isActivatedNumber = false;
      state.isActivatedEmail = false;
      state.accessToken = '';
    },
    setTempNumber: (state, action: PayloadAction<string>) => {
      state.number = action.payload;
    },
    setIsAuthorizedUser: (state, action: PayloadAction<boolean>) => {
      state.isAuthorizedUser = action.payload;
    },
    setIsLoggingOut: (state, action: PayloadAction<boolean>) => {
      state.isLoggingOut = action.payload;
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
  },
});

export const {
  setUser,
  setTempNumber,
  setIsAuthorizedUser,
  setIsLoggingOut,
  clearUser,
  setAccessToken,
} = user.actions;
export default user.reducer;

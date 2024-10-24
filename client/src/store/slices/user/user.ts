import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../../types/common.types';

const initialState = {
  _id: '',
  name: '',
  lastName: '',
  email: '',
  number: '',
  isActivatedNumber: false,
  isActivatedEmail: false,
  accessToken: '',
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Omit<User, 'password'>>) => {
      state._id = action.payload._id;
      state.name = action.payload.name;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.number = action.payload.number;
      state.isActivatedNumber = action.payload.isActivatedNumber;
      state.isActivatedEmail = action.payload.isActivatedEmail;
      state.accessToken = action.payload.accessToken;
    },
    setTempNumber: (state, action: PayloadAction<string>) => {
      state.number = action.payload;
    },
  },
});

export const { setUser, setTempNumber } = user.actions;
export default user.reducer;

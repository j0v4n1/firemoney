import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalState } from './modal.types';

const initialState: ModalState = {
  isOpened: false,
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
  },
});

export const { openModal, closeModal } = modal.actions;
export default modal.reducer;

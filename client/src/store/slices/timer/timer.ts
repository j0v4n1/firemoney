import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  seconds: 10,
  isTimerRunning: false,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setSeconds: (state, action: PayloadAction<number>) => {
      state.seconds = action.payload;
    },
    setIsTimerRunning: (state, action: PayloadAction<boolean>) => {
      state.isTimerRunning = action.payload;
    },
  },
});

export const { setSeconds, setIsTimerRunning } = timerSlice.actions;
export default timerSlice.reducer;

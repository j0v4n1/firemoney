import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CalculatorState } from './calculator.types';

const initialState: CalculatorState = {
  loan: 1000,
  term: 3,
  percent: 0,
  totalPriceWithPercent: 0,
};

const calculator = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setLoan(state, action: PayloadAction<number | number[]>) {
      state.loan = action.payload;
    },
    setTerm(state, action: PayloadAction<number | number[]>) {
      state.term = action.payload;
    },
    setPercent(state, action: PayloadAction<number>) {
      state.percent = action.payload;
    },
    setTotalPriceWithPercent(state, action: PayloadAction<number>) {
      state.totalPriceWithPercent = action.payload;
    },
  },
});

export const { setLoan, setTerm, setPercent, setTotalPriceWithPercent } = calculator.actions;
export default calculator.reducer;

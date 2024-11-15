import { combineReducers } from '@reduxjs/toolkit';
import modal from './slices/modal/modal';
import user from './slices/user/user';
import timer from './slices/timer/timer';
import calculator from './slices/calculator/calculator';
const rootReducer = combineReducers({ modal, user, timer, calculator });

export default rootReducer;

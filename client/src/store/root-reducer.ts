import { combineReducers } from '@reduxjs/toolkit';
import modal from './slices/modal/modal';
const rootReducer = combineReducers({ modal });

export default rootReducer;

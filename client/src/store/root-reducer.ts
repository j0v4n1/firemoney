import { combineReducers } from '@reduxjs/toolkit';
import modal from './slices/modal/modal';
import user from './slices/user/user';
import timer from './slices/timer/timer';
const rootReducer = combineReducers({ modal, user, timer });

export default rootReducer;

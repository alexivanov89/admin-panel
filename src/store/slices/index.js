import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import { tableReducer } from './tableSlice';

export const rootReducer = combineReducers({
  auth: authReducer,
  table: tableReducer,
});

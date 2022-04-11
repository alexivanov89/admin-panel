import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import { errorReducer } from './errorSlice';
import { tableReducer } from './tableSlice';

export const rootReducer = combineReducers({
  auth: authReducer,
  table: tableReducer,
  error: errorReducer,
});

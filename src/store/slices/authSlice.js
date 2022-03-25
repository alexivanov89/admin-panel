import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  login: {
    username: null,
    password: null,
  },
  isLoading: false,
  isError: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
});

export const { setIsAuth } = authSlice.actions;

export const authReducer = authSlice.reducer;

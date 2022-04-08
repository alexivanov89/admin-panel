import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isError: false,
  message: '',
  statusCode: null,
};

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setIsError: (state, action) => {
      state.isError = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setStatusCode: (state, action) => {
      state.statusCode = action.payload;
    },
  },
});

export const { setIsError, setMessage, setStatusCode } = errorSlice.actions;

export const errorReducer = errorSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  percent: 0,
};

const percentFillFieldsSlice = createSlice({
  name: 'percentFillFields',
  initialState,
  reducers: {
    setPercent: (state, action) => {
      state.percent = action.payload;
    },
  },
});

export const { setPercent } = percentFillFieldsSlice.actions;

export const percentFillFieldsReducer = percentFillFieldsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { authService } from '../../services/authService';

const initialState = {
  isAuth: false,
  user: {
    username: null,
    password: null,
  },
  isLoading: false,
  errorAuth: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
      state.isLoading = false;
      state.errorAuth = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.errorAuth = null;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
      state.errorAuth = null;
    },
    setErrorAuth: (state, action) => {
      state.errorAuth = action.payload;
      state.isLoading = false;
    },
  },
});

export const login = (values) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));

    const response = await authService.login(values);
    dispatch(setIsAuth(true));
    dispatch(setUser(values));
  } catch (e) {
    dispatch(setErrorAuth('Некорректный логин или пароль'));
  }
};

export const { setIsAuth, setUser, setIsLoading, setErrorAuth } = authSlice.actions;

export const authReducer = authSlice.reducer;

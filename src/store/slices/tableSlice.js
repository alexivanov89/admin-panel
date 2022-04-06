import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { tableService } from '../../services/tableService';

const initialState = {
  city: {
    cities: [],
    loading: false,
    error: false,
  },
  point: {
    points: [],
    loading: false,
    error: false,
  },
  car: {
    cars: [],
    loading: false,
    error: false,
  },
  category: {
    categories: [],
    categoryActiveId: null,
    loading: false,
    error: false,
  },
  rate: {
    rates: [],
    loading: false,
    error: false,
  },
  order: {
    orders: [],
    loading: false,
    error: false,
  },
};

export const fetchCityAsync = createAsyncThunk('table/fetchCity', async () => {
  const response = await tableService.getCity();
  return response.data.data;
});

export const fetchPointAsync = createAsyncThunk('table/fetchPoint', async () => {
  const response = await tableService.getPoint();
  return response.data.data;
});

export const fetchCarAsync = createAsyncThunk('table/fetchCar', async (options, thunkAPI) => {
  const response = await tableService.getCar(options);
  return response.data.data;
});

export const fetchCategoryAsync = createAsyncThunk('table/fetchCategory', async () => {
  const response = await tableService.getCategory();
  return response.data.data;
});

export const fetchRateAsync = createAsyncThunk('table/fetchRate', async () => {
  const response = await tableService.getRate();
  return response.data.data;
});

export const fetchOrdersAsync = createAsyncThunk('table/fetchOrders', async (options, thunkAPI) => {
  const { auth } = thunkAPI.getState();
  const { accessToken } = auth;

  const response = await tableService.getOrder(options, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  return response.data.data;
});

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setCategoryActiveId: (state, action) => {
      state.category.categoryActiveId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCityAsync.pending, (state) => {
        state.city.loading = true;
        state.city.error = false;
      })
      .addCase(fetchCityAsync.fulfilled, (state, action) => {
        state.city.loading = false;
        state.city.error = false;
        state.city.cities = action.payload;
      })
      .addCase(fetchCityAsync.rejected, (state, action) => {
        state.city.error = action.error;
        state.city.loading = false;
      })
      .addCase(fetchPointAsync.pending, (state) => {
        state.point.loading = true;
        state.point.error = false;
      })
      .addCase(fetchPointAsync.fulfilled, (state, action) => {
        state.point.loading = false;
        state.point.error = false;
        state.point.points = action.payload;
      })
      .addCase(fetchPointAsync.rejected, (state, action) => {
        state.point.error = action.error;
        state.point.loading = false;
      })
      .addCase(fetchCarAsync.pending, (state) => {
        state.car.loading = true;
        state.car.error = false;
      })
      .addCase(fetchCarAsync.fulfilled, (state, action) => {
        state.car.loading = false;
        state.car.error = false;
        state.car.cars = action.payload;
      })
      .addCase(fetchCarAsync.rejected, (state, action) => {
        state.car.error = action.error;
        state.car.loading = false;
      })
      .addCase(fetchCategoryAsync.pending, (state) => {
        state.category.loading = true;
        state.category.error = false;
      })
      .addCase(fetchCategoryAsync.fulfilled, (state, action) => {
        state.category.loading = false;
        state.category.error = false;
        state.category.categories = action.payload;
      })
      .addCase(fetchCategoryAsync.rejected, (state, action) => {
        state.category.error = action.error;
        state.category.loading = false;
      })
      .addCase(fetchRateAsync.pending, (state) => {
        state.rate.loading = true;
        state.rate.error = false;
      })
      .addCase(fetchRateAsync.fulfilled, (state, action) => {
        state.rate.loading = false;
        state.rate.error = false;
        state.rate.rates = action.payload;
      })
      .addCase(fetchRateAsync.rejected, (state, action) => {
        state.rate.error = action.error;
        state.rate.loading = false;
      })
      .addCase(fetchOrdersAsync.pending, (state) => {
        state.order.loading = true;
        state.order.error = false;
      })
      .addCase(fetchOrdersAsync.fulfilled, (state, action) => {
        state.order.loading = false;
        state.order.error = false;
        state.order.orders = action.payload;
      })
      .addCase(fetchOrdersAsync.rejected, (state, action) => {
        state.order.error = action.error;
        state.order.loading = false;
      });
  },
});

export const { setCategoryActiveId } = tableSlice.actions;

export const tableReducer = tableSlice.reducer;

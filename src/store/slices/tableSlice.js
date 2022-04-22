import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { tableService } from '../../services/tableService';
import { setIsError, setStatusCode } from './errorSlice';

const initialState = {
  city: {
    cities: [],
    loading: false,
    fields: [],
    count: 0,
    error: false,
  },
  point: {
    points: [],
    fields: [],
    count: 0,
    loading: false,
    error: false,
  },
  car: {
    cars: [],
    fields: [],
    count: 0,
    loading: false,
    error: false,
  },
  category: {
    categories: [],
    categoryActiveId: null,
    fields: [],
    count: 0,
    loading: false,
    error: false,
  },
  rate: {
    rates: [],
    fields: [],
    count: 0,
    loading: false,
    error: false,
  },
  rateType: {
    rateTypes: [],
    fields: [],
    count: 0,
    loading: false,
    error: false,
  },
  order: {
    orders: [],
    loading: false,
    error: false,
  },
  orderStatus: {
    values: [],
    fields: [],
    count: 0,
    loading: false,
    error: false,
  },
};

export const fetchCityAsync = createAsyncThunk('table/fetchCity', async () => {
  const response = await tableService.getCity();
  return response.data;
});

export const fetchPointAsync = createAsyncThunk('table/fetchPoint', async (options) => {
  const response = await tableService.getPoint(options);
  return response.data;
});

export const fetchCarAsync = createAsyncThunk('table/fetchCar', async (options) => {
  const response = await tableService.getCar(options);
  return response.data;
});

export const fetchCategoryAsync = createAsyncThunk('table/fetchCategory', async () => {
  const response = await tableService.getCategory();
  return response.data;
});

export const fetchRateAsync = createAsyncThunk('table/fetchRate', async (options) => {
  const response = await tableService.getRate(options);
  return response.data;
});

export const fetchRateTypeAsync = createAsyncThunk('table/fetchRateType', async () => {
  const response = await tableService.getRateType();
  return response.data;
});

export const fetchOrdersAsync = createAsyncThunk('table/fetchOrders', async (options, thunkAPI) => {
  try {
    const response = await tableService.getOrder(options);
    return response.data.data;
  } catch (error) {
    thunkAPI.dispatch(setIsError(true));
    thunkAPI.dispatch(setStatusCode(error.response.status));
  }
});

export const fetchOrderStatusAsync = createAsyncThunk('table/fetchOrderStatus', async () => {
  const response = await tableService.getOrderStatus();
  return response.data;
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
        state.city.cities = action.payload?.data;
        state.city.fields = Object.keys(action.payload?.fields);
        state.city.count = action.payload?.count;
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
        state.point.points = action.payload?.data;
        state.point.fields = Object.keys(action.payload?.fields);
        state.point.count = action.payload?.count;
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
        state.car.cars = action.payload?.data;
        state.car.fields = Object.keys(action.payload?.fields);
        state.car.count = action.payload?.count;
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
        state.category.categories = action.payload?.data;
        state.category.fields = Object.keys(action.payload?.fields);
        state.category.count = action.payload?.count;
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
        state.rate.rates = action.payload?.data;
        state.rate.fields = Object.keys(action.payload?.fields);
        state.rate.count = action.payload?.count;
      })
      .addCase(fetchRateAsync.rejected, (state, action) => {
        state.rate.error = action.error;
        state.rate.loading = false;
      })
      .addCase(fetchRateTypeAsync.pending, (state) => {
        state.rateType.loading = true;
        state.rateType.error = false;
      })
      .addCase(fetchRateTypeAsync.fulfilled, (state, action) => {
        state.rateType.loading = false;
        state.rateType.error = false;
        state.rateType.rateTypes = action.payload?.data;
        state.rateType.fields = Object.keys(action.payload?.fields);
        state.rateType.count = action.payload?.count;
      })
      .addCase(fetchRateTypeAsync.rejected, (state, action) => {
        state.rateType.error = action.error;
        state.rateType.loading = false;
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
      })
      .addCase(fetchOrderStatusAsync.pending, (state) => {
        state.orderStatus.loading = true;
        state.orderStatus.error = false;
      })
      .addCase(fetchOrderStatusAsync.fulfilled, (state, action) => {
        state.orderStatus.loading = false;
        state.orderStatus.error = false;
        state.orderStatus.values = action.payload?.data;
        state.orderStatus.fields = Object.keys(action.payload?.fields);
        state.orderStatus.count = action.payload?.count;
      })
      .addCase(fetchOrderStatusAsync.rejected, (state, action) => {
        state.orderStatus.error = action.error;
        state.orderStatus.loading = false;
      });
  },
});

export const { setCategoryActiveId } = tableSlice.actions;

export const tableReducer = tableSlice.reducer;

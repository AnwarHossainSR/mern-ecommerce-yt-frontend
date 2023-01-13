import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: '',
  order: {},
  message: '',
  payment: {},
};

export const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    orderPending: (state) => {
      state.isLoading = true;
    },
    orderSuccess: (state, { payload }) => {
      state.error = '';
      state.isLoading = false;
      state.order = payload;
    },
    orderFailure: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
      state.order = {};
    },
    orderClear: (state) => {
      state.isLoading = false;
      state.order = {};
      state.error = '';
    },
    orderMessage: (state, { payload }) => {
      state.isLoading = false;
      state.message = payload;
    },
    paymentSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.payment = payload;
    },
  },
});

const { reducer, actions } = orderSlice;
export const {
  orderPending,
  orderSuccess,
  orderFailure,
  orderClear,
  orderMessage,
  paymentSuccess,
} = actions;

export default reducer;

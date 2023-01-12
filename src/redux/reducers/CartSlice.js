import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: '',
  cartProducts: [],
  cartProduct: {},
  shippingInfo: {},
};

export const cartSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    cartPending: (state) => {
      state.isLoading = true;
    },
    cartSuccess: (state, { payload }) => {
      state.error = '';
      state.isLoading = false;
      state.cartProducts = payload;
    },
    cartFailure: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
      state.cartProducts = [];
    },
    clearCart: (state) => {
      state.isLoading = false;
      state.cartProducts = [];
      state.error = '';
    },
    shippingSUccess: (state, { payload }) => {
      state.shippingInfo = payload;
    },
  },
});

const { reducer, actions } = cartSlice;
export const { cartPending, cartSuccess, cartFailure, clearCart } = actions;

export default reducer;

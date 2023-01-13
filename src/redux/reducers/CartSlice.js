import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: '',
  cartProducts: [],
  cartDetails: [],
  shippingInfo: {},
  errors: {},
  extraInfo: {},
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
    shippingSuccess: (state, { payload }) => {
      state.shippingInfo = payload;
      state.errors = payload;
    },
    extraInfoSUccess: (state, { payload }) => {
      state.extraInfo = payload;
    },
    cartProductDetails: (state, { payload }) => {
      state.cartDetails = payload;
    },
  },
});

const { reducer, actions } = cartSlice;
export const {
  cartPending,
  cartSuccess,
  cartFailure,
  clearCart,
  shippingSuccess,
  extraInfoSUccess,
  cartProductDetails,
} = actions;

export default reducer;

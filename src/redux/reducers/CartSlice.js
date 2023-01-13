import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading : false,
  error : '',
  cartProducts : [],
  cartProduct : {},
  shippingInfo : {},
  errors : {},
  extraInfo : {},
};

export const cartSlice = createSlice({
  name : 'carts',
  initialState,
  reducers : {
    cartPending : (state) => { state.isLoading = true;},
    cartSuccess : (state, {payload}) => {
      state.error = '';
      state.isLoading = false;
      state.cartProducts = payload;
    },
    cartFailure : (state, {payload}) => {
      state.error = payload;
      state.isLoading = false;
      state.cartProducts = [];
    },
    clearCart : (state) => {
      state.isLoading = false;
      state.cartProducts = [];
      state.error = '';
    },
    shippingSuccess : (state, {payload}) => {
      state.shippingInfo = payload;
      state.errors = payload;
    },
    extraInfoSUccess : (state, {payload}) => { state.extraInfo = payload;},
  },
});

const {reducer, actions} = cartSlice;
export const {
  cartPending,
  cartSuccess,
  cartFailure,
  clearCart,
  shippingSuccess,
  extraInfoSUccess
} = actions;

export default reducer;

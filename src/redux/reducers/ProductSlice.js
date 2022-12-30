import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: '',
  products: [],
  product: {},
  isAuth: false,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    productPending: (state) => {
      state.isLoading = true;
    },
    productSuccess: (state, { payload }) => {
      state.error = '';
      state.isLoading = false;
      state.products = payload;
    },
    productFailure: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
      state.products = [];
    },
    clearProduct: (state) => {
      state.isLoading = false;
      state.products = [];
      state.error = '';
    },
  },
});

const { reducer, actions } = productSlice;
export const { productPending, productSuccess, productFailure, clearProduct } =
  actions;

export default reducer;

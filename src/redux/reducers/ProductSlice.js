import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: '',
  productsInfo: [],
  product: {},
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
      state.productsInfo = payload;
    },
    productFailure: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
      state.productsInfo = [];
    },
    clearProduct: (state) => {
      state.isLoading = false;
      state.productsInfo = [];
      state.error = '';
    },
  },
});

const { reducer, actions } = productSlice;
export const { productPending, productSuccess, productFailure, clearProduct } =
  actions;

export default reducer;

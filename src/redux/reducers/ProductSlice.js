import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading : false,
  error : '',
  productsInfo : [],
  product : {},
  message : '',
  dashboard : {},
};

export const productSlice = createSlice({
  name : 'products',
  initialState,
  reducers : {
    productPending : (state) => { state.isLoading = true;},
    productSuccess : (state, {payload}) => {
      state.error = '';
      state.isLoading = false;
      state.productsInfo = payload;
    },
    productFailure : (state, {payload}) => {
      state.error = payload;
      state.isLoading = false;
      state.productsInfo = [];
    },
    clearProduct : (state) => {
      state.isLoading = false;
      state.productsInfo = [];
      state.error = '';
    },
    messageProduct : (state, {payload}) => {
      state.isLoading = false;
      state.message = payload;
    },
    dashboardData : (state, {payload}) => {
      state.isLoading = false;
      state.dashboard = payload;
    },
  },
});

const {reducer, actions} = productSlice;
export const {
  messageProduct,
  productPending,
  productSuccess,
  productFailure,
  clearProduct,
  dashboardData,
} = actions;

export default reducer;

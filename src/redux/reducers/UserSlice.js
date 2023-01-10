import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading : false,
  error : '',
  user : {},
  isAuth : false,
  message : '',
};

export const userSlice = createSlice({
  name : 'users',
  initialState,
  reducers : {
    userPending : (state) => { state.isLoading = true;},
    userSuccess : (state, {payload}) => {
      state.error = '';
      state.isLoading = false;
      state.user = payload;
      state.isAuth = true;
    },
    userFailure : (state, {payload}) => {
      state.error = payload;
      state.isLoading = false;
      state.user = {};
      state.isAuth = false;
    },
    clearUser : (state) => {
      state.isLoading = false;
      state.user = {};
      state.error = '';
      state.isAuth = false;
    },
    forgotPassword : (state, {payload}) => {
      state.message = payload;
      state.isLoading = false;
      state.error = '';
    },
  },
});

const {reducer, actions} = userSlice;
export const {
  userPending,
  userSuccess,
  userFailure,
  clearUser,
  forgotPassword,
} = actions;

export default reducer;

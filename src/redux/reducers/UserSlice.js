import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: '',
  user: {},
  isAuth: false,
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userPending: (state) => {
      state.isLoading = true;
    },
    userSuccess: (state, { payload }) => {
      state.error = '';
      state.isLoading = false;
      state.user = payload;
      state.isAuth = false;
    },
    userFailure: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
      state.user = {};
      state.isAuth = true;
    },
    clearUser: (state) => {
      state.isLoading = false;
      state.user = {};
      state.error = '';
      state.isAuth = false;
    },
  },
});

const { reducer, actions } = userSlice;
export const { userPending, userSuccess, userFailure, clearUser } = actions;

export default reducer;

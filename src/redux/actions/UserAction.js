import axios from 'axios';
import { getApi, postApi, putApi } from '../../API/CallAPI';
import { notify } from '../../utils/helper';
import {
  clearUser,
  forgotPassword,
  userFailure,
  userPending,
  userSuccess,
} from '../reducers/UserSlice';

export const getAuthAction = (credentials) => async (dispatch) => {
  dispatch(userPending());
  try {
    const response = await postApi('/login', credentials);
    if (response.success === true) {
      localStorage.setItem('token', response.token);
      dispatch(userSuccess(response.user));
    }
  } catch (error) {
    dispatch(userFailure(error.response.data.message));
  }
};

export const getAuthLogout = () => async (dispatch) => {
  try {
    const response = await getApi('/logout');
    console.log('response', response);
    if (response.success === true) {
      localStorage.removeItem('token');
      dispatch(clearUser());
    }
  } catch (error) {
    console.log('error', error);
    dispatch(userFailure(error.response.data.message));
  }
};

//getAUthenticatedUser
export const getAuthUser = () => async (dispatch) => {
  dispatch(userPending());
  try {
    const response = await getApi('/me');
    if (response.success === true) {
      dispatch(userSuccess(response.user));
    }
  } catch (error) {
    dispatch(userFailure(error.response.data.message));
  }
};

// register
export const registerUserAction = (credentials) => async (dispatch) => {
  dispatch(userPending());
  try {
    const response = await axios.post('/register', credentials, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (response.status === 201) {
      localStorage.setItem('token', response.data.token);
      dispatch(userSuccess(response.data.user));
      notify('register success', 'success');
    }
  } catch (error) {
    console.log(error.response.data);
    dispatch(userFailure(error.response.data.message));
  }
};

export const getForgotPasswordAction = (email) => async (dispatch) => {
  dispatch(userPending());
  try {
    const response = await axios.post('/password/forgot', email);
    console.log(response);
    if (response.data.success === true) {
      dispatch(forgotPassword(response.data.message));
      notify(response.data.message, 'success');
    }
  } catch (error) {
    dispatch(userFailure(error.response.data.message));
  }
};

export const resetPasswordAction = (credentials, token) => async (dispatch) => {
  dispatch(userPending());
  try {
    const response = await putApi(`/password/reset/${token}`, credentials);
    if (response.success === true) {
      localStorage.setItem('token', response.token);
      dispatch(userSuccess(response.user));
      notify('password reset!', 'success');
    }
  } catch (error) {
    console.log(error.response);
    dispatch(userFailure(error.response.data.message));
  }
};

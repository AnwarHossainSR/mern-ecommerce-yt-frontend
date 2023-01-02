import { getApi, postApi } from '../../API/CallAPI';
import {
  clearUser,
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

export const getAuthLogout = () => (dispatch) => {
  try {
    const response = getApi('/logout');
    if (response.success === true) {
      localStorage.removeItem('token');
      dispatch(clearUser());
    }
  } catch (error) {
    console.log('error', error);
    dispatch(userFailure(error.response.data.message));
  }
};

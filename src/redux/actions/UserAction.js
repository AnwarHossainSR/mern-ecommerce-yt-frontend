import {getApi, postApi} from '../../API/CallAPI';
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

// getAUthenticatedUser
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
}
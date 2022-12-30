import { userFailure, userPending } from '../reducers/UserSlice';

export const getAuthUserAction = () => async (dispatch) => {
  dispatch(userPending());
  try {
    //TODO: Auth user
  } catch (error) {
    dispatch(userFailure());
  }
};

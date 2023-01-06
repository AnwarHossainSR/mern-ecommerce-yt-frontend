import { productPending } from '../reducers/ProductSlice';

export const getAuthenticatedUserCartProducts = () => async (dispatch) => {
  dispatch(productPending());
  try {
    //
  } catch (error) {
    //
  }
};

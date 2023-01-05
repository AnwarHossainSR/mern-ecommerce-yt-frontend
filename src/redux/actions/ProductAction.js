import {getApi} from '../../API/CallAPI';
import {
  productFailure,
  productPending,
  productSuccess,
} from '../reducers/ProductSlice';

export const getAllProducts = () => async (dispatch) => {
  dispatch(productPending());
  try {
    const response = await getApi('/products');
    if (response.success === true) {
      dispatch(productSuccess(response.products));
    } else {
      dispatch(productFailure(response.message));
    }
  } catch (error) {
    dispatch(productFailure(error.message));
  }
};

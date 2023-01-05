import { getApi } from '../../API/CallAPI';
import {
  productFailure,
  productPending,
  productSuccess,
} from '../reducers/ProductSlice';

export const getAllProducts = (params) => async (dispatch) => {
  dispatch(productPending());
  try {
    if (!params) params = '';
    const response = await getApi(`/products?keyword=${params}`);
    console.log(response);
    if (response.success === true) {
      dispatch(productSuccess(response.products));
    } else {
      dispatch(productFailure(response.message));
    }
  } catch (error) {
    dispatch(productFailure(error.message));
  }
};

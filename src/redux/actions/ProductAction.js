import { getApi } from '../../API/CallAPI';
import { productFailure, productPending } from '../reducers/ProductSlice';

export const getAllProducts = () => async (dispatch) => {
    console.log('getAllProducts');
  dispatch(productPending());
  try {
    const res = await getApi('/products');
    console.log(res);
    //dispatch(productSuccess(data));
  } catch (error) {
    dispatch(productFailure(error.message));
  }
};

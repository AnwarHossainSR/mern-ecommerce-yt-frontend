import { deleteApi, getApi } from '../../API/CallAPI';
import { notify } from '../../utils/helper';
import {
  messageProduct,
  productFailure,
  productPending,
  productSuccess,
} from '../reducers/ProductSlice';

export const getAllProducts = (params) => async (dispatch) => {
  dispatch(productPending());
  try {
    if (!params) params = '';
    const response = await getApi(`/products${params}`);
    if (response.success === true) {
      dispatch(productSuccess(response.products));
    } else {
      dispatch(productFailure(response.message));
    }
  } catch (error) {
    dispatch(productFailure(error.message));
  }
};

export const deleteProductAction = (params) => async (dispatch) => {
  dispatch(productPending());
  try {
    const response = await deleteApi(`/admin/product/${params}`);
    console.log('response', response);
    if (response.success === true) {
      dispatch(messageProduct(response.message));
      dispatch(getAllProducts());
      notify(response.message, 'success');
    }
  } catch (error) {
    console.log('error', error);
    dispatch(productFailure(error.message));
    notify(error.message, 'error');
  }
};

import {postApi} from '../../API/CallAPI';
import {notify} from '../../utils/helper';
import {
  orderFailure,
  orderPending,
  orderSuccess,
  paymentSuccess,
} from '../reducers/OrderSlice';

export const createOrderAction = (order) => async (dispatch) => {
  try {
    dispatch(orderPending());
    const res = await postApi('/order/new', order);
    if (res.success === true) {
      dispatch(orderSuccess(res.order));
      notify('Order has been placed successfully', 'success');
    }
  } catch (error) {
    console.log('error', error.response);
    dispatch(orderFailure(error.response.data.message));
  }
};

export const createCheckoutSession = (orderId) => async (dispatch) => {
  try {
    console.log(orderId);
    const res = await postApi('/payment/checkout', {orderId});
    if (res.success === true) {
      dispatch(paymentSuccess(res));
      notify('Payment session has been started', 'success');
      window.open(res?.url, '_blank');
    }
  } catch (error) {
    notify(error.response.data.message, 'error');
    // console.log('error', error);
    // dispatch(orderFailure(error.response.data.message));
  }
};

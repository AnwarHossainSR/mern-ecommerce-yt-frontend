import { cartFailure, cartPending, cartSuccess } from '../reducers/CartSlice';

export const storeProductInCart =
  (cartProducts, product) => async (dispatch) => {
    dispatch(cartPending());
    try {
      const carts = new Array(...cartProducts);
      carts.push(product);
      dispatch(cartSuccess(carts));
    } catch (error) {
      dispatch(cartFailure(error.message));
    }
  };

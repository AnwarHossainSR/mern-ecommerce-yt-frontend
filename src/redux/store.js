import {configureStore} from '@reduxjs/toolkit';

import CartReducer from './reducers/CartSlice';
import OrderReducer from './reducers/OrderSlice';
import ProductReducer from './reducers/ProductSlice';
import UserReducer from './reducers/UserSlice';

export default configureStore({
  reducer : {
    users : UserReducer,
    products : ProductReducer,
    carts : CartReducer,
    orders : OrderReducer,
  },
});

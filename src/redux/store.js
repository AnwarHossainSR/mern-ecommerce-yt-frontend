import { configureStore } from '@reduxjs/toolkit';

import ProductReducer from './reducers/ProductSlice';
import UserReducer from './reducers/UserSlice';

export default configureStore({
  reducer: {
    users: UserReducer,
    products: ProductReducer,
  },
});

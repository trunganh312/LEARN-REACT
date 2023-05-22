import { configureStore } from '@reduxjs/toolkit';
import couterReducer from '../features/Counter/couterSlice';
import userReducer from '../features/Auth/userSlice';
import cartReducer from '../features/Cart/cartSlice';
const rootReducer = {
  count: couterReducer,
  user: userReducer,
  cart: cartReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

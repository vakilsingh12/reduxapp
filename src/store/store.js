import { configureStore } from "@reduxjs/toolkit";
import cartReducers from "./cartSlice";
import productReducers from "./productSlice";
const store = configureStore({
  reducer: {
    cart: cartReducers,
    product: productReducers,
  },
});

export default store;

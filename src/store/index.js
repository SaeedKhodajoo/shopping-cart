import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import favoriteSlice from "./favorite-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    favorite: favoriteSlice.reducer,
  },
});

export default store;

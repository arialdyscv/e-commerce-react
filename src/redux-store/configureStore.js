import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../redux-reducer/cartSlice";
import currencySlice from "../redux-reducer/currencySlice";
import UiSlice from "../redux-reducer/uiSlice";

export const store = configureStore({
  reducer: {
    currency: currencySlice.reducer,
    ui: UiSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;

import { createSlice } from "@reduxjs/toolkit";

const UiSlice = createSlice({
  name: "uiSlice",
  initialState: {
    currencyIsVisible: false,
    cartIsVisible: false,
  },
  reducers: {
    toggleCurrency(state) {
      state.currencyIsVisible = !state.currencyIsVisible;
    },
    isCurrencyVisible(state) {
      state.currencyIsVisible = false;
    },

    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },

    isCartVisible(state) {
      state.cartIsVisible = false;
    },
  },
});

export const UiActions = UiSlice.actions;
export default UiSlice;

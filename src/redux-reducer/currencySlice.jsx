import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
  name: "currency",
  initialState: {
    label: "USD",
    symbol: "$",
  },
  reducers: {
    updateCurrency: (state, action) => {
      return {
        ...state,
        label: action.payload.label,
        symbol: action.payload.symbol,
      };
    },
  },
});

export const currencyActions = currencySlice.actions;
export default currencySlice;

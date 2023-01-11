import { createSlice } from "@reduxjs/toolkit";

const equals = (a, b) => {
  if (a === b) return true;
  if (a instanceof Date && b instanceof Date)
    return a.getTime() === b.getTime();
  if (!a || !b || (typeof a !== "object" && typeof b !== "object"))
    return a === b;
  if (a.prototype !== b.prototype) return false;
  const keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;
  return keys.every((k) => equals(a[k], b[k]));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProducts: [],
    cartTotalProducts: 0,
  },
  reducers: {
    addProductToCart(state, action) {
      const newProduct = action.payload;

      const existingProduct = state.cartProducts.find((product) =>
        equals(product.selectedAttribute, newProduct.selectedAttribute)
      );

      state.cartTotalProducts += 1;
      if (!existingProduct) {
        state.cartProducts.push({
          id: newProduct.id,
          product: newProduct.product,
          selectedAttribute: newProduct.selectedAttribute,
          quantity: 1,
        });
      } else {
        existingProduct.quantity += 1;
      }
    },

    removeProduct(state, action) {
      const { payload } = action;

      const existingProduct = state.cartProducts.find((product) =>
        equals(product.selectedAttribute, payload.selectedAttribute)
      );
      state.cartTotalProducts -= 1;
      if (existingProduct.quantity === 1) {
        state.cartProducts = state.cartProducts.filter(
          (product) =>
            !equals(product.selectedAttribute, payload.selectedAttribute)
        );
      } else {
        existingProduct.quantity -= 1;
      }
    },

    clearCart(state) {
      return {
        ...state,
        cartProducts: [],
        cartTotalProducts: 0,
      };
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;

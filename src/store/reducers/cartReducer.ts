import { createReducer } from '@reduxjs/toolkit';
import { getCart, getCartFromResponse } from '../actions/cartActions';

export type CartState = {
  cartData: {};
  cartPending: boolean;
  cartError: boolean;
};

const initialState: CartState = {
  cartData: {},
  cartPending: false,
  cartError: false,
};

export const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getCart.pending, (state) => {
      state.cartPending = true;
    })
    .addCase(getCart.fulfilled, (state, { payload }) => {
      state.cartPending = false;
      state.cartData = payload;
    })
    .addCase(getCart.rejected, (state) => {
      state.cartPending = false;
      state.cartError = true;
    })
    .addCase(getCartFromResponse.pending, (state) => {
      state.cartPending = true;
    })
    .addCase(getCartFromResponse.fulfilled, (state, { payload }) => {
      state.cartPending = false;
      state.cartData = payload;
    })
    .addCase(getCartFromResponse.rejected, (state) => {
      state.cartPending = false;
      state.cartError = true;
    });;
});


export default cartReducer;

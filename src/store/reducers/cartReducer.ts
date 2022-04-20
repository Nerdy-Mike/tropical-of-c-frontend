import { createReducer } from '@reduxjs/toolkit';
import { getCart } from '../actions/cartActions';

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
    });
});

export default cartReducer;

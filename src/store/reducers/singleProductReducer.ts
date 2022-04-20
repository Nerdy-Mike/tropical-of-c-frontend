import { createReducer } from '@reduxjs/toolkit';
import { getProduct } from '../actions/productActions';

export type ProductState = {
  singleProductData: {};
  singleProductPending: boolean;
  singleProductError: boolean;
};

const initialState: ProductState = {
  singleProductData: {},
  singleProductPending: false,
  singleProductError: false,
};

export const singleProductReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getProduct.pending, (state) => {
      state.singleProductPending = true;
    })
    .addCase(getProduct.fulfilled, (state, { payload }) => {
      state.singleProductPending = false;
      state.singleProductData = payload;
    })
    .addCase(getProduct.rejected, (state) => {
      state.singleProductPending = false;
      state.singleProductError = true;
    });
});

export default singleProductReducer;

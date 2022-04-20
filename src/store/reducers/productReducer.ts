import { createReducer } from '@reduxjs/toolkit';
import { getProducts } from '../actions/productActions';

export type ProductState = {
  productData: {};
  productPending: boolean;
  productError: boolean;
};

const initialState: ProductState = {
  productData: {},
  productPending: false,
  productError: false,
};

export const productReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getProducts.pending, (state) => {
      state.productPending = true;
    })
    .addCase(getProducts.fulfilled, (state, { payload }) => {
      state.productPending = false;
      state.productData = payload;
    })
    .addCase(getProducts.rejected, (state) => {
      state.productPending = false;
      state.productError = true;
    });
});

export default productReducer;

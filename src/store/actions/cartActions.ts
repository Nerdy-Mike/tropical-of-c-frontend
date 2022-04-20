
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const url = 'http://localhost:5000'

const url = 'https://sheltered-plateau-19390.herokuapp.com'

export const getCart = createAsyncThunk('cart/getCart', async () => {
  const response = await axios.get(url);
  return response.data;
});

export const addToCart = createAsyncThunk('cart/addToCart', async (product : object) => {
  const response = await axios.post(`${url}`, product);
  return response.data;
});


export const removeFromCart = createAsyncThunk('cart/removeFromCart', async (productId : string) => {
  const response = await axios.patch(`${url}`, productId);
  return response.data;
});

export const getCartFromResponse = createAsyncThunk('cart/getCartFromResponse', async ({data}:any) => {
  return data;
})
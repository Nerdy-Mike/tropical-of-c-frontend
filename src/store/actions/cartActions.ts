
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setCookies, getCookie, checkCookies } from 'cookies-next';
import { Obj } from 'reselect/es/types';


// const url = 'http://localhost:5000'

const url = 'https://sheltered-plateau-19390.herokuapp.com'

export const getCart = createAsyncThunk('cart/getCart', async ({userId: userId} :{userId: string}) => {

  // const response = await axios.get(url);
  // return response.data;
  const response = await axios.get(`${url}/cart/${userId}`);
  return response.data;
});

export const addToCart = createAsyncThunk('cart/addToCart', async (product : object) => {
  const response = await axios.post(`${url}/cart`, product);
  return response.data;
});


export const removeFromCart = createAsyncThunk('cart/removeFromCart', async (productId : string) => {
  const response = await axios.patch(`${url}/cart`, productId);
  return response.data;
});

export const getCartFromResponse = createAsyncThunk('cart/getCartFromResponse', async ({data}:any) => {
  return data;
})

export const purchaseCart = createAsyncThunk('cart/purchaseCart', async (purchaseData:Object) => {
  const response = await axios.post(`${url}/purchase`, purchaseData);
  return response.data;
});
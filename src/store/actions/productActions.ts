
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:5000'
// const url = 'https://sheltered-plateau-19390.herokuapp.com'

export const getProducts = createAsyncThunk('products/getProducts', async () => {
  const response = await axios.get(`${url}/products`);
  return response.data;
});

export const getProduct = createAsyncThunk('products/getProduct', async ({customPermalink}:{customPermalink: string}) => 
{
  const response = await axios.get(`${url}/products/${customPermalink}`);
  return response.data;
});
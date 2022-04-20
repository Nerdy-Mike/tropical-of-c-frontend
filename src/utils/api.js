import axios from 'axios'

const url = 'http://localhost:5000'

export const getCartFromUserId = () => axios.get(`${url}`)
export const getProducts = () => axios.get(`${url}/products`);

export const addProductToCart = (product) => axios.post(`${url}`, product);
//TODO:
export const getProduct = () => axios.get(`${url}/products/:customPermalink`);

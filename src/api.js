import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000/api/v1'
});

// Fetch all products
export const getProducts = () => API.get('/products');

// Fetch single product by ID
export const getProductById = (id) => API.get(`/product/${id}`);

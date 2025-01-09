import axios from 'axios';

const API_URL = '/api/products';

const getProducts = () => {
    return axios.get(API_URL);
};

const addProduct = (product) => {
    return axios.post(API_URL, product);
};

const removeProduct = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};

export default {
    getProducts,
    addProduct,
    removeProduct,
};
import axios from 'axios';
import {
  addProductRequest,
  addProductSuccess,
  addProductError,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductError,
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsError,
} from './products-actions';

axios.defaults.baseURL = 'http://localhost:3001/api/v1';

export const fetchProducts = () => async dispatch => {
  dispatch(fetchProductsRequest());
  try {
    const { data } = await axios.get('/products');

    console.log(data);
    dispatch(fetchProductsSuccess(data));
  } catch (error) {
    dispatch(fetchProductsError(error.message));
  }
};

export const addProduct =
  ({ producttype, hasDualsim, videoCard, weight, color, price }) =>
  async dispatch => {
    const product = {
      producttype,
      hasDualsim,
      videoCard,
      weight,
      color,
      price,
    };

    dispatch(addProductRequest());

    try {
      const { data } = await axios.post('/products', product);
      dispatch(addProductSuccess(data));
    } catch (error) {
      dispatch(addProductError(error.message));
    }
  };

export const deleteProduct = id => async dispatch => {
  dispatch(deleteProductRequest());

  try {
    await axios.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (error) {
    dispatch(deleteProductError(error.message));
  }
};

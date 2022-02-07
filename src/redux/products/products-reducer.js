import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
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

const items = createReducer([], {
  [fetchProductsSuccess]: (_, { payload }) => payload,
  [addProductSuccess]: (state, { payload }) => [...state, payload],
  [deleteProductSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [fetchProductsRequest]: () => true,
  [fetchProductsSuccess]: () => false,
  [fetchProductsError]: () => false,
  [addProductRequest]: () => true,
  [addProductSuccess]: () => false,
  [addProductError]: () => false,
  [deleteProductRequest]: () => true,
  [deleteProductSuccess]: () => false,
  [deleteProductError]: () => false,
});

export default combineReducers({
  items,
  loading,
});

import { createAction } from '@reduxjs/toolkit';

export const fetchProductsRequest = createAction(
  'products/fetchProductRequest',
);
export const fetchProductsSuccess = createAction(
  'products/fetchProductSuccess',
);
export const fetchProductsError = createAction('products/fetchProductError');

export const addProductRequest = createAction('products/addProductRequest');
export const addProductSuccess = createAction('products/addProductSuccess');
export const addProductError = createAction('products/addProductError');

export const deleteProductRequest = createAction(
  'products/deleteProductRequest',
);
export const deleteProductSuccess = createAction(
  'products/deleteProductSuccess',
);
export const deleteProductError = createAction('products/deleteProductError');

// export const changeFilter = createAction('contacts/changeFilter');

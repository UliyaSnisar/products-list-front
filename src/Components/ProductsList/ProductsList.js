import React from 'react';
import ElementProductList from '../ElementProductList';
import { connect } from 'react-redux';
import { deleteProduct } from '../../redux/products/products-operations';
import { getAllProducts } from '../../redux/products/products-selectors';
// import styles from './ProductList.module.css';

const ProductsList = ({ products, onDeleteProduct }) => (
  <ul>
    {products.map(
      ({ id, producttype, hasDualsim, weight, color, price, videoCard }) => (
        <li key={id}>
          <ElementProductList
            producttype={producttype}
            hasDualsim={hasDualsim}
            weight={weight}
            color={color}
            price={price}
            videoCard={videoCard}
            onDeleteProduct={() => onDeleteProduct(id)}
          />
        </li>
      ),
    )}
  </ul>
);

const mapStateToProps = state => ({
  products: getAllProducts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteProduct: id => dispatch(deleteProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);

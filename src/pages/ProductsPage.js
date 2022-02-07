import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../redux/products/products-operations';
import Container from '../Components/Container';
import ProductsList from '../Components/ProductsList';
import ProductForm from '../Components/ProductForm';
import './Pages.css';

class ProductsPage extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <Container>
        <ProductForm />

        <ProductsList />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(null, mapDispatchToProps)(ProductsPage);

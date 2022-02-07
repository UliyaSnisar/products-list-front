import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../../redux/products/products-operations';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(theme => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     // alignItems: 'center',
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//     display: 'flex',
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     maxWidth: '46ch',
//     justifyContent: 'space-between',
//   },
//   field: {
//     // marginRight: '20px',
//     maxWidth: '46ch',
//   },
//   submit: {
//     margin: theme.spacing(3, 'auto', 2),
//     flexBasis: '30%',
//     // marginLeft: 'auto',
//     // marginRight: 'auto',
//   },
// }));

class ProductForm extends Component {
  state = {
    producttype: '',
    hasDualsim: false,
    weight: '',
    color: '',
    price: '',
    videoCard: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleCheckboxChange = ({ target }) => {
    const { name, value, type, checked } = target;
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      producttype: '',
      hasDualsim: false,
      weight: '',
      color: '',
      price: '',
      videoCard: '',
    });
  };

  render() {
    const { producttype, hasDualsim, weight, color, price, videoCard } =
      this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Выберите тип продукта
              <select
                name="producttype"
                value={producttype}
                onChange={this.handleChange}
              >
                <option value="" disabled>
                  ...
                </option>
                <option value="Phone">Phone</option>
                <option value="Tablet">Tablet</option>
                <option value="Notebook">Notebook</option>
              </select>
            </label>
          </div>

          {producttype === 'Phone' && (
            <div>
              <label>
                Dualsim
                <input
                  name="hasDualsim"
                  type="checkbox"
                  checked={hasDualsim}
                  onChange={this.handleCheckboxChange}
                />
              </label>
            </div>
          )}

          {producttype === 'Notebook' && (
            <label>
              Видео карта
              <input
                type="text"
                value={videoCard}
                name="videoCard"
                required
                onChange={this.handleChange}
              />
            </label>
          )}

          <div>
            <label>
              Вес
              <input
                type="text"
                value={weight}
                name="weight"
                required
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Цвет
              <input
                type="text"
                value={color}
                name="color"
                required
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div>
            <label htmlFor={this.priceInputId}>
              Цена
              <input
                type="text"
                value={price}
                name="price"
                required
                onChange={this.handleChange}
              />
            </label>
          </div>

          <button type="submit">Добавить</button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: (producttype, hasDualsim, videoCard, weight, color, price) =>
    dispatch(
      addProduct(producttype, hasDualsim, videoCard, weight, color, price),
    ),
});

export default connect(null, mapDispatchToProps)(ProductForm);

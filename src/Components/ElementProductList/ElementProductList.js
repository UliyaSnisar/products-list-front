import React from 'react';
// import styles from '../ElementProductList/ElementProductList.module.css';
// className={}

const ElementProductList = ({
  producttype,
  hasDualsim,
  weight,
  color,
  price,
  videoCard,
  onDeleteProduct,
}) => {
  return (
    <>
      <p>Тип: {producttype}</p>
      {producttype === 'Phone' && (
        <p>Dualsim: {hasDualsim ? 'Dualsim' : 'Onesim'}</p>
      )}
      {producttype === 'Notebook' && <p>Video card: {videoCard}</p>}
      <p>Вес: {weight}</p>
      <p>Цвет: {color}</p>
      <p>Цена: {price}</p>

      <button type="button" onClick={onDeleteProduct}>
        Delete
      </button>
    </>
  );
};

export default ElementProductList;

import React from 'react';
import { reduxForm } from 'redux-form';

import { filterByPriceRange } from '../../actions/productsActions';

import MainProductsFilter from './MainProductsFilter';
import Card from 'Components/card/Card';

const MainProducts = (props) => {
  const { handleSubmitFilter } = props;
  const renderProducts = () => {
    const { products } = props;
    if (products) {
      return products.map((product) => {
        return (
          <div 
            key={product.id}
            className="col-12 col-sm-6 col-md-3">
            <Card product={product}></Card>
          </div>
        )
      })
    }
  }
  return (
    <div className="container">
      <MainProductsFilter onSubmit={handleSubmitFilter}/>
      <div className="row text-center">
        {
          renderProducts()
        }
      </div>
    </div>
  );
}

export default MainProducts;
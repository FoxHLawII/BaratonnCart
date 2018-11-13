import React from 'react';

import MainProductsFilter from './MainProductsFilter';
import MainCart from 'Components/pages/MainCart';
import Card from 'Components/card/Card';

const MainProducts = (props) => {
  const { handleSubmitFilter, addProductToCart } = props;
  const renderProducts = () => {
    const { products } = props;
    if (products) {
      return products.map((product) => {
        return (
          <div
            key={product.id}
            className="col-12 col-sm-6 col-md-3"
            style={{ cursor: "pointer" }}
            onClick={() => { addProductToCart(product) }}>
            <Card product={product}></Card>
          </div>
        )
      })
    } else {
      <div><p>Lo sentimos, no hay productos</p></div>
    }
  }
  return (
    <div className="container-fluid">
      <MainCart />
      <MainProductsFilter onSubmit={handleSubmitFilter} />
      <div className="row text-center">
        {
          renderProducts()
        }
      </div>
    </div>
  );
}

export default MainProducts;
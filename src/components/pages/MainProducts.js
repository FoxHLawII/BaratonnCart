import React from 'react';

import Card from 'Components/card/Card';

const MainProducts = (props) => {
  const renderProducts = () => {
    const { products } = props.products;
    if (products) {
      return products.map((product) => {
        return (
          <div className="col-12 col-sm-6 col-md-3">
            <Card product={product}></Card>
          </div>
        )
      })
    }
  }
  return (
    <div className="container">
      <div className="row text-center">
        {
          renderProducts()
        }
      </div>
    </div>
  );
}

export default MainProducts;
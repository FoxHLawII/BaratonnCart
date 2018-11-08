import React from 'react';

import Card from 'Components/card/Card';
import { filterByPriceRange } from '../../actions/productsActions';

const MainProducts = (props) => {
  const { filterByAvailable } = props;
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
      <div className="row text-center">
        <div className="col-sm-6">
          <select onChange={(e) => { filterByAvailable(e.target.value); }}>
            <option value="Todos">Todos</option>
            <option value={true}>Disponibles</option>
            <option value={false}>No disponibles</option>
          </select>
        </div>
        <div className="col-sm-6">
          <input type="range" onChange={(e)=>{ filterByPriceRange(0, e.target.value)}}></input>
        </div>
      </div>
      <div className="row text-center">
        {
          renderProducts()
        }
      </div>
    </div>
  );
}

export default MainProducts;
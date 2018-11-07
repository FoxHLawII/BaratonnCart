import React, { Component } from 'react';

import MainNav from 'Components/pages/MainNav';
import MainProducts from 'Components/pages/MainProducts';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      products: []
    }
  }
  componentDidMount() {
    fetch('categories.json')
      .then(function (response) {
        return response.json();
      })
      .then((categories) => {
        this.setState({ categories });
      });
    fetch('products.json')
      .then(function (response) {
        return response.json();
      })
      .then((products) => {
        console.log(products);
        this.setState({ products });
      });
  }
  render() {
    return (
      <div>
        <MainNav categories={this.state.categories}></MainNav>
        <MainProducts products={this.state.products}></MainProducts>
      </div>
    );
  }
}

export default Main;
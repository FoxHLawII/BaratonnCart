import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getAllProducts, filterProducts, sortProducts } from 'Actions/productsActions';
import { getAllCategories } from 'Actions/categoriesActions';
import { addItemToCart } from 'Actions/cartActions';

import MainNav from 'Components/pages/MainNav';
import MainProducts from 'Components/pages/MainProducts';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      products: []
    }
    this.handleSubmitFilter = this.handleSubmitFilter.bind(this);
    this.addProductToCart = this.addProductToCart.bind(this);
  }

  componentDidMount() {
    this.props.getAllCategories();
    this.props.getAllProducts();
  }

  handleSubmitFilter(data) {
    this.props.filterProducts(data);
    if (data.sortBy) {
      this.props.sortProducts(data.sortBy);
    }
  }

  addProductToCart(item) {
    this.props.addItemToCart(item);
  }

  render() {
    return (
      <div>
        <MainNav
          categories={this.props.categories}
        />
        <MainProducts
          products={this.props.products}
          handleSubmitFilter={this.handleSubmitFilter}
          addProductToCart={this.addProductToCart}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
    products: state.products.filteredProducts
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getAllCategories: getAllCategories,
    getAllProducts: getAllProducts,
    filterProducts: filterProducts,
    sortProducts: sortProducts,
    addItemToCart: addItemToCart
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getAllProducts, filterProductsByAvailable, filterByPriceRange } from '../../actions/productsActions';
import { getAllCategories } from '../../actions/categoriesActions';

import MainNav from 'Components/pages/MainNav';
import MainProducts from 'Components/pages/MainProducts';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      products: []
    }
    this.filterProductsByAvailable = this.filterProductsByAvailable.bind(this);
    this.filterByPriceRange = this.filterByPriceRange.bind(this);
  }
  
  componentDidMount() {
    this.props.getAllCategories();
    this.props.getAllProducts();
  }
  
  filterProductsByAvailable(available){
    this.props.filterProductsByAvailable(available);
  }
  filterByPriceRange(to, until){
    this.props.filterByPriceRange(to, until);
  }

  render() {
    return (
      <div>
        <MainNav 
          categories={this.props.categories} 
        />
        <MainProducts 
          products={this.props.products}
          filterByAvailable={this.filterProductsByAvailable}
          filterByPriceRange={this.filterByPriceRange}
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
    filterProductsByAvailable: filterProductsByAvailable,
    filterByPriceRange: filterByPriceRange
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
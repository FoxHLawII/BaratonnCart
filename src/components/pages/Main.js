import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getAllProducts, filterProductsByAvailable } from '../../actions/productsActions';
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
  }
  
  componentDidMount() {
    this.props.getAllCategories();
    this.props.getAllProducts();
  }
  
  filterProductsByAvailable(available){
    this.props.filterProductsByAvailable(available);
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
    filterProductsByAvailable: filterProductsByAvailable
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getAllProducts, filterProducts } from '../../actions/productsActions';
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
    this.handleSubmitFilter = this.handleSubmitFilter.bind(this);
  }
  
  componentDidMount() {
    this.props.getAllCategories();
    this.props.getAllProducts();
  }

  handleSubmitFilter(data) {
    this.props.filterProducts(data);
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
    filterProducts: filterProducts
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
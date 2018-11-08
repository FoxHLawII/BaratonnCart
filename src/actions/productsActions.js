import actionTypes from 'Util/constants';

export function setAllProducts(products) {
  return {
    type: actionTypes.PRODUCTS_SET_ALL,
    payload: products
  }
}
export function getAllProducts() {
  return dispatch => {
    fetch('products.json')
      .then(response => response.json())
      .then(data => {
        dispatch(setAllProducts(data.products));
      });
  }
}
export function filterProductsByAvailable(available) {
  return {
    type: actionTypes.PRODUCTS_FILTER_AVAILABLE,
    payload: available
  }
}
export function filterByPriceRange(to, until) {
  return {
    type: actionTypes.PRODUCTS_FILTER_PRICE_RANGE,
    payload: {
      to,
      until
    }
  }
}
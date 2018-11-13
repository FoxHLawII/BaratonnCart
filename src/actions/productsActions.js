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
export function filterProducts(data) {
  return {
    type: actionTypes.PRODUCTS_FILTER,
    payload: data
  }
}
export function sortProducts(property) {
  return {
    type: actionTypes.PRODUCTS_SORT,
    payload: property
  }
}
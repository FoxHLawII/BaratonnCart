import actionTypes from 'Util/constants';

export function addItemToCart(item) {
  return {
    type: actionTypes.CART_ADD,
    payload: item
  }
}
import actionTypes from 'Util/constants';

export function addItemToCart(item) {
  return {
    type: actionTypes.CART_ADD,
    payload: item
  }
}
export function removeItem(id){
  return {
    type: actionTypes.CART_REMOVE,
    payload: id
  }
}
export function increaseItem(id){
  return {
    type: actionTypes.CART_INCREASE_ITEM,
    payload: id
  }
}
export function decreaseItem(id) {
  return {
    type: actionTypes.CART_DECREASE_ITEM,
    payload: id
  }
}
export function resetItems(){
  return {
    type: actionTypes.CART_RESET
  }
}
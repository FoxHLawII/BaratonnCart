//[{bookObject},{bookObject}]
export function addToCart(products){
  return {
    type: 'ADD_TO_CART',
    payload: [...products]
  }
}
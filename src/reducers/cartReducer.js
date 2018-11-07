export function cartReducer(state = { cart: []}, action) {
  switch(action.type){
    case 'ADD_TO_CART':
      let cart = [...state.cart, ...action.payload]
      return { cart };
    default: 
      return state;
  }
}
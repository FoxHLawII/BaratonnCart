import actionTypes from 'Util/constants';

const initialState = {
  cart: []
}

export function cartReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case actionTypes.CART_ADD:
      const item = action.payload;
      let b = true;
      newState = { ...state };
      newState.cart = newState.cart.map((i) => {
        if (item.id === i.item.id) {
          i.quantity++;
          b = false;
        };
        return i;
      });
      if (b) {
        newState.cart = [...newState.cart, { item, quantity: 1 }];
      }
      return newState;
    default:
      return state;
  }
}
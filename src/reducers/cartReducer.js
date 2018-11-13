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
    case actionTypes.CART_REMOVE:
      newState = {...state};
      const indexToRemove=newState.cart.findIndex((i)=>{
        return i.item.id === action.payload;
      });
      newState.cart = [
        ...state.cart.slice(0, indexToRemove),
        ...state.cart.slice(indexToRemove + 1)
      ];
      return newState;
    case actionTypes.CART_INCREASE_ITEM:
      newState = {...state};
      newState.cart = newState.cart.map((i)=>{
        if(i.item.id===action.payload){
          i.quantity++;
        }
        return i;
      });
      return newState;
    case actionTypes.CART_DECREASE_ITEM:
      newState = { ...state };
      newState.cart = newState.cart.filter((i) => {
        if (i.item.id === action.payload) {
          i.quantity--;
          if(i.quantity===0){
            return false;
          }
        }
        return true;
      });
      return newState;
    default:
      return state;
  }
}
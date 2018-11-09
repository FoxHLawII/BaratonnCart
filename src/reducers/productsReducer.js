import actionTypes from 'Util/constants';

const initialState = {
  products: [],
  filteredProducts: []
}
export function productsReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case actionTypes.PRODUCTS_SET_ALL:
      return { ...state, products: action.payload, filteredProducts: action.payload };
    case actionTypes.PRODUCTS_FILTER_AVAILABLE:
      newState = {...state};
      if (action.payload != "Todos") {
        newState.filteredProducts = state.products.filter(p => {
          return p.available.toString() == action.payload;
        });
      } else {
        newState.filteredProducts = state.products;
      }
      return { ...newState };
    case actionTypes.PRODUCTS_FILTER_PRICE_RANGE:
      newState = { ...state };
      if (action.payload != "Todos") {
        newState.filteredProducts = state.products.filter(p => {
          return p.available.toString() == action.payload;
        });
      } else {
        newState.filteredProducts = state.products;
      }
      return { ...newState };
    default:
      return state;
  }
}
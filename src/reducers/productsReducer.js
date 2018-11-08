import actionTypes from 'Util/constants';

const initialState = {
  products:[],
  filteredProducts:[]
}
export function productsReducer(state = initialState, action) {
  switch(action.type){
    case actionTypes.PRODUCTS_SET_ALL:
      return { ...state, products: action.payload, filteredProducts: action.payload };
    case actionTypes.PRODUCTS_FILTER_AVAILABLE:
      console.log(state);
      const filteredProducts = state.products.filter(p=>{
        return p.available===action.payload;
      });
      return {...state, filteredProducts };
    default:
      return state;
  }
}
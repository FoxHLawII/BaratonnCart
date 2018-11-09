import actionTypes from 'Util/constants';

const initialState = {
  products: [],
  filteredProducts: []
}
const initialFilters= {
  availability: "Todos",
  priceRange: {
    min: 0,
    max: 50000
  },
  stockRange: {
    min: 0,
    max: 1000
  }
}
export function productsReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case actionTypes.PRODUCTS_SET_ALL:
      return { ...state, products: action.payload, filteredProducts: action.payload };
    case actionTypes.PRODUCTS_FILTER:
      const { priceRange, stockRange, availability } = action.payload;
      newState = { ...state };
      if (JSON.stringify(action.payload) !== JSON.stringify(initialFilters)){
        const filterByPriceRange = state.products.filter(p => {
          let price = p.price.replace("$", "").replace(",", "");
          price = parseInt(price);
          return price >= priceRange.min && price <= priceRange.max;
        });
        const filterByAvailability = state.products.filter(p => {
          return availability!=="Todos"?p.available.toString() !== availability:true;
        });
        const filterByStockRange = state.products.filter(p => {
          return p.stock >= stockRange.min && p.stock <= stockRange.max;
        });
        const allFiltered = filterByAvailability.concat(filterByPriceRange).concat(filterByStockRange);
        console.log('TCL: productsReducer -> allFiltered', [...new Set(allFiltered)]);
        newState.filteredProducts = [...new Set(allFiltered)];
      } else {
        newState.filteredProducts = state.products;
      }
      return { ...newState };
    default:
      return state;
  }
}
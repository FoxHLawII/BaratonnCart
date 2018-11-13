import actionTypes from 'Util/constants';

const initialState = {
  products: [],
  filteredProducts: []
}
const initialFilters = {
  availability: "Todos",
  priceRange: {
    min: 0,
    max: 49999
  },
  stockRange: {
    min: 0,
    max: 999
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
      if (JSON.stringify(action.payload) !== JSON.stringify(initialFilters)) {
        newState.filteredProducts = state.products.filter(p => {
          let price = p.price.replace("$", "").replace(",", "");
          price = parseInt(price);
          let bolPrice = (price >= priceRange.min && price <= priceRange.max)
          let bolAvai = (availability !== "Todos" ? p.available.toString() === availability : true);
          let bolQua = (p.quantity >= stockRange.min && p.quantity <= stockRange.max);
          return (bolPrice && bolAvai && bolQua);
        });
      } else {
        newState.filteredProducts = state.products;
      }
      return { ...newState };
    case actionTypes.PRODUCTS_SORT:
      const sortBy = action.payload;
      newState = { ...state };
      newState.filteredProducts.sort((a, b) => {
        let compareOne = a[sortBy];
        let compareTwo = b[sortBy];
        if (sortBy === "price") {
          compareOne = parseInt(compareOne.replace("$", "").replace(",", ""));
          compareTwo = parseInt(compareTwo.replace("$", "").replace(",", ""));
        }
        return compareTwo - compareOne;
      });
    default:
      return state;
  }
}
import actionTypes from 'Util/constants';

export function categoriesReducer(state = {categories: []}, action){
  switch(action.type){
    case actionTypes.CATEGORIES_SET_ALL:
      return {...state, categories: action.payload}
    default: 
      return state;
  }
}
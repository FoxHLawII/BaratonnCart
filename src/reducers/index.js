"use strict";

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import { cartReducer } from './cartReducer';
import { productsReducer } from './productsReducer';
import { categoriesReducer } from './categoriesReducer';

export default combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  form: formReducer
});
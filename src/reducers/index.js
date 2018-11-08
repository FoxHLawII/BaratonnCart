"use strict";

import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { productsReducer } from './productsReducer';
import { categoriesReducer } from './categoriesReducer';

export default combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  cart: cartReducer
});
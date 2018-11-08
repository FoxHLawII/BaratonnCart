import actionTypes from 'Util/constants';

export function setAllCategories(categories) {
  return {
    type: actionTypes.CATEGORIES_SET_ALL,
    payload: categories
  }
}

export function getAllCategories() {
  return dispatch => {
    fetch("categories.json")
      .then(response => {
        return response.json();
      })
      .then(products => {
        dispatch(setAllCategories(products));
      });
  }
}
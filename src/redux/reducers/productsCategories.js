import { SET_PRODUCTS_CATEGORIES } from '../actions/productsCategoriesAC';

const INITIAL_STATE = {
  productsCategoriesArr: [],
};

function productsCategories(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_PRODUCTS_CATEGORIES:
    return {
      ...state,
      productsCategoriesArr: action.productsCategoriesArr,
    };

  default:
    return state;
  }
}

export default productsCategories;

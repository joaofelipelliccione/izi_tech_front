import { combineReducers } from 'redux';
import user from './user';
import publishedProducts from './publishedProducts';
import productsCategories from './productsCategories';

const rootReducer = combineReducers({
  user,
  productsCategories,
  publishedProducts,
});

export default rootReducer;

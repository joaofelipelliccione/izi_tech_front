import { combineReducers } from 'redux';
import user from './user';
import publishedProducts from './publishedProducts';
import favoriteProducts from './favoriteProducts';
import productsCategories from './productsCategories';

const rootReducer = combineReducers({
  user,
  productsCategories,
  publishedProducts,
  favoriteProducts,
});

export default rootReducer;

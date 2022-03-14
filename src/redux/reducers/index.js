import { combineReducers } from 'redux';
import user from './user';
import publishedProducts from './publishedProducts';
import favoriteProducts from './favoriteProducts';

const rootReducer = combineReducers({
  user,
  publishedProducts,
  favoriteProducts,
});

export default rootReducer;

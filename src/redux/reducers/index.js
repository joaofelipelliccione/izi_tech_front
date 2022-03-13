import { combineReducers } from 'redux';
import user from './user';
import registeredUsers from './registeredUsers';
import publishedProducts from './publishedProducts';
import favoriteProducts from './favoriteProducts';

const rootReducer = combineReducers({
  user,
  registeredUsers,
  publishedProducts,
  favoriteProducts,
});

export default rootReducer;

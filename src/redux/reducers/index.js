import { combineReducers } from 'redux';
import user from './user';
import registeredUsers from './registeredUsers';
import publishedProducts from './publishedProducts';
import favoriteProducts from './favoriteProducts';

// REF: Reset da Store --> https://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store
import { SET_USER_LOGOUT } from '../actions/userLogoutAC';

const appReducer = combineReducers({
  user,
  registeredUsers,
  publishedProducts,
  favoriteProducts,
});

const rootReducer = (state, action) => {
  if (action.type === SET_USER_LOGOUT) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default rootReducer;

import { combineReducers } from 'redux';
import user from './user';
import registeredUsers from './registeredUsers';
import publishedProducts from './publishedProducts';
import favoriteProducts from './favoriteProducts';

// REF: Reset da Store --> https://medium.com/@asher.cassetto.cohen/resetting-redux-state-with-a-root-reducer-bonus-how-to-reset-state-selectively-e2a008d0de61
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

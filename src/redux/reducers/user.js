import { SET_LOGIN_INFO } from '../actions/userAC';

const INITIAL_STATE = {
  loginInfo: JSON.parse(localStorage.getItem('loginInfo')) || {},
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_LOGIN_INFO:
    return {
      ...state,
      loginInfo: action.loginInfo,
    };

  default:
    return state;
  }
}

export default user;

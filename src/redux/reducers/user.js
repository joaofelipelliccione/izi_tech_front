import {
  SET_LOGIN_INFO,
  CLEAR_LOGIN_INFO,
  SET_ALL_USER_INFO,
  CLEAR_ALL_USER_INFO } from '../actions/userAC';

const INITIAL_STATE = {
  loginInfo: JSON.parse(localStorage.getItem('loginInfo')) || {},
  allUserInfo: {},
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_LOGIN_INFO:
    return {
      ...state,
      loginInfo: action.loginInfo,
    };

  case CLEAR_LOGIN_INFO:
    return {
      ...state,
      loginInfo: {},
    };

  case SET_ALL_USER_INFO:
    return {
      ...state,
      allUserInfo: action.userInfoObj,
    };

  case CLEAR_ALL_USER_INFO:
    return {
      ...state,
      allUserInfo: {},
    };

  default:
    return state;
  }
}

export default user;

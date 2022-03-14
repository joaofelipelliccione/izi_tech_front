export const SET_LOGIN_INFO = 'SET_LOGIN_INFO';
export const CLEAR_LOGIN_INFO = 'CLEAR_LOGIN_INFO';
export const SET_ALL_USER_INFO = 'SET_ALL_USER_INFO';

const setLoginInfoAC = (loginInfo) => ({
  type: SET_LOGIN_INFO,
  loginInfo,
});

export const clearLoginInfoAC = () => ({
  type: CLEAR_LOGIN_INFO,
});

export const setAllUserInfoAC = (userInfoObj) => ({
  type: SET_ALL_USER_INFO,
  userInfoObj,
});

export default setLoginInfoAC;

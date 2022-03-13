export const SET_LOGIN_INFO = 'SET_LOGIN_INFO';
export const CLEAR_LOGIN_INFO = 'CLEAR_LOGIN_INFO';

const setLoginInfoAC = (loginInfo) => ({
  type: SET_LOGIN_INFO,
  loginInfo,
});

export const clearLoginInfoAC = () => ({
  type: CLEAR_LOGIN_INFO,
});

export default setLoginInfoAC;

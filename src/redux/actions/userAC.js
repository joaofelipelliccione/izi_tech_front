export const SET_LOGIN_INFO = 'SET_LOGIN_INFO';

const setLoginInfoAC = (loginInfo) => ({
  type: SET_LOGIN_INFO,
  loginInfo,
});

export default setLoginInfoAC;

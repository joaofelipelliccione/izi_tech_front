export const SET_LOGIN_INFO = 'SET_LOGIN_INFO';
export const CLEAR_LOGIN_INFO = 'CLEAR_LOGIN_INFO';
export const SET_ALL_USER_INFO = 'SET_ALL_USER_INFO';
export const CLEAR_ALL_USER_INFO = 'CLEAR_ALL_USER_INFO';
export const ADD_FAVORITE_PRODUCT = 'ADD_FAVORITE_PRODUCT';
export const REMOVE_FAVORITE_PRODUCT = 'REMOVE_FAVORITE_PRODUCT';

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

export const clearAllUserInfoAC = () => ({
  type: CLEAR_ALL_USER_INFO,
});

export const addFavoriteProductAC = (objWithProductId) => ({
  type: ADD_FAVORITE_PRODUCT,
  objWithProductId,
});

export const removeFavoriteProductAC = (productId) => ({
  type: REMOVE_FAVORITE_PRODUCT,
  productId,
});

export default setLoginInfoAC;

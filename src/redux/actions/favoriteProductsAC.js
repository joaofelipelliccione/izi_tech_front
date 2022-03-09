export const CREATE_USER_FAVORITES_SECTION = 'CREATE_USER_FAVORITES_SECTION';
export const FAVORITE_NEW_PRODUCT = 'FAVORITE_NEW_PRODUCT';
export const REMOVE_FAVORITE_PRODUCT = 'REMOVE_FAVORITE_PRODUCT';

const createUserFavSectionAC = (obj) => ({
  type: CREATE_USER_FAVORITES_SECTION,
  obj,
});

export const favoriteNewProductAC = (updatedObj, userMail) => ({
  type: FAVORITE_NEW_PRODUCT,
  updatedObj,
  userMail,
});

export const removeFavoriteProductAC = (objWithoutProduct, userMail) => ({
  type: REMOVE_FAVORITE_PRODUCT,
  objWithoutProduct,
  userMail,
});

export default createUserFavSectionAC;

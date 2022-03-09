export const CREATE_USER_SECTION = 'CREATE_USER_SECTION';
export const REGISTER_NEW_PRODUCT = 'REGISTER_NEW_PRODUCT';
export const UPDATE_PUBLISHED_PRODUCT = 'UPDATE_PUBLISHED_PRODUCT';
export const REMOVE_PUBLISHED_PRODUCT = 'REMOVE_PUBLISHED_PRODUCT';

const createUserSectionAC = (obj) => ({
  type: CREATE_USER_SECTION,
  obj,
});

export const registerNewProductAC = (updatedObj, userMail) => ({
  type: REGISTER_NEW_PRODUCT,
  updatedObj,
  userMail,
});

export const updatePublishedProduct = (updatedObj, userMail) => ({
  type: UPDATE_PUBLISHED_PRODUCT,
  updatedObj,
  userMail,
});

export const removePublishedProduct = (objWithoutProduct, userMail) => ({
  type: REMOVE_PUBLISHED_PRODUCT,
  objWithoutProduct,
  userMail,
});

export default createUserSectionAC;

export const SET_PRODUCTS_CATEGORIES = 'SET_PRODUCTS_CATEGORIES';

const setProductsCategories = (productsCategoriesArr) => ({
  type: SET_PRODUCTS_CATEGORIES,
  productsCategoriesArr,
});

export default setProductsCategories;

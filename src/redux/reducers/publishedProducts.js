import { CREATE_USER_SECTION,
  REGISTER_NEW_PRODUCT,
  UPDATE_PUBLISHED_PRODUCT,
  REMOVE_PUBLISHED_PRODUCT,
} from '../actions/publishedProductsAC';

import dummyPublishedProducts from
'../../data/dummyData/publishedProducts/dummyPublishedProducts';

const INITIAL_STATE = {
  productIdCounter: 9,
  publishedProducts: dummyPublishedProducts,
};

function publishedProducts(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CREATE_USER_SECTION:
    return {
      productIdCounter: state.productIdCounter,
      publishedProducts: [...state.publishedProducts, action.obj],
    };

  case REGISTER_NEW_PRODUCT:
    return {
      productIdCounter: state.productIdCounter + 1,
      publishedProducts: [...state.publishedProducts
        .filter(({ userMail }) => userMail !== action.userMail), action.updatedObj],
    };

  case UPDATE_PUBLISHED_PRODUCT:
    return {
      productIdCounter: state.productIdCounter,
      publishedProducts: [...state.publishedProducts
        .filter(({ userMail }) => userMail !== action.userMail), action.updatedObj],
    };

  case REMOVE_PUBLISHED_PRODUCT:
    return {
      productIdCounter: state.productIdCounter,
      publishedProducts: [...state.publishedProducts
        .filter(({ userMail }) => userMail !== action.userMail),
      action.objWithoutProduct],
    };

  default:
    return state;
  }
}

export default publishedProducts;

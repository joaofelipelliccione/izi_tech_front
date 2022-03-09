import { CREATE_USER_FAVORITES_SECTION,
  FAVORITE_NEW_PRODUCT,
  REMOVE_FAVORITE_PRODUCT,
} from '../actions/favoriteProductsAC';

import dummyFavoriteProducts
from '../../data/dummyData/favoriteProducts/dummyFavoriteProducts';

const INITIAL_STATE = {
  favoriteProducts: dummyFavoriteProducts,
};

function favoriteProducts(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CREATE_USER_FAVORITES_SECTION:
    return {
      favoriteProducts: [...state.favoriteProducts, action.obj],
    };

  case FAVORITE_NEW_PRODUCT:
    return {
      favoriteProducts: [...state.favoriteProducts
        .filter(({ userMail }) => userMail !== action.userMail), action.updatedObj],
    };

  case REMOVE_FAVORITE_PRODUCT:
    return {
      favoriteProducts: [...state.favoriteProducts
        .filter(({ userMail }) => userMail !== action.userMail),
      action.objWithoutProduct],
    };

  default:
    return state;
  }
}

export default favoriteProducts;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';
import { BiShareAlt } from 'react-icons/bi';
import { favoriteNewProductAC, removeFavoriteProductAC }
from '../../redux/actions/favoriteProductsAC';

function AdDetailsFavAndShare({ productId, productLocation, setIsShareAdMessageHidden }) {
  const currentUserMail = useSelector((state) => state.user.userMail);
  const favoriteProductsMacroArr = useSelector((state) => state.favoriteProducts
    .favoriteProducts);

  const [userCurrentFavoriteProductsArr, setUserCurrentFavoriteProductsArr] = React
    .useState([]);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (currentUserMail !== '') {
      setUserCurrentFavoriteProductsArr(favoriteProductsMacroArr
        .find(({ userMail }) => userMail === currentUserMail).userFavoriteProducts);
    }
  }, [favoriteProductsMacroArr]);

  const onClickFavoriteBtn = (prodId) => {
    const isProductAlreadyFavorited = userCurrentFavoriteProductsArr
      .some((id) => id === prodId);

    const updatedObj1 = {
      userMail: currentUserMail,
      userFavoriteProducts: [...userCurrentFavoriteProductsArr, prodId],
    };

    const updatedObj2 = {
      userMail: currentUserMail,
      userFavoriteProducts: [...userCurrentFavoriteProductsArr
        .filter((id) => id !== prodId)],
    };

    if (!isProductAlreadyFavorited) {
      dispatch(favoriteNewProductAC(updatedObj1, currentUserMail));
    }
    if (isProductAlreadyFavorited) {
      dispatch(removeFavoriteProductAC(updatedObj2, currentUserMail));
    }
  };

  const onClickShareBtn = (prodId) => {
    const TWO_SECONDS = 2000;
    navigator.clipboard.writeText(`https://joaofelipelliccione.github.io/izi_tech/#/adDetails/${prodId}`);
    setIsShareAdMessageHidden(false);
    setTimeout(() => setIsShareAdMessageHidden(true), TWO_SECONDS);
  };

  return (
    <div id="adDetailsLocFavAndShareContainer">
      <p id="adDetailsLocation">
        {
          `${productLocation.productNeighborhood},
          ${productLocation.productCity} - ddd ${productLocation.productDDD}`
        }
      </p>
      <div id="adDetailsFavAndShareContainer">
        {currentUserMail !== ''
          && (
            <button
              id="adDetailsFavBtn"
              type="button"
              onClick={ () => onClickFavoriteBtn(productId) }
            >
              {
                userCurrentFavoriteProductsArr
                  .some((id) => id === productId)
                  ? <MdOutlineFavorite />
                  : <MdOutlineFavoriteBorder />
              }
            </button>
          )}
        <button
          id="adDetailsShareBtn"
          type="button"
          onClick={ () => onClickShareBtn(productId) }
        >
          <BiShareAlt />
        </button>
      </div>
    </div>
  );
}

AdDetailsFavAndShare.propTypes = {
  productId: PropTypes.number.isRequired,
  productLocation: PropTypes.objectOf(PropTypes.string).isRequired,
  setIsShareAdMessageHidden: PropTypes.func.isRequired,
};

export default AdDetailsFavAndShare;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';
import { BiShareAlt } from 'react-icons/bi';
import HomeAdCardCarousel from './HomeAdCardCarousel';
import { favoriteNewProductAC, removeFavoriteProductAC }
from '../../redux/actions/favoriteProductsAC';

function HomeAdCard({ adsToRender, setIsShareAdMessageHidden }) {
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

  const onClickFavoriteBtn = (productId) => {
    const isProductAlreadyFavorited = userCurrentFavoriteProductsArr
      .some((id) => id === productId);

    const updatedObj1 = {
      userMail: currentUserMail,
      userFavoriteProducts: [...userCurrentFavoriteProductsArr, productId],
    };

    const updatedObj2 = {
      userMail: currentUserMail,
      userFavoriteProducts: [...userCurrentFavoriteProductsArr
        .filter((id) => id !== productId)],
    };

    if (!isProductAlreadyFavorited) {
      dispatch(favoriteNewProductAC(updatedObj1, currentUserMail));
    }
    if (isProductAlreadyFavorited) {
      dispatch(removeFavoriteProductAC(updatedObj2, currentUserMail));
    }
  };

  const onClickShareBtn = (productId) => {
    const TWO_SECONDS = 2000;
    navigator.clipboard.writeText(`https://joaofelipelliccione.github.io/izi_tech/#/adDetails/${productId}`);
    setIsShareAdMessageHidden(false);
    setTimeout(() => setIsShareAdMessageHidden(true), TWO_SECONDS);
  };

  return (
    <div id="homeDisplayedAdCardContainer">
      {adsToRender.map((adObj) => (
        <div key={ adObj.productId } id="eachHomeDisplayedAdCard">
          <HomeAdCardCarousel
            productPicsArr={ adObj.productPictures }
          />
          <div id="eachHomeDisplayedAdCardBlock1">
            <Link
              to={ `/adDetails/${adObj.productId}` }
              target="_blank"
            >
              <h3>{adObj.productTitle}</h3>
              <div id="eachHomeDisplayedAdCardBlock1-1">
                <p>{adObj.productCondition}</p>
                {adObj.productAcceptChange ? (
                  <p>considera troca!</p>
                ) : (
                  <p>somente venda</p>
                )}
              </div>
              <p>
                {
                  `${adObj.productLocation.productCity}, 
              ${adObj.productLocation.productNeighborhood} 
              - ddd ${adObj.productLocation.productDDD}`
                }
              </p>
              <p>{adObj.publicationDate}</p>
            </Link>
          </div>
          <div id="eachHomeDisplayedAdCardBlock2">
            <p>{`R$ ${adObj.productPrice}`}</p>
            <div id="eachHomeDisplayedAdCardBlock2-1">
              {currentUserMail !== ''
                && (
                  <button
                    id="homeDisplayedAdFavBtn"
                    type="button"
                    onClick={ () => onClickFavoriteBtn(adObj.productId) }
                  >
                    {
                      userCurrentFavoriteProductsArr
                        .some((id) => id === adObj.productId)
                        ? <MdOutlineFavorite />
                        : <MdOutlineFavoriteBorder />
                    }
                  </button>
                )}
              <button
                id="homeDisplayedAdShareBtn"
                type="button"
                onClick={ () => onClickShareBtn(adObj.productId) }
              >
                <BiShareAlt />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

HomeAdCard.propTypes = {
  adsToRender: PropTypes.arrayOf(PropTypes.object).isRequired,
  setIsShareAdMessageHidden: PropTypes.func.isRequired,
};

export default HomeAdCard;

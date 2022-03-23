import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';
import { BiShareAlt } from 'react-icons/bi';
import HomeAdCardCarousel from './HomeAdCardCarousel';
// import { favoriteNewProductAC, removeFavoriteProductAC }
// from '../../redux/actions/favoriteProductsAC';

function HomeAdCard({ adsToRender, setIsShareAdMessageHidden }) {
  const loginInfo = useSelector((state) => state.user.loginInfo);
  const allUserInfo = useSelector((state) => state.user.allUserInfo);
  const favoriteProductsArr = allUserInfo.favoriteProducts;

  const [userFavoriteProductsArr, setUserFavoriteProductsArr] = React
    .useState([]);

  // const dispatch = useDispatch();

  React.useEffect(() => {
    if (favoriteProductsArr !== undefined && favoriteProductsArr.length > 0) {
      setUserFavoriteProductsArr(favoriteProductsArr.map(({ productId }) => productId));
    }
  }, [favoriteProductsArr]);

  // const onClickFavoriteBtn = (productId) => {
  //   const isProductAlreadyFavorited = userFavoriteProductsArr
  //     .some((id) => id === productId);

  //   const updatedObj1 = {
  //     userMail: currentUserMail,
  //     userFavoriteProducts: [...userFavoriteProductsArr, productId],
  //   };

  //   const updatedObj2 = {
  //     userMail: currentUserMail,
  //     userFavoriteProducts: [...userFavoriteProductsArr
  //       .filter((id) => id !== productId)],
  //   };

  //   if (!isProductAlreadyFavorited) {
  //     dispatch(favoriteNewProductAC(updatedObj1, currentUserMail));
  //   }
  //   if (isProductAlreadyFavorited) {
  //     dispatch(removeFavoriteProductAC(updatedObj2, currentUserMail));
  //   }
  // };

  const onClickShareBtn = (productId) => {
    const TWO_SECONDS = 2000;
    navigator.clipboard.writeText(`https://izi-tech-front.herokuapp.com/adDetails/${productId}`);
    setIsShareAdMessageHidden(false);
    setTimeout(() => setIsShareAdMessageHidden(true), TWO_SECONDS);
  };

  return (
    <div id="homeDisplayedAdCardContainer">
      {adsToRender.map((adObj) => (
        <div key={ adObj.productId } id="eachHomeDisplayedAdCard">
          <HomeAdCardCarousel
            productPicsArr={ adObj.productPictures
              .map(({ productPicturePath }) => productPicturePath) }
          />
          <div id="eachHomeDisplayedAdCardBlock1">
            <Link
              to={ `/adDetails/${adObj.productId}` }
              target="_blank"
            >
              <h3>{adObj.productTitle}</h3>
              <div id="eachHomeDisplayedAdCardBlock1-1">
                <p>{adObj.productCondition.productConditionName}</p>
                {adObj.productAcceptChange ? (
                  <p>considera troca!</p>
                ) : (
                  <p>somente venda</p>
                )}
              </div>
              <p>
                {
                  `${adObj.infoFromCep.city},
              ${adObj.infoFromCep.neighborhood}
              - ddd ${adObj.infoFromCep.ddd}`
                }
              </p>
              <p>{adObj.publicationDate.split('-').reverse().join('/')}</p>
            </Link>
          </div>
          <div id="eachHomeDisplayedAdCardBlock2">
            <p>{`R$ ${adObj.productPrice}`}</p>
            <div id="eachHomeDisplayedAdCardBlock2-1">
              {loginInfo.userId
                && (
                  <button
                    id="homeDisplayedAdFavBtn"
                    type="button"
                    onClick={ () => onClickFavoriteBtn(adObj.productId) }
                  >
                    {
                      userFavoriteProductsArr
                        .some((productId) => productId === adObj.productId)
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

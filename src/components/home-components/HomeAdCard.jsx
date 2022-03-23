import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';
import { BiShareAlt } from 'react-icons/bi';
import { StatusCodes } from 'http-status-codes';
import alerts from '../../shared-functions/alerts';
import HomeAdCardCarousel from './HomeAdCardCarousel';
import { addFavoriteProductAC, removeFavoriteProductAC }
from '../../redux/actions/userAC';

function HomeAdCard({ adsToRender, setIsShareAdMessageHidden }) {
  const loginInfo = useSelector((state) => state.user.loginInfo);
  const allUserInfo = useSelector((state) => state.user.allUserInfo);
  const favoriteProductsArr = allUserInfo.favoriteProducts;

  const [isLoading, setIsLoading] = React.useState(false);
  const [userFavoriteProductsArr, setUserFavoriteProductsArr] = React
    .useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (favoriteProductsArr !== undefined) {
      setUserFavoriteProductsArr(favoriteProductsArr.map(({ productId }) => productId));
    }
  }, [favoriteProductsArr]);

  const fetchToRemoveFavoriteProduct = async (productId) => {
    const REMOVE_FAVORITE_PROD_ENDPOINT = 'https://izi-tech-back.herokuapp.com/favorite_products/remove';
    // const REMOVE_FAVORITE_PROD_ENDPOINT_LOCAL = 'http://localhost:4000/favorite_products/remove';

    const body = JSON.stringify({
      userId: loginInfo.userId,
      productId,
    });

    const fetchedData = await fetch(REMOVE_FAVORITE_PROD_ENDPOINT, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', Authorization: loginInfo.authToken },
      body });
    const cleanData = await fetchedData.json();
    return cleanData;
  };

  const fetchToInsertFavoriteProduct = async (productId) => {
    const INSERT_FAVORITE_PROD_ENDPOINT = 'https://izi-tech-back.herokuapp.com/favorite_products/insert';
    // const INSERT_FAVORITE_PROD_ENDPOINT_LOCAL = 'http://localhost:4000/favorite_products/insert';

    const body = JSON.stringify({
      userId: loginInfo.userId,
      productId,
    });

    const fetchedData = await fetch(INSERT_FAVORITE_PROD_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: loginInfo.authToken },
      body });
    const cleanData = await fetchedData.json();
    return cleanData;
  };

  const onClickFavoriteBtn = async (productId) => {
    const isProductAlreadyFavorited = userFavoriteProductsArr
      .some((prodId) => prodId === productId);

    if (!isProductAlreadyFavorited) {
      setIsLoading(true);
      const cleanData = await fetchToInsertFavoriteProduct(productId);

      if (cleanData.code === StatusCodes.INTERNAL_SERVER_ERROR) {
        return navigate('/'); // CRIAR UMA PÁGINA P/ QUANDO NÃO SEJA POSSÍVEL REALIZAR O FETCH
      }
      if (cleanData.code === StatusCodes.UNAUTHORIZED) {
        navigate('/login');
        return alerts('expiredSession');
      }
      if (cleanData.code === StatusCodes.CREATED) {
        dispatch(addFavoriteProductAC({ productId }));
        return setIsLoading(false);
      }
    }
    if (isProductAlreadyFavorited) {
      setIsLoading(true);
      const cleanData = await fetchToRemoveFavoriteProduct(productId);

      if (cleanData.code === StatusCodes.INTERNAL_SERVER_ERROR) {
        return navigate('/'); // CRIAR UMA PÁGINA P/ QUANDO NÃO SEJA POSSÍVEL REALIZAR O FETCH
      }
      if (cleanData.code === StatusCodes.UNAUTHORIZED) {
        navigate('/login');
        return alerts('expiredSession');
      }
      if (cleanData.code === StatusCodes.OK) {
        dispatch(removeFavoriteProductAC(productId));
        return setIsLoading(false);
      }
    }
  };

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
                    disabled={ isLoading === true }
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

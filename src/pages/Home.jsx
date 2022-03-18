/* eslint-disable max-len */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiFilterLine } from 'react-icons/ri';
import { CgCloseO } from 'react-icons/cg';
import Header from '../components/header-components/Header';
import HomeFilters from '../components/home-components/HomeFilters';
import HomeOrderBy from '../components/home-components/HomeOrderBy';
import HomeAdsDisplay from '../components/home-components/HomeAdsDisplay';
import Footer from '../components/Footer';
import { clearLoginInfoAC, clearAllUserInfoAC, setAllUserInfoAC } from '../redux/actions/userAC';
import authTokenVerifier from '../shared-functions/authTokenVerifier';
import getLCArrayWithoutAccent from '../shared-functions/getLCArrayWithoutAccent';
import '../styles/Home.css';

function Home() {
  const publishedProductsMacroArr = useSelector((state) => state.publishedProducts
    .publishedProducts);
  const publishedProductsArr = publishedProductsMacroArr
    .map(({ userPublishedProducts }) => userPublishedProducts)
    .reduce((acc, currMiniArr) => acc.concat(currMiniArr))
    .sort((prodA, prodB) => prodB.productId - prodA.productId);

  const [renderedAdsBeforeFilterTogleClick, setRenderedAdsBeforeFilterTogleClick] = React.useState([]);
  const [adsToRender, setAdsToRender] = React.useState([]);
  const [homeSearchedItem, setHomeSearchedItem] = React.useState('');
  const [isHomeFilterBoxHidden, setIsHomeFilterBoxHidden] = React.useState(true);
  const [isShareAdMessageHidden, setIsShareAdMessageHidden] = React.useState(true);
  const [homeOrderBy, setHomeOrderBy] = React.useState('mais recentes');

  const dispatch = useDispatch();

  React.useEffect(() => {
    authTokenVerifier()
      .then((result) => {
        if (result.isAuthTokenExpired === true) {
          localStorage.removeItem('loginInfo');
          dispatch(clearLoginInfoAC());
          dispatch(clearAllUserInfoAC());
        } else {
          const loginInfo = JSON.parse(localStorage.getItem('loginInfo'));
          const PROFILE_ENDPOINT = `https://izi-tech-back.herokuapp.com/user/${loginInfo.userId}`;
          // const PROFILE_ENDPOINT_LOCAL = `http://localhost:4000/user/${loginInfo.userId}`;

          fetch(PROFILE_ENDPOINT, { headers: { Authorization: loginInfo.authToken } })
            .then((res) => res.json())
            .then((cleanData) => {
              dispatch(setAllUserInfoAC(cleanData));
            });
        }
      });
  }, []);

  React.useEffect(() => {
    setAdsToRender(publishedProductsArr);
  }, []);

  React.useEffect(() => {
    if (homeSearchedItem === '') {
      setAdsToRender(publishedProductsArr);
    }
  }, [homeSearchedItem]);

  const onClickHomeSearchBtn = () => {
    const searchedItemInFormOfArr = getLCArrayWithoutAccent(homeSearchedItem); // Ex: 'Controle Xbox Series' --> ['controle', 'xbox', 'series'];
    let filteredProductsArray = [];

    if (!isHomeFilterBoxHidden) {
      setIsHomeFilterBoxHidden(true);
    }

    /* Explicação da lógica abaixo:
      Em cada 'productTitle', 'productLine' ou 'productType' dentro de 'publishedProductsArr', verifica-se se há a presença de cada palavra contida em 'searchedItemInFormOfArr'. Caso haja a presença, a variável 'counter' aumenta em uma unidade.
      Ao final de todas as palavras contidas no array 'searchedItemInFormOfArr', caso 'productTitle' + 'productLine' + 'productType' apresente uma ou mais palavras contidas em 'searchedItemInFormOfArr', o 'productObj' da vez passa a fazer parte do 'filteredProductsArray'. Esse último, será renderizado na tela.
    */
    publishedProductsArr.forEach((productObj) => {
      let counter = 0;
      searchedItemInFormOfArr.forEach((word) => {
        if (getLCArrayWithoutAccent(productObj.productTitle).includes(word)
        || getLCArrayWithoutAccent(productObj.productLine).includes(word)
        || getLCArrayWithoutAccent(productObj.productType).includes(word)) {
          counter += 1;
        }
      });
      if (counter >= 1) {
        filteredProductsArray = [...filteredProductsArray, productObj];
      }
    });

    setAdsToRender(filteredProductsArray);
  };

  const onClickFilterTogle = () => {
    if (isHomeFilterBoxHidden) {
      setIsHomeFilterBoxHidden(false);
      setRenderedAdsBeforeFilterTogleClick(adsToRender);
    }
    if (!isHomeFilterBoxHidden) {
      setAdsToRender(renderedAdsBeforeFilterTogleClick);
      setIsHomeFilterBoxHidden(true);
    }
  };

  const onChangeHomeOrderBy = () => {
    if (homeOrderBy === 'maior preço') {
      const adsArrayOrderByHigherPrice = adsToRender
        .sort((prodA, prodB) => {
          const arrA = prodA.productPrice.split(',');
          const arrB = prodB.productPrice.split(',');
          const A = Number(`${arrA[0].replace('.', '')}.${arrA[1]}`);
          const B = Number(`${arrB[0].replace('.', '')}.${arrB[1]}`);
          return B - A;
        });
      setAdsToRender([...adsArrayOrderByHigherPrice]);
    }
    if (homeOrderBy === 'menor preço') {
      const adsArrayOrderByLowerPrice = adsToRender
        .sort((prodA, prodB) => {
          const arrA = prodA.productPrice.split(',');
          const arrB = prodB.productPrice.split(',');
          const A = Number(`${arrA[0].replace('.', '')}.${arrA[1]}`);
          const B = Number(`${arrB[0].replace('.', '')}.${arrB[1]}`);
          return A - B;
        });
      setAdsToRender([...adsArrayOrderByLowerPrice]);
    }
  };

  React.useEffect(() => {
    onChangeHomeOrderBy();
  }, [homeOrderBy]);

  return (
    <div id="homePage">
      <Header
        setAdsToRender={ setAdsToRender }
        setIsHomeFilterBoxHidden={ setIsHomeFilterBoxHidden }
        homeSearchedItem={ homeSearchedItem }
        setHomeSearchedItem={ setHomeSearchedItem }
        onClickHomeSearchBtn={ onClickHomeSearchBtn }
        setHomeOrderBy={ setHomeOrderBy }
      />
      <main id="homePageMain">
        <section id="homeFiltersContainer1">
          <button
            id="homeFiltersToggleBtn"
            type="button"
            onClick={ onClickFilterTogle }
          >
            {isHomeFilterBoxHidden ? <RiFilterLine /> : <CgCloseO />}
          </button>
          {!isHomeFilterBoxHidden
            && <HomeFilters
              adsToRender={ adsToRender }
              setAdsToRender={ setAdsToRender }
              homeOrderBy={ homeOrderBy }
              setHomeOrderBy={ setHomeOrderBy }
            />}
        </section>
        <HomeOrderBy
          homeOrderBy={ homeOrderBy }
          setHomeOrderBy={ setHomeOrderBy }
        />
        <span
          id="shareLinkCopiedNotification"
          hidden={ isShareAdMessageHidden }
        >
          link copiado!
        </span>
        <HomeAdsDisplay
          adsToRender={ adsToRender }
          setIsShareAdMessageHidden={ setIsShareAdMessageHidden }
        />
      </main>
      <Footer />
    </div>
  );
}

export default Home;

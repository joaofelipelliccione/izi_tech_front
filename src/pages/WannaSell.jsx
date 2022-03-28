/* eslint-disable max-lines */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { StatusCodes } from 'http-status-codes';
import alerts from '../shared-functions/alerts';
import Header from '../components/header-components/Header';
import WannaSellBlock1 from '../components/wanna-sell-form-components/WannaSellBlock1';
import WannaSellBlock2 from '../components/wanna-sell-form-components/WannaSellBlock2';
import WannaSellBlock3 from '../components/wanna-sell-form-components/WannaSellBlock3';
import WannaSellBlock4 from '../components/wanna-sell-form-components/WannaSellBlock4';
import WannaSellBlock5 from '../components/wanna-sell-form-components/WannaSellBlock5';
import WannaSellBlock6 from '../components/wanna-sell-form-components/WannaSellBlock6';
import WannaSellBlock7 from '../components/wanna-sell-form-components/WannaSellBlock7';
import WannaSellBlock8 from '../components/wanna-sell-form-components/WannaSellBlock8';
import { setAllUserInfoAC } from '../redux/actions/userAC';
import Footer from '../components/Footer';
import illustration1 from '../illustrations/wannaSellBeforeLogin.svg';
import '../styles/WannaSell.css';

function WannaSell() {
  const user = useSelector((state) => state.user);
  const { loginInfo } = user;
  const userInfo = user.allUserInfo;

  const ZERO = 0;
  const THIRTY = 30;
  const selectTopCategory = 'selecionar categoria*';
  const selectLineOfProduct = 'selecionar linha de produto*';
  const selectTypeOfProduct = 'selecionar tipo de produto*';
  const NOT_INFORMED = 'não informado';

  const [wSProductTitle, setWsProductTitle] = React.useState('');
  const [wSProductDescription, setWsProductDescription] = React.useState('');
  const [wSProductAcceptChange, setWSProductAcceptChange] = React.useState(false);
  const [wSProductTopCategory, setWsProductTopCategory] = React
    .useState(selectTopCategory);
  const [wSProductLine, setWsProductLine] = React
    .useState(selectLineOfProduct);
  const [wSTypeOfProduct, setWsTypeOfProduct] = React
    .useState(selectTypeOfProduct);
  const [wSProductConditionRdBtn, setWsProductConditionRdBtn] = React.useState('');
  const [wSProductPrice, setWsProductPrice] = React.useState(ZERO.toFixed(2));
  const [wSProductPictures, setWsProductPictures] = React.useState([]);
  const [wSProductCEP, setWsProductCEP] = React.useState(NOT_INFORMED);
  const [wSProductStreet, setWsProductStreet] = React.useState(NOT_INFORMED);
  const [wSProductNeighborhood, setWsProductNeighborhood] = React.useState(NOT_INFORMED);
  const [wSProductCity, setWsProductCity] = React.useState(NOT_INFORMED);
  const [wSProductUF, setWsProductUF] = React.useState(NOT_INFORMED);
  const [wSProductDDD, setWsProductDDD] = React.useState(NOT_INFORMED);
  const [wSProductMail, setWsProductMail] = React.useState('');
  const [wSProductCellphone, setWsProductCellphone] = React.useState(NOT_INFORMED);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (loginInfo.userId !== undefined && userInfo.userId === undefined) {
      const WANNA_SELL_ENDPOINT_1 = `https://izi-tech-back.herokuapp.com/user/${loginInfo.userId}`;
      // const WANNA_SELL_ENDPOINT_1_LOCAL = `http://localhost:4000/user/${loginInfo.userId}`;

      fetch(WANNA_SELL_ENDPOINT_1, { headers: { Authorization: loginInfo.authToken } })
        .then((result) => result.json())
        .then((cleanData) => {
          if (cleanData.code === StatusCodes.UNAUTHORIZED) {
            navigate('/');
            alerts('expiredSession');
          } else {
            dispatch(setAllUserInfoAC(cleanData));
          }
        });
    }
  }, []);

  React.useEffect(() => {
    if (userInfo.userId !== undefined) {
      setWsProductMail(userInfo.userMail);
    }
  }, [userInfo]);

  React.useEffect(() => {
    if (userInfo.userId !== undefined && userInfo.userCellphone !== null) {
      setWsProductCellphone(userInfo.userCellphone);
    }
  }, [userInfo]);

  React.useEffect(() => {
    if (userInfo.userAddress !== undefined && (
      userInfo.userAddress.infoFromCep !== null)) {
      setWsProductCEP(userInfo.userAddress.infoFromCep.cep);
      setWsProductStreet(userInfo.userAddress.infoFromCep.street);
      setWsProductNeighborhood(userInfo.userAddress.infoFromCep.neighborhood);
      setWsProductCity(userInfo.userAddress.infoFromCep.city);
      setWsProductUF(userInfo.userAddress.infoFromCep.uf);
      setWsProductDDD(userInfo.userAddress.infoFromCep.ddd);
    }
  }, [userInfo]);

  const newProductToPublish = {
    userId: loginInfo.userId,
    productTitle: wSProductTitle,
    productDescription: wSProductDescription,
    productAcceptChange: wSProductAcceptChange === false ? 0 : 1,
    productPrice: Number(wSProductPrice.replace('.', '').replace(',', '.')),
    productTypeId: Number(wSTypeOfProduct),
    productConditionId: Number(wSProductConditionRdBtn),
    cep: wSProductCEP,
    street: wSProductStreet,
    neighborhood: wSProductNeighborhood,
    city: wSProductCity,
    uf: wSProductUF,
    ddd: wSProductDDD,
  };

  const gapsValidation = () => {
    if (wSProductTitle === '') {
      return alerts('productTitle');
    } if (wSProductDescription.length < THIRTY) {
      return alerts('productDescription');
    } if (wSProductTopCategory === selectTopCategory) {
      return alerts('topCategorySelection');
    } if (wSProductLine === selectLineOfProduct) {
      return alerts('lineOfProductSelection');
    } if (wSTypeOfProduct === selectTypeOfProduct) {
      return alerts('typeOfProductSelection');
    } if (wSProductConditionRdBtn === '') {
      return alerts('productConditionSelection');
    } if (wSProductPrice === '0.00') {
      return alerts('productPrice');
    } if (wSProductPictures.length === 0) {
      return alerts('productPictures');
    } if (wSProductCEP === NOT_INFORMED) {
      return alerts('cepOutsideFormat');
    } if (wSProductCEP !== NOT_INFORMED && wSProductCity === NOT_INFORMED) {
      return alerts('cepBtnNotPressed');
    }
  };

  const publishNewProduct = () => {
    gapsValidation();

    if (wSProductTitle !== '' && wSProductDescription.length >= THIRTY
      && wSProductTopCategory !== selectTopCategory
      && wSProductLine !== selectLineOfProduct
      && wSTypeOfProduct !== selectTypeOfProduct
      && wSProductConditionRdBtn !== '' && wSProductPrice !== '0.00'
      && wSProductPictures.length !== 0 && wSProductCEP !== NOT_INFORMED
      && wSProductCity !== NOT_INFORMED) {
      console.log(newProductToPublish);
      navigate('/wannaSell/success');
    }
  };

  return (
    <div id="wannaSellPage">
      <Header />
      {loginInfo.userId !== undefined ? (
        <main id="wannaSellPageMain">
          <h1>se tá parado aí, melhor anunciar aqui!</h1>
          <form id="wannaSellForm">
            <WannaSellBlock1
              wSProductTitle={ wSProductTitle }
              setWsProductTitle={ setWsProductTitle }
              wSProductDescription={ wSProductDescription }
              setWsProductDescription={ setWsProductDescription }
              wSProductAcceptChange={ wSProductAcceptChange }
              setWSProductAcceptChange={ setWSProductAcceptChange }
            />
            <WannaSellBlock2
              wSProductTopCategory={ wSProductTopCategory }
              setWsProductTopCategory={ setWsProductTopCategory }
              wSProductLine={ wSProductLine }
              setWsProductLine={ setWsProductLine }
              wSTypeOfProduct={ wSTypeOfProduct }
              setWsTypeOfProduct={ setWsTypeOfProduct }
            />
            <WannaSellBlock3
              setWsProductConditionRdBtn={ setWsProductConditionRdBtn }
            />
            <WannaSellBlock4
              wSProductPrice={ wSProductPrice }
              setWsProductPrice={ setWsProductPrice }
            />
            <WannaSellBlock5
              wSProductPictures={ wSProductPictures }
              setWsProductPictures={ setWsProductPictures }
            />
            <WannaSellBlock6
              wSProductCEP={ wSProductCEP }
              setWsProductCEP={ setWsProductCEP }
              setWsProductStreet={ setWsProductStreet }
              wSProductNeighborhood={ wSProductNeighborhood }
              setWsProductNeighborhood={ setWsProductNeighborhood }
              wSProductCity={ wSProductCity }
              setWsProductCity={ setWsProductCity }
              wSProductUF={ wSProductUF }
              setWsProductUF={ setWsProductUF }
              wSProductDDD={ wSProductDDD }
              setWsProductDDD={ setWsProductDDD }
            />
            <WannaSellBlock7
              wSProductMail={ wSProductMail }
              wSProductCellphone={ wSProductCellphone }
              setWsProductCellphone={ setWsProductCellphone }
            />
            <WannaSellBlock8 />
            <button
              id="publishNewProductBtn"
              type="button"
              onClick={ publishNewProduct }
            >
              publicar!
            </button>
          </form>
        </main>)
        : (
          <main id="wannaSellPageMain">
            <section id="wannaSellBeforeLogin">
              <Link to="/login" className="extraLinks2">
                fazer login, agora mesmo!
              </Link>
              <Link to="/register" className="extraLinks2">
                ainda não faço parte da izi tech...
              </Link>
            </section>
            <img
              id="illustration1"
              src={ illustration1 }
              alt="Wanna Sell Before Login"
            />
          </main>)}

      {loginInfo.userId !== undefined && <Footer />}
    </div>
  );
}

export default WannaSell;

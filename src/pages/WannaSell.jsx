/* eslint-disable max-lines */
/* eslint-disable complexity */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { StatusCodes } from 'http-status-codes';
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
import {
  registerNewProductAC as registerNewProduct,
} from '../redux/actions/publishedProductsAC';
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
  const notInformed = 'não informado';

  const [isLoading, setIsLoading] = React.useState(false);
  const [wSProductTitle, setWsProductTitle] = React.useState(''); // 'ws' --> 'wannaSell'.
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
  const [wSProductCEP, setWsProductCEP] = React.useState('');
  const [wSProductNeighborhood, setWsProductNeighborhood] = React.useState('');
  const [wSProductCity, setWsProductCity] = React.useState('');
  const [wSProductUF, setWsProductUF] = React.useState('');
  const [wSProductDDD, setWsProductDDD] = React.useState('');
  const [wSProductMail, setWsProductMail] = React.useState('');
  const [wSProductCellphone, setWsProductCellphone] = React.useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const newProductObj = {
    productTitle: wSProductTitle,
    productDescription: wSProductDescription,
    productAcceptChange: wSProductAcceptChange,
    productTopCategory: wSProductTopCategory,
    productLine: wSProductLine,
    productType: wSTypeOfProduct,
    productCondition: wSProductConditionRdBtn,
    productPrice: wSProductPrice,
    productPictures: wSProductPictures,
    productLocation: {
      productCEP: wSProductCEP,
      productNeighborhood: wSProductNeighborhood,
      productCity: wSProductCity,
      productUF: wSProductUF,
      productDDD: wSProductDDD,
    },
    productContact: {
      productMail: wSProductMail,
      productCellphone: wSProductCellphone,
    },
  };

  React.useEffect(() => {
    if (userInfo.userId === undefined && loginInfo.userId !== undefined) {
      const WANNA_SELL_ENDPOINT_1 = `https://izi-tech-back.herokuapp.com/user/${loginInfo.userId}`;
      // const WANNA_SELL_ENDPOINT_1_LOCAL = `http://localhost:4000/user/${loginInfo.userId}`;

      setIsLoading(true);
      fetch(WANNA_SELL_ENDPOINT_1, { headers: { Authorization: loginInfo.authToken } })
        .then((result) => result.json())
        .then((cleanData) => {
          if (cleanData.code === StatusCodes.UNAUTHORIZED) {
            setIsLoading(false);
            navigate('/');
            alerts('expiredSession');
          } else {
            dispatch(setAllUserInfoAC(cleanData));
            setIsLoading(false);
          }
        });
    }
  }, []);

  React.useEffect(() => {
    if (userInfo.userId !== undefined) {
      setWsProductMail(userInfo.userMail);
      console.log(userInfo);
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
      setWsProductNeighborhood(userInfo.userAddress.infoFromCep.neighborhood);
      setWsProductCity(userInfo.userAddress.infoFromCep.city);
      setWsProductUF(userInfo.userAddress.infoFromCep.uf);
      setWsProductDDD(userInfo.userAddress.infoFromCep.ddd);
    }
  }, [userInfo]);

  const publishNewProduct = () => {
    const updatedObj = {
      userMail: currentUserMail,
      userPublishedProducts: [...userCurrentPublishedProductsArr, newProductObj],
    };

    if (wSProductTitle === '') {
      swal('Título', 'Por favor, forneça um para seu anúncio.', 'info');
    } if (wSProductDescription.length < THIRTY) {
      swal('Descrição', 'Por favor, forneça uma com, pelo menos, 30 caracteres.', 'info');
    } if (wSProductTopCategory === selectTopCategory) {
      swal('Categoria', 'Por favor, selecione uma para o produto.', 'info');
    } if (wSProductLine === selectLineOfProduct) {
      swal('Linha', 'Por favor, selecione uma para o produto.', 'info');
    } if (wSTypeOfProduct === selectTypeOfProduct) {
      swal('Tipo', 'Por favor, selecione um para o produto.', 'info');
    } if (wSProductConditionRdBtn === '') {
      swal('Estado', 'Por favor, selecione um para o produto.', 'info');
    } if (wSProductPrice === '0.00') {
      swal('Preço', 'Por favor, selecione um pelo qual deseja vender o produto.', 'info');
    } if (wSProductPictures.length === 0) {
      swal('Fotos', 'Por favor, forneça pelo menos uma foto do produto. '
        + 'Fotos originais chamam mais atenção dos compradores!', 'info');
    } if (wSProductCEP === notInformed) {
      swal('CEP', 'Por favor, informe um código postal válido.', 'info');
    } if (wSProductCEP !== notInformed && wSProductCity === notInformed) {
      swal('', 'Por favor, pressione o botão de pesquisar CEP, '
      + 'para que as informações de localização sejam preenchidas.', 'info');
    }

    if (wSProductTitle !== '' && wSProductDescription.length >= THIRTY
      && wSProductTopCategory !== selectTopCategory
      && wSProductLine !== selectLineOfProduct
      && wSTypeOfProduct !== selectTypeOfProduct
      && wSProductConditionRdBtn !== '' && wSProductPrice !== '0.00'
      && wSProductPictures.length !== 0 && wSProductCEP !== notInformed
      && wSProductCity !== notInformed) {
      dispatch(registerNewProduct(updatedObj, currentUserMail));
      navigate('/wannaSell/success');
    }
  };

  return (
    <div id="wannaSellPage">
      <Header />
      {console.log(isLoading)}
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

/* eslint-disable complexity */
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import swal from 'sweetalert';
import { AiOutlineRollback } from 'react-icons/ai';
import Header from '../components/header-components/Header';
import Footer from '../components/Footer';
import EditPublishedAdBlock1 from
'../components/edit-published-ad-form-components/EditPublishedAdBlock1';
import EditPublishedAdBlock2
from '../components/edit-published-ad-form-components/EditPublishedAdBlock2';
import EditPublishedAdBlock3
from '../components/edit-published-ad-form-components/EditPublishedAdBlock3';
import getDateOfPublication from '../shared-functions/getDateOfPublication';
import EditPublishedAdBlock4
from '../components/edit-published-ad-form-components/EditPublishedAdBlock4';
import EditPublishedAdBlock5
from '../components/edit-published-ad-form-components/EditPublishedAdBlock5';
import EditPublishedAdBlock6
from '../components/edit-published-ad-form-components/EditPublishedAdBlock6';
import EditPublishedAdBlock7
from '../components/edit-published-ad-form-components/EditPublishedAdBlock7';
import { updatePublishedProduct } from '../redux/actions/publishedProductsAC';
import '../styles/EditPublishedAd.css';

function EditPublishedAd() {
  const currentUserMail = useSelector((state) => state.user.userMail);
  const { productId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const THIRTY = 30;
  const selectTopCategory = 'selecionar categoria*';
  const selectLineOfProduct = 'selecionar linha de produto*';
  const selectTypeOfProduct = 'selecionar tipo de produto*';
  const notInformed = 'não informado';

  const publishedProductsMacroArr = useSelector((state) => state.publishedProducts
    .publishedProducts);
  const publishedAdInfoObj = publishedProductsMacroArr
    .find(({ userMail }) => userMail === currentUserMail).userPublishedProducts
    .find((productObj) => String(productObj.productId) === productId);

  const [userCurrentPublishedProductsArr, setUserCurrentPublishedProductsArr] = React
    .useState([]);

  const [editProductTitle, setEditProductTitle] = React.useState('');
  const [editProductDescription, setEditProductDescription] = React.useState('');
  const [editProductAcceptChange, setEditProductAcceptChange] = React.useState(false);
  const [editProductTopCategory, setEditProductTopCategory] = React.useState('');
  const [editProductLine, setEditProductLine] = React.useState('');
  const [editProductType, setEditProductType] = React.useState('');
  const [editProductCondition, setEditProductCondition] = React.useState('');
  const [editProductPrice, setEditProductPrice] = React.useState('');
  const [editProductPictures, setEditProductPictures] = React.useState([]);
  const [editProductCEP, setEditProductCEP] = React.useState('');
  const [editProductNeighborhood, setEditProductNeighborhood] = React.useState('');
  const [editProductCity, setEditProductCity] = React.useState('');
  const [editProductUF, setEditProductUF] = React.useState('');
  const [editProductDDD, setEditProductDDD] = React.useState('');
  const [editProductMail, setEditProductMail] = React.useState('');
  const [editProductCellphone, setEditProductCellphone] = React.useState('');

  const updatedProductObj = {
    productId: Number(productId),
    publicationDate: getDateOfPublication(),
    productTitle: editProductTitle,
    productDescription: editProductDescription,
    productAcceptChange: editProductAcceptChange,
    productTopCategory: editProductTopCategory,
    productLine: editProductLine,
    productType: editProductType,
    productCondition: editProductCondition,
    productPrice: editProductPrice,
    productPictures: editProductPictures,
    productLocation: {
      productCEP: editProductCEP,
      productNeighborhood: editProductNeighborhood,
      productCity: editProductCity,
      productUF: editProductUF,
      productDDD: editProductDDD,
    },
    productContact: {
      productMail: editProductMail,
      productCellphone: editProductCellphone,
    },
  };

  React.useEffect(() => {
    setUserCurrentPublishedProductsArr(publishedProductsMacroArr
      .find(({ userMail }) => userMail === currentUserMail).userPublishedProducts);

    setEditProductTitle(publishedAdInfoObj.productTitle);
    setEditProductDescription(publishedAdInfoObj.productDescription);
    setEditProductAcceptChange(publishedAdInfoObj.productAcceptChange);
    setEditProductTopCategory(publishedAdInfoObj.productTopCategory);
    setEditProductLine(publishedAdInfoObj.productLine);
    setEditProductType(publishedAdInfoObj.productType);
    setEditProductCondition(publishedAdInfoObj.productCondition);
    setEditProductPrice(publishedAdInfoObj.productPrice);
    setEditProductPictures(publishedAdInfoObj.productPictures);
    setEditProductCEP(publishedAdInfoObj.productLocation.productCEP);
    setEditProductNeighborhood(publishedAdInfoObj.productLocation.productNeighborhood);
    setEditProductCity(publishedAdInfoObj.productLocation.productCity);
    setEditProductUF(publishedAdInfoObj.productLocation.productUF);
    setEditProductDDD(publishedAdInfoObj.productLocation.productDDD);
    setEditProductMail(publishedAdInfoObj.productContact.productMail);
    setEditProductCellphone(publishedAdInfoObj.productContact.productCellphone);
  }, []);

  const editPublishedAd = () => {
    const updatedObj = {
      userMail: currentUserMail,
      userPublishedProducts: [...userCurrentPublishedProductsArr
        .filter((obj) => obj.productId !== Number(productId)), updatedProductObj],
    };

    if (editProductTitle === '') {
      swal('Título', 'Por favor, forneça um para seu anúncio.', 'info');
    } if (editProductDescription.length < THIRTY) {
      swal('Descrição', 'Por favor, forneça uma com, pelo menos, 30 caracteres.', 'info');
    } if (editProductTopCategory === selectTopCategory) {
      swal('Categoria', 'Por favor, selecione uma para o produto.', 'info');
    } if (editProductLine === selectLineOfProduct) {
      swal('Linha', 'Por favor, selecione uma para o produto.', 'info');
    } if (editProductType === selectTypeOfProduct) {
      swal('Tipo', 'Por favor, selecione um para o produto.', 'info');
    } if (editProductCondition === '') {
      swal('Estado', 'Por favor, selecione um para o produto.', 'info');
    } if (editProductPrice === '0.00') {
      swal('Preço', 'Por favor, selecione um pelo qual deseja vender o produto.', 'info');
    } if (editProductPictures.length === 0) {
      swal('Fotos', 'Por favor, forneça pelo menos uma foto do produto. '
        + 'Fotos originais chamam mais atenção dos compradores!', 'info');
    } if (editProductCEP === notInformed) {
      swal('CEP', 'Por favor, informe um código postal válido.', 'info');
    } if (editProductCEP !== notInformed && editProductCity === notInformed) {
      swal('', 'Por favor, pressione o botão de pesquisar CEP, '
      + 'para que as informações de localização sejam preenchidas.', 'info');
    }

    if (editProductTitle !== '' && editProductDescription.length >= THIRTY
      && editProductTopCategory !== selectTopCategory
      && editProductLine !== selectLineOfProduct
      && editProductType !== selectTypeOfProduct
      && editProductCondition !== '' && editProductPrice !== '0.00'
      && editProductPictures.length !== 0 && editProductCEP !== notInformed
      && editProductCity !== notInformed) {
      dispatch(updatePublishedProduct(updatedObj,
        currentUserMail));
      navigate('/wannaSell/success');
    }
  };

  return (
    <div id="editPublishedAdPage">
      <Header />
      <main id="editPublishedAdPageMain">
        <h1>sempre bom atualizar seus anúncios!</h1>
        <form id="editPublishedAdForm">
          <EditPublishedAdBlock1
            editProductTitle={ editProductTitle }
            setEditProductTitle={ setEditProductTitle }
            editProductDescription={ editProductDescription }
            setEditProductDescription={ setEditProductDescription }
            editProductAcceptChange={ editProductAcceptChange }
            setEditProductAcceptChange={ setEditProductAcceptChange }
          />
          <EditPublishedAdBlock2
            editProductTopCategory={ editProductTopCategory }
            setEditProductTopCategory={ setEditProductTopCategory }
            editProductLine={ editProductLine }
            setEditProductLine={ setEditProductLine }
            editProductType={ editProductType }
            setEditProductType={ setEditProductType }
          />
          <EditPublishedAdBlock3
            editProductCondition={ editProductCondition }
            setEditProductCondition={ setEditProductCondition }
          />
          <EditPublishedAdBlock4
            editProductPrice={ editProductPrice }
            setEditProductPrice={ setEditProductPrice }
          />
          <EditPublishedAdBlock5
            publishedAdInfoObj={ publishedAdInfoObj }
            editProductPictures={ editProductPictures }
            setEditProductPictures={ setEditProductPictures }
          />
          <EditPublishedAdBlock6
            editProductCEP={ editProductCEP }
            setEditProductCEP={ setEditProductCEP }
            editProductNeighborhood={ editProductNeighborhood }
            setEditProductNeighborhood={ setEditProductNeighborhood }
            editProductCity={ editProductCity }
            setEditProductCity={ setEditProductCity }
            editProductUF={ editProductUF }
            setEditProductUF={ setEditProductUF }
            editProductDDD={ editProductDDD }
            setEditProductDDD={ setEditProductDDD }
          />
          <EditPublishedAdBlock7
            currentUserMail={ currentUserMail }
            editProductCellphone={ editProductCellphone }
            setEditProductCellphone={ setEditProductCellphone }
          />
          <div id="editPublishedAdBtnsContainer">
            <button
              id="publishEditAdBtn"
              type="button"
              onClick={ editPublishedAd }
            >
              salvar modificações e publicar!
            </button>
            <button
              id="editPublishedAdCancelBtn"
              type="button"
              onClick={ () => navigate('/myAds/published') }
            >
              cancelar
              {' '}
              <AiOutlineRollback />
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default EditPublishedAd;

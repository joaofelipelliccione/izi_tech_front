import React from 'react';
import swal from 'sweetalert';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineRollback } from 'react-icons/ai';
import Header from '../components/header-components/Header';
import RemovePublishedAdBlock1
from '../components/remove-published-ad-components/RemovePublishedAdBlock1';
import { removePublishedProduct } from '../redux/actions/publishedProductsAC';
import '../styles/RemovePublishedAd.css';

function RemovePublishedAd() {
  const currentUserMail = useSelector((state) => state.user.userMail);
  const { productId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const publishedProductsMacroArr = useSelector((state) => state.publishedProducts
    .publishedProducts);

  const [removalMotiveRdBtns, setRemovalMotiveRdBtns] = React.useState('');
  const [userCurrentPublishedProductsArr, setUserCurrentPublishedProductsArr] = React
    .useState([]);

  React.useEffect(() => {
    setUserCurrentPublishedProductsArr(publishedProductsMacroArr
      .find(({ userMail }) => userMail === currentUserMail).userPublishedProducts);
  }, []);

  const removePublishedAd = () => {
    const updatedObj = {
      userMail: currentUserMail,
      userPublishedProducts: [...userCurrentPublishedProductsArr
        .filter((obj) => obj.productId !== Number(productId))],
    };

    if (removalMotiveRdBtns === '') {
      swal('Por favor, marque uma das opções abaixo.', '', 'info');
    }

    if (removalMotiveRdBtns !== '') {
      dispatch(removePublishedProduct(updatedObj,
        currentUserMail));
      navigate('/myAds/published');
    }
  };

  return (
    <div id="removePublishedAdPage">
      <Header />
      <main id="removePublishedAdPageMain">
        <div id="removePublishedAdMessage">
          <h1>excluir anúncio</h1>
          <h2>Pera aí! Antes de excluir, conta para gente se conseguiu vender...</h2>
        </div>
        <form id="removePublishedAdForm">
          <RemovePublishedAdBlock1
            setRemovalMotiveRdBtns={ setRemovalMotiveRdBtns }
          />
          <div id="removePublishedAdBtnsContainer">
            <button
              id="removePublishedAdCancelBtn"
              type="button"
              onClick={ () => navigate('/myAds/published') }
            >
              cancelar
              {' '}
              <AiOutlineRollback />
            </button>
            <button
              id="removePublishedAdBtn"
              type="button"
              onClick={ removePublishedAd }
            >
              concluir remoção
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default RemovePublishedAd;

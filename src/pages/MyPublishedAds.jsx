import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import Header from '../components/header-components/Header';
import PublishedAndExpiredLinks from '../components/PublishedAndExpiredLinks';
import Footer from '../components/Footer';
import illustration1 from '../illustrations/notFound.svg';
import '../styles/MyPublishedAds.css';

function MyPublishedAds() {
  const currentUserMail = useSelector((state) => state.user.userMail);
  const publishedProductsMacroArr = useSelector((state) => state.publishedProducts
    .publishedProducts);
  const currentUserPublishedAdsArr = publishedProductsMacroArr
    .find(({ userMail }) => userMail === currentUserMail).userPublishedProducts
    .sort((productA, productB) => productB.productId - productA.productId);

  const navigate = useNavigate();

  const [userPublishedAdsArr, setUserPublishedAdsArr] = React.useState([]);

  React.useEffect(() => {
    setUserPublishedAdsArr(currentUserPublishedAdsArr);
  }, []);

  return (
    <div id="myPublishedAdsPage">
      <Header />
      <main id="myPublishedAdsPageMain">
        <section id="myPublishedAdsContainer1">
          <h2>meus anúncios</h2>
          <div id="myPublishedAdsContainer1-1">
            <PublishedAndExpiredLinks />
            {userPublishedAdsArr.length !== 0 ? (
              <div id="myPublishedAdsScrollWrapper">
                {userPublishedAdsArr.map((adObj) => (
                  <div key={ adObj.productId } id="eachUserPublishedAdCard">
                    <img
                      src={ adObj.productPictures[0] }
                      alt="foto principal do produto"
                    />
                    <div id="eachUserPublishedAdCardBlock1">
                      <h3>{adObj.productTitle}</h3>
                      <div id="eachUserPublishedAdCardBlock1-1">
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
                    </div>
                    <div id="eachUserPublishedAdCardBlock2">
                      <p>{`R$ ${adObj.productPrice}`}</p>
                      <div id="eachUserPublishedAdCardBlock2-1">
                        <button
                          type="button"
                          id="editAdBtn"
                          onClick={
                            () => navigate(`/myAds/published/edit/${adObj.productId}`)
                          }
                        >
                          <FaRegEdit />
                        </button>
                        <button
                          type="button"
                          id="deleteAdBtn"
                          onClick={
                            () => navigate(`/myAds/published/remove/${adObj.productId}`)
                          }
                        >
                          <RiDeleteBin5Line />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div id="noPublishedAdsContainer">
                <h2>você ainda não possui anúncios ativos...</h2>
                <img
                  src={ illustration1 }
                  alt="No published Ads"
                />
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default MyPublishedAds;

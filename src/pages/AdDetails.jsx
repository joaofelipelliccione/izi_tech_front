import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../components/header-components/Header';
import AdDetailsBlock1 from '../components/ad-details-components/AdDetailsBlock1';
import '../styles/AdDetails.css';
import AdDetailsBlock2 from '../components/ad-details-components/AdDetailsBlock2';
// import Footer from '../components/Footer';

function AdDetails() {
  const { productId } = useParams();
  const publishedProductsMacroArr = useSelector((state) => state.publishedProducts
    .publishedProducts);
  const productInfoObj = publishedProductsMacroArr
    .map(({ userPublishedProducts }) => userPublishedProducts)
    .reduce((acc, currMiniArr) => acc.concat(currMiniArr))
    .find((product) => product.productId === Number(productId));

  const [isShareAdMessageHidden, setIsShareAdMessageHidden] = React.useState(true);

  return (
    <div id="adDetailsPage">
      {console.log(productInfoObj)}
      <Header />
      <main id="adDetailsPageMain">
        <span
          id="adDetailsShareLinkCopiedNotification"
          hidden={ isShareAdMessageHidden }
        >
          link copiado!
        </span>
        <section id="adDetailsContainer1">
          <AdDetailsBlock1
            productTopCategory={ productInfoObj.productTopCategory }
            productLine={ productInfoObj.productLine }
            productType={ productInfoObj.productType }
            productTitle={ productInfoObj.productTitle }
            publicationDate={ productInfoObj.publicationDate }
            productCondition={ productInfoObj.productCondition }
            productAcceptChange={ productInfoObj.productAcceptChange }
            productPrice={ productInfoObj.productPrice }
          />
          <AdDetailsBlock2
            productId={ productInfoObj.productId }
            productPictures={ productInfoObj.productPictures }
            productLocation={ productInfoObj.productLocation }
            setIsShareAdMessageHidden={ setIsShareAdMessageHidden }
            productDescription={ productInfoObj.productDescription }
            productMail={ productInfoObj.productContact.productMail }
            productCellphone={ productInfoObj.productContact.productCellphone }
          />
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default AdDetails;

import React from 'react';
// import PropTypes from 'prop-types';
// import HomeAdCard from './HomeAdCard';
import illustration1 from '../../illustrations/notFound.svg';

// function HomeAdsDisplay({ adsToRender, setIsShareAdMessageHidden }) {
function HomeAdsDisplay() {
  return (
    <section id="homeProductsDisplayScrollWrapper">
      {/* {adsToRender.length > 0 ? (
        <HomeAdCard
          adsToRender={ adsToRender }
          setIsShareAdMessageHidden={ setIsShareAdMessageHidden }
        />)
        : (
          <div id="homeNoAdsFound">
            <h3>nenhum anúncio encontrado...</h3>
            <img
              src={ illustration1 }
              alt="No Ads Found"
            />
          </div>
        )} */}

      <div id="homeNoAdsFound">
        <h3>nenhum anúncio encontrado...</h3>
        <img
          src={ illustration1 }
          alt="No Ads Found"
        />
      </div>
    </section>
  );
}

// HomeAdsDisplay.propTypes = {
//   adsToRender: PropTypes.arrayOf(PropTypes.object).isRequired,
//   setIsShareAdMessageHidden: PropTypes.func.isRequired,
// };

export default HomeAdsDisplay;

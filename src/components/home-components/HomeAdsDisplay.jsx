import React from 'react';
import PropTypes from 'prop-types';
import HomeAdCard from './HomeAdCard';
import noAdsFoundIllustration from '../../illustrations/notFound.svg';

function HomeAdsDisplay({ isLoading, adsToRender, setIsShareAdMessageHidden }) {
  return (
    <section id="homeProductsDisplayScrollWrapper">
      {adsToRender.length > 0 ? (
        <HomeAdCard
          adsToRender={ adsToRender }
          setIsShareAdMessageHidden={ setIsShareAdMessageHidden }
        />)
        : (
          <div id="homeNoAdsFound">
            {!isLoading && <h3>nenhum anúncio encontrado...</h3>}
            {!isLoading ? (
              <img
                src={ noAdsFoundIllustration }
                alt="No Ads Found"
              />
            ) : (<div id="homeNoAdsFoundLoader" />)}
          </div>
        )}
    </section>
  );
}

HomeAdsDisplay.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  adsToRender: PropTypes.arrayOf(PropTypes.object).isRequired,
  setIsShareAdMessageHidden: PropTypes.func.isRequired,
};

export default HomeAdsDisplay;

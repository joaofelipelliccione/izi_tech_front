import React from 'react';
import PropTypes from 'prop-types';
import AdDetailsPicsCarousel from './AdDetailsPicsCarousel';
import AdDetailsFavAndShare from './AdDetailsFavAndShare';
import AdDetailsContactInfo from './AdDetailsContactInfo';

function AdDetailsBlock2({ productId, productPictures, productLocation,
  setIsShareAdMessageHidden, productDescription,
  productMail, productCellphone }) {
  return (
    <div id="adDetailsBlock2">
      <div id="adDetailsBlock2-1">
        <AdDetailsPicsCarousel
          productPictures={ productPictures }
        />
        <AdDetailsFavAndShare
          productId={ productId }
          productLocation={ productLocation }
          setIsShareAdMessageHidden={ setIsShareAdMessageHidden }
        />
        <textarea
          id="adDetailsDescription"
          disabled
          readOnly
          rows="9"
          value={ productDescription }
        />
      </div>
      <div id="adDetailsBlock2-2">
        <AdDetailsContactInfo
          productMail={ productMail }
          productCellphone={ productCellphone }
        />
      </div>
    </div>
  );
}

AdDetailsBlock2.propTypes = {
  productId: PropTypes.number.isRequired,
  productPictures: PropTypes.arrayOf(PropTypes.string).isRequired,
  productLocation: PropTypes.objectOf(PropTypes.string).isRequired,
  setIsShareAdMessageHidden: PropTypes.func.isRequired,
  productDescription: PropTypes.string.isRequired,
  productMail: PropTypes.string.isRequired,
  productCellphone: PropTypes.string.isRequired,
};

export default AdDetailsBlock2;

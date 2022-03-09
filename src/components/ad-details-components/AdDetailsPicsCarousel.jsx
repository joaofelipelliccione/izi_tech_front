import React from 'react';
import PropTypes from 'prop-types';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

function AdDetailsPicsCarousel({ productPictures }) {
  const [currentPic, setCurrentPic] = React.useState(0);

  const goToNextPicture = () => {
    if (currentPic !== productPictures.length - 1) {
      setCurrentPic(currentPic + 1);
    }
    if (currentPic === productPictures.length - 1) {
      setCurrentPic(0);
    }
  };

  const goToLastPicture = () => {
    if (currentPic !== 0) {
      setCurrentPic(currentPic - 1);
    }
    if (currentPic === 0) {
      setCurrentPic(productPictures.length - 1);
    }
  };

  return (
    <div id="adDetailsPicsCarouselContainer">
      {productPictures.length !== 1
      && (
        <button
          type="button"
          onClick={ goToLastPicture }
        >
          <BsFillArrowLeftCircleFill />
        </button>
      )}
      <img
        src={ productPictures[currentPic] }
        alt="foto principal do produto"
      />
      {productPictures.length !== 1
      && (
        <button
          type="button"
          onClick={ goToNextPicture }
        >
          <BsFillArrowRightCircleFill />
        </button>
      )}
    </div>
  );
}

AdDetailsPicsCarousel.propTypes = {
  productPictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AdDetailsPicsCarousel;

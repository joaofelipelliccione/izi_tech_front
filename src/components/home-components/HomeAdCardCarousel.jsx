import React from 'react';
import PropTypes from 'prop-types';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

function HomeAdCardCarousel({ productPicsArr }) {
  const [currentPic, setCurrentPic] = React.useState(0);

  const goToNextPicture = () => {
    if (currentPic !== productPicsArr.length - 1) {
      setCurrentPic(currentPic + 1);
    }
    if (currentPic === productPicsArr.length - 1) {
      setCurrentPic(0);
    }
  };

  const goToLastPicture = () => {
    if (currentPic !== 0) {
      setCurrentPic(currentPic - 1);
    }
    if (currentPic === 0) {
      setCurrentPic(productPicsArr.length - 1);
    }
  };

  return (
    <div id="homeAdCardCarouselContainer">
      {productPicsArr.length !== 1
      && (
        <button
          type="button"
          onClick={ goToLastPicture }
        >
          <BsFillArrowLeftCircleFill />
        </button>
      )}
      <img
        src={ productPicsArr[currentPic] }
        alt="foto principal do produto"
      />
      {productPicsArr.length !== 1
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

HomeAdCardCarousel.propTypes = {
  productPicsArr: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HomeAdCardCarousel;

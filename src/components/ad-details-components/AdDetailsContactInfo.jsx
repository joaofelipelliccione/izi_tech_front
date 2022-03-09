import React from 'react';
import PropTypes from 'prop-types';
import { FiMail } from 'react-icons/fi';
import { BsTelephoneOutbound, BsWhatsapp } from 'react-icons/bs';

function AdDetailsContactInfo({ productMail, productCellphone }) {
  const NOT_INFORMED = 'não informado';
  const [isCellphoneNumberHidden, setIsCellphoneNumberHidden] = React.useState(true);

  const onClickCellphoneBtn = () => {
    const TIMER = 90000;
    setIsCellphoneNumberHidden(false);
    setTimeout(() => setIsCellphoneNumberHidden(true), TIMER);
  };

  return (
    <div id="adDetailsContactInfo">
      <h4>contatar vendedor:</h4>
      <div id="adDetailsContactInfoBtnsContainer">
        <button
          type="button"
        >
          <a
            href={ `mailto:${productMail}` }
            target="_blank"
            rel="noreferrer"
          >
            <FiMail />
          </a>
        </button>
        <button
          type="button"
          disabled={ productCellphone === NOT_INFORMED }
        >
          <a
            className={ productCellphone === NOT_INFORMED && 'notInformedCellphone' }
            href={ `https://wa.me/55${productCellphone.replace(/[^\d]+/g, '')}` }
            target="_blank"
            rel="noreferrer"
          >
            <BsWhatsapp />
          </a>
        </button>
        <button
          type="button"
          onClick={ onClickCellphoneBtn }
          disabled={ productCellphone === NOT_INFORMED }
        >
          <a
            className={ productCellphone === NOT_INFORMED && 'notInformedCellphone' }
            href={ `tel:+${productCellphone.replace(/[^\d]+/g, '')}` }
          >
            <BsTelephoneOutbound />
          </a>
        </button>
      </div>
      <span
        hidden={ isCellphoneNumberHidden }
      >
        { productCellphone }
      </span>
    </div>
  );
}

AdDetailsContactInfo.propTypes = {
  productMail: PropTypes.string.isRequired,
  productCellphone: PropTypes.string.isRequired,
};

export default AdDetailsContactInfo;

import React from 'react';
import PropTypes from 'prop-types';

function WannaSellBlock7({ wSProductMail,
  wSProductCellphone }) {
  return (
    <div id="wannaSellBlock7">
      <h4>contato:</h4>
      <div id="wannaSellBlock7-1">
        <output>{wSProductMail}</output>
        <output>
          {`celular: ${wSProductCellphone}`}
        </output>
      </div>
    </div>
  );
}

WannaSellBlock7.propTypes = {
  wSProductMail: PropTypes.string.isRequired,
  wSProductCellphone: PropTypes.string.isRequired,
};

export default WannaSellBlock7;

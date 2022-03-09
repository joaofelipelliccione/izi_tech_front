import React from 'react';
import PropTypes from 'prop-types';

function WannaSellBlock1({
  wSProductTitle, setWsProductTitle,
  wSProductDescription, setWsProductDescription,
  wSProductAcceptChange, setWSProductAcceptChange,
}) {
  return (
    <div id="wannaSellBlock1">
      <label htmlFor="wSProductTitle">
        <input
          id="wSProductTitle"
          type="text"
          name="wSProductTitle"
          value={ wSProductTitle }
          onChange={ ({ target }) => setWsProductTitle(target.value) }
          placeholder="título* - Ex: Samsung Galaxy S20 Preto de 256 GB"
        />
      </label>
      <label htmlFor="wSProductDescription">
        <textarea
          id="wSProductDescription"
          name="wSProductDescription"
          value={ wSProductDescription }
          onChange={ ({ target }) => setWsProductDescription(target.value) }
          placeholder="descrição*"
          rows="8"
        />
      </label>
      <label htmlFor="wSProductAcceptChange">
        <input
          id="wSProductAcceptChange"
          type="checkbox"
          name="wSProductAcceptChange"
          checked={ wSProductAcceptChange }
          onChange={ ({ target }) => setWSProductAcceptChange(target.checked) }
        />
        considero troca em outros produtos tecnológicos!
      </label>
    </div>
  );
}

WannaSellBlock1.propTypes = {
  wSProductTitle: PropTypes.string.isRequired,
  setWsProductTitle: PropTypes.func.isRequired,
  wSProductDescription: PropTypes.string.isRequired,
  setWsProductDescription: PropTypes.func.isRequired,
  wSProductAcceptChange: PropTypes.bool.isRequired,
  setWSProductAcceptChange: PropTypes.func.isRequired,
};

export default WannaSellBlock1;

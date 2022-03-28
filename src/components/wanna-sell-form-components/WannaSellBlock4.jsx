import React from 'react';
import PropTypes from 'prop-types';

function WannaSellBlock4({
  wSProductPrice, setWsProductPrice,
}) {
  const formatToCurrency = () => { // REF: https://www.blogson.com.br/formatar-moeda-dinheiro-com-javascript-do-jeito-facil/
    const ZERO = 0;
    const SIX = 6;
    const ELEVEN = 11;
    let valor = wSProductPrice;
    console.log(valor.length);

    valor += '';
    valor = parseInt(valor.replace(/[\D]+/g, ''), 10);
    valor += '';
    valor = valor.replace(/([0-9]{2})$/g, ',$1');

    if (valor.length > SIX) {
      valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2');
    }
    if (valor.length >= ELEVEN) {
      valor = valor.replace(/([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g, '.$1.$2,$3');
    }

    setWsProductPrice(valor);

    if (valor === 'NaN' || valor === '0') {
      setWsProductPrice(ZERO.toFixed(2));
    }
  };

  return (
    <div id="wannaSellBlock4">
      <label htmlFor="wSProductPrice">
        R$
        <input
          id="wSProductPrice"
          type="text"
          name="wSProductPrice"
          value={ wSProductPrice }
          onChange={ ({ target }) => setWsProductPrice((target.value)) }
          onKeyUp={ () => formatToCurrency() }
        />
      </label>
    </div>
  );
}

WannaSellBlock4.propTypes = {
  wSProductPrice: PropTypes.string.isRequired,
  setWsProductPrice: PropTypes.func.isRequired,
};

export default WannaSellBlock4;

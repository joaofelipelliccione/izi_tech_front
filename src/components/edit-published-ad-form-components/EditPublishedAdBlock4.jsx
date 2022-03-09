import React from 'react';
import PropTypes from 'prop-types';

function EditPublishedAdBlock4({
  editProductPrice, setEditProductPrice,
}) {
  const formatToCurrency = () => { // REF: https://www.blogson.com.br/formatar-moeda-dinheiro-com-javascript-do-jeito-facil/
    const ZERO = 0;
    const SIX = 6;
    let valor = editProductPrice;

    valor += '';
    valor = parseInt(valor.replace(/[\D]+/g, ''), 10);
    valor += '';
    valor = valor.replace(/([0-9]{2})$/g, ',$1');

    if (valor.length > SIX) {
      valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2');
    }

    setEditProductPrice(valor);

    if (valor === 'NaN' || valor === '0') {
      setEditProductPrice(ZERO.toFixed(2));
    }
  };

  return (
    <div id="editPublishedAdBlock4">
      <label htmlFor="editProductPrice">
        R$
        <input
          id="editProductPrice"
          type="text"
          name="editProductPrice"
          value={ editProductPrice }
          onChange={ ({ target }) => setEditProductPrice((target.value)) }
          onKeyUp={ () => formatToCurrency() }
        />
      </label>
    </div>
  );
}

EditPublishedAdBlock4.propTypes = {
  editProductPrice: PropTypes.string.isRequired,
  setEditProductPrice: PropTypes.func.isRequired,
};

export default EditPublishedAdBlock4;

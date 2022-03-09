import React from 'react';
import PropTypes from 'prop-types';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

function AdDetailsBlock1({ productTopCategory, productLine,
  productType, productTitle, publicationDate,
  productCondition, productAcceptChange, productPrice }) {
  const productConditionExplanation = ({ target }) => {
    const condition = target.id;

    if (condition === 'AA') {
      swal('AA - nunca usado: produto zero', 'Deve apresentar todos os acessórios '
      + 'originais em sua respectiva caixa oficial, lacrada.', '');
    }
    if (condition === 'A') {
      swal('A - como novo: produto em excelente condição', 'Deve apresentar todos os '
      + 'acessórios originais em sua respectiva caixa oficial.', '');
    }
    if (condition === 'B') {
      swal('B - bom estado: produto em boas condições', 'Deve apresentar todos os '
      + 'acessórios originais, essenciais para pleno funcionamento. '
      + 'Não precisa acompanhar a caixa original.', '');
    }
    if (condition === 'C') {
      swal('C - peça: parte funcional oriunda de aparelho quebrado.', 'Exemplo: display '
      + 'de um notebook cuja placa não apresenta conserto.', '');
    }
  };

  return (
    <div id="adDetailsBlock1">
      <div id="adDetailsBlock1-1">
        <div id="adDetailsBlock1-1-1">
          <Link to="/">
            {productTopCategory}
          </Link>
          <span>
            {` | ${productLine} | ${productType}`}
          </span>
        </div>
        <h1>{ productTitle }</h1>
        <span id="adDetailsPublicationDate">
          {`publicado em ${publicationDate}`}
        </span>
      </div>
      <button
        id={ productCondition }
        className="adDetailsProductCondition"
        type="button"
        onClick={ (e) => productConditionExplanation(e) }
      >
        {`condição: ${productCondition}`}
      </button>
      <p
        id="adDetailsProductAcceptChange"
      >
        {productAcceptChange ? 'considera troca' : 'somente venda'}
      </p>
      <p id="adDetailsProductPrice">{`R$ ${productPrice}`}</p>
    </div>
  );
}

AdDetailsBlock1.propTypes = {
  productTopCategory: PropTypes.string.isRequired,
  productLine: PropTypes.string.isRequired,
  productType: PropTypes.string.isRequired,
  productTitle: PropTypes.string.isRequired,
  publicationDate: PropTypes.string.isRequired,
  productCondition: PropTypes.string.isRequired,
  productAcceptChange: PropTypes.bool.isRequired,
  productPrice: PropTypes.string.isRequired,
};

export default AdDetailsBlock1;

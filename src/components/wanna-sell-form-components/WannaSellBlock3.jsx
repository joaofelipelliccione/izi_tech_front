import React from 'react';
import PropTypes from 'prop-types';

function WannaSellBlock3({
  setWsProductConditionRdBtn,
}) {
  return (
    <div id="wannaSellBlock3">
      <h4>condição do produto:*</h4>
      <div id="wannaSellBlock3-1">
        <label
          htmlFor="productConditionRdBtn0"
          className="productConditionRdBtns"
        >
          <input
            id="productConditionRdBtn0"
            name="productConditionRdBtns"
            type="radio"
            value={ 1 }
            onChange={ ({ target }) => setWsProductConditionRdBtn(target.value) }
          />
          <span>AA - nunca usado: produto zero. </span>
          Deve apresentar todos os acessórios originais em sua respectiva
          caixa oficial, lacrada.
        </label>
        <label
          htmlFor="productConditionRdBtn1"
          className="productConditionRdBtns"
        >
          <input
            id="productConditionRdBtn1"
            name="productConditionRdBtns"
            type="radio"
            value={ 2 }
            onChange={ ({ target }) => setWsProductConditionRdBtn(target.value) }
          />
          <span>A - como novo: produto em excelente condição. </span>
          Deve apresentar todos os acessórios originais em sua respectiva
          caixa oficial.
        </label>
        <label
          htmlFor="productConditionRdBtn2"
          className="productConditionRdBtns"
        >
          <input
            id="productConditionRdBtn2"
            name="productConditionRdBtns"
            type="radio"
            value={ 3 }
            onChange={ ({ target }) => setWsProductConditionRdBtn(target.value) }
          />
          <span>B - bom estado: produto em boas condições. </span>
          Deve apresentar todos os acessórios originais, essenciais para
          pleno funcionamento. Não precisa acompanhar a caixa original.
        </label>
        <label
          htmlFor="productConditionRdBtn3"
          className="productConditionRdBtns"
        >
          <input
            id="productConditionRdBtn3"
            name="productConditionRdBtns"
            type="radio"
            value={ 4 }
            onChange={ ({ target }) => setWsProductConditionRdBtn(target.value) }
          />
          <span>
            C - peça: parte funcional oriunda de aparelho quebrado.
            {' '}
          </span>
          Exemplo: display de um notebook cuja placa não apresenta conserto.
        </label>
      </div>
    </div>
  );
}

WannaSellBlock3.propTypes = {
  setWsProductConditionRdBtn: PropTypes.func.isRequired,
};

export default WannaSellBlock3;

import React from 'react';
import PropTypes from 'prop-types';

function EditPublishedAdBlock3({
  editProductCondition, setEditProductCondition,
}) {
  return (
    <div id="editPublishedAdBlock3">
      <h4>condição do produto:*</h4>
      <div id="editPublishedAdBlock3-1">
        <label
          htmlFor="productConditionRdBtn0"
          className="productConditionRdBtns"
        >
          <input
            id="productConditionRdBtn0"
            name="productConditionRdBtns"
            type="radio"
            value="AA"
            onChange={ ({ target }) => setEditProductCondition(target.value) }
            checked={ editProductCondition === 'AA' }
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
            value="A"
            onChange={ ({ target }) => setEditProductCondition(target.value) }
            checked={ editProductCondition === 'A' }
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
            value="B"
            onChange={ ({ target }) => setEditProductCondition(target.value) }
            checked={ editProductCondition === 'B' }
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
            value="C"
            onChange={ ({ target }) => setEditProductCondition(target.value) }
            checked={ editProductCondition === 'C' }
          />
          <span>
            C - mau estado: produto em condições não muito favoráveis, porém funcionando.
            {' '}
          </span>
          Deve apresentar todos os acessórios originais, essenciais para
          pleno funcionamento. Não precisam acompanhar a caixa original.
        </label>
      </div>
    </div>
  );
}

EditPublishedAdBlock3.propTypes = {
  editProductCondition: PropTypes.string.isRequired,
  setEditProductCondition: PropTypes.func.isRequired,
};

export default EditPublishedAdBlock3;

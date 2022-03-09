import React from 'react';
import swal from 'sweetalert';
import PropTypes from 'prop-types';

function WannaSellBlock7({ wSProductMail,
  wSProductCellphone, setWsProductCellphone }) {
  const notInformed = 'não informado';

  const cellphoneMask = (cellphoneNumber) => {
    const eleven = 11;
    const cleanNumber = cellphoneNumber.replace(/[^\d]/g, ''); // Retira tudo o que não for digito numérico.
    const formattedNumber = cleanNumber.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'); // Deixa o valor imputado no seguinte formato: 22451-130.

    if (cellphoneNumber.length === eleven) {
      setWsProductCellphone(formattedNumber);
    }

    if (cellphoneNumber.length < eleven || formattedNumber.length < eleven) {
      setWsProductCellphone(notInformed);
      swal('Celular', 'O número deve incluir o DDD, porém '
        + 'sem hífen e/ou parênteses. Favor revisá-lo.', 'info');
    }
  };

  return (
    <div id="wannaSellBlock7">
      <h4>contato:</h4>
      <div id="wannaSellBlock7-1">
        <output>{wSProductMail}</output>
        <label htmlFor="wannaSellProductCellphoneInput">
          celular:
          <input
            id="wannaSellProductCellphone"
            type="text"
            name="wannaSellProductCellphone"
            value={ wSProductCellphone }
            onChange={ ({ target }) => setWsProductCellphone(target.value) }
            onBlur={ () => cellphoneMask(wSProductCellphone) }
            placeholder="21912345678"
            maxLength="11"
          />
        </label>
      </div>
    </div>
  );
}

WannaSellBlock7.propTypes = {
  wSProductMail: PropTypes.string.isRequired,
  wSProductCellphone: PropTypes.string.isRequired,
  setWsProductCellphone: PropTypes.func.isRequired,
};

export default WannaSellBlock7;

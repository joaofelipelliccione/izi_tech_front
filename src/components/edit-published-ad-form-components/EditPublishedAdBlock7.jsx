import React from 'react';
import PropTypes from 'prop-types';
import swal from 'sweetalert';

function EditPublishedAdBlock7({ currentUserMail,
  editProductCellphone, setEditProductCellphone }) {
  const notInformed = 'não informado';

  const cellphoneMask = (cellphoneNumber) => {
    const eleven = 11;
    const cleanNumber = cellphoneNumber.replace(/[^\d]/g, ''); // Retira tudo o que não for digito numérico.
    const formattedNumber = cleanNumber.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'); // Deixa o valor imputado no seguinte formato: 22451-130.

    if (cellphoneNumber.length === eleven) {
      setEditProductCellphone(formattedNumber);
    }

    if (cellphoneNumber.length < eleven || formattedNumber.length < eleven) {
      setEditProductCellphone(notInformed);
      swal('Celular', 'O número deve incluir o DDD, porém '
        + 'sem hífen e/ou parênteses. Favor revisá-lo.', 'info');
    }
  };

  return (
    <div id="editPublishedAdBlock7">
      <h4>contato:</h4>
      <div id="editPublishedAdBlock7-1">
        <output>{currentUserMail}</output>
        <label htmlFor="editPublishedAdCellphoneInput">
          celular:
          <input
            id="editPublishedAdCellphoneInput"
            type="text"
            name="editPublishedAdCellphoneInput"
            value={ editProductCellphone }
            onChange={ ({ target }) => setEditProductCellphone(target.value) }
            onBlur={ () => cellphoneMask(editProductCellphone) }
            placeholder="21912345678"
            maxLength="11"
          />
        </label>
      </div>
    </div>
  );
}

EditPublishedAdBlock7.propTypes = {
  currentUserMail: PropTypes.string.isRequired,
  editProductCellphone: PropTypes.string.isRequired,
  setEditProductCellphone: PropTypes.func.isRequired,
};

export default EditPublishedAdBlock7;

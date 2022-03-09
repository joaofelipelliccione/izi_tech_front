import React from 'react';
import PropTypes from 'prop-types';
import swal from 'sweetalert';
import { BsSearch } from 'react-icons/bs';
import cepValidator from '../../shared-functions/cepValidator';

function EditPublishedAdBlock6({
  editProductCEP, setEditProductCEP,
  editProductNeighborhood, setEditProductNeighborhood,
  editProductCity, setEditProductCity,
  editProductUF, setEditProductUF,
  editProductDDD, setEditProductDDD }) {
  const notInformed = 'não informado';
  const eight = 8; const nine = 9;
  const [isLoading, setIsLoading] = React.useState(false);

  const cepMask = (CEP) => {
    const cleanCEP = CEP.replace(/[^\d]/g, ''); // Retira tudo o que não for digito numérico.
    const formattedCEP = cleanCEP.replace(/(\d{5})(\d{3})/, '$1-$2'); // Deixa o valor imputado no seguinte formato: 22451-130.

    if (CEP.length === eight) {
      setEditProductCEP(formattedCEP);
    }

    if (CEP.length < eight || formattedCEP.length < eight) {
      setEditProductCEP(notInformed);
      swal('CEP', 'O código postal deve apresentar exatamente 8 dígitos, '
        + 'sem a presença de hífen. Favor revisá-lo.', 'info');
    }
  };

  const searchFromCEP = async (CEP) => {
    setIsLoading(true);

    if (!cepValidator(CEP)) {
      const formattedCEP = CEP.replace(/(\d{5})(\d{3})/, '$1-$2');
      setEditProductCEP(formattedCEP);
    }

    const response = await fetch(`https://viacep.com.br/ws/${CEP}/json/`);
    const jsonFormat = await response.json();

    if (jsonFormat.erro) {
      setEditProductCEP(notInformed);
      setEditProductNeighborhood(notInformed);
      setEditProductCity(notInformed);
      setEditProductUF(notInformed);
      setEditProductDDD(notInformed);
      setIsLoading(false);
    } else {
      setEditProductNeighborhood(jsonFormat.bairro);
      setEditProductCity(jsonFormat.localidade);
      setEditProductUF(jsonFormat.uf);
      setEditProductDDD(jsonFormat.ddd);
      setIsLoading(false);
    }
  };

  return (
    <div id="editPublishedAdBlock6">
      {!isLoading ? (
        <h4>localização do produto:*</h4>)
        : (<h4>buscando...</h4>)}
      <div id="editPublishedAdBlock6-1">
        <div id="editPublishedAdCepSearchBar">
          <label htmlFor="editPublishedAdCepInput">
            cep:
            <input
              id="editPublishedAdCepInput"
              type="text"
              name="editPublishedAdCepInput"
              value={ editProductCEP }
              onChange={ ({ target }) => setEditProductCEP(target.value) }
              onBlur={ () => cepMask(editProductCEP) }
              placeholder="20531590"
              maxLength="8"
            />
          </label>
          <button
            id="editPublishedAdCepBtn"
            type="button"
            onClick={ () => searchFromCEP(editProductCEP) }
            disabled={ !(editProductCEP.length >= eight
                && editProductCEP.length <= nine) }
          >
            <BsSearch />
          </button>
        </div>
        <div id="editPublishedAdBlock6-1-1">
          {editProductCity !== notInformed ? (
            <span>
              {
                `${editProductNeighborhood
                }, ${
                  editProductCity}, ${
                  editProductUF} - ddd: ${
                  editProductDDD}`
              }
            </span>)
            : (
              <span>
                dados desconhecidos
              </span>)}
        </div>

      </div>
    </div>
  );
}

EditPublishedAdBlock6.propTypes = {
  editProductCEP: PropTypes.string.isRequired,
  setEditProductCEP: PropTypes.func.isRequired,
  editProductNeighborhood: PropTypes.string.isRequired,
  setEditProductNeighborhood: PropTypes.func.isRequired,
  editProductCity: PropTypes.string.isRequired,
  setEditProductCity: PropTypes.func.isRequired,
  editProductUF: PropTypes.string.isRequired,
  setEditProductUF: PropTypes.func.isRequired,
  editProductDDD: PropTypes.string.isRequired,
  setEditProductDDD: PropTypes.func.isRequired,
};

export default EditPublishedAdBlock6;

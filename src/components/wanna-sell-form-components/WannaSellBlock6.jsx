import React from 'react';
import PropTypes from 'prop-types';
import swal from 'sweetalert';
import { BsSearch } from 'react-icons/bs';
import cepValidator from '../../shared-functions/cepValidator';

function WannaSellBlock6({
  wSProductCEP, setWsProductCEP,
  setWsProductStreet,
  wSProductNeighborhood, setWsProductNeighborhood,
  wSProductCity, setWsProductCity,
  wSProductUF, setWsProductUF,
  wSProductDDD, setWsProductDDD }) {
  const NOT_INFORMED = 'não informado';
  const eight = 8;
  const [isLoading, setIsLoading] = React.useState(false);

  const cepMask = (CEP) => {
    const cleanCEP = CEP.replace(/[^\d]/g, ''); // Retira tudo o que não for digito numérico.
    const formattedCEP = cleanCEP.replace(/(\d{5})(\d{3})/, '$1-$2'); // Deixa o valor imputado no seguinte formato: 22451-130.

    if (CEP.length === eight) {
      setWsProductCEP(formattedCEP);
    }

    if (CEP.length < eight || formattedCEP.length < eight) {
      setWsProductCEP(NOT_INFORMED);
      swal('CEP', 'O código postal deve apresentar exatamente 8 dígitos, '
        + 'sem a presença de hífen. Favor revisá-lo.', 'info');
    }
  };

  const searchFromCEP = async (CEP) => {
    setIsLoading(true);

    if (!cepValidator(CEP)) {
      const formattedCEP = CEP.replace(/(\d{5})(\d{3})/, '$1-$2');
      setWsProductCEP(formattedCEP);
    }

    const response = await fetch(`https://viacep.com.br/ws/${CEP}/json/`);
    const jsonFormat = await response.json();

    if (jsonFormat.erro) {
      setWsProductCEP(NOT_INFORMED);
      setWsProductStreet(NOT_INFORMED);
      setWsProductNeighborhood(NOT_INFORMED);
      setWsProductCity(NOT_INFORMED);
      setWsProductUF(NOT_INFORMED);
      setWsProductDDD(NOT_INFORMED);
      setIsLoading(false);
    } else {
      setWsProductNeighborhood(jsonFormat.bairro);
      setWsProductStreet(jsonFormat.logradouro);
      setWsProductCity(jsonFormat.localidade);
      setWsProductUF(jsonFormat.uf);
      setWsProductDDD(jsonFormat.ddd);
      setIsLoading(false);
    }
  };

  return (
    <div id="wannaSellBlock6">
      {!isLoading ? (
        <h4>localização do produto:*</h4>)
        : (<h4>buscando...</h4>)}
      <div id="wannaSellBlock6-1">
        <div id="wannaSellCepSearchBar">
          <label htmlFor="wannaSellProductCepInput">
            cep:
            <input
              id="wannaSellProductCEP"
              type="text"
              name="wannaSellProductCEP"
              value={ wSProductCEP }
              onChange={ ({ target }) => setWsProductCEP(target.value) }
              onBlur={ () => cepMask(wSProductCEP) }
              placeholder="20531590"
              maxLength="8"
            />
          </label>
          <button
            id="wannaSellProductCepBtn"
            type="button"
            onClick={ () => searchFromCEP(wSProductCEP) }
            // disabled={ !(wSProductCEP.length >= eight
            //     && wSProductCEP.length <= nine) }
          >
            <BsSearch />
          </button>
        </div>
        <div id="wannaSellBlock6-1-1">
          {wSProductCity !== NOT_INFORMED ? (
            <span>
              {
                `${wSProductNeighborhood
                }, ${
                  wSProductCity}, ${
                  wSProductUF} - ddd: ${
                  wSProductDDD}`
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

WannaSellBlock6.propTypes = {
  wSProductCEP: PropTypes.string.isRequired,
  setWsProductCEP: PropTypes.func.isRequired,
  setWsProductStreet: PropTypes.func.isRequired,
  wSProductNeighborhood: PropTypes.string.isRequired,
  setWsProductNeighborhood: PropTypes.func.isRequired,
  wSProductCity: PropTypes.string.isRequired,
  setWsProductCity: PropTypes.func.isRequired,
  wSProductUF: PropTypes.string.isRequired,
  setWsProductUF: PropTypes.func.isRequired,
  wSProductDDD: PropTypes.string.isRequired,
  setWsProductDDD: PropTypes.func.isRequired,
};

export default WannaSellBlock6;

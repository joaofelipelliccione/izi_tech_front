import React from 'react';
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import alerts from '../../shared-functions/alerts';
import passwordValidator from '../../shared-functions/passwordValidator';
import cepValidator from '../../shared-functions/cepValidator';

function EditProfileBlock2({
  editUserPassword, setEditUserPassword, editUserBirthday, setEditUserBirthday,
  editUserCPF, setEditUserCPF, editUserCellphone, setEditUserCellphone,
  editUserCEP, setEditUserCEP, editUserStreet, setEditUserStreet,
  editUserComplement, setEditUserComplement,
  editUserNeighborhood, setEditUserNeighborhood,
  editUserCity, setEditUserCity, editUserUF, setEditUserUF,
  editUserDDD, setEditUserDDD }) {
  const notInformed = 'não informado';
  const eight = 8; const nine = 9;
  const [isLoading, setIsLoading] = React.useState(false);

  const checkPasswordOnBlur = (password) => {
    if (passwordValidator(password) === false) {
      alerts('passwordOutsideFormat');
    }
  };

  const cpfMask = (cpf) => {
    const eleven = 11;
    const cleanCPF = cpf.replace(/[^\d]/g, ''); // Retira tudo o que não for digito numérico.
    const formattedCPF = cleanCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'); // Deixa o valor imputado no seguinte formato: 180.559.177-01.

    if (cpf.length === eleven) {
      setEditUserCPF(formattedCPF);
    }

    if (cpf.length < eleven || formattedCPF.length < eleven) {
      setEditUserCPF(notInformed);
      alerts('cpfOutsideFormat');
    }
  };

  const cellphoneMask = (cellphoneNumber) => {
    const eleven = 11;
    const cleanNumber = cellphoneNumber.replace(/[^\d]/g, ''); // Retira tudo o que não for digito numérico.
    const formattedNumber = cleanNumber.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'); // Deixa o valor imputado no seguinte formato: 22451-130.

    if (cellphoneNumber.length === eleven) {
      setEditUserCellphone(formattedNumber);
    }

    if (cellphoneNumber.length < eleven || formattedNumber.length < eleven) {
      setEditUserCellphone(notInformed);
      alerts('cellphoneOutsideFormat');
    }
  };

  const cepMask = (CEP) => {
    const cleanCEP = CEP.replace(/[^\d]/g, ''); // Retira tudo o que não for digito numérico.
    const formattedCEP = cleanCEP.replace(/(\d{5})(\d{3})/, '$1-$2'); // Deixa o valor imputado no seguinte formato: (21) 97257-4272.

    if (CEP.length === eight) {
      setEditUserCEP(formattedCEP);
    }

    if (CEP.length < eight || formattedCEP.length < eight) {
      setEditUserCEP(notInformed);
      alerts('cepOutsideFormat');
    }
  };

  const searchFromCEP = async (CEP) => {
    setIsLoading(true);

    if (!cepValidator(CEP)) {
      const formattedCEP = CEP.replace(/(\d{5})(\d{3})/, '$1-$2');
      setEditUserCEP(formattedCEP);
    }

    const response = await fetch(`https://viacep.com.br/ws/${CEP}/json/`);
    const jsonFormat = await response.json();

    if (jsonFormat.erro) {
      setEditUserCEP(notInformed);
      setEditUserStreet(notInformed);
      setEditUserNeighborhood(notInformed);
      setEditUserCity(notInformed);
      setEditUserUF(notInformed);
      setEditUserDDD(notInformed);
      setIsLoading(false);
    } else {
      setEditUserStreet(jsonFormat.logradouro);
      setEditUserNeighborhood(jsonFormat.bairro);
      setEditUserCity(jsonFormat.localidade);
      setEditUserUF(jsonFormat.uf);
      setEditUserDDD(jsonFormat.ddd);
      setIsLoading(false);
    }
  };

  const checkComplementOnBlur = (complement) => {
    if (complement === '') {
      setEditUserComplement(notInformed);
    }
  };

  return (
    <div id="editProfileBlock2">
      <div id="editProfileBlock2-1">
        <h3>Dados Pessoais</h3>
        <div id="editProfileBlock2-1-1">
          <label htmlFor="editUserPasswordInput">
            senha:
            {' '}
            {<span className="editProfileInfoRequiredField">*</span>}
            <input
              id="editUserPasswordInput"
              type="password"
              name="editUserPassword"
              value={ editUserPassword }
              onChange={ ({ target }) => setEditUserPassword(target.value) }
              onBlur={ () => checkPasswordOnBlur(editUserPassword) }
              placeholder="senha"
            />
          </label>
          {!(passwordValidator(editUserPassword))
    && (
      <div id="editPasswordHelper">
        <p>pelo menos uma letra maiúscula</p>
        <p>pelo menos um número</p>
        <p>pelo menos 6 caracteres</p>
      </div>)}
          <label htmlFor="editUserBirthday">
            aniversário:
            <input
              id="editUserBirthday"
              type="date"
              name="editUserBirthday"
              value={ editUserBirthday }
              onChange={ ({ target }) => setEditUserBirthday(target.value) }
              max={ `${new Date().getFullYear()}-12-31` }
            />
          </label>
          <label htmlFor="editUserCPFInput">
            cpf:
            <input
              id="editUserCPFInput"
              type="text"
              name="editUserCPF"
              value={ editUserCPF }
              onChange={ ({ target }) => setEditUserCPF(target.value) }
              onBlur={ () => cpfMask(editUserCPF) }
              placeholder="18055917701"
              maxLength="11"
            />
          </label>
          <label htmlFor="editUserCellphoneInput">
            celular:
            <input
              id="editUserCellphone"
              type="text"
              name="editUserCellphone"
              value={ editUserCellphone }
              onChange={ ({ target }) => setEditUserCellphone(target.value) }
              onBlur={ () => cellphoneMask(editUserCellphone) }
              placeholder="21912345678"
              maxLength="11"
            />
          </label>
        </div>
      </div>
      <div id="editProfileBlock2-2">
        { isLoading ? <h3>buscando...</h3> : <h3>Endereço</h3> }
        <div id="editProfileBlock2-2-1">
          <div id="editCepSearchBar">
            <label htmlFor="editUserCepInput">
              cep:
              <input
                id="editUserCEP"
                type="text"
                name="editUserCEP"
                value={ editUserCEP }
                onChange={ ({ target }) => setEditUserCEP(target.value) }
                onBlur={ () => cepMask(editUserCEP) }
                placeholder="20531590"
                maxLength="8"
              />
            </label>
            <button
              id="editUserCepBtn"
              type="button"
              onClick={ () => searchFromCEP(editUserCEP) }
              disabled={ !(editUserCEP.length >= eight
                && editUserCEP.length <= nine) }
            >
              <BsSearch />
            </button>
          </div>
          <p>{`logradouro: ${editUserStreet}`}</p>
          <label htmlFor="editUserComplement">
            complemento:
            <input
              id="editUserComplement"
              type="text"
              name="editUserComplement"
              value={ editUserComplement }
              onChange={ ({ target }) => setEditUserComplement(target.value) }
              onBlur={ () => checkComplementOnBlur(editUserComplement) }
              placeholder="n° 23, bloco 2 - apt 902"
            />
          </label>
          <p>{`bairro: ${editUserNeighborhood}`}</p>
          <p>{`cidade: ${editUserCity}`}</p>
          <p>{`uf: ${editUserUF}`}</p>
          <p>{`ddd: ${editUserDDD}`}</p>
        </div>
      </div>
    </div>
  );
}

EditProfileBlock2.propTypes = {
  editUserPassword: PropTypes.string.isRequired,
  setEditUserPassword: PropTypes.func.isRequired,
  editUserBirthday: PropTypes.string.isRequired,
  setEditUserBirthday: PropTypes.func.isRequired,
  editUserCPF: PropTypes.string.isRequired,
  setEditUserCPF: PropTypes.func.isRequired,
  editUserCellphone: PropTypes.string.isRequired,
  setEditUserCellphone: PropTypes.func.isRequired,
  editUserCEP: PropTypes.string.isRequired,
  setEditUserCEP: PropTypes.func.isRequired,
  editUserStreet: PropTypes.string.isRequired,
  setEditUserStreet: PropTypes.func.isRequired,
  editUserComplement: PropTypes.string.isRequired,
  setEditUserComplement: PropTypes.func.isRequired,
  editUserNeighborhood: PropTypes.string.isRequired,
  setEditUserNeighborhood: PropTypes.func.isRequired,
  editUserCity: PropTypes.string.isRequired,
  setEditUserCity: PropTypes.func.isRequired,
  editUserUF: PropTypes.string.isRequired,
  setEditUserUF: PropTypes.func.isRequired,
  editUserDDD: PropTypes.string.isRequired,
  setEditUserDDD: PropTypes.func.isRequired,
};

export default EditProfileBlock2;

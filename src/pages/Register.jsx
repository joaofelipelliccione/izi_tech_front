import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import alerts from '../shared-functions/alerts';
import passwordValidator from '../shared-functions/passwordValidator';
import mailValidator from '../shared-functions/mailValidator';
import iziTechLogo from '../images/izi-tech-logo.png';
import '../styles/Register.css';
import '../styles/Alerts.css';

const { StatusCodes } = require('http-status-codes');

function Register() {
  const REGISTER_NEW_USER_ENDPOINT = 'https://izi-tech-back.herokuapp.com/user/new';
  // const REGISTER_NEW_USER_ENDPOINT_LOCAL = 'http://localhost:4000/user/new';

  const [isLoading, setIsLoading] = React.useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(true);

  const [registerUsername, setRegisterUsername] = React.useState('');
  const [registerUserMail, setRegisterUserMail] = React.useState('');
  const [registerUserPassword, setRegisterUserPassword] = React.useState('');
  const [registerTermsCheck, setRegisterTermsCheck] = React.useState(false);
  const navigate = useNavigate();

  const register = async () => {
    setIsLoading(true);
    const body = JSON.stringify({
      userName: registerUsername,
      userMail: registerUserMail,
      userPassword: registerUserPassword,
    });

    const fetchedData = await fetch(REGISTER_NEW_USER_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body });
    const cleanData = await fetchedData.json();

    if (cleanData.code === StatusCodes.INTERNAL_SERVER_ERROR) {
      setIsLoading(false);
      alerts();
    }
    if (cleanData.code === StatusCodes.CONFLICT) {
      setIsLoading(false);
      swal(`O e-mail ${registerUserMail} já é cadastrado!`, '', 'info');
      navigate('/login');
    }
    if (cleanData.code === StatusCodes.CREATED) {
      setIsLoading(false);
      navigate('/register/success');
    }
  };

  return (
    <main id="registerPageMain">
      <section id="registerFormContainer">
        <Link to="/">
          <img src={ iziTechLogo } alt="Logo Izi Tech" />
        </Link>
        <h2>crie sua conta na izi tech!</h2>
        <form id="registerForm">
          <label htmlFor="registerUsernameInput">
            <input
              id="registerUsernameInput"
              type="text"
              name="registerUsername"
              value={ registerUsername }
              onChange={ ({ target }) => setRegisterUsername(target.value) }
              placeholder="nome completo"
            />
          </label>
          <label htmlFor="registerUserMailInput">
            <input
              id="registerUserMailInput"
              type="email"
              name="registerUserMail"
              value={ registerUserMail }
              onChange={ ({ target }) => setRegisterUserMail(target.value) }
              placeholder="e-mail"
            />
          </label>
          <label htmlFor="registerUserPasswordInput">
            <input
              id="registerUserPasswordInput"
              type={ isPasswordVisible ? 'text' : 'password' }
              name="registerUserPassword"
              value={ registerUserPassword }
              onChange={ ({ target }) => setRegisterUserPassword(target.value) }
              placeholder="senha"
              onFocus={ () => setIsPasswordVisible(true) }
              onBlur={ () => setIsPasswordVisible(false) }
            />
          </label>
          {!(passwordValidator(registerUserPassword))
            && (
              <div id="passwordHelper">
                <p>pelo menos uma letra maiúscula</p>
                <p>pelo menos um número</p>
                <p>pelo menos 6 caracteres</p>
              </div>)}
          <label htmlFor="registerTermsCheckbox" id="registerTermsLabel">
            <input
              id="registerTermsCheckbox"
              type="checkbox"
              name="registerTermsCheck"
              checked={ registerTermsCheck }
              onChange={ ({ target }) => setRegisterTermsCheck(target.checked) }
            />
            estou de acordo com os termos de serviço e
            com a política de privacidade da izi tech.
          </label>
          { !isLoading ? (
            <button
              id="registerBtn"
              type="button"
              disabled={ !(mailValidator(registerUserMail)
              && passwordValidator(registerUserPassword)
              && registerTermsCheck
              && registerUsername !== '') }
              onClick={ register }
            >
              fazer parte!
            </button>
          ) : (
            <div id="registerLoader" />
          ) }
          <Link to="/login" id="registerExtraLinks">
            voltar
          </Link>
        </form>
      </section>
    </main>
  );
}

export default Register;

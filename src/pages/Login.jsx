import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { RiLoginCircleFill } from 'react-icons/ri';
import swal from 'sweetalert';
import mailValidator from '../shared-functions/mailValidator';
import passwordValidator from '../shared-functions/passwordValidator';
import setLoginInfoAC from '../redux/actions/userAC';
import iziTechLogo from '../images/izi-tech-logo.png';
import '../styles/Login.css';
import '../styles/Alerts.css';

const { StatusCodes } = require('http-status-codes');

function Login() {
  // const LOGIN_ENDPOINT = 'https://izi-tech-back.herokuapp.com/login';
  const LOGIN_ENDPOINT_LOCAL = 'http://localhost:4000/login';

  const [isLoading, setIsLoading] = React.useState(false);
  const [userMail, setUserMail] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signIn = async () => {
    setIsLoading(true);
    const body = JSON.stringify({
      userMail,
      userPassword,
    });

    const fetchedData = await fetch(LOGIN_ENDPOINT_LOCAL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body });
    const cleanData = await fetchedData.json();

    if (cleanData.code === StatusCodes.NOT_FOUND) {
      setIsLoading(false);
      swal('Usuário não cadastrado...', 'Faça parte, agora mesmo!', 'info');
      navigate('/register');
    }
    if (cleanData.code === StatusCodes.FORBIDDEN) {
      setIsLoading(false);
      swal('Senha incorreta', '', 'error');
    }
    if (cleanData.authToken) {
      localStorage.setItem('loginInfo', JSON.stringify(cleanData));
      dispatch(setLoginInfoAC(cleanData));
      setIsLoading(false);
      navigate('/');
    }
  };

  const registerWithEnter = (e) => {
    e.preventDefault();
    signIn();
  };

  return (
    <main id="loginPageMain">
      <section id="loginFormContainer">
        <Link to="/">
          <img src={ iziTechLogo } alt="Logo Izi Tech" />
        </Link>
        <h2>faça seu login na izi tech!</h2>
        <form id="loginForm">
          <label htmlFor="userMailInput">
            <input
              id="userMailInput"
              type="email"
              name="userMail"
              value={ userMail }
              onChange={ ({ target }) => setUserMail(target.value) }
              placeholder="e-mail"
            />
          </label>
          <label htmlFor="userPassword">
            <input
              id="userPassword"
              type="password"
              name="userPassword"
              value={ userPassword }
              onChange={ ({ target }) => setUserPassword(target.value) }
              onKeyPress={ (event) => event.key === 'Enter'
              && registerWithEnter(event) }
              placeholder="senha"
            />
          </label>
          <Link to="/login" id="forgetPassword">esqueci a senha</Link>
          {!isLoading ? (
            <button
              id="loginBtn"
              type="button"
              disabled={ !(mailValidator(userMail)
                      && passwordValidator(userPassword)) }
              onClick={ signIn }
            >
              <RiLoginCircleFill />
            </button>
          ) : (
            // eslint-disable-next-line react/self-closing-comp
            <div id="loginLoader"></div>
          )}
          <Link to="/register" className="extraLinks2">
            ainda não faço parte...
          </Link>
          <Link to="/" className="extraLinks2">
            voltar
          </Link>
        </form>
      </section>
    </main>
  );
}

export default Login;

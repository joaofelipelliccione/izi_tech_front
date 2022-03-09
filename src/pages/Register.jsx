import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import swal from 'sweetalert';
import passwordValidator from '../shared-functions/passwordValidator';
import mailValidator from '../shared-functions/mailValidator';
import registerNewUserAC from '../redux/actions/registeredUsersAC';
import publishedProductsAC from '../redux/actions/publishedProductsAC';
import createUserFavSectionAC from '../redux/actions/favoriteProductsAC';
import iziTechLogo from '../images/izi-tech-logo.png';
import '../styles/Register.css';
import '../styles/Alerts.css';

function Register() {
  const [registerUsername, setRegisterUsername] = React.useState('');
  const [registerUserMail, setRegisterUserMail] = React.useState('');
  const [registerUserPassword, setRegisterUserPassword] = React.useState('');
  const [registerTermsCheck, setRegisterTermsCheck] = React.useState(false);
  const navigate = useNavigate();
  const registeredUsers = useSelector((state) => state.registeredUsers);
  const dispatch = useDispatch();

  const getDateOfRegister = () => {
    const completeDate = new Date(); // Thu Dec 09 2021 08:22:25 GMT-0300 (Horário Padrão de Brasília).
    const day = String(completeDate.getDate()).padStart(2, '0'); // Caso seja dia 1 à 9, um 0 será adicionado. Resultado: 01, 02, 03....
    const month = String(completeDate.getMonth() + 1).padStart(2, '0'); // Caso seja mês 1 à 9, um 0 será adicionado. Resultado: 01, 02, 03....
    const year = completeDate.getFullYear(); // 2021
    return `${day}/${month}/${year}`;
  };

  const register = () => {
    const registeredUsersArr = registeredUsers.registeredUsers;
    const userObj = registeredUsersArr.find((user) => user.userMail === registerUserMail);
    const notInformed = 'não informado';

    const newUserDataObj = {
      dateOfRegister: getDateOfRegister(),
      userName: registerUsername,
      userMail: registerUserMail,
      userPassword: registerUserPassword,
      userBirthday: 'yyyy-mm-dd',
      userCPF: notInformed,
      userCellphone: notInformed,
      userPicture: '',
      userAddress: {
        userCEP: notInformed,
        userStreet: notInformed,
        userComplement: notInformed,
        userNeighborhood: notInformed,
        userCity: notInformed,
        userUF: notInformed,
        userDDD: notInformed,
      },
    };

    if (userObj === undefined) {
      dispatch(registerNewUserAC(newUserDataObj));
      dispatch(publishedProductsAC({
        userMail: registerUserMail,
        userPublishedProducts: [],
      }));
      dispatch(createUserFavSectionAC({
        userMail: registerUserMail,
        userFavoriteProducts: [],
      }));
      navigate('/register/success');
    }
    if (userObj !== undefined) {
      swal(`${registerUserMail}, já é cadastrado!`, '', 'info');
      navigate('/login');
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
              type="password"
              name="registerUserPassword"
              value={ registerUserPassword }
              onChange={ ({ target }) => setRegisterUserPassword(target.value) }
              placeholder="senha"
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
          <button
            id="registerBtn"
            type="button"
            disabled={ !(mailValidator(registerUserMail)
            && passwordValidator(registerUserPassword)
            && registerTermsCheck) }
            onClick={ register }
          >
            fazer parte!
          </button>
          <Link to="/login" id="registerExtraLinks">
            voltar
          </Link>
        </form>
      </section>
    </main>
  );
}

export default Register;

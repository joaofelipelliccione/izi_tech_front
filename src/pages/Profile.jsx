import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { FaRegEdit } from 'react-icons/fa';
import { AiFillWarning } from 'react-icons/ai';
import { setAllUserInfoAC } from '../redux/actions/userAC';
import userPicDefault from '../images/user-picture.png';
import Header from '../components/header-components/Header';
import Footer from '../components/Footer';
import '../styles/Profile.css';

const { StatusCodes } = require('http-status-codes');

function Profile() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [userInfoObj, setUserInfoObj] = React.useState({});
  const NOT_INFORMED = 'não informado';

  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const loginInfo = JSON.parse(localStorage.getItem('loginInfo'));

    if (loginInfo === null) {
      navigate('/');
    }

    if (loginInfo !== null) {
      const PROFILE_ENDPOINT = `https://izi-tech-back.herokuapp.com/user/${loginInfo.userId}`;
      // const PROFILE_ENDPOINT_LOCAL = `http://localhost:4000/user/${loginInfo.userId}`;

      setIsLoading(true);
      fetch(PROFILE_ENDPOINT, { headers: { Authorization: loginInfo.authToken } })
        .then((result) => result.json())
        .then((cleanData) => {
          if (cleanData.code === StatusCodes.UNAUTHORIZED) {
            navigate('/');
            swal('Sessão expirada :(', 'Por favor, realize um novo login.', 'info');
          } else {
            setUserInfoObj(cleanData);
            dispatch(setAllUserInfoAC(cleanData));
            setIsLoading(false);
          }
        });
    }
  }, []);

  return (
    <div id="profilePage">
      <Header />
      <main id="profilePageMain">
        <section id="profileContentContainer">
          {isLoading ? (<div id="profileLoader" />) : (
            <div id="profileContentBlock1">
              {userInfoObj.userPicture === null
                ? (<img src={ userPicDefault } alt="Foto do usuário" />)
                : (
                  <img
                    src={ userInfoObj.userPicture }
                    alt="Foto do usuário"
                  />)}
              <div id="profileContentBlock1-1">
                <h2>{userInfoObj.userName}</h2>
                <h2>{userInfoObj.userMail}</h2>
                <h2>
                  {userInfoObj.dateOfRegister !== undefined && (
                    `membro do izi tech desde ${userInfoObj.dateOfRegister
                      .split('-').reverse().join('/')}`)}
                </h2>
              </div>
            </div>
          )}
          <div id="profileContentBlock2">
            <div id="profileContentBlock2-1">
              <h3>Dados Pessoais</h3>
              <div id="profileContentBlock2-1-1">
                <p>senha: 🤫</p>
                {userInfoObj.userBirthday !== undefined && (
                  <p>
                    {`aniversário: ${userInfoObj.userBirthday === null ? (
                      NOT_INFORMED) : (
                      userInfoObj.userBirthday.split('-').reverse().join('/'))}`}
                  </p>)}
                <p>
                  {`cpf: ${userInfoObj.userCPF === null ? (
                    NOT_INFORMED) : (
                    userInfoObj.userCPF)}`}
                </p>
                <p>
                  {`celular: ${userInfoObj.userCellphone === null ? (
                    NOT_INFORMED) : (
                    userInfoObj.userCellphone)}`}
                </p>
              </div>
            </div>
            <div id="profileContentBlock2-2">
              <h3>Endereço</h3>
              {userInfoObj.userAddress !== undefined && (
                userInfoObj.userAddress.infoFromCep === null ? (
                  <div id="profileContentBlock2-2-1">
                    <p>{`cep: ${NOT_INFORMED}`}</p>
                    <p>{`logradouro: ${NOT_INFORMED}`}</p>
                    <p>{`complemento: ${NOT_INFORMED}`}</p>
                    <p>{`bairro: ${NOT_INFORMED}`}</p>
                    <p>{`cidade: ${NOT_INFORMED}`}</p>
                    <p>{`uf: ${NOT_INFORMED}`}</p>
                    <p>{`ddd: ${NOT_INFORMED}`}</p>
                  </div>
                ) : (
                  <div id="profileContentBlock2-2-1">
                    <p>{`cep: ${userInfoObj.userAddress.infoFromCep.cep}`}</p>
                    <p>{`logradouro: ${userInfoObj.userAddress.infoFromCep.street}`}</p>
                    <p>
                      {`complemento: ${userInfoObj.userAddress.complement === null ? (
                        NOT_INFORMED) : (userInfoObj.userAddress.complement)}`}
                    </p>
                    <p>{`bairro: ${userInfoObj.userAddress.infoFromCep.neighborhood}`}</p>
                    <p>{`cidade: ${userInfoObj.userAddress.infoFromCep.city}`}</p>
                    <p>{`uf: ${userInfoObj.userAddress.infoFromCep.uf}`}</p>
                    <p>{`ddd: ${userInfoObj.userAddress.infoFromCep.ddd}`}</p>
                  </div>
                )
              )}
            </div>
          </div>
          <div id="profileBtnsContainer">
            <Link to="/profile/edit">
              <button
                id="editInfoBtn"
                type="button"
              >
                editar informações
                {' '}
                <FaRegEdit />
              </button>
            </Link>
            <Link to="/">
              <button
                id="deleteAccountBtn"
                type="button"
              >
                deletar conta
                {' '}
                <AiFillWarning />
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Profile;

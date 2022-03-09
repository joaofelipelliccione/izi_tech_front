import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaRegEdit } from 'react-icons/fa';
import { AiFillWarning } from 'react-icons/ai';
import userPicDefault from '../images/user-picture.png';
import Header from '../components/header-components/Header';
import Footer from '../components/Footer';
import '../styles/Profile.css';

function Profile() {
  const [currentUserObj, setCurrentUserObj] = React.useState({});
  const registeredUsers = useSelector((state) => state.registeredUsers);

  React.useEffect(() => {
    const userMailFromLS = localStorage.getItem('userMail');
    const registeredUsersArr = registeredUsers.registeredUsers;
    const currentUserInfo = registeredUsersArr
      .find(({ userMail }) => userMail === userMailFromLS);
    setCurrentUserObj(currentUserInfo);
  }, [registeredUsers.registeredUsers]);

  return (
    <div id="profilePage">
      <Header />
      <main id="profilePageMain">
        <section id="profileContentContainer">
          <div id="profileContentBlock1">
            {currentUserObj === undefined
              ? (<img src={ userPicDefault } alt="Foto do usuário" />)
              : (
                <img
                  src={ currentUserObj.userPicture !== ''
                    ? currentUserObj.userPicture
                    : userPicDefault }
                  alt="Foto do usuário"
                />)}
            {currentUserObj !== undefined && (
              <div id="profileContentBlock1-1">
                <h2>{currentUserObj.userName}</h2>
                <h2>{currentUserObj.userMail}</h2>
                <h2>{`membro do izi tech desde ${currentUserObj.dateOfRegister}`}</h2>
              </div>)}
          </div>
          {currentUserObj !== undefined && (
            <div id="profileContentBlock2">
              <div id="profileContentBlock2-1">
                <h3>Dados Pessoais</h3>
                <div id="profileContentBlock2-1-1">
                  <p>senha: 🤫</p>
                  <p>
                    {`aniversário: ${currentUserObj.userBirthday !== undefined
                    && currentUserObj.userBirthday.split('-').reverse().join('/')}`}
                  </p>
                  <p>{`cpf: ${currentUserObj.userCPF}`}</p>
                  <p>{`celular: ${currentUserObj.userCellphone}`}</p>
                </div>
              </div>
              <div id="profileContentBlock2-2">
                <h3>Endereço</h3>
                {currentUserObj.userAddress !== undefined && (
                  <div id="profileContentBlock2-2-1">
                    <p>{`cep: ${currentUserObj.userAddress.userCEP}`}</p>
                    <p>{`logradouro: ${currentUserObj.userAddress.userStreet}`}</p>
                    <p>{`complemento: ${currentUserObj.userAddress.userComplement}`}</p>
                    <p>{`bairro: ${currentUserObj.userAddress.userNeighborhood}`}</p>
                    <p>{`cidade: ${currentUserObj.userAddress.userCity}`}</p>
                    <p>{`uf: ${currentUserObj.userAddress.userUF}`}</p>
                    <p>{`ddd: ${currentUserObj.userAddress.userDDD}`}</p>
                  </div>)}
              </div>
            </div>)}
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

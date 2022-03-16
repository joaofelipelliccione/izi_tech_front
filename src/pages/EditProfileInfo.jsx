import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { BsSave2 } from 'react-icons/bs';
import { AiOutlineRollback } from 'react-icons/ai';
import Header from '../components/header-components/Header';
import Footer from '../components/Footer';
import mailValidator from '../shared-functions/mailValidator';
import passwordValidator from '../shared-functions/passwordValidator';
import cpfValidator from '../shared-functions/cpfValidator';
import cellphoneValidator from '../shared-functions/cellphoneValidator';
import EditProfileBlock1 from
'../components/edit-profile-form-components/EditProfileBlock1';
import EditProfileBlock2 from
'../components/edit-profile-form-components/EditProfileBlock2';
import '../styles/EditProfileInfo.css';

const { StatusCodes } = require('http-status-codes');

function EditProfileInfo() {
  const userInfo = useSelector((state) => state.user.allUserInfo);
  const NOT_INFORMED = 'não informado';

  const [isLoading, setIsLoading] = React.useState(false);

  const [dateOfRegister, setDateOfRegister] = React.useState('');
  const [editUsername, setEditUsername] = React.useState('');
  const [editUserMail, setEditUserMail] = React.useState('');
  const [editUserPassword, setEditUserPassword] = React.useState('');
  const [editUserBirthday, setEditUserBirthday] = React.useState('');
  const [editUserCPF, setEditUserCPF] = React.useState('');
  const [editUserCellphone, setEditUserCellphone] = React.useState('');
  const [editUserPicture, setEditUserPicture] = React.useState('');
  const [editUserCEP, setEditUserCEP] = React.useState('');
  const [editUserStreet, setEditUserStreet] = React.useState('');
  const [editUserComplement, setEditUserComplement] = React.useState('');
  const [editUserNeighborhood, setEditUserNeighborhood] = React.useState('');
  const [editUserCity, setEditUserCity] = React.useState('');
  const [editUserUF, setEditUserUF] = React.useState('');
  const [editUserDDD, setEditUserDDD] = React.useState('');

  const navigate = useNavigate();

  React.useEffect(() => {
    setDateOfRegister(() => {
      if (userInfo.dateOfRegister !== undefined) {
        return userInfo.dateOfRegister.split('-').reverse().join('/');
      }
    });
  }, [userInfo]);

  React.useEffect(() => {
    setEditUsername(userInfo.userName);
    setEditUserMail(userInfo.userMail);
    setEditUserPassword(userInfo.userPassword);
    setEditUserBirthday(() => {
      if (userInfo.userBirthday === null) return NOT_INFORMED;
      if (userInfo.userBirthday !== null && userInfo.userBirthday !== undefined) {
        return userInfo.userBirthday;
      }
    });
    setEditUserCPF(userInfo.userCPF !== null ? userInfo.userCPF : NOT_INFORMED);
    setEditUserCellphone(() => {
      if (userInfo.userCellphone !== null) return userInfo.userCellphone;
      if (userInfo.userCellphone === null) return NOT_INFORMED;
    });
    setEditUserPicture(() => {
      if (userInfo.userPicture !== null) return userInfo.userPicture;
      if (userInfo.userPicture === null) return NOT_INFORMED;
    });
  }, [userInfo]);

  React.useEffect(() => {
    if (userInfo.userAddress !== undefined) {
      if (userInfo.userAddress.infoFromCep === null) {
        setEditUserCEP(NOT_INFORMED);
        setEditUserStreet(NOT_INFORMED);
        setEditUserComplement(NOT_INFORMED);
        setEditUserNeighborhood(NOT_INFORMED);
        setEditUserCity(NOT_INFORMED);
        setEditUserUF(NOT_INFORMED);
        setEditUserDDD(NOT_INFORMED);
      }
      if (userInfo.userAddress.infoFromCep !== null) {
        setEditUserCEP(userInfo.userAddress.infoFromCep.cep);
        setEditUserStreet(userInfo.userAddress.infoFromCep.street);
        setEditUserComplement(() => {
          if (userInfo.userAddress.complement === null) return NOT_INFORMED;
          if (userInfo.userAddress.complement !== null) {
            return userInfo.userAddress.complement;
          }
        });
        setEditUserNeighborhood(userInfo.userAddress.infoFromCep.neighborhood);
        setEditUserCity(userInfo.userAddress.infoFromCep.city);
        setEditUserUF(userInfo.userAddress.infoFromCep.uf);
        setEditUserDDD(userInfo.userAddress.infoFromCep.ddd);
      }
    }
  }, [userInfo]);

  React.useEffect(() => { // Ao realizar refresh na página...
    if (dateOfRegister === undefined) {
      navigate('/profile');
    }
  }, [dateOfRegister]);

  const infoToUpdate = {
    userName: editUsername,
    userPassword: editUserPassword,
    userBirthday: editUserBirthday === NOT_INFORMED ? null : editUserBirthday,
    userCPF: editUserCPF === NOT_INFORMED ? null : editUserCPF,
    userCellphone: editUserCellphone === NOT_INFORMED ? null : editUserCellphone,
    userAddressId: userInfo.userAddress === undefined ? 0 : (
      userInfo.userAddress.userAddressId),
    cep: editUserCEP === NOT_INFORMED ? null : editUserCEP,
    street: editUserStreet === NOT_INFORMED ? null : editUserStreet,
    complement: editUserComplement === NOT_INFORMED ? null : editUserComplement,
    neighborhood: editUserNeighborhood === NOT_INFORMED ? null : editUserNeighborhood,
    city: editUserCity === NOT_INFORMED ? null : editUserCity,
    uf: editUserUF === NOT_INFORMED ? null : editUserUF,
    ddd: editUserDDD === NOT_INFORMED ? null : editUserDDD,
  };

  const fetchToUpdateRegisteredInfo = async () => {
    const loginInfo = JSON.parse(localStorage.getItem('loginInfo'));
    // const EDIT_PROFILE_ENDPOINT = `https://izi-tech-back.herokuapp.com/user/update/${loginInfo.userId}`;
    const EDIT_PROFILE_ENDPOINT_LOCAL = `http://localhost:4000/user/update/${loginInfo.userId}`;

    setIsLoading(true);
    const body = JSON.stringify(infoToUpdate);

    const fetchedData = await fetch(EDIT_PROFILE_ENDPOINT_LOCAL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: loginInfo.authToken },
      body });
    const cleanData = await fetchedData.json();

    if (cleanData.code === StatusCodes.UNAUTHORIZED) {
      setIsLoading(false);
      navigate('/');
      swal('Sessão expirada :(', 'Por favor, realize um novo login.', 'info');
    } else {
      setIsLoading(false);
      navigate('/profile');
    }
  };

  const updateRegisteredInfo = async () => {
    if (!cpfValidator(editUserCPF) && editUserCPF !== NOT_INFORMED) {
      swal('CPF', 'Por favor, digite o CPF você mesmo, '
        + 'sem utilizar o preenchimento automático. '
        + 'exemplo: 18055917701', 'info');
    } else if (!cellphoneValidator(editUserCellphone)
      && editUserCellphone !== NOT_INFORMED) {
      swal('Celular', 'Por favor, digite o número de celular você mesmo, '
        + 'sem utilizar o preenchimento automático. '
        + 'Exemplo: 21912345678', 'info');
    } else if (editUserCEP !== NOT_INFORMED && editUserStreet === NOT_INFORMED) {
      swal('CEP', 'Por favor, pressione o botão de pesquisar CEP, '
        + 'para que as informações de endereço sejam preenchidas.', 'info');
    } else {
      await fetchToUpdateRegisteredInfo();
    }
  };

  return (
    <div id="editProfileInfoPage">
      <Header />
      <main id="editProfileInfoPageMain">
        <form id="editProfileInfoForm">
          <EditProfileBlock1
            editUserPicture={ editUserPicture }
            setEditUserPicture={ setEditUserPicture }
            editUsername={ editUsername }
            setEditUsername={ setEditUsername }
            editUserMail={ editUserMail }
            dateOfRegister={ dateOfRegister }
          />
          <EditProfileBlock2
            editUserPassword={ editUserPassword }
            setEditUserPassword={ setEditUserPassword }
            editUserBirthday={ editUserBirthday }
            setEditUserBirthday={ setEditUserBirthday }
            editUserCPF={ editUserCPF }
            setEditUserCPF={ setEditUserCPF }
            editUserCellphone={ editUserCellphone }
            setEditUserCellphone={ setEditUserCellphone }
            editUserCEP={ editUserCEP }
            setEditUserCEP={ setEditUserCEP }
            editUserStreet={ editUserStreet }
            setEditUserStreet={ setEditUserStreet }
            editUserComplement={ editUserComplement }
            setEditUserComplement={ setEditUserComplement }
            editUserNeighborhood={ editUserNeighborhood }
            setEditUserNeighborhood={ setEditUserNeighborhood }
            editUserCity={ editUserCity }
            setEditUserCity={ setEditUserCity }
            editUserUF={ editUserUF }
            setEditUserUF={ setEditUserUF }
            editUserDDD={ editUserDDD }
            setEditUserDDD={ setEditUserDDD }
          />
          {!isLoading ? (
            <div id="editProfileBtnsContainer">
              <button
                id="editProfileSaveBtn"
                type="button"
                onClick={ updateRegisteredInfo }
                disabled={ !(mailValidator(editUserMail)
                  && passwordValidator(editUserPassword)
                  && editUsername !== '') }
              >
                salvar informações
                {' '}
                <BsSave2 />
              </button>
              <button
                id="editProfileCancelBtn"
                type="button"
                onClick={ () => navigate('/profile') }
              >
                cancelar
                {' '}
                <AiOutlineRollback />
              </button>
            </div>
          ) : (<div id="EditProfileInfoLoader" />)}
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default EditProfileInfo;

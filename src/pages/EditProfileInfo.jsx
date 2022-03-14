import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { BsSave2 } from 'react-icons/bs';
import { AiOutlineRollback } from 'react-icons/ai';
import Header from '../components/header-components/Header';
import Footer from '../components/Footer';
import setLoginInfoAC from '../redux/actions/userAC';
import mailValidator from '../shared-functions/mailValidator';
import passwordValidator from '../shared-functions/passwordValidator';
import cpfValidator from '../shared-functions/cpfValidator';
import cellphoneValidator from '../shared-functions/cellphoneValidator';
import EditProfileBlock1 from
'../components/edit-profile-form-components/EditProfileBlock1';
import EditProfileBlock2 from
'../components/edit-profile-form-components/EditProfileBlock2';
import '../styles/EditProfileInfo.css';

function EditProfileInfo() {
  const userInfo = useSelector((state) => state.user.allUserInfo);
  const NOT_INFORMED = 'não informado';

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

  const dispatch = useDispatch();
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
        return userInfo.userBirthday.split('-').reverse().join('/');
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
    if (userInfo.userAddress === null) {
      setEditUserCEP(NOT_INFORMED);
      setEditUserStreet(NOT_INFORMED);
      setEditUserComplement(NOT_INFORMED);
      setEditUserNeighborhood(NOT_INFORMED);
      setEditUserCity(NOT_INFORMED);
      setEditUserUF(NOT_INFORMED);
      setEditUserDDD(NOT_INFORMED);
    }
    if (userInfo.userAddress !== null && userInfo.userAddress !== undefined) {
      setEditUserCEP(userInfo.userAddress.infoFromCep.cep);
      setEditUserStreet(userInfo.userAddress.infoFromCep.street);
      setEditUserComplement(userInfo.userAddress.complement);
      setEditUserNeighborhood(userInfo.userAddress.infoFromCep.neighborhood);
      setEditUserCity(userInfo.userAddress.infoFromCep.city);
      setEditUserUF(userInfo.userAddress.infoFromCep.uf);
      setEditUserDDD(userInfo.userAddress.infoFromCep.ddd);
    }
  }, [userInfo]);

  React.useEffect(() => { // Ao realizar refresh na página...
    if (dateOfRegister === undefined) {
      navigate('/profile');
    }
  }, [dateOfRegister]);

  const updateRegisteredInfo = () => {
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
      dispatch(setLoginInfoAC(editUserMail, editUserPassword));
      localStorage.setItem('userMail', editUserMail);
      navigate('/profile');
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
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default EditProfileInfo;

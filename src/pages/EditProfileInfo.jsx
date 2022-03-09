import React from 'react';
import swal from 'sweetalert';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BsSave2 } from 'react-icons/bs';
import { AiOutlineRollback } from 'react-icons/ai';
import Header from '../components/header-components/Header';
import Footer from '../components/Footer';
import setLoginInfoAC from '../redux/actions/userAC';
import { updateUserInfoAC as updateUserInfo } from '../redux/actions/registeredUsersAC';
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
  const notInformed = 'não informado';
  const registeredUsers = useSelector((state) => state.registeredUsers);
  const user = useSelector((state) => state.user);
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

  const updatedUserDataObj = {
    dateOfRegister,
    userName: editUsername,
    userMail: editUserMail,
    userPassword: editUserPassword,
    userBirthday: editUserBirthday,
    userCPF: editUserCPF,
    userCellphone: editUserCellphone,
    userPicture: editUserPicture,
    userAddress: {
      userCEP: editUserCEP,
      userStreet: editUserStreet,
      userComplement: editUserComplement,
      userNeighborhood: editUserNeighborhood,
      userCity: editUserCity,
      userUF: editUserUF,
      userDDD: editUserDDD,
    },
  };

  React.useEffect(() => {
    const userMailFromLS = localStorage.getItem('userMail');
    const registeredUsersArr = registeredUsers.registeredUsers;
    const currentUserInfo = registeredUsersArr
      .find(({ userMail }) => userMail === userMailFromLS);

    if (currentUserInfo !== undefined) {
      setDateOfRegister(currentUserInfo.dateOfRegister);
      setEditUsername(currentUserInfo.userName);
      setEditUserMail(currentUserInfo.userMail);
      setEditUserPassword(currentUserInfo.userPassword);
      setEditUserBirthday(currentUserInfo.userBirthday.split('/').reverse().join('-'));
      setEditUserCPF(currentUserInfo.userCPF);
      setEditUserCellphone(currentUserInfo.userCellphone);
      setEditUserPicture(currentUserInfo.userPicture);
      setEditUserCEP(currentUserInfo.userAddress.userCEP);
      setEditUserStreet(currentUserInfo.userAddress.userStreet);
      setEditUserComplement(currentUserInfo.userAddress.userComplement);
      setEditUserNeighborhood(currentUserInfo.userAddress.userNeighborhood);
      setEditUserCity(currentUserInfo.userAddress.userCity);
      setEditUserUF(currentUserInfo.userAddress.userUF);
      setEditUserDDD(currentUserInfo.userAddress.userDDD);
    }
  }, [registeredUsers.registeredUsers]);

  const updateRegisteredInfo = () => {
    if (!cpfValidator(editUserCPF) && editUserCPF !== notInformed) {
      swal('CPF', 'Por favor, digite o CPF você mesmo, '
        + 'sem utilizar o preenchimento automático. '
        + 'exemplo: 18055917701', 'info');
    } else if (!cellphoneValidator(editUserCellphone)
      && editUserCellphone !== notInformed) {
      swal('Celular', 'Por favor, digite o número de celular você mesmo, '
        + 'sem utilizar o preenchimento automático. '
        + 'Exemplo: 21912345678', 'info');
    } else if (editUserCEP !== notInformed && editUserStreet === notInformed) {
      swal('CEP', 'Por favor, pressione o botão de pesquisar CEP, '
        + 'para que as informações de endereço sejam preenchidas.', 'info');
    } else {
      dispatch(setLoginInfoAC(editUserMail, editUserPassword));
      localStorage.setItem('userMail', editUserMail);
      dispatch(updateUserInfo(updatedUserDataObj, user.userMail));
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

// REF: https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { BsShop } from 'react-icons/bs';
import { MdFavoriteBorder, MdHelp } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import userPictureDefault from '../../images/user-picture.png';
import '../../styles/DropdownAvatar.css';

function DropdownAvatar() {
  const dropdownRef = React.useRef(null);
  // const [userAvatar, setUserAvatar] = React.useState('');
  const [isActive, setIsActive] = React.useState(false);
  const navigate = useNavigate();

  // const currentUserMail = useSelector((state) => state.user.userMail);
  // const registeredUsersAr = useSelector((state) => state.registeredUsers.registeredUsers);

  const onLogoutCLick = () => {
    localStorage.removeItem('userMail');
    navigate('/');
    window.location.reload();
  };

  // React.useEffect(() => {
  //   const currentUserInfo = registeredUsersAr
  //     .find(({ userMail }) => userMail === currentUserMail);
  //   setUserAvatar(currentUserInfo.userPicture);
  // }, []);

  React.useEffect(() => {
    const pageClickEvent = ({ target }) => {
      if (dropdownRef.current !== null && !dropdownRef.current.contains(target)) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener('click', pageClickEvent);
    }

    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [isActive]);

  return (
    <div id="avatarDropdownContainer">
      <button
        type="button"
        onMouseEnter={ () => setIsActive(true) }
      >
        <img
          // src={ userAvatar !== '' ? userAvatar : userPictureDefault }
          src={ userPictureDefault }
          alt="Foto do usuário"
          id="userPicture"
        />
      </button>
      <nav
        ref={ dropdownRef }
        className={ `avatarDropdown ${isActive ? 'active' : 'inactive'}` }
        onMouseLeave={ () => setIsActive(false) }
      >
        <ul>
          <li>
            <Link to="/myAds/published">
              <BsShop />
              {' '}
              meus anúncios
            </Link>
          </li>
          <li>
            <Link to="/favoriteAds">
              <MdFavoriteBorder />
              {' '}
              favoritados
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <AiOutlineUser />
              {' '}
              perfil
            </Link>
          </li>
          <li>
            <Link to="/">
              <MdHelp />
              {' '}
              ajuda
            </Link>
          </li>
          <button
            type="button"
            id="logoutBtn"
            onClick={ onLogoutCLick }
          >
            <RiLogoutBoxRLine />
          </button>
        </ul>
      </nav>
    </div>
  );
}

export default DropdownAvatar;

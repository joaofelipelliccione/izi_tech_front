import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';
import DropdownCategories from './DropdownCategories';
import DropdownAvatar from './DropdownAvatar';
import SubHeader from './SubHeader';
import categoriesStructure from '../../data/categories-structure';
import iziTechLogo from '../../images/izi-tech-logo.png';
import '../../styles/Header.css';

function Header({ setAdsToRender, setIsHomeFilterBoxHidden,
  homeSearchedItem, setHomeSearchedItem,
  onClickHomeSearchBtn, setHomeOrderBy }) {
  const location = useLocation();
  const user = useSelector((state) => state.user);
  const categoriesArray = categoriesStructure
    .map((category) => (category.topCategoryName)); // ['smartphones e telefonia', 'informática', 'games', 'eletrônicos, áudio e vídeo', 'veículos elétricos leves'].

  return (
    <header id="iziTechHeader">
      <section id="iziTechTopHeader">
        <div id="headerContentContainer">
          <div id="logoAndSearchBarContainer">
            <Link to="/">
              <img src={ iziTechLogo } alt="Logo Izi Tech" />
            </Link>
            {location.pathname === '/' || location.pathname === '/selectedAds' ? (
              <SearchBar
                setAdsToRender={ setAdsToRender }
                setIsHomeFilterBoxHidden={ setIsHomeFilterBoxHidden }
                homeSearchedItem={ homeSearchedItem }
                setHomeSearchedItem={ setHomeSearchedItem }
                onClickHomeSearchBtn={ onClickHomeSearchBtn }
                setHomeOrderBy={ setHomeOrderBy }
              />)
              : (
                <Link to="/" id="redirectToSearchArea">
                  realizar busca
                </Link>
              )}
          </div>
          <nav id="headerNavbar">
            <ul id="notDropdownList">
              {categoriesArray.filter((_cat, index) => index <= 2)
                .map((category) => (
                  <li key={ category }>
                    <Link to="/" id="notDropdownLink">{category}</Link>
                  </li>
                ))}
              <DropdownCategories />
            </ul>
          </nav>
          <div id="logInAndSellBtnsContainer">
            {!user.loginInfo.userId
              ? (<Link to="/login" id="loginLink">entrar</Link>)
              : (<DropdownAvatar />)}
            <Link to="/wannaSell">
              <button
                type="button"
                id="wannaSellBtn"
              >
                vender
              </button>
            </Link>
          </div>
        </div>
      </section>
      <SubHeader />
    </header>
  );
}

Header.propTypes = {
  setAdsToRender: PropTypes.func,
  setIsHomeFilterBoxHidden: PropTypes.func,
  homeSearchedItem: PropTypes.string,
  setHomeSearchedItem: PropTypes.func,
  onClickHomeSearchBtn: PropTypes.func,
  setHomeOrderBy: PropTypes.func,
};

Header.defaultProps = {
  setAdsToRender: PropTypes.func,
  setIsHomeFilterBoxHidden: PropTypes.func,
  homeSearchedItem: '',
  setHomeSearchedItem: PropTypes.func,
  onClickHomeSearchBtn: PropTypes.func,
  setHomeOrderBy: PropTypes.func,
};

export default Header;

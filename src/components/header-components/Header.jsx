import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import setProductsCategories from '../../redux/actions/productsCategoriesAC';
import SearchBar from './SearchBar';
import DropdownCategories from './DropdownCategories';
import DropdownAvatar from './DropdownAvatar';
import SubHeader from './SubHeader';
import iziTechLogo from '../../images/izi-tech-logo.png';
import '../../styles/Header.css';

function Header({ setAdsToRender, setIsHomeFilterBoxHidden,
  homeSearchedItem, setHomeSearchedItem,
  onClickHomeSearchBtn, setHomeOrderBy }) {
  const user = useSelector((state) => state.user);
  const productsCategories = useSelector((state) => state.productsCategories);

  const [categoriesArr, setCategoriesArr] = React.useState([]);
  const topCategoriesArr = categoriesArr.map(({ topCategoryName }) => topCategoryName);

  const location = useLocation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const PRODUCTS_CATEGORIES_ENDPOINT = 'https://izi-tech-back.herokuapp.com/products_categories';
    // const PRODUCTS_CATEGORIES_ENDPOINT_LOCAL = 'http://localhost:4000/products_categories';

    if (productsCategories.productsCategoriesArr.length === 0) {
      fetch(PRODUCTS_CATEGORIES_ENDPOINT)
        .then((res) => res.json())
        .then((cleanData) => {
          setCategoriesArr(cleanData);
          dispatch(setProductsCategories(cleanData));
        });
    } else {
      setCategoriesArr(productsCategories.productsCategoriesArr);
    }
  }, []);

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
              {topCategoriesArr.filter((_cat, index) => index <= 2)
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

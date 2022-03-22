import React from 'react';
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
// import { useSelector } from 'react-redux';
import '../../styles/SearchBar.css';

function SearchBar({ setAdsToRender, setIsHomeFilterBoxHidden,
  homeSearchedItem, setHomeSearchedItem,
  onClickHomeSearchBtn, setHomeOrderBy }) {
  // const publishedProductsMacroArr = useSelector((state) => state.publishedProducts
  //   .publishedProducts);
  // const publishedProductsArr = publishedProductsMacroArr
  //   .map(({ userPublishedProducts }) => userPublishedProducts)
  //   .reduce((acc, currMiniArr) => acc.concat(currMiniArr))
  //   .sort((prodA, prodB) => prodB.productId - prodA.productId);

  const homeSearchWithEnter = (e) => {
    e.preventDefault();
    onClickHomeSearchBtn();
  };

  return (
    <div id="searchBarContainer">
      <input
        type="text"
        placeholder="Playstation 5..."
        value={ homeSearchedItem }
        onChange={ ({ target }) => setHomeSearchedItem(target.value) }
        onFocus={ () => {
          setIsHomeFilterBoxHidden(true);
          setHomeSearchedItem('');
          setAdsToRender(publishedProductsArr);
          setHomeOrderBy('ordenar por');
        } }
        onKeyPress={ (event) => event.key === 'Enter'
        && homeSearchWithEnter(event) }
      />
      <button
        id="searchBtn"
        type="button"
        disabled={ homeSearchedItem === '' }
        onClick={ () => onClickHomeSearchBtn() }
      >
        <BsSearch />
      </button>
    </div>
  );
}

SearchBar.propTypes = {
  setAdsToRender: PropTypes.func,
  setIsHomeFilterBoxHidden: PropTypes.func,
  homeSearchedItem: PropTypes.string,
  setHomeSearchedItem: PropTypes.func,
  onClickHomeSearchBtn: PropTypes.func,
  setHomeOrderBy: PropTypes.func,
};

SearchBar.defaultProps = {
  setAdsToRender: PropTypes.func,
  setIsHomeFilterBoxHidden: PropTypes.func,
  homeSearchedItem: '',
  setHomeSearchedItem: PropTypes.func,
  onClickHomeSearchBtn: PropTypes.func,
  setHomeOrderBy: PropTypes.func,
};

export default SearchBar;

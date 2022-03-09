import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function HomeFilterArea({ homeFilterArea, setHomeFilterArea }) {
  const publishedProductsMacroArr = useSelector((state) => state.publishedProducts
    .publishedProducts);
  const cityPlusDDDArrWithDuplicates = publishedProductsMacroArr
    .map(({ userPublishedProducts }) => userPublishedProducts)
    .reduce((acc, currMiniArr) => acc.concat(currMiniArr))
    .map(({ productLocation }) => `${productLocation.productCity
    } - ddd ${productLocation.productDDD}`);
  const cityPlusDDDArr = cityPlusDDDArrWithDuplicates
    .filter((element, i) => cityPlusDDDArrWithDuplicates.indexOf(element) === i)
    .sort();

  return (
    <div id="homeFilterAreaContainer">
      <label htmlFor="homeFilterArea">
        <select
          id="homeFilterArea"
          name="homeFilterArea"
          value={ homeFilterArea }
          onChange={ ({ target }) => {
            setHomeFilterArea(target.value);
          } }
        >
          <option>selecionar região de busca</option>
          {cityPlusDDDArr.map((element) => (
            <option key={ element }>{element}</option>
          ))}
        </select>
      </label>
    </div>
  );
}

HomeFilterArea.propTypes = {
  homeFilterArea: PropTypes.string.isRequired,
  setHomeFilterArea: PropTypes.func.isRequired,
};

export default HomeFilterArea;

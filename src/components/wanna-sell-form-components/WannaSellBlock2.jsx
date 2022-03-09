import React from 'react';
import PropTypes from 'prop-types';
import categoriesStructure from '../../data/categories-structure';

function WannaSellBlock2({
  wSProductTopCategory, setWsProductTopCategory,
  wSProductLine, setWsProductLine,
  wSTypeOfProduct, setWsTypeOfProduct,
}) {
  const selectLineOfProduct = 'selecionar linha de produto*';
  const selectTypeOfProduct = 'selecionar tipo de produto*';

  const topCategoriesArray = categoriesStructure
    .map((topCat) => (topCat.topCategoryName)); // ['smartphones e telefonia', 'informática', 'games', 'eletrônicos, áudio e vídeo', 'veículos elétricos leves'].

  const selectedTopCategory = categoriesStructure
    .find((topCat) => (topCat.topCategoryName === wSProductTopCategory)); // { topCategoryId: 1, topCategoryName: 'telefonia', productLines: [] }

  return (
    <div id="wannaSellBlock2">
      <label htmlFor="wSProductTopCategory">
        <select
          id="wSProductTopCategory"
          name="wSProductTopCategory"
          value={ wSProductTopCategory }
          onChange={ ({ target }) => {
            setWsProductTopCategory(target.value);
            setWsProductLine(selectLineOfProduct);
            setWsTypeOfProduct(selectTypeOfProduct);
          } }
        >
          <option>selecionar categoria*</option>
          {topCategoriesArray.map((topCategory) => (
            <option key={ topCategory }>{topCategory}</option>
          ))}
        </select>
      </label>

      {wSProductTopCategory !== 'selecionar categoria*' && (
        <label htmlFor="wSProductLine">
          <select
            id="wSProductLine"
            name="wSProductLine"
            value={ wSProductLine }
            onChange={ ({ target }) => {
              setWsProductLine(target.value);
              setWsTypeOfProduct(selectTypeOfProduct);
            } }
          >
            <option>{selectLineOfProduct}</option>
            {selectedTopCategory.productLines
              .map(({ productLineName }) => (productLineName))
              .map((productLine) => (
                <option key={ productLine }>{productLine}</option>
              ))}
          </select>
        </label>)}

      {wSProductLine !== selectLineOfProduct && (
        <label htmlFor="wSTypeOfProduct">
          <select
            id="wSTypeOfProduct"
            name="wSTypeOfProduct"
            value={ wSTypeOfProduct }
            onChange={ ({ target }) => setWsTypeOfProduct(target.value) }
          >
            <option>{selectTypeOfProduct}</option>
            {selectedTopCategory.productLines
              .find(({ productLineName }) => (productLineName === wSProductLine))
              .typeOfProducts
              .map((typeOfProduct) => (
                <option key={ typeOfProduct }>{typeOfProduct}</option>
              ))}
          </select>
        </label>)}
    </div>
  );
}

WannaSellBlock2.propTypes = {
  wSProductTopCategory: PropTypes.string.isRequired,
  setWsProductTopCategory: PropTypes.func.isRequired,
  wSProductLine: PropTypes.string.isRequired,
  setWsProductLine: PropTypes.func.isRequired,
  wSTypeOfProduct: PropTypes.string.isRequired,
  setWsTypeOfProduct: PropTypes.func.isRequired,
};

export default WannaSellBlock2;

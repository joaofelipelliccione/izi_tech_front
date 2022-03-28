import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function WannaSellBlock2({
  wSProductTopCategory, setWsProductTopCategory,
  wSProductLine, setWsProductLine,
  wSTypeOfProduct, setWsTypeOfProduct,
}) {
  const { productsCategoriesArr } = useSelector((state) => state.productsCategories);
  const selectLineOfProduct = 'selecionar linha de produto*';
  const selectTypeOfProduct = 'selecionar tipo de produto*';

  const topCategoriesArray = productsCategoriesArr
    .map(({ topCategoryName }) => (topCategoryName));

  const selectedTopCategory = productsCategoriesArr
    .find(({ topCategoryName }) => (topCategoryName === wSProductTopCategory));

  return (
    <div id="wannaSellBlock2">
      {console.log(selectedTopCategory)}
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
            {selectedTopCategory.productLine
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
            {selectedTopCategory.productLine
              .find(({ productLineName }) => (productLineName === wSProductLine))
              .productType
              .map(({ productTypeId, productTypeName }) => (
                <option
                  key={ productTypeName }
                  value={ productTypeId }
                >
                  {productTypeName}
                </option>
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

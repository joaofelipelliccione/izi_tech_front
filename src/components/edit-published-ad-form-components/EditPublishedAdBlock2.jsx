import React from 'react';
import PropTypes from 'prop-types';
import categoriesStructure from '../../data/categories-structure';

function EditPublishedAdBlock2({
  editProductTopCategory, setEditProductTopCategory,
  editProductLine, setEditProductLine,
  editProductType, setEditProductType,
}) {
  const selectLineOfProduct = 'selecionar linha de produto*';
  const selectTypeOfProduct = 'selecionar tipo de produto*';

  const topCategoriesArray = categoriesStructure
    .map((topCat) => (topCat.topCategoryName)); // ['smartphones e telefonia', 'informática', 'games', 'eletrônicos, áudio e vídeo', 'veículos elétricos leves'].

  const selectedTopCategory = categoriesStructure
    .find((topCat) => (topCat.topCategoryName === editProductTopCategory)); // { topCategoryId: 1, topCategoryName: 'telefonia', productLines: [] }

  return (
    <div id="editPublishedAdBlock2">
      <label htmlFor="editProductTopCategory">
        <select
          id="editProductTopCategory"
          name="editProductTopCategory"
          value={ editProductTopCategory }
          onChange={ ({ target }) => {
            setEditProductTopCategory(target.value);
            setEditProductLine(selectLineOfProduct);
            setEditProductType(selectTypeOfProduct);
          } }
        >
          <option>selecionar categoria*</option>
          {topCategoriesArray.map((topCategory) => (
            <option key={ topCategory }>{topCategory}</option>
          ))}
        </select>
      </label>

      {editProductTopCategory !== 'selecionar categoria*' && (
        <label htmlFor="editProductLine">
          <select
            id="editProductLine"
            name="editProductLine"
            value={ editProductLine }
            onChange={ ({ target }) => {
              setEditProductLine(target.value);
              setEditProductType(selectTypeOfProduct);
            } }
          >
            <option>{selectLineOfProduct}</option>
            {selectedTopCategory && selectedTopCategory.productLines
              .map(({ productLineName }) => (productLineName))
              .map((productLine) => (
                <option key={ productLine }>{productLine}</option>
              ))}
          </select>
        </label>)}

      {editProductLine !== selectLineOfProduct && (
        <label htmlFor="editProductType">
          <select
            id="editProductType"
            name="editProductType"
            value={ editProductType }
            onChange={ ({ target }) => setEditProductType(target.value) }
          >
            <option>{selectTypeOfProduct}</option>
            {selectedTopCategory && selectedTopCategory.productLines
              .find(({ productLineName }) => (productLineName === editProductLine))
              .typeOfProducts
              .map((typeOfProduct) => (
                <option key={ typeOfProduct }>{typeOfProduct}</option>
              ))}
          </select>
        </label>)}
    </div>
  );
}

EditPublishedAdBlock2.propTypes = {
  editProductTopCategory: PropTypes.string.isRequired,
  setEditProductTopCategory: PropTypes.func.isRequired,
  editProductLine: PropTypes.string.isRequired,
  setEditProductLine: PropTypes.func.isRequired,
  editProductType: PropTypes.string.isRequired,
  setEditProductType: PropTypes.func.isRequired,
};

export default EditPublishedAdBlock2;

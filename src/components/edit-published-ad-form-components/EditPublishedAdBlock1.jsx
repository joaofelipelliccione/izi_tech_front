import React from 'react';
import PropTypes from 'prop-types';

function EditPublishedAdBlock1({
  editProductTitle, setEditProductTitle,
  editProductDescription, setEditProductDescription,
  editProductAcceptChange, setEditProductAcceptChange,
}) {
  return (
    <div id="editPublishedAdBlock1">
      <label htmlFor="editProductTitle">
        <input
          id="editProductTitle"
          type="text"
          name="editProductTitle"
          value={ editProductTitle }
          onChange={ ({ target }) => setEditProductTitle(target.value) }
          placeholder="título* - Ex: Samsung Galaxy S20 Preto de 256 GB"
        />
      </label>
      <label htmlFor="editProductDescription">
        <textarea
          id="editProductDescription"
          name="editProductDescription"
          value={ editProductDescription }
          onChange={ ({ target }) => setEditProductDescription(target.value) }
          placeholder="descrição*"
          rows="8"
        />
      </label>
      <label htmlFor="editProductAcceptChange">
        <input
          id="editProductAcceptChange"
          type="checkbox"
          name="editProductAcceptChange"
          checked={ editProductAcceptChange }
          onChange={ ({ target }) => setEditProductAcceptChange(target.checked) }
        />
        considero troca em outros produtos tecnológicos!
      </label>
    </div>
  );
}

EditPublishedAdBlock1.propTypes = {
  editProductTitle: PropTypes.string.isRequired,
  setEditProductTitle: PropTypes.func.isRequired,
  editProductDescription: PropTypes.string.isRequired,
  setEditProductDescription: PropTypes.func.isRequired,
  editProductAcceptChange: PropTypes.bool.isRequired,
  setEditProductAcceptChange: PropTypes.func.isRequired,
};

export default EditPublishedAdBlock1;

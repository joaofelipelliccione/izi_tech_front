import React from 'react';
import PropTypes from 'prop-types';

function HomeFilterProductAcceptChange({
  homeFilterPAC, setHomeFilterPAC,
}) {
  return (
    <div id="homeFilterPACContainer">
      <label htmlFor="homeFilterPAC">
        <input
          id="homeFilterPAC"
          type="checkbox"
          name="homeFilterPAC"
          checked={ homeFilterPAC }
          onChange={ ({ target }) => setHomeFilterPAC(target.checked) }
        />
        somente venda
      </label>
    </div>
  );
}

HomeFilterProductAcceptChange.propTypes = {
  homeFilterPAC: PropTypes.bool.isRequired,
  setHomeFilterPAC: PropTypes.func.isRequired,
};

export default HomeFilterProductAcceptChange;

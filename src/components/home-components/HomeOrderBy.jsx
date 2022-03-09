import React from 'react';
import PropTypes from 'prop-types';

function HomeOrderBy({ homeOrderBy, setHomeOrderBy }) {
  return (
    <section id="homeOrderByContainer">
      <label htmlFor="homeOrderBy">
        <select
          id="homeOrderBy"
          name="homeOrderBy"
          value={ homeOrderBy }
          onChange={ ({ target }) => {
            setHomeOrderBy(target.value);
          } }
        >
          <option>mais recentes</option>
          <option>maior preço</option>
          <option>menor preço</option>
        </select>
      </label>
    </section>
  );
}

HomeOrderBy.propTypes = {
  homeOrderBy: PropTypes.string.isRequired,
  setHomeOrderBy: PropTypes.func.isRequired,
};

export default HomeOrderBy;

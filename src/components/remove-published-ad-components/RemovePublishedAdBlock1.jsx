import React from 'react';
import PropTypes from 'prop-types';

function RemovePublishedAdBlock1({ setRemovalMotiveRdBtns }) {
  return (
    <div id="removePublishedAdBlock1">
      <label
        htmlFor="removalMotiveRdBtn0"
      >
        <input
          id="removalMotiveRdBtn0"
          name="removalMotiveRdBtns"
          type="radio"
          value="vendi pela izi tech"
          onChange={ ({ target }) => setRemovalMotiveRdBtns(target.value) }
        />
        vendi pela izi tech
      </label>
      <label
        htmlFor="removalMotiveRdBtn1"
      >
        <input
          id="removalMotiveRdBtn1"
          name="removalMotiveRdBtns"
          type="radio"
          value="vendi por outro meio"
          onChange={ ({ target }) => setRemovalMotiveRdBtns(target.value) }
        />
        vendi por outro meio
      </label>
      <label
        htmlFor="removalMotiveRdBtn2"
      >
        <input
          id="removalMotiveRdBtn2"
          name="removalMotiveRdBtns"
          type="radio"
          value="ainda não vendi"
          onChange={ ({ target }) => setRemovalMotiveRdBtns(target.value) }
        />
        ainda não vendi
      </label>
      <label
        htmlFor="removalMotiveRdBtn3"
      >
        <input
          id="removalMotiveRdBtn3"
          name="removalMotiveRdBtns"
          type="radio"
          value="desisti de vender"
          onChange={ ({ target }) => setRemovalMotiveRdBtns(target.value) }
        />
        desisti de vender
      </label>
      <label
        htmlFor="removalMotiveRdBtn4"
      >
        <input
          id="removalMotiveRdBtn4"
          name="removalMotiveRdBtns"
          type="radio"
          value="outro motivo"
          onChange={ ({ target }) => setRemovalMotiveRdBtns(target.value) }
        />
        outro motivo
      </label>
    </div>
  );
}

RemovePublishedAdBlock1.propTypes = {
  setRemovalMotiveRdBtns: PropTypes.func.isRequired,
};

export default RemovePublishedAdBlock1;

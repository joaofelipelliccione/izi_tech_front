import React from 'react';
import PropTypes from 'prop-types';

function HomeFilterProductCondition({
  homeFilterPCAA, setHomeFilterPCAA,
  homeFilterPCA, setHomeFilterPCA,
  homeFilterPCB, setHomeFilterPCB,
  homeFilterPCC, setHomeFilterPCC,
  homeFilterPCFinalArr, setHomeFilterPCFinalArr,
}) {
  return (
    <div id="homeFilterPCContainer">
      <h3>condição do produto</h3>
      <label htmlFor="homeFilterPCAA">
        <input
          id="homeFilterPCAA"
          type="checkbox"
          name="homeFilterPCAA"
          checked={ homeFilterPCAA }
          onChange={ ({ target }) => {
            setHomeFilterPCAA(target.checked);
            if (homeFilterPCFinalArr.includes('AA')) {
              setHomeFilterPCFinalArr(homeFilterPCFinalArr
                .filter((condition) => condition !== 'AA'));
            }
            if (!homeFilterPCFinalArr.includes('AA')) {
              setHomeFilterPCFinalArr([...homeFilterPCFinalArr, 'AA']);
            }
          } }
        />
        AA - nunca usado: produto zero
      </label>
      <label htmlFor="homeFilterPCA">
        <input
          id="homeFilterPCA"
          type="checkbox"
          name="homeFilterPCA"
          checked={ homeFilterPCA }
          onChange={ ({ target }) => {
            setHomeFilterPCA(target.checked);
            if (homeFilterPCFinalArr.includes('A')) {
              setHomeFilterPCFinalArr(homeFilterPCFinalArr
                .filter((condition) => condition !== 'A'));
            }
            if (!homeFilterPCFinalArr.includes('A')) {
              setHomeFilterPCFinalArr([...homeFilterPCFinalArr, 'A']);
            }
          } }
        />
        A - como novo: produto em excelente condição
      </label>
      <label htmlFor="homeFilterPCB">
        <input
          id="homeFilterPCB"
          type="checkbox"
          name="homeFilterPCB"
          checked={ homeFilterPCB }
          onChange={ ({ target }) => {
            setHomeFilterPCB(target.checked);
            if (homeFilterPCFinalArr.includes('B')) {
              setHomeFilterPCFinalArr(homeFilterPCFinalArr
                .filter((condition) => condition !== 'B'));
            }
            if (!homeFilterPCFinalArr.includes('B')) {
              setHomeFilterPCFinalArr([...homeFilterPCFinalArr, 'B']);
            }
          } }
        />
        B - bom estado: produto em boas condições
      </label>
      <label htmlFor="homeFilterPCC">
        <input
          id="homeFilterPCC"
          type="checkbox"
          name="homeFilterPCC"
          checked={ homeFilterPCC }
          onChange={ ({ target }) => {
            setHomeFilterPCC(target.checked);
            if (homeFilterPCFinalArr.includes('C')) {
              setHomeFilterPCFinalArr(homeFilterPCFinalArr
                .filter((condition) => condition !== 'C'));
            }
            if (!homeFilterPCFinalArr.includes('C')) {
              setHomeFilterPCFinalArr([...homeFilterPCFinalArr, 'C']);
            }
          } }
        />
        C - peça: parte funcional oriunda de aparelho quebrado
      </label>
    </div>
  );
}

HomeFilterProductCondition.propTypes = {
  homeFilterPCAA: PropTypes.bool.isRequired,
  setHomeFilterPCAA: PropTypes.func.isRequired,
  homeFilterPCA: PropTypes.bool.isRequired,
  setHomeFilterPCA: PropTypes.func.isRequired,
  homeFilterPCB: PropTypes.bool.isRequired,
  setHomeFilterPCB: PropTypes.func.isRequired,
  homeFilterPCC: PropTypes.bool.isRequired,
  setHomeFilterPCC: PropTypes.func.isRequired,
  homeFilterPCFinalArr: PropTypes.arrayOf(PropTypes.string).isRequired,
  setHomeFilterPCFinalArr: PropTypes.func.isRequired,
};

export default HomeFilterProductCondition;

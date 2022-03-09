import React from 'react';
import PropTypes from 'prop-types';
import { RiFilterLine, RiFilterOffLine } from 'react-icons/ri';
import HomeFilterArea from './home-filters-subcomponents/HomeFilterArea';
import HomeFilterProductCondition
from './home-filters-subcomponents/HomeFilterProductCondition';
import HomeFilterProductAcceptChange
from './home-filters-subcomponents/HomeFilterProductAcceptChange';

function HomeFilters({ adsToRender, setAdsToRender,
  homeOrderBy, setHomeOrderBy }) {
  const HOME_FILTER_AREA_MSG = 'selecionar região de busca';
  const [homeFilterArea, setHomeFilterArea] = React
    .useState(HOME_FILTER_AREA_MSG);

  const [homeFilterPCAA, setHomeFilterPCAA] = React.useState(false);
  const [homeFilterPCA, setHomeFilterPCA] = React.useState(false);
  const [homeFilterPCB, setHomeFilterPCB] = React.useState(false);
  const [homeFilterPCC, setHomeFilterPCC] = React.useState(false);
  const [homeFilterPCFinalArr, setHomeFilterPCFinalArr] = React.useState([]);

  const [homeFilterPAC, setHomeFilterPAC] = React.useState(false);

  const [renderedAdsBeforeFilter, setRenderedAdsBeforeFilter] = React.useState([]);
  const [chosenOrderByBeforeFilter, setChosenOrderByBeforeFilter] = React.useState('');
  const [isHomeClearFilterRendered, setIsHomeClearFilterRendered] = React.useState(false);

  const onHomeFilterBtnClick = () => {
    setRenderedAdsBeforeFilter(adsToRender);
    setChosenOrderByBeforeFilter(homeOrderBy);
    let adsAfterFiltersAppliance = adsToRender;

    if (homeFilterArea !== HOME_FILTER_AREA_MSG) {
      const chosenDDD = homeFilterArea.split('-')[1].match(/\d+/g)[0];
      const adsArrayAfterAreaFilter = adsAfterFiltersAppliance
        .filter(({ productLocation }) => productLocation.productDDD === chosenDDD);
      adsAfterFiltersAppliance = adsArrayAfterAreaFilter;
    }
    if (homeFilterPCFinalArr.length > 0) {
      const THREE = 3; const FOUR = 4;
      if (homeFilterPCFinalArr.length === FOUR) {
        const adsArrayAfterPCFilter = adsAfterFiltersAppliance
          .filter(({ productCondition }) => productCondition === homeFilterPCFinalArr[0]
          || productCondition === homeFilterPCFinalArr[1]
          || productCondition === homeFilterPCFinalArr[2]
          || productCondition === homeFilterPCFinalArr[3]);
        adsAfterFiltersAppliance = adsArrayAfterPCFilter;
      }
      if (homeFilterPCFinalArr.length === THREE) {
        const adsArrayAfterPCFilter = adsAfterFiltersAppliance
          .filter(({ productCondition }) => productCondition === homeFilterPCFinalArr[0]
          || productCondition === homeFilterPCFinalArr[1]
          || productCondition === homeFilterPCFinalArr[2]);
        adsAfterFiltersAppliance = adsArrayAfterPCFilter;
      }
      if (homeFilterPCFinalArr.length === 2) {
        const adsArrayAfterPCFilter = adsAfterFiltersAppliance
          .filter(({ productCondition }) => productCondition === homeFilterPCFinalArr[0]
          || productCondition === homeFilterPCFinalArr[1]);
        adsAfterFiltersAppliance = adsArrayAfterPCFilter;
      }
      if (homeFilterPCFinalArr.length === 1) {
        const adsArrayAfterPCFilter = adsAfterFiltersAppliance
          .filter(({ productCondition }) => productCondition === homeFilterPCFinalArr[0]);
        adsAfterFiltersAppliance = adsArrayAfterPCFilter;
      }
    }
    if (homeFilterPAC) {
      const adsArrayAfterPACFilter = adsAfterFiltersAppliance
        .filter(({ productAcceptChange }) => productAcceptChange === false);
      adsAfterFiltersAppliance = adsArrayAfterPACFilter;
    }
    setAdsToRender(adsAfterFiltersAppliance);
    setIsHomeClearFilterRendered(true);
  };

  const onHomeClearFilterBtnClick = () => {
    setAdsToRender(renderedAdsBeforeFilter);
    setIsHomeClearFilterRendered(false);
    setHomeFilterArea(HOME_FILTER_AREA_MSG);
    setHomeFilterPCAA(false);
    setHomeFilterPCA(false);
    setHomeFilterPCB(false);
    setHomeFilterPCC(false);
    setHomeFilterPCFinalArr([]);
    setHomeFilterPAC(false);
    setHomeOrderBy(chosenOrderByBeforeFilter);
  };

  return (
    <div id="homeFiltersContainer1-1">
      <HomeFilterArea
        homeFilterArea={ homeFilterArea }
        setHomeFilterArea={ setHomeFilterArea }
      />
      <HomeFilterProductCondition
        homeFilterPCAA={ homeFilterPCAA }
        setHomeFilterPCAA={ setHomeFilterPCAA }
        homeFilterPCA={ homeFilterPCA }
        setHomeFilterPCA={ setHomeFilterPCA }
        homeFilterPCB={ homeFilterPCB }
        setHomeFilterPCB={ setHomeFilterPCB }
        homeFilterPCC={ homeFilterPCC }
        setHomeFilterPCC={ setHomeFilterPCC }
        homeFilterPCFinalArr={ homeFilterPCFinalArr }
        setHomeFilterPCFinalArr={ setHomeFilterPCFinalArr }
      />
      <HomeFilterProductAcceptChange
        homeFilterPAC={ homeFilterPAC }
        setHomeFilterPAC={ setHomeFilterPAC }
      />
      {!isHomeClearFilterRendered ? (
        <button
          id="homeFilterBtn"
          type="button"
          onClick={ onHomeFilterBtnClick }
          disabled={
            homeFilterArea === HOME_FILTER_AREA_MSG
            && homeFilterPCFinalArr.length === 0
            && !homeFilterPAC
          }
        >
          <RiFilterLine />
        </button>)
        : (
          <button
            id="homeClearFilterBtn"
            type="button"
            onClick={ onHomeClearFilterBtnClick }
          >
            <RiFilterOffLine />
          </button>
        )}
    </div>
  );
}

HomeFilters.propTypes = {
  adsToRender: PropTypes.arrayOf(PropTypes.object).isRequired,
  setAdsToRender: PropTypes.func.isRequired,
  homeOrderBy: PropTypes.string.isRequired,
  setHomeOrderBy: PropTypes.func.isRequired,
};

export default HomeFilters;

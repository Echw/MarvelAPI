import React from 'react';
import MainHeroSection from '../components/UI/MainHeroSection';
import ComicsHeroSection from '../components/UI/ComicsHeroSection';
import { useLocation } from 'react-router-dom';
import SearchError from '../components/UI/SearchError';

const HeroPage = (props) => {
  const location = useLocation();
  console.log(location.state);

  if (
    location.state === null ||
    (location.state.enteredSearch !== null &&
      location.state.enteredSearch === '')
  ) {
    return <SearchError />;
  }

  if (
    location.state.enteredSearch !== null &&
    location.state.enteredSearch !== ''
  )
    return (
      <div>
        <MainHeroSection hero={location.state} />
        <ComicsHeroSection comics={location.state.comics} />
      </div>
    );
};

export default HeroPage;

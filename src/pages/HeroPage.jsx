import React, { useState } from 'react';
import MainHeroSection from '../components/UI/MainHeroSection';
import ComicsHeroSection from '../components/UI/ComicsHeroSection';
import { useLocation } from 'react-router-dom';
import SearchError from '../components/UI/SearchError';
import { fetchHeros } from './../utils/fetchMarvel';

const HeroPage = (props) => {
  const location = useLocation();
  const [hero, setHero] = useState();

  if (location.state === null) {
    return <SearchError />;
  }

  if (
    location.state.enteredSearch !== undefined &&
    location.state.enteredSearch !== ''
  ) {
    console.log('test1');

    fetchHeros(location.state.enteredSearch)
      .then((data) => setHero(data.data.results[0]))
      .catch((err) => console.error(err));

    if (!hero) return <SearchError />;

    return (
      <div>
        <MainHeroSection hero={hero} />
        <ComicsHeroSection comics={hero.comics} />
      </div>
    );
  }

  if (location.state.hero !== undefined)
    return (
      <div>
        <MainHeroSection hero={location.state.hero} />
        <ComicsHeroSection comics={location.state.hero.comics} />
      </div>
    );
};

export default HeroPage;

import React, { useState } from 'react';
import MainHeroSection from '../components/UI/MainHeroSection';
import ComicsHeroSection from '../components/UI/ComicsHeroSection';
import { useLocation } from 'react-router-dom';
import SearchError from '../components/UI/SearchError';
import { fetchHeros, fetchHeroComics } from './../utils/fetchMarvel';

const HeroPage = (props) => {
  const location = useLocation();
  const [hero, setHero] = useState();
  const [comics, setComics] = useState();

  if (location.state === null) {
    return <SearchError />;
  }

  if (
    location.state.enteredSearch !== undefined &&
    location.state.enteredSearch !== ''
  ) {
    console.log('test1');
    if (!hero) {
      fetchHeros(location.state.enteredSearch)
        .then((data) => setHero(data.data.results[0]))
        .catch((err) => console.error(err));
    }

    if (hero && !comics) {
      fetchHeroComics(hero.id)
        .then((data) => {
          setComics(data.data.results);
        })
        .catch((err) => console.error(err));
    }

    if (!hero || !comics) {
      return <SearchError />;
    } else {
      return (
        <div>
          <MainHeroSection hero={hero} />
          <ComicsHeroSection comics={comics} />
        </div>
      );
    }
  }

  if (location.state.hero !== undefined)
    if (!comics) {
      fetchHeroComics(location.state.hero.id)
        .then((data) => {
          setComics(data.data.results);
        })
        .catch((err) => console.error(err));
    }
  return (
    <div>
      <MainHeroSection hero={location.state.hero} />
      {comics && <ComicsHeroSection comics={comics} />}
    </div>
  );
};

export default HeroPage;

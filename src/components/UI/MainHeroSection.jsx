import React from 'react';
import classes from './MainHeroSection.module.css';
import HeroCover from './HeroCover';
import NavHeroSection from './NavHeroSection';

const MainHeroSection = (props) => {
  return (
    <>
      <NavHeroSection />
      <div>
        <div className={classes.heroInfoWraper}>
          <div className={classes.leftInfoWraper}>
            <h2>{props.hero.name}</h2>
            <p>
              {props.hero.description === ''
                ? 'There is no description.'
                : props.hero.description}
            </p>
          </div>
          <HeroCover className={classes.new} thumbnail={props.hero.thumbnail} />
          <div className={classes.rightInfoWraper}>
            <h2>Series:</h2>
            <div>
              <ul>
                {props.hero.series.items.map((item) => (
                  <li key={item.resourceURI}>{item.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeroSection;

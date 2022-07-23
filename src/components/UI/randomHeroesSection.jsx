import React, { useState } from 'react';
import classes from './RandomHeroesSection.module.css';
import HeroCoverHOC from './HeroCoverHOC';
import { HEROS } from '../../utils/constants/heroArray.constant';

const RandomHeroesSection = () => {
  const [selectedHeroes] = useState(
    HEROS.sort(() => 0.5 - Math.random()).slice(0, 3)
  );

  return (
    <div className={classes.wraper}>
      <div className={classes.galleryWraper}>
        {selectedHeroes.map((hero) => (
          <HeroCoverHOC key={hero} id={hero} />
        ))}
      </div>
    </div>
  );
};

export default RandomHeroesSection;

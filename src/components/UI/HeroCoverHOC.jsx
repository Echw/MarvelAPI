import React, { useEffect, useState } from 'react';
import { fetchHero } from '../../utils/fetchMarvel';
import HeroCover from './HeroCover';
import { Link } from 'react-router-dom';

const HeroCoverHOC = (props) => {
  const [hero, setHero] = useState();

  useEffect(() => {
    fetchHero(props.id)
      .then((data) => setHero(data.data.results[0]))
      .catch((err) => console.error(err));
  }, [props.id]);

  if (!hero) return <></>;

  return (
    <Link to="/hero" state={{ hero }}>
      <HeroCover thumbnail={hero.thumbnail} name={hero.name} />
    </Link>
  );
};

export default HeroCoverHOC;

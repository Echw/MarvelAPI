import React from 'react';
import classes from './ComicsHeroSection.module.css';
import ComicsCover from './ComicsCover';

const ComicsHeroSection = (props) => {
  return (
    <div className={classes.sectionWraper}>
      <h3>COMICS:</h3>
      <div className={classes.imgWraper}>
        {props.comics.map((item) => (
          <ComicsCover item={item} />
        ))}
      </div>
    </div>
  );
};

export default ComicsHeroSection;

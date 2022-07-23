import React from 'react';
import classes from './HeroCover.module.css';

const HeroCover = (props) => {
  return (
    <div className={`${classes.textImgWraper} ${props.className}`}>
      <div className={classes.imgWraper}>
        {props.thumbnail && (
          <img
            src={`${props.thumbnail.path}/portrait_incredible.${props.thumbnail.extension}`}
            alt="hero"
            className={classes.img}
          />
        )}
        <div className={classes.imgDark}></div>
      </div>
      <h3>{props.name}</h3>
    </div>
  );
};

export default HeroCover;

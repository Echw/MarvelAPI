import React from "react";
import classes from "./HeroCover.module.css";

const HeroCover = (props) => {
  return (
    <div className={`${classes.textImgWraper} ${props.className}`}>
      <div className={classes.imgWraper}>
        {props.img && (
          <img
            src={`${props.img.path}/portrait_incredible.${props.img.extension}`}
            alt="hero"
            className={classes.img}
          />
        )}
        <div className={classes.imgDark}></div>
      </div>
      <h3>MARVEL</h3>
    </div>
  );
};

export default HeroCover;

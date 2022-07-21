import React from "react";
import classes from "./hero.module.css";
import hero from "../../assets/images/6502019 1.png";

const Hero = () => {
  return (
    <div className={classes.textImgWraper}>
      <div className={classes.imgWraper}>
        <img src={hero} alt="hero" className={classes.img} />
        <div className={classes.imgDark}></div>
      </div>
      <h3>MARVEL</h3>
    </div>
  );
};

export default Hero;

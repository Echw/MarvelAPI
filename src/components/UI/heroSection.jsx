import React from "react";
import classes from "./heroSection.module.css";

const HeroSection = () => {
  return (
    <header>
      <div className={classes.background}></div>
      <div className={classes.logo}>
        <img src="../../../public/img/pngegg.png" alt="marvel logo" />
      </div>
      <h1 className={classes.heroText}>HERO SEARCH</h1>
    </header>
  );
};

export default HeroSection;

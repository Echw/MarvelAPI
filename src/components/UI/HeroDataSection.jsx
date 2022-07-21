import React from "react";
import classes from "./HeroDataSection.module.css";
import logo from "./../../assets/images/pngegg.png";

const HeroDataSection = () => {
  return (
    <header className={classes.background}>
      <div className={classes.pageHeader}>
        <img src={logo} alt="marvel logo" />
        <h1 className={classes.heroText}>HERO SEARCH</h1>
      </div>
    </header>
  );
};

export default HeroDataSection;

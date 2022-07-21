import React from "react";
import classes from "./RandomHeroesSection.module.css";
import HeroCover from "./HeroCover";

const RandomHeroesSection = () => {
  return (
    <div className={classes.wraper}>
      <div className={classes.galleryWraper}>
        <HeroCover />
        <HeroCover />
        <HeroCover />
      </div>
    </div>
  );
};

export default RandomHeroesSection;

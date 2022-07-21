import React from "react";
import classes from "./randomHeroesSection.module.css";
import Hero from "./hero";

const RandomHeroesSection = () => {
  return (
    <div className={classes.wraper}>
      <div className={classes.galleryWraper}>
        <Hero />
        <Hero />
        <Hero />
      </div>
    </div>
  );
};

export default RandomHeroesSection;

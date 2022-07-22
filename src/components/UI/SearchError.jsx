import React from "react";
import classes from "./SearchError.module.css";
import NavHeroSection from "./NavHeroSection";

const SearchError = () => {
  return (
    <div className={classes.background}>
      <NavHeroSection />
      <div className={classes.heroInfoWraper}>
        <div className={classes.leftInfoWraper}>
          <h2>SORRRY! There is no hero.</h2>
        </div>
      </div>
    </div>
  );
};

export default SearchError;

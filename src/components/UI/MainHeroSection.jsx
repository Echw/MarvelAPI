import React from "react";
import classes from "./MainHeroSection.module.css";
import HeroCover from "./HeroCover";
import NavHeroSection from "./NavHeroSection";

const MainHeroSection = (props) => {
  return (
    <>
      <NavHeroSection />
      <div>
        <div className={classes.heroInfoWraper}>
          <div className={classes.leftInfoWraper}>
            <h2>{props.hero.name}</h2>
            <p>{props.hero.description}</p>
          </div>
          <HeroCover className={classes.new} img={props.hero.thumbnail} />
          <div className={classes.rightInfoWraper}>
            <ul>
              <li>Data</li>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <li>Data</li>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <li>Data</li>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeroSection;

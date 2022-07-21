import React from "react";
import logo from "../../assets/images/pngegg.png";
import classes from "./nav.module.css";
import Hero from "../UI/hero";

const Nav = () => {
  return (
    <div>
      <nav>
        <img src={logo} alt="marvel logo" className={classes.logo} />
        <h2>HERO SEARCH</h2>
      </nav>
      <div className={classes.heroInfoWraper}>
        <div className={classes.leftInfoWraper}>
          <h2>Hero name</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil vel
            eos iure quo qui error, cumque, eius dignissimos consectetur maxime
            ullam itaque sapiente amet dolor.
          </p>
        </div>
        <Hero className={classes.img} />
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
  );
};

export default Nav;

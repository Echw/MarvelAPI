import React from 'react';
import logo from '../../assets/images/pngegg.png';
import { Link } from 'react-router-dom';
import classes from './NavHeroSection.module.css';

const NavHeroSection = () => {
  return (
    <nav>
      <Link className={classes.link} to="/">
        <img src={logo} alt="marvel logo" className={classes.logo} />
        <h2>HERO SEARCH</h2>
      </Link>
    </nav>
  );
};

export default NavHeroSection;

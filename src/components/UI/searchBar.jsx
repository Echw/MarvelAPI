import React from "react";
import classes from "./searchBar.module.css";

const SearchBar = () => {
  return (
    <div className={classes.background}>
      <form action="" className={classes.form}>
        <input type="text" placeholder="Search your hero" />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;

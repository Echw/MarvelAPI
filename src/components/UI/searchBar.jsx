import React from "react";
import classes from "./SearchBar.module.css";

const SearchBar = (props) => {
  return (
    <div className={classes.background}>
      <form className={classes.form} onSubmit={props.onSubmit}>
        <input
          onChange={props.onChange}
          type="text"
          placeholder="Search your hero"
          value={props.value}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;

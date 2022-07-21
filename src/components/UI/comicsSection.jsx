import React from "react";
import classes from "./comicsSection.module.css";
import ComicsCard from "./comicsCard";

const ComicsSection = () => {
  return (
    <div className={classes.sectionWraper}>
      <h3>COMICS:</h3>
      <div className={classes.imgWraper}>
        <ComicsCard />
        <ComicsCard />
        <ComicsCard />
        <ComicsCard />
        <ComicsCard />
        <ComicsCard />
      </div>
    </div>
  );
};

export default ComicsSection;

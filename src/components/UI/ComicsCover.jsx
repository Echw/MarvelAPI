import React from 'react';
import classes from './ComicsCover.module.css';

const ComicsCover = (props) => {
  console.log(props.item);

  return (
    <div className={classes.comicsWrap}>
      <img
        src={`${props.item.thumbnail.path}/portrait_xlarge.${props.item.thumbnail.extension}`}
        alt=""
      />
    </div>
  );
};

export default ComicsCover;

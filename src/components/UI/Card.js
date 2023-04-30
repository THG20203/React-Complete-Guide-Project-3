import React from "react";
/* CSS modules, need to alter import a little bit -> has to be class from */
import classes from "./Card.module.css";

const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;

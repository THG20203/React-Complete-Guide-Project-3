import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    /* pointing at classes.button, because in the Button.module.css file, I'll 
    find that button class */
    /* type needs to be able to be set from outside, so the place where we use our custom
    button component. Therefore the value assigned to the type prop on the built in button
    component will be dynamic, and I'll access props.type, but also provide a fallback in 
    case that should not be set with the or operator, the alternative is button. So, if 
    props.type is undefined, this button value will be used as a fallback type. */
    <button className={classes.button} type={props.type || "button"}></button>
  );
};

export default Button;

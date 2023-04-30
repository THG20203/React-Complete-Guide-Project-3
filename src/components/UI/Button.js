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

    /* added onClick, here expect to get a handler function via props on my own button 
    component, so simply forward this to props onClick */
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {/* want to be able to output content between the button tags. Expect to get content
      between the tags of my own button, therefore we use the special children prop. */}
      {props.children}
    </button>
  );
};

export default Button;

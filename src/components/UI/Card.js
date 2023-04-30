import React from "react";
/* CSS modules, need to alter import a little bit -> has to be class from */
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    /* assinging a class to the div so we can style it, use CSS modules. Access the 
    card class with classes.card. This will assign this generated unique class name to 
    this div */
    /* Our own component does not know what to do with the className prop, so have to go to own
    component and make sure that we accept an incoming class named prop and that we do 
    something with it. Hence, we add ${props.className} with template literal structure. */
    <div className={`${classes.card} ${props.className}`}>
      {/* Card component should output whats passed between the opnening and 
    closing tags of the card. */}
      {/* Access this content with special children prop, put it between curly braces.
    We are putting it between curly braces because its a JavaScript expression rather
    than JSX code. This JavaScript expression should be evaluated inside of JSX code. */}
      {/* props.children will give us that content which has passed between opening and 
    closing tag of the card component */}
      {props.children}
    </div>
  );
};

export default Card;

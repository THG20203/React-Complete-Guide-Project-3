import React from "react";

const Card = (props) => {
  return (
    /* assinging a class to the div so we can style it, use CSS modules */
    <div className="">
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

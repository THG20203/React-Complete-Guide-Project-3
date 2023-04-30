import React from "react";

const Card = (props) => {
  return (
    <div>
      {/* Card component should output whats passed between the opnening and 
    closing tags of the card. Access this content with special children prop, 
    put it between curly braces. */}
      {props.children}
    </div>
  );
};

export default Card;

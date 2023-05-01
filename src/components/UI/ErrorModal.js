import React from "react";
import Card from "./Card";
/* because have button to close the modal, importing the button -> re use the button 
component -> Re usable building blocks. */
import Button from "./Button";

/* ErrorModal gets props */
const ErrorModal = (props) => {
  /* Using Card as a wrapper -> like the rounded corners */
  return (
    <Card>
      {/* Inside of Card component, modal should have different sections. */}
      <header>
        {/* h2 tag -> output a title */}
        <h2></h2>
      </header>
      <div>
        {/* <div> element to hold main content -> paragraph with the error message want to 
        display eventually. */}
        <p></p>
      </div>
      <footer>
        {/* In footer want to have button we can click to close the modal */}
        <Button>Okay</Button>
      </footer>
    </Card>
  );
};

export default ErrorModal;

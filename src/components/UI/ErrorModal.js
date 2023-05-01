import React from "react";
import Card from "./Card";
/* because have button to close the modal, importing the button -> re use the button 
component -> Re usable building blocks. */
import Button from "./Button";
/* Import CSS module for Error modal */
import classes from "./ErrorModal.module.css";

/* ErrorModal gets props */
const ErrorModal = (props) => {
  /* Using Card as a wrapper -> like the rounded corners */
  return (
    /* Couple of classes that should be attached from ErrorModal.module.css for example:
    classes.modal class -> one of the classes defined in css file */
    <Card className={classes.modal}>
      {/* Inside of Card component, modal should have different sections. */}
      <header className={classes.header}>
        {/* h2 tag -> output a title. Modal should be configurable from the outside.
        So, don't want to hard code the title and the message into this component. it 
        should also be reusable. (Can use it in different places of the app, to show
        different error messages). */}
        {/* Hence, outputting something dynamic between curly braces -> use props.title 
        for example. Can be props.anythingIwant -> its my component */}
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        {/* <div> element to hold main content -> paragraph with the error message want to 
        display eventually. */}
        {/* similar to title above, expect a message prop which holds a message that should 
        be output here. */}
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        {/* In footer want to have button we can click to close the modal */}
        <Button>Okay</Button>
      </footer>
    </Card>
  );
};

export default ErrorModal;

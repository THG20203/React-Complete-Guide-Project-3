import React, { useState } from "react";
import Card from "../UI/Card";
/* remember for non JavaScript files in react need to add file extension, i.e. .css */
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  /* call useState and can define the initial starting state -> starting state will be 
  no input */
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    /* prevent default which for submission event = request is sent. */
    event.preventDefault();
  };

  /* Now we need a function triggered on every keystroke */
  /* Get event object, because we'll listen to a default DOM event - such events will dispatch
  objects with more information, and we can bind this to input. */
  const usernameChangeHandler = (event) => {
    /* calling setEnteredUsername -> set it to what the user currently entered. Get that
    entered value with the help of that event object. There we can access target of the event 
    (the input), then -> the value of the property, to get the currently entered value. */
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    /* wrap in Card component. Card is custom component, not built in HTML, therefore only
    has the props, or it only is able to work with the props we use inside of that component. */
    <Card className={classes.input}>
      {/* onSubmit prop -> specify function that should be executed when form is
      submitted. pass addUserHandler to onSubmit. passing pointer of
      addUserHandler to the onSubmit prop, so that form component internally can
  use that function when it needs to use it, i.e when form = submitted. */}
      <form onSubmit={addUserHandler}>
        {/* htmlFor = prop name for assigning that attribute to a label, 
      connect with input with username value. */}
        <label htmlFor="username">Username</label>
        {/* input -> user to type in username, hence type text */}
        {/* onChange prop, tie this to the onChange listener -> this function = triggered for every 
        keystroke in the input element. */}
        <input id="username" type="text" onChange={usernameChangeHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
/* AddUser function arrow function stored within a const, could have 
done function AddUser() {} but chose not to */
/* inside of 'AddUser' -> render something on the screen, allows user to 
enter a name and an age, and have button to confirm all of that. */

export default AddUser;
/* export as default, so can import that component into another file
and use it there */

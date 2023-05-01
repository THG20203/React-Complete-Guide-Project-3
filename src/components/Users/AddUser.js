import React, { useState } from "react";
import Card from "../UI/Card";
/* remember for non JavaScript files in react need to add file extension, i.e. .css */
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Button from "../UI/Button";

const AddUser = (props) => {
  /* call useState and can define the initial starting state -> starting state will be 
  no input */
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  /* Need to update UI conditionally based on the question "is there an 
  error or not". This means state management. We need to manage some 
  error state. Could be a string -> like the error message, could be an object ->
  which bundles error or title message. */
  /* Need to manage such an error state so can set it to 'we have an error'
  (in which case we want to render the modal) AND so we can set it to, we haven't
  got an error, (in which csase we render no modal) */

  /* With all theory above -> we need an extra piece of state, inital value of 
  undefined. Going to name the const error and setError, because I'm going to manage
  some error information. I'm going to manage error as an oject. */
  const [error, setError] = useState("");

  const addUserHandler = (event) => {
    /* prevent default which for submission event = request is sent. */
    event.preventDefault();
    /* Validation logic -> make sure all the code only excutes if we have valid inputs,
    so both the name and age have to be present, and the age must be larger than one */
    /* so if enteredUsername === 0 (equals empty). (Trim method removing any whitespace excess),
    OR if enteredAge is empty -> so same check again then want to return */
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      /* managing error as an object -> set the Error state */
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    /* want to check for age input value -> not just if its empty, but also if its not empty but
    smaller than 1 */
    /* enteredAge is a string not a number and anything thats entered into input below is always 
    retrieved as a string. Although we're comparing enteredAge to a number, that should generally 
    work in JavaScript, but to be super safe, we can force a conversion of enteredAge to a number
    by adding a + sign */
    if (+enteredAge < 1) {
      /* managing error as an object -> set the Error state */
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    /* inside of the AddUser component, we need to utilise this onAddUser prop 
    (from App.js), so here in addUser.js in the addUserHanlder add props.onAddUser() ->
    and execute it as a function here. */

    /* This is  because I know what I get as a value on that prop will be a function. 
    Thats because we're passing a pointer at AddUserHandler to onAddUser in the App.js,
    and addUserHandler is a function. So we can exercise onAddUser() as a function inside of
    the AddUserComponent. */

    /* into onAddUser function we're calling here, just need to add two pieces of data -> the 
    enteredUsername and the enteredAge -> which we've got stored in the AddUser component. */

    /* With that -> we're forwarding the entered data to the App component upon every click on
    the AddUser button here inside of the AddUser component. */
    props.onAddUser(enteredUsername, enteredAge);
    /* Resetting logic */
    setEnteredUsername("");
    setEnteredAge("");
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
    /* react doesn't allow two side by side components to be rendered,
      directly as a root element of your return statement, so ErrorModal and
  Card needs to be wrapped */
    <div>
      {/* Conditionally render the error modal - use curly braces -> JS expression, and 
      &&. So now error modal will only be output if we have an error */}
      {error && <ErrorModal title={error.title} message={error.message} />}
      {/* wrap in Card component. Card is custom component, not built in HTML, therefore only
      has the props, or it only is able to work with the props we use inside of that component. */}
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
          {/* Setting value in the inputs to reflect current states. with value={enteredUsername} etc, 
        we'll have inputs that actually reflect the current state snapshot, even if its not changed for 
        a keystroke. */}
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
/* AddUser function arrow function stored within a const, could have 
done function AddUser() {} but chose not to */
/* inside of 'AddUser' -> render something on the screen, allows user to 
enter a name and an age, and have button to confirm all of that. */

export default AddUser;

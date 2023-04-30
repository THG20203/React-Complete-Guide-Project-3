import React from "react";

const AddUser = (props) => {
  return (
    /* onSubmit prop -> specify function that should be executed when form 
      is submitted. */
    <form onSubmit="">
      {/* htmlFor = prop name for assigning that attribute to a label, 
      connect with input with username value. */}
      <label htmlFor="username">Username</label>
      {/* input -> user to type in username, hence type text */}
      <input id="username" type="text" />
      <label htmlFor="age">Age (Years)</label>
      <input id="age" type="number"></input>
      <button type="submit">Add User</button>
    </form>
  );
};
/* AddUser function arrow function stored within a const, could have 
done function AddUser() {} but chose not to */
/* inside of 'AddUser' -> render something on the screen, allows user to 
enter a name and an age, and have button to confirm all of that. */

export default AddUser;
/* export as default, so can import that component into another file
and use it there */

import React from "react";

const AddUser = (props) => {
  return (
    <form>
      <label htmlFor="username">Username</label>
      {/* htmlFor = prop name for assigning that attribute to a label, 
      connect with input with username value. */}
      <input id="username" type="text" />
      {/* input -> user to type in username, hence type text */}
      <label htmlFor="username">Age (Years)</label>
      <input id="username" type="number"></input>
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

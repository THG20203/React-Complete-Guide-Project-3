/* we want to lift up the state, manage our state within the App.js component, because
its the one component above AddUser and UsersList, its the nearest component above those
two components, which has access to both components. Therefore lift state management up to
this App component. */

/* So want to match users array, do this with the useState hook - because its state of this 
app, and when that state data changes, the App should re-render. Thats exactly what useState 
and the state managed by it does. */
import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  /* We call useState inside of App, and we initialise this with an empty array */
  useState([]);
  return (
    <div>
      <AddUser />
      {/* I'm extracting users from props, so I expect to get that users data
      (that array in the end), on the users prop, on my UsersList component. */}
      {/* When use UsersList as JSX -> (as a regular HTML tag in the end), need 
      to set that users prop or I need to include a check here where I check 
      whether its undefined and I don't even try to map it. */}
      {/* users prop -> has to be 'users', and set this to an array. */}
      {/* // THIS COMMENT WILL CHANGE -> empty array [] for now */}
      <UsersList users={[]} />
    </div>
  );
}

export default App;

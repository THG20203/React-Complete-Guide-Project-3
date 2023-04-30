import React from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
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

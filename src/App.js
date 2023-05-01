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
  /* We call useState inside of App, and we initialise this with an empty array. useState always
  returns two elements, so we can use array destructuring in the const - usersList, setUsersList */

  /* We now have a function that allows us to change that array, and then that 
  change would trigger the App component to be re rendered, hence the UsersList component would
  be updated as well -> would also be re rendered because its part of the App component. */

  const [usersList, setUsersList] = useState([]);

  /* addUserHandler -> function where I expect two arguments, the userName and the userAge. 
  Can name the paramenters however I want -> hence uName and uAge. */
  const addUserHandler = (uName, uAge) => {
    /* Expect to get uName and uAge data, and with that data -> we can create a new user and 
    add it to our list, by calling setUsersList and then updating state. How are we updating 
    the state? Taking old list and appending a new element to it. */

    /* When your state relies on the previous state, want to use an alternative form of 
    setUsersList -> I want to use that function form, where I pass a function to setUsersList. */

    /* That function will automatically get the previous latest state snapshot, when React perform 
    state update here, hence naming it prevUsersList */
    setUsersList((prevUsersList) => {
      /* Then we are reutnring my new state snapshot in the body of the function I pass to setUsersList */

      /* Step 1: Using spread operator, pull all elements out of the prevUsersList array, and adds them as new
      elements to this new array -> */

      /* Step 2: Then I'm adding one new element at the end -> adding a new JavaScript object with a name field 
      (uName is the value we stored there), and the age field, (uAge is the value we stored there) */

      /* With step 1 & 2, we create a new JavaScript object for every user, and we add that to our 
      UsersList array. */
      return [...prevUsersList, { name: uName, age: uAge }];
    });
  };

  return (
    <div>
      {/* Missing piece = when we click AddUser button, and hence the AddUserHandler in the AddUser
      component runs, we forward the enteredUsername and the enteredAge to the App component. We do
      this with props as well. */}

      {/* Can add a prop on AddUser -> can name it however I want for example onAddUser (using on 
        something convention, because in the end will kind of work like an event). When that 
        addUserButton is clicked, (which ultimately happens when I click on the button, then a function
        which we pass to onAddUser should be triggered) */}

      {/* passing addUserHandler to the onAddUser prop, on AddUser component. */}
      <AddUser onAddUser={addUserHandler} />

      {/* I'm extracting users from props, so I expect to get that users data
      (that array in the end), on the users prop, on my UsersList component. */}

      {/* When use UsersList as JSX -> (as a regular HTML tag in the end), need 
      to set that users prop or I need to include a check here where I check 
      whether its undefined and I don't even try to map it. */}

      {/* users prop -> has to be 'users', and set this to the usersList array, which
      we want to forward to the UsersList component. */}
      <UsersList users={usersList} />
    </div>
  );
}

export default App;

import React from "react";
/* need to import Card everywhere where we want to use the card */
import Card from "../UI/Card";
/* import UserList.module -> module css file with special classes import*/
import classes from "./UsersList.module.css";

/* UsersList should be responsible for outputting my users data. Safe to assume in the 
UsersList component, we rely on props to get our actual array of users as data. */
const UsersList = (props) => {
  return (
    /* using card to wrap unordered list -> use users class from UsersList.module.css */
    /* set to class.user -> have not just the default card class on card component, but
    also special user class */
    <Card className={classes.users}>
      {/* In the end, want to return an unordered list, where I want to go through a 
        list of users, which I need to get in some way, and output a couple of list items 
        for each user. */}
      <ul>
        {/* props.users (can be any name -> choosing this as makes most sense to me, up to 
        me what I name it. props.users will hold an array of user data, so can use the map 
        method to map that array of users to an array of JSX elements. */}
        {/* map = used in order to transform our user data to JSX elements which then are 
        rendered onto the DOM. */}
        {/* Map executes a function on every item in the users array, and we'll get that 
        item as an input, since its an array of users I'll name single item 'user' and 
        write an anonymous arrow function. */}
        {props.users.map((user) => (
          <li>
            {/* Inside anonymous arrow function, we return a JSX element for every user of
            that users array we expect to get on this prop. Hence <li> element */}
            {/* Expectations = users is an array of user objects, where every oject has a name 
            property and an age property. */}
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;

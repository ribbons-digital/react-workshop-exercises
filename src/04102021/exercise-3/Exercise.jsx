import * as React from "react";
import Input from "./components/Input";

/*
This component should do the followings:

1. The paragraph element should display what's being entered in the "Input" component
2. You would need to add the necessary functionality to achieve the goal of this exercise

🎁 Bonus: None. I will not ask you to display a warning message in this exercise 😆.

💡 Hint: States shared between the parent and child components are commonly done by passing down
   that states through props. What if it's the other way around? How do you share a piece of state
   from the child component to the parent one? 
   
   Instead of passing the state from one to another, think of it in the way that the child component 
   is being "delegated" by the parent one to update a piece of state that's needed in the parent component.
*/

function Exercise() {
  return (
    <div>
      <p></p>
      <Input />
    </div>
  );
}

export default Exercise;

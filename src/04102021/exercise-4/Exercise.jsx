import * as React from "react";
import DisplayContainer from "./components/DisplayContainer";
import Input from "./components/Input";

/*
This component should render and do the followings:

1. What you type in in the "Input" component should be displayed in the "Display" component.
2. You should come up with the solution by NOT sharing states through props.


💡 Hint: We all hate prop-drilling. What's the other React hook that can help us solve such problem?
*/

function Exercise() {
  return (
    <div>
      <DisplayContainer />
      <Input />
    </div>
  );
}

export default Exercise;

import * as React from "react";
import { TextContext } from "../solution/Exercise";

function Display() {
  const { displayedText } = React.useContext(TextContext);
  return <div>{displayedText}</div>;
}

export default Display;

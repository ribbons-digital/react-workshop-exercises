import * as React from "react";
import { TextContext } from "../solution/Exercise";

function Input() {
  const { setDisplayedText } = React.useContext(TextContext);

  function handleChangeDisplayText(e) {
    setDisplayedText(e.target.value);
  }

  return (
    <div>
      <input onChange={handleChangeDisplayText} />
    </div>
  );
}

export default Input;

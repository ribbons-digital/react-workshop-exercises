import * as React from "react";

function Input({ setDisplayedText }) {
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

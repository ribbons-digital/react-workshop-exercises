import * as React from "react";

/*
This component should render and do the followings:

1. Render an input and a paragraph element
2. What you type in in the input field should be displayed in the paragraph element

🎁 Bonus: Try to display a warning message below the input field that only gets rendered on the screen when word count exceeds 20
💡 Hint: You guessed it, "useState" hook is your good friend.
*/

function Exercise() {
  const [displayedText, setDisplayedText] = React.useState("");

  function handleChangeDisplayText(e) {
    setDisplayedText(e.target.value);
  }
  return (
    <div>
      <input onChange={handleChangeDisplayText} />
      <p>{displayedText}</p>
      {displayedText.length > 20 && (
        <p style={{ color: "red" }}>Warning! Only 20 characters allowed!</p>
      )}
    </div>
  );
}

export default Exercise;

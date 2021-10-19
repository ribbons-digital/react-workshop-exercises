import * as React from "react";
import Display from "./components/Display";
import CustomWarning from "../components/CustomWarning";

/*
This component should render and do the followings:

1. Add an input element inside div
2. What you type in in the input field should be displayed in the Display component

🎁 Bonus: Try to display a 📣custom warning message component📣 below the input field 
   that only gets rendered on the screen when word count exceeds 20.
   You can create your custom component and place it in the "components" folder

💡 Hint: How do you share states from parent to child component?
*/

function Exercise() {
  const [displayedText, setDisplayedText] = React.useState("");

  function handleChangeDisplayText(e) {
    setDisplayedText(e.target.value);
  }
  return (
    <div>
      <input onChange={handleChangeDisplayText} />
      <Display displayedText={displayedText} />
      {displayedText.length > 20 && <CustomWarning />}
    </div>
  );
}

export default Exercise;

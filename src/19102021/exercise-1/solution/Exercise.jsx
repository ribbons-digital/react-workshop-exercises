import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Books from "../../components/Books";

/*
This component should do the followings:

1. Import the necessary components from react-router to compose and render multiple routes
2. Render more than one routes and have each route render either a custom component or a regular HTML element

** You can create and place your custom components in the "components" folder
*/

function Exercise() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Home page</div>} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </Router>
  );
}

export default Exercise;

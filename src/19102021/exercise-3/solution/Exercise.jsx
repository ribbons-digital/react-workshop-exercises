import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Books from "../components/Books";
import BooksList from "../components/BooksList";
import Book from "../components/Book";
import Admin from "../components/Admin";
import Nav from "../components/Nav";

/*
Copy over what you finished in exercise-2 and continue here

This component should do the followings:

1. Create a 404 or redirect Route
2. Add a navbar that allows you to navigate to different pages
3. Create a button in the component for your dynamic route. Clicking on the button should programmatically navigate to a page of your choice
and carry over some state to the destination page (component)
4. Show the state that's carried over in the destination page (component). It can be rendering it as text on the page or a simple console.log

** You can create and place your custom components in the "components" folder

🎁 Bonus: Try to show active state for the item that's clicked on in the navbar
*/

function Exercise() {
  const [authenticated] = React.useState(true);
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<div>Home page</div>} />
        <Route path="/books" element={<Books />}>
          <Route path="/books" element={<BooksList />} />
          <Route path="/books/new" element={<div>Create a new book</div>} />
          <Route path=":id" element={<Book />} />
        </Route>
        <Route
          path="/admin/*"
          element={authenticated ? <Admin /> : <Navigate to="/" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default Exercise;

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

/*
Copy over what you finished in exercise-1 and continue here

This component should do the followings:

1. Create a Protected Route
2. Create a nested Routes
3. Create a dynamic Route

** You can create and place your custom components in the "components" folder
** You can use either the Outlet component from react-router for nested routes or simply create them in this file directly without using the Outlet component
*/

function Exercise() {
  const [authenticated] = React.useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Home page</div>} />
        <Route path="/books" element={<Books />}>
          <Route path="/books" element={<BooksList />} />
          <Route path=":id" element={<Book />} />
        </Route>
        <Route
          path="/admin"
          element={authenticated ? <Admin /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default Exercise;

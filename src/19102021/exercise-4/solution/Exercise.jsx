import * as React from "react";
import BooksList from "../components/BooksList";
import Admin from "../components/Admin";
import { BrowserRouter as Router, Navigate, useRoutes } from "react-router-dom";
import Nav from "../components/Nav";
import BookEdit from "../components/BookEdit";
import Book from "../components/Book";

/*

This component should do the followings:

1. Instead of setting up your routes the trational way, try to use the new "useRoutes" hook to re-create your routes

** You can create and place your custom components in the "components" folder

*/

const MyRoutes = () => {
  const [authenticated] = React.useState(true);

  const routes = useRoutes([
    {
      path: "/",
      element: <div>Home page</div>,
    },
    {
      path: "/books/*",
      element: <BooksList />,
    },
    {
      path: "/admin/*",
      element: authenticated ? <Admin /> : <Navigate to="/" />,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);

  return routes;
};

function Exercise() {
  return (
    <Router>
      <Nav />
      <MyRoutes />
    </Router>
  );
}

export default Exercise;

import React from "react";
import { Navigate, Route } from "react-router-dom";

export default function ProtectedRoute({
  element,
  authenticated,
  redirectTo,
  ...rest
}) {
  return (
    <Route
      {...rest}
      element={authenticated ? element : <Navigate to={redirectTo} />}
    />
  );
}

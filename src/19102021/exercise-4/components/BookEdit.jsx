import * as React from "react";
import { useLocation } from "react-router-dom";

export default function BookEdit() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      This is the editing page for a book. Its book id is {location.state.id}.
    </div>
  );
}

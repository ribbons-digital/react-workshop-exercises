import * as React from "react";
import { Routes, Route } from "react-router-dom";
import BookEdit from "./BookEdit";

export default function Admin() {
  return (
    <Routes>
      <Route path="/admin" element={<div>This is admin only page</div>} />
      <Route path=":id" element={<BookEdit />} />
    </Routes>
  );
}

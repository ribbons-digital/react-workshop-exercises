import * as React from "react";
import BookEdit from "./BookEdit";
import { Routes, Route } from "react-router-dom";

export default function Admin() {
  return (
    <Routes>
      <Route path="/" element={<div>This is admin only page</div>} />
      <Route path=":id" element={<BookEdit />} />
    </Routes>
  );
}

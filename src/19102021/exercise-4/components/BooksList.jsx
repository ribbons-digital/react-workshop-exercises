import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Book from "./Book";
import Books from "./Books";

const books = [
  {
    id: "123",
    name: "book1",
  },
  {
    id: "456",
    name: "book2",
  },
];

export default function BooksList() {
  return (
    <Routes>
      <Route path="/" element={<Books books={books} />} />
      <Route path=":id" element={<Book />} />
    </Routes>
  );
}

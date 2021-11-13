import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function Books({ books }) {
  const navigate = useNavigate();

  function goToBook(id) {
    navigate(`/books/${id}`);
  }

  return books.map((book) => {
    return (
      <div onClick={() => goToBook(book.id)} key={book.id}>
        {book.name}
      </div>
    );
  });
}

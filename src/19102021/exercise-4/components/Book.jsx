import * as React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Book() {
  const navigate = useNavigate();
  const { id } = useParams();

  function goToEdit() {
    navigate(`/admin/${id}`, {
      state: { id },
    });
  }

  return (
    <>
      <div>This is book {id}.</div>
      <button onClick={goToEdit}>Edit</button>
    </>
  );
}

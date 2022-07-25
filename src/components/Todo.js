import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteToDo } from "../store";

function Todo({ text, id }) {
  const dispatch = useDispatch();

  const onRemove = (e) => {
    e.preventDefault();
    dispatch(deleteToDo(id));
  };

  return (
    <li>
      <Link to={`/${id}`}>
      {text} <button onClick={onRemove}>DEL</button>
      </Link>
    </li>
  );
}

export default Todo;

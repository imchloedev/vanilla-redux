import React from "react";
import { useDispatch } from "react-redux";
import { deleteToDo } from "../store";

function Todo({ text, id }) {
  const dispatch = useDispatch();

  const onRemove = (e) => {
    e.preventDefault();
    dispatch(deleteToDo(id));
  };

  return (
    <li>
      {text} <button onClick={onRemove}>DEL</button>
    </li>
  );
}

export default Todo;

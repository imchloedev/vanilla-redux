import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Todo from "../components/Todo";
import { addToDo, deleteToDo } from "../store";
import { Link } from "react-router-dom";

function Home() {
  const [text, setText] = useState("");

  const todo = useSelector((state) => state);
  console.log(todo);

  const dispatch = useDispatch();

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(addToDo(text));
    setText("");
  }


  return (
    <>
      <h1>TO DO</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {todo.map((item) => (
          <li key={item.id}>
            <Link to={`/${item.id}`}>
            {item.text}
            </Link>
            <button onClick={() => dispatch(deleteToDo(item.id))}>
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { add, remove } from "../store";

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
    dispatch(add(text));
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
            <button onClick={() => dispatch(remove(item.id))}>
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;

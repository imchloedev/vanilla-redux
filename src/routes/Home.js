import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Todo from "../components/Todo";
import { addToDo, deleteToDo } from "../store";

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

  function onRemove(e) {
    e.preventDefault();

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
          <Todo {...item} key={item.id} />
        ))}
      </ul>
    </>
  );
}

export default Home;

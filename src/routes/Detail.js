import { useSelector } from "react-redux";
import { useParams } from "react-router";

export default function Detail() {
  const id = useParams().id;
  console.log(id);

  const todos = useSelector((state) => state);
  console.log(todos);

  const toDoText = todos.find((todo) => todo.id === parseInt(id));
  console.log(toDoText);

  return (
    <>
      <h1>{toDoText.text}</h1>
      <p>Create time: {toDoText.id}</p>
    </>
  );
}

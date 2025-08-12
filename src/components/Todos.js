import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../slice/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const mapData = todos.map((item) => {
    return (
      <div>
        <li key={item.id}>{item.text}</li>
        <button onClick={() => dispatch(removeTodo(item.id))}>X</button>
        <button onClick={() => dispatch(updateTodo(item.id))}>update</button>
      </div>
    );
  });
  return (
    <div>
      <div>Todos</div>
      {mapData}
    </div>
  );
};

export default Todos;

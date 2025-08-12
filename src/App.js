import "./styles.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

export default function App() {
  return (
    <div className="App">
      <AddTodo />
      <Todos />
    </div>
  );
}

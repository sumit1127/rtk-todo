import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../slice/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <>
      <h1>AddTodo</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
    </>
  );
};

export default AddTodo;

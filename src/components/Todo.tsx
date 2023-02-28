import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [isTodoModified, setIsTodoModified] = useState(false);
  useEffect(() => {
    const fetchTodos = async () => {
      //userId from the cookies
      const req = await fetch(`http://localhost:3000/todos?userId=`);
      const res = await req.json();
      setTodos(res);
    };
    fetchTodos();
  }, [isTodoModified]);
  return (
    <div className="flex justify-between gap-10 py-12">
      {todos.map((todo) => (
        <TodoList todo={todo} setIsTodoModified={setIsTodoModified} />
      ))}
      <TodoForm />
    </div>
  );
};

export default Todo;

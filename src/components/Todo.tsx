import { useEffect, useState } from "react";
import useCookies from "react-cookie/cjs/useCookies";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [isTodoModified, setIsTodoModified] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const user = cookies.user && JSON.parse(JSON.stringify(cookies.user));
  useEffect(() => {
    const fetchTodos = async () => {
      //userId from the cookies
      if (!user) {
        return "Please login before add todos";
      }
      const req = await fetch(`http://localhost:3001/todos?userId=${user.id}`);
      const res = await req.json();
      setTodos(res);
    };
    fetchTodos();
  }, [isTodoModified, user]);
  return (
    <div className="flex justify-between h-[100%] gap-6 px-12 py-12">
      <div className="flex gap-2 flex-wrap">
        {todos.map((todo, i) => (
          <TodoList key={i} todo={todo} setIsTodoModified={setIsTodoModified} />
        ))}
      </div>
      <TodoForm />
    </div>
  );
};

export default Todo;

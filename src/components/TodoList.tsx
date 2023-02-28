import React, { Dispatch, SetStateAction, useState } from "react";
import ModifieForm from "./ModifieForm";

type TProps = {
  todo: {
    title: string;
    userId: number;
    completed: boolean;
    endDate: string;
    pos: number;
    description: string;
    id: number;
  };
  setIsTodoModified: Dispatch<SetStateAction<boolean>>;
};

const TodoList = ({ todo, setIsTodoModified }: TProps) => {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [todoCompleted, setTodoCompleted] = useState<boolean>(false);

  const handleDelete = async () => {
    const req = await fetch(`http://localhost:3001/todos/${todo.id}`, {
      method: "DELETE",
    });
    if (req.ok) {
      // redirect to /
    }
  };
  return (
    <div className="">
      <div
        className={`flex flex-col justify-between capitalize p-3 rounded-md shadow-lg ${
          todoCompleted && `bg-gray-200`
        }`}
      >
        <div>
          <h2 className="text-2xl font-bold">{todo.title}</h2>
          <p className="font-serif">{todo.endDate}</p>
          <p className="text-gray-600">{todo.description}</p>
        </div>
        <div className="flex justify-end items-center gap-3">
          <label htmlFor={todo.title}>completed</label>
          <input
            type="checkbox"
            id={todo.title}
            onClick={() => setTodoCompleted((prev) => !prev)}
          />
          <button
            onClick={() => setIsFormOpen((prev) => !prev)}
            className="btn"
          >
            edit
          </button>
          <button onClick={handleDelete} className="btn">
            delete
          </button>
        </div>
      </div>
      {isFormOpen && <ModifieForm id={todo.id} setIsFormOpen={setIsFormOpen} />}
    </div>
  );
};

export default TodoList;

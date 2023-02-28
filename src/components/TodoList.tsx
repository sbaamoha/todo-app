import React, { Dispatch, SetStateAction, useState } from "react";
import ModifieForm from "./ModifieForm";

type TProps = {
  todo: {
    title: String;
    userId: Number;
    completed: Boolean;
    endDate: String;
    pos: Number;
    description: String;
    id: Number;
  };
  setIsTodoModified: Dispatch<SetStateAction<boolean>>;
};

const TodoList = ({ todo, setIsTodoModified }: TProps) => {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

  const handleDelete = async () => {
    const req = await fetch(`http://localhost:3000/todos/${todo.id}`, {
      method: "DELETE",
    });
    if (req.ok) {
      // redirect to /
    }
  };
  return (
    <>
      {isFormOpen && <ModifieForm id={todo.id} setIsFormOpen={setIsFormOpen} />}
      <div className="capitalize p-6 rounded-md bg-gray-200 shadow-lg ">
        <div>
          <h2>{todo.title}</h2>
          <p>{todo.endDate}</p>
          <p>{todo.description}</p>
        </div>
        <div className="flex justify-end items-end">
          <button onClick={() => setIsFormOpen(true)} className="btn">
            edit
          </button>
          <button onClick={handleDelete} className="btn">
            delete
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoList;

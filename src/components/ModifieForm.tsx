import React, { Dispatch, SetStateAction, useState } from "react";

type IProps = {
  id: Number;
  setIsFormOpen: Dispatch<SetStateAction<boolean>>;
};

const ModifieForm = ({ id, setIsFormOpen }: IProps) => {
  const [newTitle, setTitle] = useState<string>("");
  const [newEndDate, setEndDate] = useState<string>("");
  const [newDescription, setDescription] = useState<string>("");
  const [newCompleted, setCompleted] = useState<boolean>(false);
  const handleEdit = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    const updatedTodo = {
      title: newTitle,
      endDate: newEndDate,
      description: newDescription,
      completed: newCompleted,
    };
    const req = await fetch(`http://localhost:3000/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(updatedTodo),
    });
    if (req.ok) {
      setIsFormOpen(false);
      // redirect to /
    }
  };
  return (
    <form onSubmit={handleEdit} className="capitalize">
      <label htmlFor="title">new title</label>
      <input type="text" name="title" value={newTitle} />
      <label htmlFor="date">new end date</label>
      <input type="text" name="date" value={newEndDate} />
      <label htmlFor="desc">new description</label>
      <input type="text" name="desc" value={newDescription} />
      <button type="submit" className="btn">
        edit todo
      </button>
    </form>
  );
};

export default ModifieForm;

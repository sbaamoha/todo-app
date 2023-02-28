import React, { Dispatch, SetStateAction, useState } from "react";

type IProps = {
  id: Number;
  setIsFormOpen: Dispatch<SetStateAction<boolean>>;
  setIsTodoModified: Dispatch<SetStateAction<boolean>>;
};

const ModifieForm = ({ id, setIsFormOpen, setIsTodoModified }: IProps) => {
  const [newTitle, setTitle] = useState<string>("");
  const [newEndDate, setEndDate] = useState<string>("");
  const [newDescription, setDescription] = useState<string>("");
  const [newCompleted, setCompleted] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const handleEdit = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    const updatedTodo = {
      title: newTitle,
      endDate: newEndDate,
      description: newDescription,
      completed: newCompleted,
    };
    if (!newTitle || !newDescription || !newEndDate) {
      setError("Please fill all inputs");
      return;
    }
    const req = await fetch(`http://localhost:3001/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(updatedTodo),
    });
    if (req.ok) {
      setIsFormOpen(false);
      setIsTodoModified((prev) => !prev);
      // redirect to /
    }
  };
  return (
    <div className="absolute bg-gray-200 p-3 rounded-md">
      <p className="text-red-500 text-bold">{error} </p>
      <form onSubmit={handleEdit} className="flex flex-col capitalize">
        <label htmlFor="title">new title</label>
        <input
          type="text"
          name="title"
          value={newTitle}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="date">new end date</label>
        <input
          type="text"
          name="date"
          value={newEndDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <label htmlFor="desc">new description</label>
        <input
          type="text"
          name="desc"
          value={newDescription}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="completed">completed</label>
        <input
          type="checkbox"
          id="completed"
          onClick={(e) => setCompleted((prev) => !prev)}
        />

        <button type="submit" className="btn">
          edit todo
        </button>
      </form>
    </div>
  );
};

export default ModifieForm;

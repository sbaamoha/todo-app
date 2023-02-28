import React, { useState } from "react";

const TodoForm = () => {
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [date, setDate] = useState<string>("");
  return (
    <div className="flex flex-1 justify-end items-end p-6">
      <form className="capitalize flex flex-col ">
        <label htmlFor="title">title</label>
        <input type="text" name="title" value={title} />
        <label htmlFor="date">date</label>
        <input type="text" name="date" value={date} />
        <label htmlFor="desc">desc</label>
        <input type="text" name="desc" value={desc} />
        <button type="submit" className="btn">
          add todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;

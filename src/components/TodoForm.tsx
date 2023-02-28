import React, { Dispatch, SetStateAction, useState } from "react";

import useCookies from "react-cookie/cjs/useCookies";
import { useNavigate } from "react-router-dom";

const TodoForm = ({
  setIsTodoModified,
}: {
  setIsTodoModified: Dispatch<SetStateAction<boolean>>;
}) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);
  const [pos, setPos] = useState<number>(1);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [error, setError] = useState<string>("");
  const user = cookies.user && JSON.parse(JSON.stringify(cookies.user));
  let navigate = useNavigate();

  const handleClick = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    if (!user) {
      setError("Please login so you can add todos");
      return;
    }
    if (!title || !description || !endDate) {
      setError("please fill all the fields");
      return;
    }
    let req = await fetch(`http://localhost:3001/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: user.id,
        title,
        completed,
        endDate,
        pos,
        description,
      }),
    });
    let res = await req.json();
    if (req.ok) {
      setTitle("");
      setEndDate("");
      setError("");
      setDescription("");
      navigate("/");
      setIsTodoModified((prev) => !prev);
    }
  };
  return (
    <div className="flex justify-end h-[50vh] p-6 bg-gray-200 rounded-md">
      <form onSubmit={handleClick} className="capitalize flex flex-col ">
        <p className="text-red-500 text-xl">{error}</p>
        <label htmlFor="title">title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="date">date</label>
        <input
          type="text"
          name="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <label htmlFor="desc">description</label>
        <input
          type="text"
          name="desc"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit" className="btn my-3">
          add todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;

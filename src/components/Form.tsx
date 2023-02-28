import React, { useState } from "react";

type IProps = {
  title: String;
};

const Form = (props: IProps) => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const BtnHandler = async () => {
    if (props.title === "login") {
      let request = await fetch(
        `http://localhost:3000/authentification?email=${email}`
      );
      let response = await request.json();
      if (!request.ok) {
        setError("Email is Incorrect");
      }
      // here put the user in cookies
    } else {
      let request = await fetch("http://localhost:3000/authentification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email),
      });
      let response = await request.json();
      // here put the user in cookies
    }
  };
  return (
    <div>
      <h2 className="capitalize">{props.title}</h2>
      {error}
      <input
        type="email"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="btn" onClick={BtnHandler}>
        {props.title}
      </button>
    </div>
  );
};

export default Form;

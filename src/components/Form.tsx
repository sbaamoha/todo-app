import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

type IProps = {
  title: String;
};

const Form = (props: IProps) => {
  let navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["user"]);

  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const BtnHandler = async () => {
    if (props.title === "login") {
      let request = await fetch(
        `http://localhost:3001/authentification?email=${email}`
      );
      let response = await request.json();
      if (!request.ok) {
        setError("Email is Incorrect");
        return;
      }
      console.log(response);
      setCookie(
        "user",
        { email: response[0].email, id: response[0].id },
        { path: "/" }
      );
      // here put the user in cookies
      navigate("/");
    } else {
      let request = await fetch("http://localhost:3001/authentification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      let response = await request.json();
      console.log(response);
      if (!request.ok) {
        setError("Email is Incorrect");
        return;
      }
      setCookie("user", email, { path: "/" });
      navigate("/");
    }
  };
  return (
    <div className="mt-12 h-[80vh] ">
      <h2 className="capitalize">{props.title}</h2>
      {error}
      <input
        type="email"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="btn mx-2" onClick={BtnHandler}>
        {props.title}
      </button>
    </div>
  );
};

export default Form;

import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const LoginForm = ({ history }) => {
  const [username, setUsername] = useState("");
  const { login } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    login(username, history.location.pathname);
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;

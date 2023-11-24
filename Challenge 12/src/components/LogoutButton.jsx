import React, { useContext } from "react";
import UserContext from "./UserContext";

const LogoutButton = () => {
  const { logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();
  };

  return <button onClick={handleLogout}>Log Out</button>;
};

export default LogoutButton;

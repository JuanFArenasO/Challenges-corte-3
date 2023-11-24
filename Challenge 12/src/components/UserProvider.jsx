import React, { useReducer } from "react";
import {UserContext} from "../context/UserContext";
import UserReducer from "./UserReducer";

const UserProvider = (props) => {
  const initialState = {
    isLoggedIn: false,
    username: "",
    lastVisitedPage: "",
  };
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const login = (username, lastVisitedPage) => {
    dispatch({
      type: "LOGIN",
      payload: { username, lastVisitedPage },
    });
  };

  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <UserContext.Provider
      value={{
        state,
        login,
        logout,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;

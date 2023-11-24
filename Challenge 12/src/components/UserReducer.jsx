const UserReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          isLoggedIn: true,
          username: action.payload.username,
          lastVisitedPage: action.payload.lastVisitedPage,
        };
      case "LOGOUT":
        return {
          ...state,
          isLoggedIn: false,
          username: "",
        };
      default:
        return state;
    }
  };
  
  export default UserReducer;
  
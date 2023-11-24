import React, { useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { NavComponent } from "./components/NavComponent";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Login } from "./pages/Login";
import { PrivateRoute } from "./components/PrivateRoute";
import UserProvider from "./components/UserProvider";

function App() {
  const [user, setUser] = useState(null);
  const [lastVisitedPage, setLastVisitedPage] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleLastVisitedPage = (path) => {
    setLastVisitedPage(path);
  };

  return (
    <Router>
      <UserProvider>
        <div>
          <NavComponent />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <Login onLogin={handleLogin} onLastVisitedPage={handleLastVisitedPage} />
            </Route>
            <PrivateRoute path="/dashboard" isAuthenticated={user}>
              <div>
                <h1>Welcome {user}!</h1>
                <button onClick={handleLogout}>Logout</button>
              </div>
            </PrivateRoute>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
          <p>Last visited page: {lastVisitedPage || "N/A"}</p>
        </div>
      </UserProvider>
    </Router>
  );
}

export default App;

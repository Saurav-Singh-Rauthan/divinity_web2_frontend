import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./App.css";
import Authlanding from "./components/Authlanding/Authlanding";
import Homepage from "./components/Homepage/Homepage";
import Landingpage from "./components/Landingpage/Landingpage";
import { AuthContext } from "./components/Shared/Context/AuthContext";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/homepage" exact>
          <Homepage />
        </Route>

        <Redirect to="/homepage" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Landingpage />
        </Route>

        <Route path="/auth">
          <Authlanding />
        </Route>

        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <div className="App">
      <AuthContext.Provider
        value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
      >
        <Router>{routes}</Router>
      </AuthContext.Provider>
    </div>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Register from "./Views/Register/Register";
import Login from "./Views/Login/Login";
import GamePlay from "./Views/GamePlay/GamePlay";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="/gamePlay" component={GamePlay} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

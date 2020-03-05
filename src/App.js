import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Register from "./Views/Register/Register";
import Login from "./Views/Login/Login";
import GamePlay from "./Views/GamePlay/GamePlay";
import UserView from "./Views/UserView/UserView";
import Rank from "./Views/Rank/Rank";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/UserView" component={UserView} />
          <Route path="/gamePlay" component={GamePlay} />
          <Route path="/Rank" component={Rank} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

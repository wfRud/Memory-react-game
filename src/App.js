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
          <Route exact path="/memory" component={Login} />
          <Route path="/memory/register" component={Register} />
          <Route path="/memory/UserView" component={UserView} />
          <Route path="/memory/gamePlay" component={GamePlay} />
          <Route path="/memory/rank" component={Rank} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

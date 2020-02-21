import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Menu from "./Views/Menu/Menu";
import GamePlay from "./Views/GamePlay/GamePlay";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/gamePlay" component={GamePlay} />
          <Route exact path="/" component={Menu} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

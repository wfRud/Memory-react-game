import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Menu from "./Views/Menu/Menu";
import GamePlay from "./Views/GamePlay/GamePlay";
import store from "./store";

const App = () => {
  window.store = store;
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Menu} />
        <Route path="/gamePlay" component={GamePlay} />
      </Router>
    </div>
  );
};

export default App;

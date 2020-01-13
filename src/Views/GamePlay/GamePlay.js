import React, { Component } from "react";
import GameBoard from "../../components/GameBoard/GameBoard";
import PlayMenu from "../../components/PlayMenu/PlayMenu";
class GamePlay extends Component {
  state = {};
  render() {
    return (
      <>
        <GameBoard />
        <PlayMenu />
      </>
    );
  }
}

export default GamePlay;

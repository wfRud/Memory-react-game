import React, { Component } from "react";
import Tile from "../Tile/Tile";
import styles from "./GameBoard.module.scss";
import { connect } from "react-redux";

class GameBoard extends Component {
  state = {
    images: [
      "work",
      "stars",
      "pets",
      "opacity",
      "motorcycle",
      "favorite",
      "face",
      "accessibility",
      "looks",
      "healing",
      "filter",
      "colorize",
      "camera",
      "brush",
      "brightness",
      "audiotrack",
      "spa",
      "pool",
      "pram",
      "umbrella",
      "whatshot",
      "public",
      "notification",
      "cake",
      "send",
      "flag",
      "draft",
      "disk",
      "plane",
      "headset",
      "snow",
      "colors"
    ],
    selected: []
  };

  drawImages = level => {
    const selected = [];
    const numbers = [];
    const randomNumbers = [];

    for (let i = 0; i < this.state.images.length; i++) {
      numbers.push(i);
    }
    for (let i = 0; i < level / 2; i++) {
      let randomNr = Math.floor(Math.random() * numbers.length);
      let nr = numbers.splice(randomNr, 1);
      randomNumbers.push(...nr);
    }
    randomNumbers.map(item => {
      let randomImg = this.state.images[item];
      let randomImg2 = this.state.images[item];
      selected.push(randomImg, randomImg2);
      return selected;
    });

    let counter = selected.length;
    while (counter > 0) {
      let ind = Math.floor(Math.random() * counter);
      counter--;
      let temp = selected[counter];
      selected[counter] = selected[ind];
      selected[ind] = temp;
    }
    this.setState({
      selected
    });
  };
  matchCards = () => {
    console.log(this.props.compare[0], this.props.compare[1]);
    return this.props.compare[0] === this.props.compare[1] ? true : false;
  };
  switchTileWrapperClass = variant => {
    switch (variant) {
      case 16:
        return styles.tileWrapper;
      case 36:
        return styles.tileWrapper_medium;
      case 64:
        return styles.tileWrapper_large;
      default:
        return;
    }
  };
  componentDidMount() {
    this.drawImages(this.props.variant);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={this.switchTileWrapperClass(this.props.variant)}>
          {this.state.selected.map((item, index) => (
            <Tile
              name={item}
              key={index}
              id={index}
              matchCard={this.matchCards}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  variant: state.game.variant,
  clicker: state.user.clicker,
  solved: state.user.solved,
  compare: state.user.compare
});

export default connect(mapStateToProps, {})(GameBoard);

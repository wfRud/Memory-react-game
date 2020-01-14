import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import styles from "./PlayMenu.module.scss";
import SVGIcon from "../Tile/SVGIcon";

class PlayMenu extends Component {
  state = {
    time: 0,
    steps: 0,
    pause: false,
    sound: false,
    redirect: false
  };

  handleTimer() {
    this.timer = setInterval(() => {
      this.setState({
        time: this.state.time + 1
      });
    }, 10);
  }

  handlePause() {
    clearInterval(this.timer);
  }
  handlePlay() {
    this.handleTimer();
  }

  quitHandle() {
    clearInterval(this.timer);
    this.setState({
      redirect: true
    });
    console.log(this.state.redirect);
  }

  UNSAFE_componentWillMount() {
    this.handleTimer();
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.timer}>
          {this.state.time < 10 ? `0${this.state.time}` : this.state.time / 100}
        </div>
        <p className={styles.counter}>{this.state.steps} steps</p>
        <div className={styles.iconCnt}>
          <SVGIcon
            name="play"
            width={"8%"}
            height={"8%"}
            className={styles.icon}
            click={this.handlePlay.bind(this)}
          />
          <SVGIcon
            name="pause"
            width={"8%"}
            height={"8%"}
            className={styles.icon}
            click={this.handlePause.bind(this)}
          />
          <SVGIcon
            name="volume"
            width={"8%"}
            height={"8%"}
            className={styles.icon}
          />
        </div>
        <button className={styles.quitBtn} onClick={this.quitHandle.bind(this)}>
          QUIT
        </button>
        {this.state.redirect && <Redirect to="/" />}
      </div>
    );
  }
}

export default PlayMenu;

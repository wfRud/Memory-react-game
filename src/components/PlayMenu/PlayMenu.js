import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./PlayMenu.module.scss";
import SVGIcon from "../Tile/SVGIcon";
import { userActions } from "../../app/user/duck";
import { variantActions } from "../../app/variations/duck";
import Actions from "../Actions/Actions";
import Pause from "../Actions/Pause";

class PlayMenu extends Component {
  state = {
    time: 0,
    timeStart: true,
    pause: false,
    sound: false,
    confirm: false
  };

  handleTimer = () => {
    this.timer = setInterval(() => {
      this.setState({
        time: this.state.time + 1
      });
    }, 10);
  };

  handlePause = () => {
    clearInterval(this.timer);
    this.setState({
      pause: !this.state.pause,
      timeStart: false
    });
  };
  dumpPause = () => {
    this.handleTimer();
    this.setState({
      pause: false,
      timeStart: true
    });
  };

  handlePlay = () => {
    if (this.state.timeStart) {
      this.handleTimer();
    } else return;
  };

  handleConfirm = () => {
    this.props.toggleQuit();
    this.props.resetFlipped();
    this.props.resetCompare();
    this.props.resetSolved();
    this.props.resetStep();
  };

  dumpConfirm = () => {
    this.setState({
      confirm: false
    });
  };

  quitHandle = () => {
    this.setState({
      confirm: true
    });
  };

  clearStore = () => {
    return this.props.clearLevel() && this.props.clearFields();
  };

  componentDidMount() {
    if (this.state.timeStart) {
      this.handleTimer();
    } else clearInterval(this.timer);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.clearStore();
    this.props.toggleQuit();
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.timer}>
          {this.state.time < 10 ? `0${this.state.time}` : this.state.time / 100}
        </div>
        <p className={styles.counter}>{this.props.step} steps</p>
        <div className={styles.iconCnt}>
          <SVGIcon
            name="play"
            width={"8%"}
            height={"8%"}
            className={styles.icon}
            click={this.handlePlay}
          />
          <SVGIcon
            name="pause"
            width={"8%"}
            height={"8%"}
            className={styles.icon}
            click={this.handlePause}
          />
          <SVGIcon
            name="volume"
            width={"8%"}
            height={"8%"}
            className={styles.icon}
          />
        </div>
        <button className={styles.quitBtn} onClick={this.quitHandle}>
          QUIT
        </button>
        {this.state.pause && <Pause dumpPause={this.dumpPause} />}
        {this.state.confirm && (
          <Actions accept={this.handleConfirm} dumpPause={this.dumpPause} />
        )}
        {this.props.userQuit && <Redirect to="/" />}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  userQuit: state.user.quit,
  step: state.user.step
});
const mapDispatchToProps = dispatch => ({
  toggleQuit: () => dispatch(userActions.toggleQuit()),
  clearLevel: () => dispatch(variantActions.clearLevels()),
  clearFields: () => dispatch(userActions.clearFields()),
  toggleStart: () => dispatch(userActions.toggleStart()),
  resetFlipped: () => dispatch(userActions.resetFlipped()),
  resetSolved: () => dispatch(userActions.resetSolved()),
  resetCompare: () => dispatch(userActions.resetCompare()),
  resetStep: () => dispatch(userActions.resetStep())
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayMenu);

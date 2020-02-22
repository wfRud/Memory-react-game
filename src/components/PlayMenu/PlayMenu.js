import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./PlayMenu.module.scss";
import { userActions } from "../../app/user/duck";
import { gameActions } from "../../app/variations/duck";
import Actions from "../Actions/Actions";
import Pause from "../Actions/Pause";
import EndGame from "../Actions/EndGame";
import { useStopWatch } from "./StopWatch/customHooks";
import { useQuit } from "./StopWatch/customHooks";
import { useWindowDimensions } from "./StopWatch/customHooks";
import StopWatch from "./StopWatch/StopWatch";
import Counter from "./Counter/Counter";
import QuitBtn from "./QuitBtn/QuitBtn";

const PlayMenu = props => {
  const { solved, variant } = props;
  const { stopTimer, startTimer, seconds, minutes, isRunning } = useStopWatch();
  const { isQuit, isConfirm, setIsQuit, accept, decline } = useQuit();
  const { width } = useWindowDimensions();
  useEffect(() => {
    if (isConfirm) {
      props.resetFlipped();
      props.resetCompare();
      props.resetSolved();
      props.resetStep();
      props.clearFields();
      props.clearLevel();
    }
  });

  if (width < 796) {
    return (
      <>
        <StopWatch minutes={minutes} seconds={seconds} />
        <Counter />
        <QuitBtn click={setIsQuit} name="QUIT" />
        <QuitBtn click={stopTimer} name="PAUSE" />
        {!isRunning && <Pause dumpPause={startTimer} />}
        {isQuit && <Actions accept={accept} decline={decline} />}
        {solved.length === variant / 2 && <EndGame accept={accept} />}
        {isConfirm && <Redirect to="/" />}
      </>
    );
  } else {
    return (
      <div className={styles.wrapper}>
        <StopWatch minutes={minutes} seconds={seconds} />
        <Counter />
        <QuitBtn click={setIsQuit} name="QUIT" />
        <QuitBtn click={stopTimer} name="PAUSE" />
        {!isRunning && <Pause dumpPause={startTimer} />}
        {isQuit && <Actions accept={accept} decline={decline} />}
        {solved.length === variant / 2 && <EndGame accept={accept} />}
        {isConfirm && <Redirect to="/" />}
      </div>
    );
  }
};
const mapStateToProps = state => ({
  step: state.user.step,
  solved: state.user.solved,
  variant: state.game.variant
});
const mapDispatchToProps = dispatch => ({
  toggleQuit: () => dispatch(userActions.toggleQuit()),
  clearLevel: () => dispatch(gameActions.clearLevels()),
  clearFields: () => dispatch(userActions.clearFields()),
  toggleStart: () => dispatch(userActions.toggleStart()),
  resetFlipped: () => dispatch(userActions.resetFlipped()),
  resetSolved: () => dispatch(userActions.resetSolved()),
  resetCompare: () => dispatch(userActions.resetCompare()),
  resetStep: () => dispatch(userActions.resetStep())
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayMenu);

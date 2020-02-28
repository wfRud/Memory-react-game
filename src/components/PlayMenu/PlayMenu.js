import React, { useState, useEffect } from "react";
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
  const { solved, variant, steps, setTime } = props;
  const [endGame, setEndGame] = useState(false);
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
      props.toggleStart(false);
    }
  });

  const handleEndGame = () => {
    if (solved.length === variant / 2) {
      stopTimer();
      setTime(`${minutes}:${seconds}`);
      setEndGame(true);
    } else return;
  };

  useEffect(() => {
    handleEndGame();
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
        {endGame && <EndGame accept={accept} />}
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
        {solved.length === variant / 2 && (
          <EndGame
            accept={accept}
            steps={steps}
            minutes={minutes}
            seconds={seconds}
          />
        )}
        {isConfirm && <Redirect to="/" />}
      </div>
    );
  }
};
const mapStateToProps = state => ({
  steps: state.user.step,
  solved: state.game.solved,
  variant: state.user.variant
});
const mapDispatchToProps = dispatch => ({
  clearLevel: () => dispatch(userActions.clearLevels()),
  clearFields: () => dispatch(gameActions.clearFields()),
  setTime: value => dispatch(userActions.setTime(value)),
  toggleStart: () => dispatch(gameActions.toggleStart()),
  resetFlipped: () => dispatch(gameActions.resetFlipped()),
  resetSolved: () => dispatch(gameActions.resetSolved()),
  resetCompare: () => dispatch(gameActions.resetCompare()),
  resetStep: () => dispatch(userActions.resetStep())
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayMenu);

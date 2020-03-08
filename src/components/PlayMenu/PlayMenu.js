import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import styles from "./PlayMenu.module.scss";
import { userActions } from "../../app/user/duck";
import { gameActions } from "../../app/game/duck";
import Confirm from "../PushUp/Confirm/Confirm";
import Pause from "../PushUp/Pause/Pause";
import EndGame from "../PushUp/EndGame/EndGame";
import { useStopWatch } from "../../customHooks";
import { useQuit } from "../../customHooks";
import { useWindowDimensions } from "../../customHooks";
import StopWatch from "./StopWatch/StopWatch";
import Counter from "./Counter/Counter";
import Button from "../Button/Button";

const PlayMenu = props => {
  const { solved, user_id, nick, variant, steps, gamesAmount, setTime } = props;
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

  const updateResults = async () => {
    // convert seconds to decimal format
    const secondsAdj = seconds < 10 ? `0${seconds}` : seconds;
    // Prepare userObj to DB send
    const user = {
      nick: nick,
      user_id: user_id,
      variant: variant,
      steps: steps,
      time: `${minutes}:${secondsAdj}`,
      gamesAmount: gamesAmount
    };

    axios
      .post("/results.php", user)
      .then(resp => resp)
      .then(data => console.log(data))
      .catch(error => error);
  };

  const handleEndGame = () => {
    if (solved.length === variant / 2) {
      stopTimer();
      setTime(`${minutes}:${seconds}`);
      updateResults();
    } else return;
  };

  useEffect(() => {
    if (solved.length === variant / 2) {
      setEndGame(true);
    }
  }, [solved.length, variant]);
  useEffect(() => {
    handleEndGame();
  }, [endGame]);

  if (width < 796) {
    return (
      <>
        <StopWatch minutes={minutes} seconds={seconds} />
        <Counter />
        <Button
          action={setIsQuit}
          value={"QUIT"}
          theme={"actionButton_panelControl"}
        />
        <Button
          action={stopTimer}
          value={"PAUSE"}
          theme={"actionButton_panelControl_left"}
        />
        {!isRunning && <Pause dumpPause={startTimer} />}
        {isQuit && <Confirm accept={accept} decline={decline} />}
        {endGame && <EndGame accept={accept} />}
        {isConfirm && <Redirect to="/" />}
      </>
    );
  } else {
    return (
      <div className={styles.wrapper}>
        <StopWatch minutes={minutes} seconds={seconds} />
        <Counter />
        <Button
          action={setIsQuit}
          value={"QUIT"}
          theme={"actionButton_panelControl"}
        />
        <Button
          action={stopTimer}
          value={"PAUSE"}
          theme={"actionButton_panelControl"}
        />
        {!isRunning && <Pause dumpPause={startTimer} />}
        {isQuit && <Confirm accept={accept} decline={decline} />}
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
  user_id: state.user.user_id,
  nick: state.user.nick,
  steps: state.user.step,
  solved: state.game.solved,
  variant: state.user.variant,
  gamesAmount: state.user.gamesAmount
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

import React from "react";
import styles from "./EndGame.module.scss";

const EndGame = props => {
  const { accept, steps, minutes, seconds } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.window}>
        <h1 className={styles.text}>YOUR RESULT IS</h1>
        <p className={styles.result}>
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </p>
        <p className={styles.result}>{steps} STEPS </p>
        <h1 className={styles.text}>YOUR POSITION IS</h1>
        <p className={styles.result}>13</p>
        <div className={styles.buttons}>
          <div className={styles.accept} onClick={accept}>
            OK
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndGame;

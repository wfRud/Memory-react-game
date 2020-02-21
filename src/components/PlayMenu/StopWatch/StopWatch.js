import React from "react";
import styles from "./StopWatch.module.scss";

const StopWatch = props => {
  const { minutes, seconds } = props;
  return (
    <p className={styles.timer}>
      {minutes < 10 ? `0${minutes}` : minutes} :
      {seconds < 10 ? `0${seconds}` : seconds}
    </p>
  );
};

export default StopWatch;

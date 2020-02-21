import React from "react";
import styles from "./QuitBtn.module.scss";

const QuitBtn = props => {
  const { click, name } = props;
  return (
    <button className={styles.quitBtn} onClick={click}>
      {name}
    </button>
  );
};

export default QuitBtn;

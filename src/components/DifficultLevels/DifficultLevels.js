import React from "react";
import Tile from "../../components/Tile/Tile";
import styles from "./DifficultLevels.module.scss";

const DifficultLevels = props => {
  const levels = props.levels;
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Select Difficult level</h3>
      {levels.map((level, index) => (
        <Tile content={level} key={index} change={props.change} index={index} />
      ))}
    </div>
  );
};

export default DifficultLevels;

import React from "react";
import styles from "./Tile.module.scss";

const Tile = props => {
  return (
    <>
      <label className={styles.levelTile} htmlFor={props.index}>
        <input
          id={props.index}
          type="radio"
          name="level"
          value={props.content}
          onChange={props.change}
        />
        <span className={styles.checkedInput}>{props.content}</span>
      </label>
    </>
  );
};

export default Tile;

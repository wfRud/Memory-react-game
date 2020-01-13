import React from "react";
import styles from "./Variant.module.scss";

const Variant = props => {
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

export default Variant;

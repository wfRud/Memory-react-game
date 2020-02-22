import React from "react";
import styles from "./Variant.module.scss";

const Variant = props => {
  const { content, setLevel, index } = props;
  return (
    <>
      <label className={styles.levelTile} htmlFor={props.index}>
        <input
          id={index}
          type="radio"
          name="level"
          value={content}
          onChange={setLevel}
        />
        <span className={styles.checkedInput}>{content}</span>
      </label>
    </>
  );
};

export default Variant;

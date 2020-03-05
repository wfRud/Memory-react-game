import React from "react";
import styles from "./Button.module.scss";

const ButtonCTA = props => {
  const { type, value, action } = props;
  return (
    <button type={type} className={styles.actionButton} onClick={action}>
      {value}
    </button>
  );
};

export default ButtonCTA;

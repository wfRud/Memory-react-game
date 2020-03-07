import React from "react";
import styles from "./Button.module.scss";

const ButtonCTA = props => {
  const { type, value, action, theme } = props;
  return (
    <button type={type} className={styles[theme]} onClick={action}>
      {value}
    </button>
  );
};

export default ButtonCTA;

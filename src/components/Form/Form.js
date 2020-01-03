import React from "react";
import styles from "./Form.module.scss";

const Form = props => {
  const { name, email } = props.value;

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder="put your name"
        name="name"
        value={name}
        onChange={props.change}
      />
      <input
        type="text"
        placeholder="put your email"
        name="email"
        value={email}
        onChange={props.change}
        autoComplete="off"
      />
    </div>
  );
};

export default Form;

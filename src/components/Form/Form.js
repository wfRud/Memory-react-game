import React from "react";
import styles from "./Form.module.scss";
import { connect } from "react-redux";

const Form = props => {
  const { change, valid } = props;
  const { nameError, emailError } = props.error;

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder="put your name"
        name="name"
        onChange={change}
        value={props.userName}
        autoComplete="off"
        onBlur={valid}
        className={styles.inputsField}
        id="name"
      />
      {nameError && props.userName !== "" ? (
        <div className={styles.errorMessage}>
          Name should starts from Big letter and has minimum 4 letters
        </div>
      ) : null}

      <input
        type="text"
        placeholder="put your email"
        name="email"
        onChange={change}
        onBlur={valid}
        autoComplete="off"
        className={styles.inputsField}
      />
      {emailError && props.userEmail !== "" ? (
        <div className={styles.errorMessage}>Invalid Email</div>
      ) : null}
    </div>
  );
};

const mapStateToProps = state => ({
  userName: state.user.name,
  userEmail: state.user.email
});

export default connect(mapStateToProps, {})(Form);

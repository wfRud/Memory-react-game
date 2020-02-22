import React from "react";
import styles from "./Form.module.scss";
import { userActions } from "../../app/user/duck";
import { gameActions } from "../../app/variations/duck";
import { connect } from "react-redux";

const Form = props => {
  const { setError, nameError, emailError } = props;

  const handleInputChange = e => {
    const value = e.target.value;
    props.setField(e.target.name, value);
  };
  const validFields = e => {
    console.log(!!e.target.value, e.target.name);
    if (e.target.value !== "") {
      if (e.target.name === "name") {
        const regName = /(^[A-ZĄĆĘŁŃÓŚŹŻ]{1})[a-zA-Z0-9ąćęłńóśźżĄĆĘŁŃÓŚŹŻ^*-]{3,}$/;
        regName.test(e.target.value) || e.target.value === ""
          ? setError("nameError", false)
          : setError("nameError", true);
      } else {
        const mailReg = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;
        mailReg.test(e.target.value)
          ? setError("emailError", false)
          : setError("emailError", true);
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder="put your name"
        name="name"
        onChange={handleInputChange}
        value={props.userName}
        autoComplete="off"
        onBlur={validFields}
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
        onChange={handleInputChange}
        onBlur={validFields}
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
  userEmail: state.user.email,
  nameError: state.game.nameError,
  emailError: state.game.emailError
});
const mapDispatchToProps = dispatch => ({
  setError: (fieldError, error) =>
    dispatch(gameActions.setError(fieldError, error)),
  setField: (item, value) => dispatch(userActions.setField(item, value))
});
export default connect(mapStateToProps, mapDispatchToProps)(Form);

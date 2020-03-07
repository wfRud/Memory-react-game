import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./RegisterForm.module.scss";
import Input from "../Input/Input";
import Button from "../../Button/Button";
// import { userActions } from "../../../app/user/duck";
import { gameActions } from "../../../app/variations/duck";
import { connect } from "react-redux";

const Form = props => {
  const [sendData, setSendData] = useState(false);
  const {
    setError,
    nameError,
    emailError,
    passwordError,
    passwordConfirmError,
    userName,
    userEmail,
    userPassword,
    userPassword2,
    setField,
    handleRegisterClick,
    clearFields,
    setRegister
  } = props;

  useEffect(() => {
    if (
      userName &&
      !nameError &&
      userEmail &&
      !emailError &&
      userPassword &&
      !passwordError &&
      userPassword2 &&
      !passwordConfirmError
    ) {
      setSendData(true);
    }
  }, [
    userName,
    userEmail,
    userPassword,
    userPassword2,
    nameError,
    emailError,
    passwordError,
    passwordConfirmError
  ]);
  const handleInput = e => {
    const value = e.target.value;
    setField(e.target.name, value);
  };

  const registerUser = async () => {
    const user = {
      name: userName,
      email: userEmail,
      password: userPassword,
      password2: userPassword2
    };
    await axios
      .post("/register.php", user)
      .then(resp => resp)
      .then(data => {
        if (!data.data.error) {
          setRegister(true);
        } else {
          console.log(data.data);
          // ! display errors after response from host
        }
      })
      .catch(error => console.log(error));
    clearFields();
  };

  const onSubmit = e => {
    e.preventDefault();
    if (sendData) {
      registerUser();
    }
  };

  // cSpell:ignore ZĄĆĘŁŃÓŚŹŻ, ąćęłńóśźżĄĆĘŁŃÓŚŹŻ
  const validFields = e => {
    if (e.target.value !== "") {
      if (e.target.name === "name") {
        const regName = /(^[A-ZĄĆĘŁŃÓŚŹŻ]{1})[a-zA-Z0-9ąćęłńóśźżĄĆĘŁŃÓŚŹŻ^*-]{3,20}$/;
        regName.test(e.target.value)
          ? setError("nameError", false)
          : setError("nameError", true);
      } else if (e.target.name === "email") {
        const mailReg = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;
        mailReg.test(e.target.value)
          ? setError("emailError", false)
          : setError("emailError", true);
      } else if (e.target.name === "password") {
        const passReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,20}$/;
        passReg.test(e.target.value)
          ? setError("passwordError", false)
          : setError("passwordError", true);
      } else if (e.target.name === "password2") {
        e.target.value === userPassword
          ? setError("passwordConfirmError", false)
          : setError("passwordConfirmError", true);
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={onSubmit}>
        <Input
          inputType="text"
          placeHolder={"put your nick"}
          nameField="name"
          handleInput={handleInput}
          inputValue={userName}
          autoComplete="off"
          validFields={validFields}
          typeError={nameError}
          errorMessage="Name should starts from Big letter and has minimum 4 letters"
        />
        <Input
          inputType="text"
          placeHolder="put your email"
          nameField="email"
          handleInput={handleInput}
          inputValue={userEmail}
          autoComplete="off"
          validFields={validFields}
          typeError={emailError}
          errorMessage="Invalid Email"
        />
        <Input
          inputType="password"
          placeHolder="put your password"
          nameField="password"
          handleInput={handleInput}
          inputValue={userPassword}
          autoComplete="off"
          validFields={validFields}
          typeError={passwordError}
          errorMessage="Password should has 6 between 20 letter and include big letter"
        />
        <Input
          inputType="password"
          placeHolder="repeat your password"
          nameField="password2"
          handleInput={handleInput}
          inputValue={userPassword2}
          autoComplete="off"
          validFields={validFields}
          typeError={passwordConfirmError}
          errorMessage="passwords are different"
        />
        <div className={styles.button_wrapper}>
          <Button
            type={"submit"}
            action={handleRegisterClick}
            value={"Register"}
            theme={"actionButton"}
          />

          <Link className={styles.actionButton} to="/">
            Login
          </Link>

          <Link className={styles.actionButton} to="/rank">
            Rank
          </Link>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  userName: state.game.name,
  userEmail: state.game.email,
  userPassword: state.game.password,
  userPassword2: state.game.password2,
  nameError: state.game.nameError,
  emailError: state.game.emailError,
  passwordError: state.game.passwordError,
  passwordConfirmError: state.game.passwordConfirmError
});
const mapDispatchToProps = dispatch => ({
  setError: (fieldError, error) =>
    dispatch(gameActions.setError(fieldError, error)),
  setField: (item, value) => dispatch(gameActions.setField(item, value)),
  clearFields: () => dispatch(gameActions.clearFields()),
  setRegister: item => dispatch(gameActions.setRegister(item))
});
export default connect(mapStateToProps, mapDispatchToProps)(Form);

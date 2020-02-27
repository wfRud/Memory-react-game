import React from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import axios from "axios";
import styles from "./LoginForm.module.scss";
import { connect } from "react-redux";
import { userActions } from "../../../app/user/duck";
import { gameActions } from "../../../app/variations/duck";

const LoginForm = props => {
  const {
    nameError,
    userPassword,
    userName,
    passwordError,
    setField,
    clearFields,
    setIsLogged,
    setError
  } = props;

  const handleInput = e => {
    const value = e.target.value;
    setField(e.target.name, value);
  };

  const loginUser = async () => {
    const user = {
      name: userName,
      password: userPassword
    };
    await axios
      .post("/login.php", user)
      .then(resp => resp)
      .then(data => {
        if (data.data.isLogged) {
          setIsLogged(true);
        } else {
          setIsLogged(false);
          setError(data.data.name, true);
          console.log(data.data);
        }
      })
      .catch(error => error);
  };

  const onSubmit = e => {
    e.preventDefault();
    loginUser();
    clearFields();
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={onSubmit}>
        <Input
          inputType="text"
          placeHolder={"put your nick or email"}
          nameField="name"
          handleInput={handleInput}
          inputValue={userName}
          autoComplete="off"
          typeError={nameError}
          errorMessage="Wrong Login or Password"
        />

        <Input
          inputType="password"
          placeHolder="put your password"
          nameField="password"
          handleInput={handleInput}
          inputValue={userPassword}
          autoComplete="off"
          typeError={passwordError}
          errorMessage="Wrong Login or Password"
        />

        <div className={styles.button_wrapper}>
          <Link to="/register" className={styles.actionButton}>
            Register
          </Link>

          <button type="submit" className={styles.actionButton}>
            Login
          </button>

          <Link to="/rank" className={styles.actionButton}>
            Rank
          </Link>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  userName: state.user.name,
  userEmail: state.user.email,
  userPassword: state.user.password,
  userPassword2: state.user.password2,
  nameError: state.game.nameError,
  emailError: state.game.emailError,
  passwordError: state.game.passwordError,
  passwordConfirmError: state.game.passwordConfirmError
});
const mapDispatchToProps = dispatch => ({
  setField: (item, value) => dispatch(userActions.setField(item, value)),
  clearFields: () => dispatch(userActions.clearFields()),
  setIsLogged: item => dispatch(gameActions.setIsLogged(item)),
  setError: (fieldError, error) =>
    dispatch(gameActions.setError(fieldError, error))
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

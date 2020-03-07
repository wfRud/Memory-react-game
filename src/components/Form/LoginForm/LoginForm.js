import React from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../../Button/Button";
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
    setUserId,
    setNick,
    setGamesAmount,
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
          setUserId(Number(data.data.user_id));
          setGamesAmount(data.data.games_amount);
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
    setNick(userName);
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

          <Button type={"submit"} value={"Login"} theme={"actionButton"} />

          <Link to="/rank" className={styles.actionButton}>
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
  setField: (item, value) => dispatch(gameActions.setField(item, value)),
  setUserId: value => dispatch(userActions.setUserId(value)),
  setNick: value => dispatch(userActions.setNick(value)),
  setGamesAmount: value => dispatch(userActions.setGamesAmount(value)),
  clearFields: () => dispatch(gameActions.clearFields()),
  setIsLogged: item => dispatch(gameActions.setIsLogged(item)),
  setError: (fieldError, error) =>
    dispatch(gameActions.setError(fieldError, error))
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

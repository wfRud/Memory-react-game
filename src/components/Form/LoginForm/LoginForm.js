import React from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import axios from "axios";
import styles from "./LoginForm.module.scss";
import { connect } from "react-redux";
import { userActions } from "../../../app/user/duck";

const LoginForm = props => {
  const {
    nameError,
    userPassword,
    userName,
    passwordError,
    setField,
    clearFields
  } = props;

  const handleInput = e => {
    const value = e.target.value;
    setField(e.target.name, value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const user = {
      name: userName,
      password: userPassword
    };
    axios
      .post("http//localhost/login.php", user)
      .then(resp => console.log(resp.data));
    clearFields();
  };
  // cSpell:ignore ZĄĆĘŁŃÓŚŹŻ, ąćęłńóśźżĄĆĘŁŃÓŚŹŻ
  // const validFields = e => {
  //   if (e.target.value !== "") {
  //     if (e.target.name === "name") {
  //       const regName = /(^[A-ZĄĆĘŁŃÓŚŹŻ]{1})[a-zA-Z0-9ąćęłńóśźżĄĆĘŁŃÓŚŹŻ^*-]{3,}$/;
  //       regName.test(e.target.value) || e.target.value === ""
  //         ? setError("nameError", false)
  //         : setError("nameError", true);
  //     } else if (e.target.name === "email") {
  //       const mailReg = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;
  //       mailReg.test(e.target.value)
  //         ? setError("emailError", false)
  //         : setError("emailError", true);
  //     }
  //   }
  // };

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
          // validFields={validFields}
          typeError={nameError}
          errorMessage="Name should starts from Big letter and has minimum 4 letters"
        />

        <Input
          inputType="password"
          placeHolder="put your password"
          nameField="password"
          handleInput={handleInput}
          inputValue={userPassword}
          autoComplete="off"
          // validFields={validFields}
          typeError={passwordError}
          errorMessage="Password should has 6 between 20 letter and include big letter"
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
  clearFields: () => dispatch(userActions.clearFields())
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

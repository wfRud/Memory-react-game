import React from "react";
import styles from "./Form.module.scss";
import Input from "./Input/Input";
import Variation from "./Variation/Variation";
import { userActions } from "../../app/user/duck";
import { gameActions } from "../../app/variations/duck";
import { connect } from "react-redux";

const Form = props => {
  const {
    setError,
    nameError,
    emailError,
    userPassword,
    userPassword2,
    userName,
    userEmail,
    passwordError,
    passwordConfirmError,
    loginClicked,
    setField
  } = props;

  const handleInput = e => {
    const value = e.target.value;
    setField(e.target.name, value);
  };
  const validFields = e => {
    if (e.target.value !== "") {
      if (e.target.name === "name") {
        const regName = /(^[A-ZĄĆĘŁŃÓŚŹŻ]{1})[a-zA-Z0-9ąćęłńóśźżĄĆĘŁŃÓŚŹŻ^*-]{3,}$/;
        regName.test(e.target.value) || e.target.value === ""
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
      <form>
        <Input
          inputType="text"
          placeHolder={
            !loginClicked ? "put your nick" : "put your nick or email"
          }
          nameField="name"
          handleInput={handleInput}
          inputValue={userName}
          autoComplete="off"
          validFields={validFields}
          typeError={nameError}
          errorMessage="Name should starts from Big letter and has minimum 4 letters"
        />
        {!loginClicked && (
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
        )}
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
        {!loginClicked && (
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
        )}
        {/* {loginClicked && <Variation />} */}
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
  setError: (fieldError, error) =>
    dispatch(gameActions.setError(fieldError, error)),
  setField: (item, value) => dispatch(userActions.setField(item, value))
});
export default connect(mapStateToProps, mapDispatchToProps)(Form);

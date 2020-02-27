import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import LoginForm from "../../components/Form/LoginForm/LoginForm";

import styles from "./Login.module.scss";

const Login = props => {
  const { isLogged } = props;
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>MEMORY</h1>
      <h2 className={styles.text}>
        {isLogged
          ? "Hello User in a moment you will be redirected to choose the level of difficulty "
          : "Login and start game"}
      </h2>
      <LoginForm />
      {isLogged && <Redirect to="/userView" />}
    </div>
  );
};

const mapStateToProps = state => ({
  isLogged: state.game.isLogged
});

export default connect(mapStateToProps, {})(Login);

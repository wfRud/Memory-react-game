import React from "react";
import LoginForm from "../../components/Form/LoginForm/LoginForm";
import styles from "./Login.module.scss";

const Login = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>MEMORY</h1>
      <h2 className={styles.text}>Login and start game</h2>
      <LoginForm />

      {/* {userStart && <Redirect to="/gamePlay" />} */}
    </div>
  );
};

export default Login;

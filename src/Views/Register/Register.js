import React from "react";
import { Redirect } from "react-router-dom";
import RegisterForm from "../../components/Form/RegisterForm/RegisterForm";
import styles from "./Register.module.scss";

const Register = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>MEMORY</h1>
      <h2 className={styles.text}>Set account and login</h2>
      <RegisterForm />

      {/* {userStart && <Redirect to="/gamePlay" />} */}
    </div>
  );
};

export default Register;

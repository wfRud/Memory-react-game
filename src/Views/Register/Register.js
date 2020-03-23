import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import RegisterForm from "../../components/Form/RegisterForm/RegisterForm";
import { gameActions } from "../../app/game/duck";
import styles from "./Register.module.scss";

const Register = props => {
  const { register, setRegister } = props;
  const [seconds, setSeconds] = useState(2);

  useEffect(() => {
    if (register) {
      const interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);

      return () => {
        clearInterval(interval);
        if (seconds === 0) {
          setRegister(false);
        }
      };
    }
  }, [seconds, register, setRegister]);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>MEMORY</h1>
      <h2 className={styles.text}>
        {register ? "Your account has been opened" : "Set account and login"}
      </h2>
      {register && <p>You will be redirect to login page {seconds}</p>}
      <RegisterForm />

      {!seconds && <Redirect to="/memory" />}
    </div>
  );
};

const mapStateToProps = state => ({
  register: state.game.register
});
const mapDispatchToProps = dispatch => ({
  setRegister: item => dispatch(gameActions.setRegister(item))
});
export default connect(mapStateToProps, mapDispatchToProps)(Register);

import React, { useEffect } from "react";
import styles from "./EndGame.module.scss";
import { connect } from "react-redux";
import { userActions } from "../../app/user/duck";

const EndGame = props => {
  const { accept } = props;

  // useEffect(()=> {

  // })
  return (
    <div className={styles.wrapper}>
      <div className={styles.window}>
        <h1 className={styles.text}>YOUR RESULT IS</h1>
        <p className={styles.result}>1:05</p>
        <p className={styles.result}>33 STEPS</p>
        <h1 className={styles.text}>YOUR POSITION IS</h1>
        <p className={styles.result}>13</p>
        <div className={styles.buttons}>
          <div className={styles.accept} onClick={accept}>
            OK
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setTime: value => dispatch(userActions.setTime(value))
});

export default connect({}, mapDispatchToProps)(EndGame);

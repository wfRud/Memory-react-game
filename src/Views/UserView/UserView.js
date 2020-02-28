import React from "react";
import { Redirect } from "react-router-dom";
import styles from "./UserView.module.scss";
import { connect } from "react-redux";
import Variations from "../../components/Form/Variation/Variation";
import { gameActions } from "../../app/variations/duck";

const UserView = props => {
  const { isLogged, setIsLogged, toggleStart, variant, start } = props;

  const handleStart = () => {
    if (variant) {
      toggleStart(true);
    }
  };
  const handLogout = () => {
    setIsLogged(false);
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>MEMORY</h1>
      <h2 className={styles.text}>Hello User</h2>
      <Variations />
      <div className={styles.button_wrapper}>
        <button className={styles.actionButton} onClick={handLogout}>
          Logout
        </button>

        <button className={styles.actionButton} onClick={handleStart}>
          Start
        </button>
      </div>
      {!isLogged && <Redirect to="/" />}
      {start && <Redirect to="/gamePlay" />}
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  toggleStart: () => dispatch(gameActions.toggleStart()),
  setIsLogged: item => dispatch(gameActions.setIsLogged(item))
});

const mapStateToProps = state => ({
  start: state.game.start,
  variant: state.user.variant,
  isLogged: state.game.isLogged
});

export default connect(mapStateToProps, mapDispatchToProps)(UserView);

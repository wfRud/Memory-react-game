import React from "react";
import { Redirect } from "react-router-dom";
import styles from "./UserView.module.scss";
import { connect } from "react-redux";
import Variations from "../../components/Form/Variation/Variation";
import PersonalRank from "../../components/PersonalRank/PersonalRank";
import axios from "axios";
import { gameActions } from "../../app/variations/duck";

const UserView = props => {
  const {
    isLogged,
    setIsLogged,
    toggleStart,
    variant,
    start,
    user_id,
    nick
  } = props;

  const handleStart = () => {
    if (variant) {
      toggleStart(true);
    }
  };
  const handleLogout = () => {
    const userId = {
      userId: user_id
    };
    axios
      .post("/logout.php", userId)
      .then(resp => resp)
      .then(data => {
        setIsLogged(data.data.isLogged);
      })
      .catch(error => console.log(error));
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>MEMORY</h1>
      <h2 className={styles.text}>Hello {nick} !</h2>
      <PersonalRank />
      <Variations />
      <div className={styles.button_wrapper}>
        <button className={styles.actionButton} onClick={handleLogout}>
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
  user_id: state.user.user_id,
  nick: state.user.nick,
  variant: state.user.variant,
  start: state.game.start,
  isLogged: state.game.isLogged
});

export default connect(mapStateToProps, mapDispatchToProps)(UserView);

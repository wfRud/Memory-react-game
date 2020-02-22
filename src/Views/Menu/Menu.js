import React, { useEffect, useState } from "react";
import Form from "../../components/Form/Form";
import Variation from "../../components/Variation/Variation";
import { Redirect } from "react-router-dom";
import styles from "./Menu.module.scss";
import { connect } from "react-redux";

import { gameActions } from "../../app/variations/duck";

const Menu = props => {
  const [clicked, setClicked] = useState(false);
  const { userStart } = props;

  const handleClick = () => {
    setClicked(true);
  };

  useEffect(() => {
    const {
      nameError,
      emailError,
      userName,
      userEmail,
      variant,
      toggleStart
    } = props;

    if (
      !nameError &&
      !emailError &&
      userName !== "" &&
      userEmail !== "" &&
      variant &&
      clicked
    ) {
      toggleStart();
      handleClick(false);
    }
  });

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>MEMORY</h1>
      <Form />
      <Variation />
      <div className={styles.button_wrapper}>
        <button className={styles.actionButton} onClick={handleClick}>
          Start
        </button>
        <button className={styles.actionButton}>Rank</button>
      </div>
      {userStart && <Redirect to="/gamePlay" />}
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  toggleStart: () => dispatch(gameActions.toggleStart())
});

const mapStateToProps = state => ({
  userName: state.user.name,
  userEmail: state.user.email,
  variant: state.user.variant,
  userStart: state.game.start,
  nameError: state.game.nameError,
  emailError: state.game.emailError
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

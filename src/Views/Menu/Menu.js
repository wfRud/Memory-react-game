import React, { useEffect, useState } from "react";
import Form from "../../components/Form/Form";
import Variation from "../../components/Variation/Variation";
import { Redirect } from "react-router-dom";
import styles from "./Menu.module.scss";
import { connect } from "react-redux";

import { userActions } from "../../app/user/duck";

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
  toggleStart: () => dispatch(userActions.toggleStart())
});

const mapStateToProps = state => ({
  userName: state.user.name,
  userEmail: state.user.email,
  userStart: state.user.start,
  nameError: state.user.nameError,
  emailError: state.user.emailError,
  variant: state.variants.variant
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

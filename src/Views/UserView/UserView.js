import React from "react";
import { Redirect, Link } from "react-router-dom";
import styles from "./UserView.module.scss";
import { connect } from "react-redux";
import Variations from "../../components/Form/Variation/Variation";
import { gameActions } from "../../app/variations/duck";
import { userActions } from "../../app/user/duck";

const Menu = props => {
  const { isLogged } = props;

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>MEMORY</h1>
      <h2 className={styles.text}>Hello User</h2>
      <Variations />
      <div className={styles.button_wrapper}>
        <Link to="/register" className={styles.actionButton}>
          Logout
        </Link>

        <button className={styles.actionButton}>Start</button>
      </div>
      {!isLogged && <Redirect to="/" />}
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  toggleStart: () => dispatch(gameActions.toggleStart()),
  clearFields: () => dispatch(userActions.clearFields())
});

const mapStateToProps = state => ({
  userName: state.user.name,
  userEmail: state.user.email,
  password: state.user.password,
  variant: state.user.variant,
  userStart: state.game.start,
  nameError: state.game.nameError,
  emailError: state.game.emailError,
  isLogged: state.game.isLogged
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

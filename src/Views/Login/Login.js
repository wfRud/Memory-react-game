import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import LoginForm from "../../components/Form/LoginForm/LoginForm";
import { gameActions } from "../../app/game/duck";
import { userActions } from "../../app/user/duck";
import styles from "./Login.module.scss";

const Login = props => {
  const { isLogged, setIsLogged, setNick, setUserId, setGamesAmount } = props;

  const checkIsLogged = () => {
    axios
      .get("/login.php")
      .then(resp => resp)
      .then(data => {
        if (data.data.isLogged) {
          setIsLogged(data.data.isLogged);
          setUserId(data.data.user_id);
          setNick(data.data.nick);
          setGamesAmount(data.data.games_amount);
        } else {
          setIsLogged(data.data.isLogged);
        }
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    checkIsLogged();
  });

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

const mapDispatchToProps = dispatch => ({
  setIsLogged: item => dispatch(gameActions.setIsLogged(item)),
  setUserId: value => dispatch(userActions.setUserId(value)),
  setNick: value => dispatch(userActions.setNick(value)),
  setGamesAmount: value => dispatch(userActions.setGamesAmount(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

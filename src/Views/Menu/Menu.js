// import React, { useEffect, useState } from "react";
// import RegisterForm from "../../components/Form/RegisterForm/RegisterForm";
// import { Redirect } from "react-router-dom";
// import styles from "./Menu.module.scss";
// import { connect } from "react-redux";
// import { gameActions } from "../../app/variations/duck";
// import { userActions } from "../../app/user/duck";

// const Menu = props => {
//   const [startClicked, setStartClicked] = useState(false);
//   const [loginClicked, setLoginClicked] = useState(true);
//   const { userName, userEmail, password, userStart, clearFields } = props;

//   const handleStartClick = () => {
//     setStartClicked(true);
//   };
//   // const handleLoginClick = () => {
//   //   setLoginClicked(true);
//   //   clearFields();
//   // };
//   // const handleRegisterClick = () => {
//   //   setLoginClicked(false);
//   // };
//   const onSubmit = e => {
//     e.preventDefault();
//     const user = {
//       name: userName,
//       email: userEmail,
//       password: password
//     };
//     console.log(user);
//     clearFields();
//   };

//   useEffect(() => {
//     const {
//       nameError,
//       emailError,
//       userName,
//       userEmail,
//       variant,
//       toggleStart
//     } = props;

//     if (
//       !nameError &&
//       !emailError &&
//       userName !== "" &&
//       userEmail !== "" &&
//       variant &&
//       startClicked
//     ) {
//       toggleStart();
//       handleStartClick(false);
//     }
//   });

//   return (
//     <div className={styles.wrapper}>
//       <h1 className={styles.title}>MEMORY</h1>
//       <h2 className={styles.text}>
//         {!loginClicked ? "Set account and login" : "Login and join to game"}
//       </h2>
//       <RegisterForm
//         loginClicked={loginClicked}
//         submit={onSubmit}
//         // handleRegisterClick={handleRegisterClick}
//         // handleLoginClick={handleLoginClick}
//       />

//       {userStart && <Redirect to="/gamePlay" />}
//     </div>
//   );
// };
// const mapDispatchToProps = dispatch => ({
//   toggleStart: () => dispatch(gameActions.toggleStart()),
//   clearFields: () => dispatch(userActions.clearFields())
// });

// const mapStateToProps = state => ({
//   userName: state.user.name,
//   userEmail: state.user.email,
//   password: state.user.password,
//   variant: state.user.variant,
//   userStart: state.game.start,
//   nameError: state.game.nameError,
//   emailError: state.game.emailError
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Menu);

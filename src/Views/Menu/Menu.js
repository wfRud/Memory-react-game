import React, { Component } from "react";
import Form from "../../components/Form/Form";
import Variation from "../../components/Variation/Variation";
import { Redirect } from "react-router-dom";
import styles from "./Menu.module.scss";
import { connect } from "react-redux";
import { variantActions } from "../../app/variations/duck";
import { userActions } from "../../app/user/duck";

class Menu extends Component {
  state = {
    nameError: false,
    emailError: false
  };
  handleInputChange = e => {
    const value = e.target.value;
    this.props.setField(e.target.name, value);
  };

  setLevel = e => {
    this.props.setLevel(Number(e.target.value));
  };

  toggleStart = () => {
    if (
      !this.state.nameError &&
      !this.state.emailError &&
      this.props.variant &&
      this.props.userName !== "" &&
      this.props.userEmail !== ""
    ) {
      this.props.toggleStart();
    }
  };

  validFields = e => {
    if (e.target.value !== "") {
      if (e.target.name === "name") {
        const regName = /(^[A-ZĄĆĘŁŃÓŚŹŻ]{1})[a-zA-Z0-9ąćęłńóśźżĄĆĘŁŃÓŚŹŻ^*-]{3,}$/;
        regName.test(e.target.value) || e.target.value === ""
          ? this.setState({ nameError: false })
          : this.setState({ nameError: true });
      } else {
        const mailReg = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;
        mailReg.test(e.target.value)
          ? this.setState({ emailError: false })
          : this.setState({ emailError: true });
      }
    }
  };

  componentWillUnmount() {
    this.props.toggleStart();
  }
  render() {
    const { userStart } = this.props;
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.title}>MEMORY</h1>
        <Form
          change={this.handleInputChange}
          valid={this.validFields}
          error={this.state}
        />
        <Variation change={this.setLevel} />
        <div className={styles.button_wrapper}>
          <button className={styles.actionButton} onClick={this.toggleStart}>
            Start
          </button>
          <button className={styles.actionButton}>Rank</button>
        </div>
        {userStart && <Redirect to="/gamePlay" />}
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  setLevel: item => dispatch(variantActions.setLevel(item)),
  clearLevel: () => dispatch(variantActions.clearLevels()),
  setField: (item, value) => dispatch(userActions.setField(item, value)),
  clearFields: () => dispatch(userActions.clearFields()),
  toggleStart: () => dispatch(userActions.toggleStart()),
  toggleQuit: () => dispatch(userActions.toggleQuit())
});

const mapStateToProps = state => ({
  userName: state.user.name,
  userEmail: state.user.email,
  userStart: state.user.start,
  variant: state.variants.variant
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

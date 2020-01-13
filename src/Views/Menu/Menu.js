import React, { Component } from "react";
import Form from "../../components/Form/Form";
import Variation from "../../components/Variation/Variation";
import { Redirect } from "react-router-dom";
import styles from "./Menu.module.scss";
import { connect } from "react-redux";
import { variantActions as actions } from "../../app/variations/duck";

class Menu extends Component {
  state = {
    name: "",
    email: "",
    level: null,
    start: false
  };

  handleInputChange = e => {
    const value = e.target.value;
    this.setState({
      [e.target.name]: value
    });
  };

  setLevel = e => {
    this.props.set(e.target.value);
  };

  handleStart = () => {
    // console.log(this);
    this.setState({
      start: true
    });
  };
  renderRedirect = () => {
    if (this.state.start) {
      return <Redirect to="/gamePlay" />;
    }
  };
  render() {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.title}>MEMORY</h1>
        <Form value={this.state} change={this.handleInputChange} />
        <Variation change={this.setLevel} />
        <div>
          <button
            className={styles.actionButton}
            onClick={this.handleStart.bind(this)}
          >
            Start
          </button>
          <button className={styles.actionButton}>Rank</button>
        </div>
        {this.renderRedirect()}
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  set: item => dispatch(actions.setLevel(item))
});

export default connect(null, mapDispatchToProps)(Menu);

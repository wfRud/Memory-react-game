import React, { Component } from "react";
import Form from "../../components/Form/Form";
import DifficultLevels from "../../components/DifficultLevels/DifficultLevels";
import styles from "./Menu.module.scss";

class Menu extends Component {
  state = {
    name: "",
    email: "",
    levels: [16, 36, 64],
    level: null
  };

  handleInputChange = e => {
    const value = e.target.value;
    this.setState({
      [e.target.name]: value
    });
  };

  setLevel = e => {
    // console.log(e.target.value);
    this.setState({
      level: Number(e.target.value)
    });
  };
  render() {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.title}>MEMORY</h1>
        <Form value={this.state} change={this.handleInputChange} />
        <DifficultLevels levels={this.state.levels} change={this.setLevel} />
        <div>
          <button className={styles.actionButton}>Start</button>
          <button className={styles.actionButton}>Rank</button>
        </div>
      </div>
    );
  }
}

export default Menu;

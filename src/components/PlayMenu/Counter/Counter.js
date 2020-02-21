import React from "react";
import { connect } from "react-redux";
import styles from "./Counter.module.scss";

const Counter = props => {
  return <p className={styles.counter}>{props.step} steps</p>;
};
const mapStateToProps = state => ({
  step: state.user.step
});

export default connect(mapStateToProps, null)(Counter);

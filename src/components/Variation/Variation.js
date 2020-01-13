import React from "react";
import Variant from "./Variant";
import styles from "./Variation.module.scss";
import { connect } from "react-redux";

const Variation = props => {
  // const { levels } = props;
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Select Difficult level</h3>
      {props.variations.map((level, index) => (
        <Variant
          content={level}
          key={index}
          change={props.change}
          index={index}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  variations: state.variations
});

export default connect(mapStateToProps, {})(Variation);

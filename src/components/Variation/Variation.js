import React from "react";
import Variant from "./Variant";
import styles from "./Variation.module.scss";
import { connect } from "react-redux";

const Variation = props => {
  // const { levels } = props;
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Select Difficult level</h3>
      <div className={styles.variant_Cnt}>
        {props.variants.map((level, index) => (
          <Variant
            content={level}
            key={index}
            change={props.change}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  variants: state.variants.variations
});

export default connect(mapStateToProps, {})(Variation);

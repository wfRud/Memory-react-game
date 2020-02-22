import React from "react";
import Variant from "./Variant";
import styles from "./Variation.module.scss";
import { connect } from "react-redux";
import { userActions } from "../../app/user/duck";

const Variation = props => {
  const setLevel = e => {
    props.setLevel(Number(e.target.value));
  };
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Select Difficult level</h3>
      <div className={styles.variant_Cnt}>
        {props.variants.map((level, index) => (
          <Variant
            content={level}
            key={index}
            setLevel={setLevel}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  variants: state.game.variations
});

const mapDispatchToProps = dispatch => ({
  setLevel: item => dispatch(userActions.setLevel(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Variation);

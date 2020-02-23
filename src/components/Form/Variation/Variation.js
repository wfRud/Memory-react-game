import React from "react";
import styles from "./Variation.module.scss";
import { connect } from "react-redux";
import { userActions } from "../../../app/user/duck";

const Variation = props => {
  const setLevel = e => {
    props.setLevel(Number(e.target.value));
  };
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Select Difficult level</h3>
      <div className={styles.variant_Cnt}>
        {props.variants.map((level, index) => (
          <label className={styles.levelTile} htmlFor={props.index} key={index}>
            <input
              id={index}
              type="radio"
              name="level"
              value={level}
              onChange={setLevel}
            />
            <span className={styles.checkedInput}>{level}</span>
          </label>
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

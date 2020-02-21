import React, { useState } from "react";
import { connect } from "react-redux";
import { userActions } from "../../app/user/duck";
import styles from "./Tile.module.scss";
import SVGIcon from "./SVGIcon";

const Tile = props => {
  const [disabled, setDisabled] = useState(false);
  const {
    flipped,
    id,
    name,
    increaseStep,
    setFlipped,
    resetFlipped,
    setSolved,
    solved,
    toCompare,
    resetCompare,
    matchCard
  } = props;
  const sameCardClicked = id => flipped.includes(id);

  const handleClick = id => {
    if (flipped.length === 0) {
      setFlipped(id);
      setDisabled(false);
      toCompare(name);
    } else if (flipped.length < 2) {
      if (sameCardClicked(id)) return;
      setFlipped(id);
      toCompare(name);
      setTimeout(() => {
        if (!matchCard()) {
          resetFlipped();
          resetCompare();
          setDisabled(false);
          increaseStep();
        } else {
          setDisabled(false);
          setSolved(name);
          increaseStep();
          resetFlipped();
          resetCompare();
        }
      }, 2000);
    }
  };

  return (
    <div
      className={
        flipped.includes(id) || solved.includes(name)
          ? styles.Tile_flip
          : styles.Tile
      }
      name={name}
      onClick={() => (disabled ? null : handleClick(id))}
    >
      <div className={styles._frontFace}>
        <SVGIcon name={name} width={"3.5em"} fill={"#000"} />
      </div>
      <div className={styles._backFace}></div>
    </div>
  );
};
const mapDispatchStateToProps = dispatch => ({
  increaseStep: () => dispatch(userActions.increaseStep()),
  setFlipped: item => dispatch(userActions.setFlipped(item)),
  resetFlipped: () => dispatch(userActions.resetFlipped()),
  disabledCard: () => dispatch(userActions.disabledCard()),
  setSolved: item => dispatch(userActions.setSolved(item)),
  resetSolved: () => dispatch(userActions.resetSolved()),
  toCompare: item => dispatch(userActions.toCompare(item)),
  resetCompare: () => dispatch(userActions.resetCompare())
});

const mapStateToProps = state => ({
  flipped: state.user.flipped,
  solved: state.user.solved
});
export default connect(mapStateToProps, mapDispatchStateToProps)(Tile);

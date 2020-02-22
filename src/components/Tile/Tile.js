import React, { useState } from "react";
import { connect } from "react-redux";
import { userActions } from "../../app/user/duck";
import { gameActions } from "../../app/variations/duck";
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
  setFlipped: item => dispatch(gameActions.setFlipped(item)),
  resetFlipped: () => dispatch(gameActions.resetFlipped()),
  disabledCard: () => dispatch(gameActions.disabledCard()),
  setSolved: item => dispatch(gameActions.setSolved(item)),
  resetSolved: () => dispatch(gameActions.resetSolved()),
  toCompare: item => dispatch(gameActions.toCompare(item)),
  resetCompare: () => dispatch(gameActions.resetCompare())
});

const mapStateToProps = state => ({
  flipped: state.game.flipped,
  solved: state.game.solved
});
export default connect(mapStateToProps, mapDispatchStateToProps)(Tile);

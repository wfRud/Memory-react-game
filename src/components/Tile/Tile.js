import React, { useState } from "react";
import styles from "./Tile.module.scss";
import SVGIcon from "./SVGIcon";
import ReactCardFlip from "react-card-flip";

const Tile = props => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipDirection="horizontal"
      flipSpeedBackToFront={0.7}
      flipSpeedFrontToBack={0.7}
    >
      <div className={styles.Tile} onClick={handleClick} />

      <div className={styles.Tile} onClick={handleClick}>
        <SVGIcon name={props.name} width={"3.5em"} fill={"#000"} />
      </div>
    </ReactCardFlip>
  );
};

export default Tile;

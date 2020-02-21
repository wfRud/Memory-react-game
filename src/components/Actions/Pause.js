import React from "react";
import styles from "./Pause.module.scss";
import SVGIcon from "../Tile/SVGIcon";

const Pause = props => {
  const { dumpPause } = props;
  return (
    <div className={styles.wrapper}>
      {" "}
      <SVGIcon
        name="play"
        width={"25%"}
        height={"25%"}
        className={styles.icon}
        fill={"#fff"}
        click={dumpPause}
      />
      <p className={styles.text}>CLICK PLAY TO BACK</p>
    </div>
  );
};

export default Pause;

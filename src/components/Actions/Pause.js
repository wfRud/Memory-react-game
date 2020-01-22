import React from "react";
import styles from "./Pause.module.scss";
import SVGIcon from "../Tile/SVGIcon";

const Pause = props => {
  return (
    <div className={styles.wrapper}>
      {" "}
      <SVGIcon
        name="pause"
        width={"8%"}
        height={"8%"}
        className={styles.icon}
        fill={"#fff"}
      />
      <p className={styles.text}>
        Click{" "}
        <SVGIcon
          name="play"
          width={"8%"}
          height={"8%"}
          className={styles.icon}
          fill={"#fff"}
          click={props.dumpPause}
        />{" "}
        TO BACK
      </p>
    </div>
  );
};

export default Pause;

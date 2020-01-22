import React from "react";
import styles from "./Actions.module.scss";
import SVGIcon from "../Tile/SVGIcon";
const Actions = props => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.window}>
        <h1 className={styles.text}>Are you sure ??</h1>
        <div className={styles.buttons}>
          <div className={styles.accept} onClick={props.accept}>
            <SVGIcon name={"accept"} width={"3.5em"} fill={"#000"} />
          </div>
          <div
            className={styles.decline}
            onClick={props.dumpConfirm}
            data-decline="decline"
          >
            <SVGIcon name={"decline"} width={"3.5em"} fill={"#000"} />
          </div>
        </div>
        <p className={styles.tip}>PRESS ESC TO BACK</p>
      </div>
    </div>
  );
};

export default Actions;

import React from "react";
import styles from "./Confirm.module.scss";
import SVGIcon from "../../Tile/SVGIcon";
const Confirm = props => {
  const { accept, decline } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.window}>
        <h1 className={styles.text}>Are you sure ??</h1>
        <div className={styles.buttons}>
          <div className={styles.accept} onClick={accept}>
            <SVGIcon name={"accept"} width={"3.5em"} fill={"#000"} />
          </div>
          <div className={styles.decline} onClick={decline}>
            <SVGIcon name={"decline"} width={"3.5em"} fill={"#000"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;

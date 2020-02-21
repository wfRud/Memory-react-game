import React from "react";
import styles from "./PanelControl.module.scss";
import SVGIcon from "../../Tile/SVGIcon";

const PanelControl = props => {
  const { stop } = props;
  return (
    <div className={styles.iconCnt}>
      <SVGIcon
        name="pause"
        width={"46"}
        height={"100"}
        className={styles.icon}
        click={stop}
      />
      <SVGIcon
        name="audiotrack"
        width={"46"}
        height={"100"}
        className={styles.icon}
      />
      <SVGIcon
        name="volume"
        width={"46"}
        height={"100"}
        className={styles.icon}
      />
    </div>
  );
};

export default PanelControl;

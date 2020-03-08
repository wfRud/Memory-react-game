import React, { useEffect, useState } from "react";
import styles from "./PersonalRank.module.scss";
import axios from "axios";

const PersonalRank = () => {
  const [result, setResult] = useState([]);
  const getRankList = () => {
    axios
      .get("./rank.php")
      .then(resp => resp)
      .then(data => setResult(data.data))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getRankList();
  }, []);

  const renderTableData = () => {
    if (result) {
      return result.map((user, index) => {
        const { nick, variant, steps, time } = user;

        return (
          <tr className={styles.list_body_row} key={index}>
            <td className={styles.list_body_item}>{index + 1}.</td>
            <td className={styles.list_body_item}>{nick}</td>
            <td className={styles.list_body_item}>{variant}</td>
            <td className={styles.list_body_item}>{steps}</td>
            <td className={styles.list_body_item}>{time}s</td>
          </tr>
        );
      });
    } else {
      return;
    }
  };
  return (
    <>
      {result.length < 1 ? (
        <p className={styles.text}>It's your first time. Let's Play</p>
      ) : (
        <p className={styles.text}>Your best results are below</p>
      )}
      <div className={styles.wrapper_list}>
        <table className={styles.list}>
          <thead className={styles.list_header}>
            <tr className={styles.list_header_row}>
              <th className={styles.list_header_item}>Lp</th>
              <th className={styles.list_header_item}>Nick</th>
              <th className={styles.list_header_item}>Variant</th>
              <th className={styles.list_header_item}>Steps</th>
              <th className={styles.list_header_item}>Time</th>
            </tr>
          </thead>
          <tbody className={styles.list_body}>{renderTableData()}</tbody>
        </table>
      </div>
    </>
  );
};

export default PersonalRank;

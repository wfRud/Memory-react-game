import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./Rank.module.scss";

const Rank = () => {
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
            <td className={styles.list_body_item}>{time}</td>
          </tr>
        );
      });
    } else {
      return;
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Memory</h1>
      <h2 className={styles.text}>Check your position</h2>
      <div className={styles.wrapper_list}>
        <table className={styles.list}>
          <thead className={styles.list_header}>
            <tr className={styles.list_header_row}>
              <th className={styles.list_header_item}>Id</th>
              <th className={styles.list_header_item}>Nick</th>
              <th className={styles.list_header_item}>Variant</th>
              <th className={styles.list_header_item}>Steps</th>
              <th className={styles.list_header_item}>Time</th>
            </tr>
          </thead>
          <tbody className={styles.list_body}>{renderTableData()}</tbody>
        </table>
      </div>
      <div className={styles.button_wrapper}>
        <Link to="/register" className={styles.actionButton}>
          Register
        </Link>
        <Link to="/" className={styles.actionButton}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default Rank;

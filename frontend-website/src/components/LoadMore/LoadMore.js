import React from "react";
import styles from "./LoadMore.module.css";

export default function LoadMore({ onLoadMore }) {
  return (
    <div className={styles.buttonDiv}>
      <button onClick={onLoadMore} className={styles.button}>
        LoadMore
      </button>
    </div>
  );
}

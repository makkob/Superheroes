import React from "react";
import styles from "./Item.module.css";

export default function Item() {
  return (
    <div className={styles.item}>
      <p className={styles.itemText}>Superman</p>
      <img
        className={styles.img}
        alt="superman"
        src="https://toppng.com/uploads/preview/superman-png-11553961747bidpfg80vv.png"
      />
      <button className={styles.button}>Delete</button>
    </div>
  );
}

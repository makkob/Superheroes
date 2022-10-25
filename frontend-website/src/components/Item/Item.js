import React from "react";
import styles from "./Item.module.css";

export default function Item() {
  return (
    <div className={styles.item}>
      <p className={styles.itemText}>Superman</p>
      <div className={styles.description}>
        <p className={styles.hiddenText}>
          2133 333333 3333333333 333333333 3333 333333 33 3 333333333 33333
          3333333333 3333 33333 3333 33 333 STARTEDsd sd STARTEDasd
          app.disabled'sasaddddddd sad sad asd asd asd sad sad sd sad sad asd
          app.disabled'asd asd sd asa'; app.disabled'sasaddddddd sad sad asd asd
          asd sad sad sdasdasssdsadsdsad sad sda sad sad sa sda sa d
        </p>
        <img
          className={styles.img}
          alt="superman"
          src="https://toppng.com/uploads/preview/superman-png-11553961747bidpfg80vv.png"
        />
      </div>

      <button className={`${styles.button} ${styles.delete}`}>Delete</button>
      <button className={`${styles.button} ${styles.update}`}>Update</button>
    </div>
  );
}

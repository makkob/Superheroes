import React from "react";
import styles from "./Item.module.css";

export default function Item() {
  return (
    <div className={styles.item}>
      <p className={styles.itemText}>Superman</p>
      <div className={styles.description}>
        <p className={styles.hiddenText}>
          <b>Real name:</b> Clark Kent
          <br />
          <b>Origin:</b> he was born Kal-El on the planet Krypton, before being
          rocketed to Earth as an infant by his scientist father Jor-El, moments
          before Krypton's destruction…
          <br />
          <b>Superpowers:</b> solar energy absorption and healing factor, solar
          flare and heat vision, solar invulnerability, flight…
          <br />
          ~
          <br />
          <i>“Look, up in the sky, it's a bird, it's a plane, it's Superman!</i>
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

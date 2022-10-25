import React from "react";
import styles from "./Header.module.css";

export default function Header({ onAddHeroes }) {
  return (
    <div className={styles.header}>
      <h1 className={styles.text}> Database of superheroes</h1>
      <button className={styles.button} onClick={onAddHeroes}>
        Add superheroes
      </button>
    </div>
  );
}

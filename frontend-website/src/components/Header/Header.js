import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.text}> Database of superheroes</h1>
      <button>Add superheroes</button>
    </div>
  );
}

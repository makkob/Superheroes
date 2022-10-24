import React from "react";
import Item from "../Item";
import styles from "./Items.module.css";

export default function Items() {
  return (
    <div className={styles.itemsDiv}>
      <div className={styles.itemsGrid}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
}

import React from "react";
import styles from "./Item.module.css";

export default function Item({
  id,
  nickname,
  real_name,
  origin_description,
  superpowers,
  catch_phrase,
  picture,
}) {
  return (
    <div className={styles.item}>
      <p className={styles.itemText}>{nickname}</p>
      <div className={styles.description}>
        <p className={styles.hiddenText} id={styles.slidein}>
          <b>Real name:</b> {real_name}
          <br />
          <b>Origin:</b> {origin_description}
          <br />
          <b>Superpowers:</b> {superpowers}
          <br />
          ~
          <br />
          <i>{catch_phrase}</i>
        </p>
        <img
          className={styles.img}
          alt={nickname}
          src={require(`../../../../../backend/static/${picture}`)}
        />
      </div>

      <button className={`${styles.button} ${styles.delete}`}>Delete</button>
      <button className={`${styles.button} ${styles.update}`}>Update</button>
    </div>
  );
}

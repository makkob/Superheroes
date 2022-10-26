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
  handleDelete,
  handleUpdate,
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
          src={
            picture
              ? require(`../../../../../backend/static/${picture}`)
              : "https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg"
          }
        />
      </div>

      <button
        id={id}
        onClick={handleDelete}
        className={`${styles.button} ${styles.delete}`}
      >
        Delete
      </button>
      <button
        id={id}
        onClick={handleUpdate}
        className={`${styles.button} ${styles.update}`}
      >
        Update
      </button>
    </div>
  );
}

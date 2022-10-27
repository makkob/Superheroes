import React from "react";
import styles from "./UpdateSuperhero.module.css";

export default function UpdateSuperhero({ updateNewHero, closeUpdateModal }) {
  return (
    <div>
      <div className={styles.background} onClick={closeUpdateModal}></div>{" "}
      <form onSubmit={updateNewHero} className={styles.modal}>
        <p>Form to update a superhero</p>
        <label>
          Nickname:{" "}
          <input type="text" name="nickname" className={styles.input} />
        </label>{" "}
        <label>
          Real name:{" "}
          <input type="text" name="real_name" className={styles.input} />
        </label>{" "}
        <label>
          Origin description:{" "}
          <input
            type="text"
            name="origin_description"
            className={styles.input}
          />
        </label>{" "}
        <label>
          Superpowers:{" "}
          <input type="text" name="superpowers" className={styles.input} />
        </label>{" "}
        <label>
          Catch phrase:{" "}
          <input type="text" name="catch_phrase" className={styles.input} />
        </label>{" "}
        <label>
          Image:{" "}
          <input
            type="file"
            name="filename"
            accept=".jpeg, .png, .webp, .JPG"
            className={styles.input}
          />
        </label>{" "}
        <input type="submit" value="Submit" className={styles.submitButton} />
      </form>
    </div>
  );
}

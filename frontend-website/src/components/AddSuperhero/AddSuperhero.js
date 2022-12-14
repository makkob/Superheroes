import React from "react";
import styles from "./AddSuperhero.module.css";

export default function AddSuperhero({ addNewHero, closeAddModal }) {
  return (
    <div>
      <div className={styles.background} onClick={closeAddModal}></div>{" "}
      <form onSubmit={addNewHero} className={styles.modal} id="addHero">
        <p>Form to add a superhero</p>
        <label>
          Nickname:{" "}
          <input
            type="text"
            name="nickname"
            required
            className={styles.input}
          />
        </label>{" "}
        <label>
          Real name:{" "}
          <input
            type="text"
            name="real_name"
            required
            className={styles.input}
          />
        </label>{" "}
        <label>
          Origin description:{" "}
          <input
            type="text"
            name="origin_description"
            required
            className={styles.input}
          />
        </label>{" "}
        <label>
          Superpowers:{" "}
          <input
            type="text"
            name="superpowers"
            required
            className={styles.input}
          />
        </label>{" "}
        <label>
          Catch phrase:{" "}
          <input
            type="text"
            name="catch_phrase"
            required
            className={styles.input}
          />
        </label>{" "}
        <label>
          Image:{" "}
          <input
            type="file"
            name="filename"
            accept=".jpeg, .png, .webp, .JPG"
            required
            className={styles.input}
          />
        </label>{" "}
        <input type="submit" value="Submit" className={styles.submitButton} />
      </form>
    </div>
  );
}

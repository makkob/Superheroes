import React from "react";
import styles from "./AddSuperhero.module.css";

export default function AddSuperhero({ addNewHero, closeAddModal }) {
  return (
    <div>
      <div className={styles.background} onClick={closeAddModal}></div>{" "}
      <form onSubmit={addNewHero} className={styles.modal} id="addHero">
        <p>Form to add superhero</p>
        <label>
          Nickname: <input type="text" name="nickname" required />
        </label>{" "}
        <label>
          Real name: <input type="text" name="real_name" required />
        </label>{" "}
        <label>
          Origin description:{" "}
          <input type="text" name="origin_description" required />
        </label>{" "}
        <label>
          Catch phrase: <input type="text" name="catch_phrase" required />
        </label>{" "}
        <label>
          Image:{" "}
          <input
            type="file"
            name="filename"
            accept=".jpeg, .png, .webp, .JPG"
            required
          />
        </label>{" "}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

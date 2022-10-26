import React from "react";
import styles from "./UpdateSuperhero.module.css";

export default function UpdateSuperhero({ updateNewHero, closeUpdateModal }) {
  return (
    <div>
      <div className={styles.background} onClick={closeUpdateModal}></div>{" "}
      <form onSubmit={updateNewHero} className={styles.modal} id="addHero">
        <p>Form to update a superhero</p>
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
          Superpowers: <input type="text" name="superpowers" required />
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

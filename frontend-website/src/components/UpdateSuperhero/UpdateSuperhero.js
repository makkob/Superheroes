import React from "react";
import styles from "./UpdateSuperhero.module.css";

export default function UpdateSuperhero() {
  return (
    <div className={styles.hidden}>
      <div className={styles.background} onClick={() => {}}></div>{" "}
      <form className={styles.modal}>
        <p>Form to update superhero</p>
        <label className={styles.input}>
          Nickname: <input type="text" name="nickname" />
        </label>{" "}
        <label className={styles.input}>
          Real name: <input type="text" name="real_name" />
        </label>{" "}
        <label className={styles.input}>
          Origin description: <input type="text" name="origin_description" />
        </label>{" "}
        <label className={styles.input}>
          Catch phrase: <input type="text" name="catch_phrase" />
        </label>{" "}
        <label className={styles.input}>
          Image: <input type="file" name="filename" />
        </label>{" "}
        <input type="submit" value="Submit" className={styles.submitButton} />
      </form>
    </div>
  );
}

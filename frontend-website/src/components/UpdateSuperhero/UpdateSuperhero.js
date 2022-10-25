import React from "react";
import styles from "./UpdateSuperhero.module.css";

export default function UpdateSuperhero() {
  return (
    <form className={styles.modal}>
      <p>Form to update superhero</p>
      <label>
        Nickname: <input type="text" name="nickname" />
      </label>{" "}
      <label>
        Real name: <input type="text" name="real_name" />
      </label>{" "}
      <label>
        Origin description: <input type="text" name="origin_description" />
      </label>{" "}
      <label>
        Catch phrase: <input type="text" name="catch_phrase" />
      </label>{" "}
      <label>
        Image: <input type="file" name="filename" />
      </label>{" "}
      <input type="submit" value="Submit" />
    </form>
  );
}

import React from "react";
import Item from "./Item";
import styles from "./Items.module.css";

export default function Items({ heroes, handleDelete, handleUpdate, perPage }) {
  let perPageheroes = heroes.slice(0, perPage);

  return (
    <div className={styles.itemsDiv}>
      <div className={styles.itemsGrid}>
        {perPageheroes.map(
          ({
            _id,
            nickname,
            real_name,
            origin_description,
            superpowers,
            catch_phrase,
            picture,
          }) => (
            <Item
              id={_id}
              key={_id}
              nickname={nickname}
              picture={picture}
              real_name={real_name}
              origin_description={origin_description}
              superpowers={superpowers}
              catch_phrase={catch_phrase}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
              //   }
            />
          )
        )}
      </div>
    </div>
  );
}

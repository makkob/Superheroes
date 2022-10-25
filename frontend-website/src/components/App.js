import React, { useState, useEffect } from "react";

import Header from "./Header";
import Items from "./Items";
import fetchItemsFromDB from "../services/services";
import LoadMore from "./LoadMore";
import AddSuperhero from "./AddSuperhero";
import UpdateSuperhero from "./UpdateSuperhero";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  let fetchItems = () => {
    fetchItemsFromDB()
      .then((items) => setItems([...items.data]))

      .catch((err) => {
        console.log(err);
      });
    // .finally(() => scroll());
  };

  const addHeroes = (evt) => console.log(evt);
  const handleDelete = (evt) => console.log(evt.target.id);
  const handleUpdate = (evt) => console.log(evt.target.id);

  return (
    <div className="App">
      <Header onAddHeroes={addHeroes} />
      <Items
        heroes={items}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
      <LoadMore />
      <AddSuperhero />
      <UpdateSuperhero />
    </div>
  );
}

export default App;

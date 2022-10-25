import React, { useState, useEffect } from "react";

import Header from "./Header";
import Items from "./Items";
import fetchItemsFromDB from "../services/services";
import LoadMore from "./LoadMore";

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

  let addHeroes = (evt) => console.log(evt);

  return (
    <div className="App">
      <Header onAddHeroes={addHeroes} />
      <Items heroes={items} />
      <LoadMore />
    </div>
  );
}

export default App;

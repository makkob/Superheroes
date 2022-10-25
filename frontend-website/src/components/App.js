import React, { useState, useEffect } from "react";

import Header from "./Header";
import Items from "./Items";
import fetchItemsFromDB from "../services/services";
import LoadMore from "./LoadMore";
import AddSuperhero from "./AddSuperhero";
import UpdateSuperhero from "./UpdateSuperhero";
import addNew from "../services/create";
import deleteHero from "../services/delete";

function App() {
  const [items, setItems] = useState([]);
  const [newHero, setnewHero] = useState();

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
  const handleDelete = (id) => console.log(id);
  const handleUpdate = (evt) => console.log(evt.target.id);
  const addNewHero = (evt) => {
    evt.preventDefault();

    const formData = {};
    for (let i = 0; i <= 3; i++) {
      formData[evt.target[i].name] = evt.target[i].value;
    }
    setnewHero(formData);
  };
  const onLoadMore = () => addHeroes();

  return (
    <div className="App">
      <Header onAddHeroes={addHeroes} />
      <Items
        heroes={items}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
      <LoadMore onLoadMore={onLoadMore} />
      <AddSuperhero addNewHero={addNewHero} />
      <UpdateSuperhero />
    </div>
  );
}

export default App;

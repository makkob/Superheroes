import React, { useState, useEffect } from "react";

import Header from "./Header";
import Items from "./Items";
import fetchItemsFromDB from "../services/services";
import LoadMore from "./LoadMore";
import AddSuperhero from "./AddSuperhero";
import UpdateSuperhero from "./UpdateSuperhero";

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
  const handleDelete = (evt) => console.log(evt.target.id);
  const handleUpdate = (evt) => console.log(evt.target.id);
  const addNewHero = (evt) => {
    evt.preventDefault();
    let { name, value } = evt.target;
    console.log("name", name);
    console.log("value", value);

    setnewHero({
      [evt.target[0].name]: evt.target[0].value,
      [evt.target[1].name]: evt.target[1].value,
      [evt.target[2].name]: evt.target[2].value,
      [evt.target[3].name]: evt.target[3].value,
    });

    // return setnewHeroe({
    //   [name]: value,
    // });
  };

  return (
    <div className="App">
      <Header onAddHeroes={addHeroes} />
      <Items
        heroes={items}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
      <LoadMore />
      <AddSuperhero addNewHero={addNewHero} />
      <UpdateSuperhero />
    </div>
  );
}

export default App;

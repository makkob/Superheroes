import React, { useState, useEffect } from "react";

import Header from "./Header";
import Items from "./Items";
import fetchItemsFromDB from "../services/services";
import LoadMore from "./LoadMore";
import AddSuperhero from "./AddSuperhero";
import UpdateSuperhero from "./UpdateSuperhero";
import addNew from "../services/create";
import deleteHero from "../services/delete";
import updateHero from "../services/update";

function App() {
  const [items, setItems] = useState([]);
  const [newHero, setnewHero] = useState();
  const [addModal, setaddModal] = useState(false);
  const [updateModal, setupdateModal] = useState(false);

  useEffect(() => {
    fetchItems();
  }, [items]);

  let fetchItems = () => {
    fetchItemsFromDB()
      .then((items) => setItems([...items.data]))

      .catch((err) => {
        console.log(err);
      });
    // .finally(() => scroll());
  };

  const addHeroes = () => setaddModal(true);
  const handleDelete = (evt) => deleteHero(evt.target.id);
  const handleUpdate = () => setupdateModal(true);

  const addNewHero = (evt) => {
    evt.preventDefault();

    const formData = {};
    for (let i = 0; i <= 4; i++) {
      formData[evt.target[i].name] = evt.target[i].value;
    }
    setnewHero(formData);
    addNew(formData);
    setaddModal(false);
  };

  // const updateHero = (evt) => {
  //   evt.preventDefault();

  //   const formData = {};
  //   for (let i = 0; i <= 3; i++) {
  //     formData[evt.target[i].name] = evt.target[i].value;
  //   }
  //   setnewHero(formData);
  //   setupdateModal(false);
  // };

  const onLoadMore = () => addNew();

  return (
    <div className="App">
      <Header onAddHeroes={addHeroes} />
      <Items
        heroes={items}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
      <LoadMore onLoadMore={onLoadMore} />
      {addModal && <AddSuperhero addNewHero={addNewHero} />}
      {updateModal && <UpdateSuperhero />}
    </div>
  );
}

export default App;

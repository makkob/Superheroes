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
  // const [newHero, setnewHero] = useState();
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

    const formData = {
      [evt.target[0].name]: evt.target[0].value,
      [evt.target[1].name]: evt.target[1].value,
      [evt.target[2].name]: evt.target[2].value,
      [evt.target[3].name]: evt.target[3].value,
      picture: evt.target.filename.files[0],
    };
    // for (let i = 0; i <= 3; i++) {
    //   formData[evt.target[i].name] = evt.target[i].value;
    // }

    // evt.target.filename.files[0];

    // console.log(formData);
    // setnewHero(formData);
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
  const closeAddModal = () => setaddModal(false);

  return (
    <div className="App">
      <Header onAddHeroes={addHeroes} />
      <Items
        heroes={items}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
      <LoadMore onLoadMore={onLoadMore} />
      {addModal && (
        <AddSuperhero addNewHero={addNewHero} closeAddModal={closeAddModal} />
      )}
      {updateModal && <UpdateSuperhero />}
    </div>
  );
}

export default App;

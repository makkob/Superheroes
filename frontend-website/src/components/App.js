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
  const [updateID, setUpdateID] = useState();
  const [addModal, setaddModal] = useState(false);
  const [updateModal, setupdateModal] = useState(false);
  const [perPage, setPerPage] = useState(5);

  useEffect(() => {
    fetchItems();
  }, []);

  let fetchItems = () => {
    fetchItemsFromDB()
      .then((items) => setItems([...items.data]))

      .catch((err) => {
        console.log(err);
      });
  };

  const addHeroes = () => setaddModal(true);
  // function to delete a hero
  const handleDelete = (evt) => deleteHero(evt.target.id);
  // function to update a hero
  const handleUpdate = (evt) => {
    setUpdateID(evt.target.id);
    return setupdateModal(true);
  };
  const addNewHero = (evt) => {
    evt.preventDefault();

    const formData = {
      [evt.target[0].name]: evt.target[0].value,
      [evt.target[1].name]: evt.target[1].value,
      [evt.target[2].name]: evt.target[2].value,
      [evt.target[3].name]: evt.target[3].value,
      [evt.target[4].name]: evt.target[4].value,
      picture: evt.target.filename.files[0],
    };

    // function to make a post request
    addNew(formData);
    //function to close/open modal for adding a hero
    setaddModal(false);
  };

  const updateNewHero = (evt) => {
    evt.preventDefault();

    const formData = {
      [evt.target[0].name]: evt.target[0].value,
      [evt.target[1].name]: evt.target[1].value,
      [evt.target[2].name]: evt.target[2].value,
      [evt.target[3].name]: evt.target[3].value,
      [evt.target[4].name]: evt.target[4].value,
      picture: evt.target.filename.files[0],
    };

    // function to make a patch request
    updateHero(updateID, formData);
    //function to close/open modal for updating a hero
    setupdateModal(false);
  };

  // pagination
  const onLoadMore = () => setPerPage(perPage + 5);

  // functions to close modals of adding/updating superheroes
  const closeAddModal = () => setaddModal(false);
  const closeUpdateModal = () => setupdateModal(false);

  return (
    <div className="App">
      <Header onAddHeroes={addHeroes} />
      <Items
        heroes={items}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
        perPage={perPage}
      />
      <LoadMore onLoadMore={onLoadMore} />
      {addModal && (
        <AddSuperhero addNewHero={addNewHero} closeAddModal={closeAddModal} />
      )}
      {updateModal && (
        <UpdateSuperhero
          updateNewHero={updateNewHero}
          closeUpdateModal={closeUpdateModal}
        />
      )}
    </div>
  );
}

export default App;

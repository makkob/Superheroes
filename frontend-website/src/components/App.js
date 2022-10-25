import React, { useState, useEffect } from "react";

import Header from "./Header";
import Items from "./Items";
import fetchImagesFromDB from "../services/services";
import LoadMore from "./LoadMore";

function App() {
  useEffect(() => {
    fetchItems();
  });

  let fetchItems = () => {
    fetchImagesFromDB()
      .then((items) => console.log(items))

      .catch((err) => {
        console.log(err);
      });
    // .finally(() => scroll());
  };

  return (
    <div className="App">
      <Header />
      <Items />
      <LoadMore />
    </div>
  );
}

export default App;

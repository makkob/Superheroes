import axios from "axios";

function fetchItemsFromDB() {
  return axios(`http://localhost:5000/api/posts`).then((response) => response);
}

export default fetchItemsFromDB;

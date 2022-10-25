import axios from "axios";

const URL = `http://localhost:5000/api/posts`;

function fetchItemsFromDB() {
  return axios(URL).then((response) => response);
}

export default fetchItemsFromDB;

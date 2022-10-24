import axios from "axios";

function fetchImagesFromDB() {
  return axios(`http://localhost:5000/api/posts`).then((response) => response);
}

export default fetchImagesFromDB;

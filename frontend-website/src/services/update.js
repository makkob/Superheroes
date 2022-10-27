import axios from "axios";

const URL = `http://localhost:5000/api/posts/`;

async function updateHero(id, data) {
  // return await axios
  //   .patch(URL + id, data)
  //   .then((res) => alert(`The hero has been removed from database`))

  //   .catch((err) => console.log(err));

  console.log(id);
  console.log(data);
}

export default updateHero;

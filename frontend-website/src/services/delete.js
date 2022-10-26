import axios from "axios";

const URL = `http://localhost:5000/api/posts/`;

async function deleteHero(id) {
  return await axios
    .delete(URL + id)
    .then(() => alert(`The hero has been removed from database`))

    .catch((err) => console.log(err));
}

export default deleteHero;

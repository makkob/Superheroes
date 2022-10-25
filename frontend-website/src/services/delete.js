import axios from "axios";

const URL = `http://localhost:5000/api/posts/63580de5b8e22d3678e5d005`;

async function deleteHero() {
  return await axios
    .delete(URL)
    .then((res) => console.log(JSON.stringify(res)))

    .catch((err) => console.log(err));
}

export default deleteHero;

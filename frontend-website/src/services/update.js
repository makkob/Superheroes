import axios from "axios";

const URL = `http://localhost:5000/api/posts/`;

async function updateHero(
  id,
  {
    nickname,
    real_name,
    origin_description,
    superpowers,
    catch_phrase,
    picture,
  }
) {
  let formData = new FormData();
  formData.append("nickname", nickname);
  formData.append("real_name", real_name);
  formData.append("origin_description", origin_description);
  formData.append("superpowers", superpowers);
  formData.append("catch_phrase", catch_phrase);
  formData.append("picture", picture, nickname);
  // return await axios
  //   .patch(URL + id, data)
  //   .then((res) => alert(`The hero has been removed from database`))

  //   .catch((err) => console.log(err));
  return await axios
    .put(URL + id, formData)
    .then((res) => console.log(JSON.stringify(res)))

    .catch((err) => console.log(err));
  // console.log(id);
  // console.log(data);
}

export default updateHero;

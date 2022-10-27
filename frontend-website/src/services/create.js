import axios from "axios";

const URL = `http://localhost:5000/api/posts`;

async function addNew({
  nickname,
  real_name,
  origin_description,
  superpowers,
  catch_phrase,
  picture,
}) {
  let formData = new FormData();
  if (nickname) {
    formData.append("nickname", nickname);
  }
  if (real_name) {
    formData.append("real_name", real_name);
  }
  if (origin_description) {
    formData.append("origin_description", origin_description);
  }
  if (superpowers) {
    formData.append("superpowers", superpowers);
  }
  if (catch_phrase) {
    formData.append("catch_phrase", catch_phrase);
  }
  if (picture && nickname) {
    formData.append("picture", picture, nickname);
  }

  // console.log(formData);
  return await axios
    .post(URL, formData)
    .then((res) => console.log(JSON.stringify(res)))

    .catch((err) => console.log(err));
  // console.log(formData);
}

export default addNew;

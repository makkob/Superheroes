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
  formData.append("nickname", nickname);
  formData.append("real_name", real_name);
  formData.append("origin_description", origin_description);
  formData.append("superpowers", superpowers);
  formData.append("catch_phrase", catch_phrase);
  formData.append("picture", picture, nickname);
  console.log(nickname);

  return await axios
    .post(URL, formData)
    .then((res) => console.log(JSON.stringify(res)))

    .catch((err) => console.log(err));
}

export default addNew;
